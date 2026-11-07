import { isIP } from "node:net";
import { newsletterConsentVersion, newsletterSources, type NewsletterSource } from "@/lib/newsletter";

export const runtime = "nodejs";
export const maxDuration = 15;

const maxBodyBytes = 2048;
const windowMs = 60_000;
const attempts = new Map<string, number>();
let windowEnd = 0;
let totalAttempts = 0;

function isRateLimited(request: Request) {
  const now = Date.now();
  if (now >= windowEnd) {
    attempts.clear();
    totalAttempts = 0;
    windowEnd = now + windowMs;
  }

  // Use only the hosting platform's IP header. Other deployments share a bucket.
  const forwarded = process.env.VERCEL === "1" ? request.headers.get("x-vercel-forwarded-for") : null;
  const ip = forwarded && isIP(forwarded) ? forwarded : "unknown";
  const count = attempts.get(ip) ?? 0;
  if (count >= 5 || totalAttempts >= 60) return true;
  attempts.set(ip, count + 1);
  totalAttempts += 1;
  return false;
}

function json(ok: boolean, status: number, extraHeaders?: Record<string, string>) {
  return Response.json({ ok }, { status, headers: { "Cache-Control": "no-store", ...extraHeaders } });
}

async function readJson(message: Request | Response): Promise<unknown> {
  if (Number(message.headers.get("content-length")) > maxBodyBytes) throw new RangeError();
  const reader = message.body?.getReader();
  if (!reader) throw new SyntaxError();

  try {
    let size = 0;
    let text = "";
    const decoder = new TextDecoder("utf-8", { fatal: true });
    for (;;) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > maxBodyBytes) throw new RangeError();
      text += decoder.decode(chunk.value, { stream: true });
    }
    return JSON.parse(text + decoder.decode());
  } finally {
    void reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isGoogleUrl(url: URL, host: string) {
  return url.protocol === "https:" && url.host === host && !url.username && !url.password;
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const host = request.headers.get("host") ?? requestUrl.host;
  const protocol = process.env.VERCEL === "1" ? "https:" : requestUrl.protocol;
  const origin = request.headers.get("origin");
  if (request.headers.get("sec-fetch-site") === "cross-site" || (origin && origin !== protocol + "//" + host)) {
    return json(false, 403);
  }

  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return json(false, 415);
  }
  if (isRateLimited(request)) return json(false, 429, { "Retry-After": "60" });

  let data: unknown;
  try {
    data = await readJson(request);
  } catch (error) {
    return json(false, error instanceof RangeError ? 413 : 400);
  }

  if (!isRecord(data)) return json(false, 400);
  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const validEmail = /^[a-z0-9.!#$%&'*+/=?^_{}|~-]{1,64}@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i;
  if (
    email.length > 254 || !validEmail.test(email) ||
    data.consent !== true || data.consentVersion !== newsletterConsentVersion ||
    !newsletterSources.includes(data.source as NewsletterSource)
  ) return json(false, 400);

  const secret = process.env.NEWSLETTER_WEBHOOK_SECRET;
  let webhook: URL;
  try {
    webhook = new URL(process.env.NEWSLETTER_WEBHOOK_URL ?? "");
    if (
      !secret || !/^[a-f0-9]{64}$/i.test(secret) ||
      !isGoogleUrl(webhook, "script.google.com") ||
      !/^\/macros\/s\/[a-z0-9_-]+\/exec$/i.test(webhook.pathname) ||
      webhook.search || webhook.hash
    ) return json(false, 503);
  } catch {
    return json(false, 503);
  }

  try {
    const signal = AbortSignal.timeout(10000);
    let response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret, email, source: data.source, consent: true, consentVersion: newsletterConsentVersion
      }),
      redirect: "manual",
      cache: "no-store",
      signal
    });

    // Apps Script serves its result from a separate host. Never forward the POST body.
    if ([301, 302, 303].includes(response.status)) {
      const location = response.headers.get("location");
      if (!location) return json(false, 502);
      const resultUrl = new URL(location, webhook);
      if (!isGoogleUrl(resultUrl, "script.googleusercontent.com")) return json(false, 502);
      response = await fetch(resultUrl, { redirect: "manual", cache: "no-store", signal });
    }

    if (!response.ok) return json(false, 502);
    const result = await readJson(response);
    if (!isRecord(result)) return json(false, 502);
    if (result.status === "busy") return json(false, 503);
    if (result.status !== "subscribed" && result.status !== "duplicate") return json(false, 502);

    // Identical responses avoid disclosing whether an address is already in the Sheet.
    return json(true, 200);
  } catch (error) {
    return json(false, error instanceof Error && error.name === "TimeoutError" ? 504 : 502);
  }
}
