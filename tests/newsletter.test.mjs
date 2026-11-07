import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const secret = "a".repeat(64);
const webhook = "https://script.google.com/macros/s/test-deployment/exec";
const signup = { email: " Person@Example.com ", consent: true, source: "/", consentVersion: "newsletter-v1" };

function loadTs(path, globals = {}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const exports = {};
  runInNewContext(compiled, { exports, require, ...globals }, { filename: path });
  return exports;
}

function loadRoute(fetch, env = { NEWSLETTER_WEBHOOK_URL: webhook, NEWSLETTER_WEBHOOK_SECRET: secret }) {
  const newsletter = loadTs("../lib/newsletter.ts");
  return loadTs("../app/api/newsletter/route.ts", {
    fetch, Response, URL, TextDecoder, AbortSignal, Error,
    process: { env },
    require: name => name === "@/lib/newsletter" ? newsletter : require(name)
  }).POST;
}

function request(data = signup, headers = {}) {
  return new Request("https://isfp.example/api/newsletter", {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(data)
  });
}

test("API rejects invalid email, non-affirmative consent, stale wording and unknown sources", async () => {
  const post = loadRoute(() => assert.fail("Invalid submissions must not reach Google"));
  for (const update of [
    { email: "not-an-email" }, { consent: undefined }, { consent: "true" },
    { consentVersion: "stale" }, { source: "/contact" }
  ]) {
    assert.equal((await post(request({ ...signup, ...update }))).status, 400);
  }
});

test("API rejects cross-site requests, non-JSON, and oversized bodies", async () => {
  const post = loadRoute(() => assert.fail("Invalid requests must not reach Google"));
  assert.equal((await post(request(signup, { origin: "https://other.example" }))).status, 403);
  assert.equal((await post(request(signup, { "content-type": "text/plain" }))).status, 415);
  assert.equal((await post(request({ ...signup, email: "a".repeat(3000) }))).status, 413);
});

test("API normalizes email and follows only Google's result redirect without credentials", async () => {
  let calls = 0;
  const post = loadRoute(async (url, options) => {
    calls++;
    if (calls === 1) {
      assert.equal(url.href, webhook);
      assert.equal(options.redirect, "manual");
      assert.deepEqual(JSON.parse(options.body), {
        ...signup, email: "person@example.com", source: "/resources-insights", secret
      });
      return new Response(null, {
        status: 302, headers: { location: "https://script.googleusercontent.com/macros/echo?key=test" }
      });
    }
    assert.equal(url.hostname, "script.googleusercontent.com");
    assert.equal(options.body, undefined);
    assert.equal(options.headers, undefined);
    return Response.json({ status: "subscribed" });
  });
  const result = await post(request({ ...signup, source: "/resources-insights" }));
  assert.equal(calls, 2);
  assert.equal(result.status, 200);
  assert.deepEqual(await result.json(), { ok: true });
});

test("API hides duplicate status and configuration or upstream errors", async () => {
  const duplicate = await loadRoute(async () => Response.json({ status: "duplicate" }))(request());
  assert.equal(duplicate.status, 200);
  assert.deepEqual(await duplicate.json(), { ok: true });
  const missing = await loadRoute(() => assert.fail("Missing configuration"), {})(request());
  assert.equal(missing.status, 503);
  const unsafe = await loadRoute(() => assert.fail("Unsafe destination"), {
    NEWSLETTER_WEBHOOK_URL: "https://other.example", NEWSLETTER_WEBHOOK_SECRET: secret
  })(request());
  assert.equal(unsafe.status, 503);

  for (const upstream of [
    () => Response.json({ status: "error", details: secret }),
    () => new Response("<html>Sign in</html>"),
    () => new Response(null, { status: 302, headers: { location: "https://other.example" } }),
    () => { throw new Error(secret); }
  ]) {
    const response = await loadRoute(upstream)(request());
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { ok: false });
  }
  const timedOut = await loadRoute(() => {
    const error = new Error();
    error.name = "TimeoutError";
    throw error;
  })(request());
  assert.equal(timedOut.status, 504);
});

test("API limits repeated submissions before calling Google", async () => {
  let calls = 0;
  const post = loadRoute(async () => {
    calls++;
    return Response.json({ status: "duplicate" });
  });
  for (let attempt = 0; attempt < 5; attempt++) assert.equal((await post(request())).status, 200);
  const blocked = await post(request());
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get("retry-after"), "60");
  assert.equal(calls, 5);
});

function scriptHarness({ mailFails = false, lockBusy = false } = {}) {
  const rows = [[
    "Email", "Signed Up At (UTC)", "Source", "Consent", "Consent Version", "Subscription Status", "Notification Status"
  ]];
  const messages = [];
  let locked = false;
  const sheet = {
    getLastRow: () => rows.length,
    getMaxRows: () => 1000,
    getRange: (row, column, height = 1, width = 1) => ({
      getDisplayValues: () => rows.slice(row - 1, row - 1 + height)
        .map(cells => cells.slice(column - 1, column - 1 + width)),
      setRichTextValues(values) {
        assert.equal(locked, true);
        rows[row - 1] = Array.from(values[0]);
      },
      setValue(value) { rows[row - 1][column - 1] = value; }
    })
  };
  const script = readFileSync(new URL("../integrations/google-apps-script/Newsletter.gs", import.meta.url), "utf8");
  const globals = {
    console: { warn() {}, error() {} },
    PropertiesService: { getScriptProperties: () => ({
      getProperty: name => name === "NEWSLETTER_WEBHOOK_SECRET" ? secret : "test-sheet"
    }) },
    LockService: { getScriptLock: () => ({
      tryLock() { if (lockBusy) return false; locked = true; return true; },
      releaseLock() { locked = false; }
    }) },
    SpreadsheetApp: {
      openById: () => ({ getSheetByName: () => sheet }),
      newRichTextValue: () => ({ setText: value => ({ build: () => value }) }),
      flush() { assert.equal(locked, true); }
    },
    MailApp: { sendEmail: (...args) => {
      assert.equal(locked, false);
      if (mailFails) throw new Error("Mail unavailable");
      messages.push(args);
    } },
    ContentService: { createTextOutput: text => ({ setMimeType: () => text }), MimeType: { JSON: "json" } }
  };
  runInNewContext(script, globals, { filename: "Newsletter.gs" });
  return {
    rows, messages,
    submit: (data = {}) => JSON.parse(globals.doPost({
      postData: { contents: JSON.stringify({ ...signup, secret, ...data }) }
    })).status
  };
}

test("Apps Script records consent, timestamp and source, and notifies once", () => {
  const { rows, messages, submit } = scriptHarness();
  assert.equal(submit({ source: "/resources-insights" }), "subscribed");
  assert.equal(submit({ email: "PERSON@example.com" }), "duplicate");
  assert.equal(rows.length, 2);
  assert.match(rows[1][1], /^\d{4}-\d\d-\d\dT.*Z$/);
  assert.deepEqual(rows[1].filter((_, index) => index !== 1), [
    "person@example.com", "/resources-insights", "TRUE", "newsletter-v1", "Subscribed", "Sent"
  ]);
  assert.equal(messages.length, 1);
  assert.equal(messages[0][0], "isfp.network@gmail.com");
  assert.doesNotMatch(messages[0][2], /person@example\.com/);
});

test("Apps Script rejects unauthenticated or invalid requests and does not reactivate contacts", () => {
  const { rows, messages, submit } = scriptHarness();
  assert.equal(submit({ secret: "b".repeat(64) }), "unauthorized");
  assert.equal(submit({ consent: false }), "invalid");
  assert.equal(submit({ email: "invalid" }), "invalid");
  assert.equal(rows.length, 1);
  rows.push(["person@example.com", "old", "/", "TRUE", "newsletter-v1", "Unsubscribed", "Sent"]);
  assert.equal(submit(), "duplicate");
  assert.equal(rows.length, 2);
  assert.equal(rows[1][5], "Unsubscribed");
  assert.equal(messages.length, 0);
});

test("Apps Script preserves a signup if mail fails and does not write without the lock", () => {
  const mail = scriptHarness({ mailFails: true });
  assert.equal(mail.submit(), "subscribed");
  assert.equal(mail.rows[1][6], "Failed");
  assert.equal(mail.submit(), "duplicate");
  const busy = scriptHarness({ lockBusy: true });
  assert.equal(busy.submit(), "busy");
  assert.equal(busy.rows.length, 1);
  assert.equal(busy.messages.length, 0);
});
