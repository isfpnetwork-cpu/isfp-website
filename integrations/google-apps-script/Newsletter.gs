const NEWSLETTER_TAB = "Newsletter Signups";
const NEWSLETTER_HEADERS = [
  "Email", "Signed Up At (UTC)", "Source", "Consent", "Consent Version",
  "Subscription Status", "Notification Status"
];
const NEWSLETTER_VERSION = "newsletter-v1";
const NEWSLETTER_RECIPIENT = "isfp.network@gmail.com";

function doPost(event) {
  const content = event && event.postData && event.postData.contents;
  if (typeof content !== "string" || content.length > 2048) return newsletterResult("invalid");

  let data;
  try {
    data = JSON.parse(content);
  } catch {
    return newsletterResult("invalid");
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return newsletterResult("invalid");

  try {
    const properties = PropertiesService.getScriptProperties();
    const secret = properties.getProperty("NEWSLETTER_WEBHOOK_SECRET");
    if (!/^[a-f0-9]{64}$/i.test(secret || "")) return newsletterResult("error");
    if (!newsletterSecretsMatch(data.secret, secret)) return newsletterResult("unauthorized");

    const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    const validEmail = /^[a-z0-9.!#$%&'*+/=?^_{}|~-]{1,64}@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i;
    if (
      email.length > 254 || !validEmail.test(email) ||
      data.consent !== true || data.consentVersion !== NEWSLETTER_VERSION ||
      (data.source !== "/" && data.source !== "/resources-insights")
    ) return newsletterResult("invalid");

    const sheetId = properties.getProperty("NEWSLETTER_SHEET_ID");
    if (!sheetId) return newsletterResult("error");

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(2500)) return newsletterResult("busy");

    let sheet;
    let row;
    let timestamp;
    try {
      sheet = SpreadsheetApp.openById(sheetId).getSheetByName(NEWSLETTER_TAB);
      if (!sheet) return newsletterResult("error");
      const headers = sheet.getRange(1, 1, 1, NEWSLETTER_HEADERS.length).getDisplayValues()[0];
      if (!NEWSLETTER_HEADERS.every((header, index) => headers[index] === header)) {
        return newsletterResult("error");
      }

      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        const existing = sheet.getRange(2, 1, lastRow - 1, 1).getDisplayValues();
        // Any existing row is left untouched, including an unsubscribe record.
        if (existing.some(([value]) => value.trim().toLowerCase() === email)) {
          return newsletterResult("duplicate");
        }
      }

      row = lastRow + 1;
      if (row > sheet.getMaxRows()) sheet.insertRowsAfter(lastRow, 1);
      timestamp = new Date().toISOString();
      const values = [email, timestamp, data.source, "TRUE", NEWSLETTER_VERSION, "Subscribed", "Pending"];
      // Store input as literal text so a formula-like email cannot run in Sheets.
      sheet.getRange(row, 1, 1, values.length).setRichTextValues([
        values.map(value => SpreadsheetApp.newRichTextValue().setText(value).build())
      ]);
      SpreadsheetApp.flush();
    } finally {
      lock.releaseLock();
    }

    notifyNewsletterSignup(sheet, row, email, timestamp, data.source);
    return newsletterResult("subscribed");
  } catch {
    console.error("Newsletter signup storage failed. Check the Sheet configuration and Apps Script execution.");
    return newsletterResult("error");
  }
}

function newsletterSecretsMatch(candidate, expected) {
  if (typeof candidate !== "string" || candidate.length !== expected.length) return false;
  let difference = 0;
  for (let index = 0; index < expected.length; index++) {
    difference |= candidate.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}

function notifyNewsletterSignup(sheet, row, email, timestamp, source) {
  let status = "Sent";
  try {
    MailApp.sendEmail(
      NEWSLETTER_RECIPIENT,
      "New ISFP newsletter signup",
      "A new newsletter signup was saved to ISFP Community Database.\n" +
        "Signup time (UTC): " + timestamp + "\nSource page: " + source
    );
  } catch {
    status = "Failed";
    console.warn("Newsletter signup saved, but the notification could not be sent.");
  }

  try {
    const [savedEmail, savedTimestamp] = sheet.getRange(row, 1, 1, 2).getDisplayValues()[0];
    if (savedEmail === email && savedTimestamp === timestamp) sheet.getRange(row, 7).setValue(status);
  } catch {
    console.warn("Newsletter signup saved, but its notification status could not be updated.");
  }
}

function newsletterResult(status) {
  return ContentService.createTextOutput(JSON.stringify({ status }))
    .setMimeType(ContentService.MimeType.JSON);
}
