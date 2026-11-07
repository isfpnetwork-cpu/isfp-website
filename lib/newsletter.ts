export const newsletterSources = ["/", "/resources-insights"] as const;
export type NewsletterSource = (typeof newsletterSources)[number];

export const newsletterConsentVersion = "newsletter-v1";
export const newsletterConsentText =
  "I agree to receive email updates from the Institute of Sustainable Finance Professionals.";
