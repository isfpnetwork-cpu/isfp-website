# ISFP newsletter setup

The homepage and Resources & Insights forms send signup requests to the website's server. The server sends validated requests to Google Apps Script, which writes to the private Sheet and sends an internal notification. No Gmail password, Google Cloud service account, or external email provider is needed.

The integration is **not live** until the environment variables are set and a real signup has been verified. It records subscribers and sends internal alerts; it does not send newsletters or subscription confirmation emails.

## 1. Review the privacy notice

Review `/privacy` before opening signups to the public. It is marked as a draft because the full organisational and legal details were not supplied. Confirm the responsible entity and postal address, retention and deletion periods, hosting and Google provider arrangements and transfers, and applicable rights and complaints process. Confirm who will handle withdrawal and data requests sent to `isfp.network@gmail.com`. After approval, remove the draft callout and decide whether to remove the no-index setting.

Consent version `newsletter-v1` records this unchecked checkbox wording: "I agree to receive email updates from the Institute of Sustainable Finance Professionals." Keep a copy of this wording and the accompanying notice. If either changes materially, record the revised wording and update the version in both `lib/newsletter.ts` and the Apps Script before accepting that version. During a version switch, temporarily mismatched deployments fail closed.

## 2. Configure Google Apps Script

1. Sign in to Google as `isfp.network@gmail.com` and open **ISFP Community Database**. Under **Share**, keep General access set to **Restricted**. The worksheet tab must be named **Newsletter Signups**. Check that cells A1 to G1 contain these exact headers in order: **Email**, **Signed Up At (UTC)**, **Source**, **Consent**, **Consent Version**, **Subscription Status**, **Notification Status**.
2. Find the spreadsheet ID in the address bar. In `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`, it is the text between `/d/` and `/edit`. It is not the `gid` number.
3. In the Sheet, choose **Extensions > Apps Script**. Use the contents of [Newsletter.gs](../integrations/google-apps-script/Newsletter.gs) in the script editor and save the project.
4. Generate a secret privately. With Node.js installed, run `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"` in your own terminal. The output is 64 hexadecimal characters. Keep it in a password manager and out of chat, email, URLs, and Git.
5. In Apps Script, open **Project Settings > Script properties > Add script property**. Add `NEWSLETTER_SHEET_ID` with the spreadsheet ID and `NEWSLETTER_WEBHOOK_SECRET` with the generated secret. Save the properties. Keep edit access to the script restricted to trusted administrators.
6. Choose **Deploy > New deployment > Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone** (without requiring Google sign-in). Deploy and approve Sheets and email permissions as the ISFP account. The web app needs to be reachable from Vercel, but its code rejects submissions without the shared secret. This does not share the spreadsheet. Use the deployed `https://script.google.com/macros/s/DEPLOYMENT_ID/exec` URL, not the test `/dev` URL.

See Google's [web app deployment](https://developers.google.com/apps-script/guides/web) and [script properties](https://developers.google.com/apps-script/guides/properties) instructions. For future script edits, use **Deploy > Manage deployments > Edit > New version > Deploy** to keep the same URL.

## 3. Configure the website

1. Open the ISFP project in Vercel. Under **Settings > Environment Variables**, set `NEWSLETTER_WEBHOOK_URL` to the deployed `/exec` URL and `NEWSLETTER_WEBHOOK_SECRET` to the exact value in Script properties. Mark the secret as **Secret**. Neither variable should start with `NEXT_PUBLIC_`. For Preview, use a separate test Sheet, deployment and secret if possible, rather than writing test records into the production list.
2. For local testing, use an ignored `.env.local` file with the same keys (see [the example](../.env.example)), then restart Next.js. Keep secrets out of commits and browser code.
3. The endpoint has a small per-instance request limit; serverless instances do not share that counter. For public launch, add a [Vercel WAF rate limit](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting): **Firewall > Configure > New Rule**, match path `/api/newsletter` and method `POST`, then select **Rate Limit**. A starting point is a fixed window of **60 seconds**, **5 requests**, keyed by **IP**, with the default **429** action. Review usage and publish the rule.
4. Deploy the website changes when ready. Environment variables apply to new deployments, so redeploy after changing them. See [Vercel's environment variable guide](https://vercel.com/docs/environment-variables/managing-environment-variables).

## 4. Verify a real signup

1. Start in a test deployment or local preview. Submit an email address you control from the homepage with consent checked. Verify one row with the address, UTC timestamp, `/` source, `TRUE` consent, `newsletter-v1`, and `Subscribed`.
2. Check that `isfp.network@gmail.com` received one **New ISFP newsletter signup** alert and the row shows `Sent`. The alert contains the time and source, not the subscriber's email. `Failed` means the signup was saved but sending failed. `Pending` after the script has finished means the send or status update needs review. Check Apps Script **Executions** and [mail quotas](https://developers.google.com/apps-script/guides/services/quotas). Duplicates do not retry alerts.
3. Submit the same address again with different capitalization. Verify no extra row or alert. Use a different address you control on **Resources & Insights** and verify the source is `/resources-insights`. Verify the form refuses an unchecked consent box.
4. Mark a test row `Unsubscribed`, then resubmit its address. Verify it remains unsubscribed and produces no alert. The public form never reactivates an existing record. Handle re-subscription manually after verifying the request and recording fresh consent.
5. Confirm both forms and the notice work in the intended deployment before announcing the signup. Remove test rows you no longer need. Before sending newsletters, establish an unsubscribe process and use only rows marked `Subscribed`.

Local checks: `node --test tests/newsletter.test.mjs`, `npm run lint`, and `npm run build`. The automated tests use mock Sheets, mail and HTTP responses. They do not test Google permission grants, real mail delivery, the deployed webhook response, or Vercel environment and firewall settings.
