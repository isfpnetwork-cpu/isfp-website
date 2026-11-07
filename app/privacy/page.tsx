import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How ISFP uses information submitted through its newsletter signup form.",
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Draft for review" title="Privacy Notice" description="This notice covers the ISFP newsletter signup form." />
      <Section tone="white">
        <div className="max-w-3xl space-y-8 leading-8 text-slate">
          <p className="border-l-2 border-gold bg-ivory p-4">
            Before publication, ISFP needs to confirm the organisation responsible for the data, its postal address,
            the retention periods, service provider and transfer details, and the applicable rights and complaints process.
          </p>
          <div>
            <h2 className="font-serif text-2xl text-navy">What we collect and why</h2>
            <p className="mt-2">
              When you sign up, we collect your email address and record the signup time, the page used, your consent and
              the consent wording version. We use this information to manage your subscription and send updates about
              ISFP&apos;s development, standards, research, insights and community activities. Signing up is voluntary.
              We also record subscription and signup notification status.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Where the information is stored</h2>
            <p className="mt-2">
              The website processes your submission and sends it to Google Apps Script, which saves it in an ISFP-managed
              Google Sheet. The signup endpoint uses short-lived request counts to limit abuse and does not add IP
              addresses to the Sheet. A new signup triggers an internal email notification to ISFP without your email address.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Retention and withdrawal</h2>
            <p className="mt-2">
              We use your subscription record while you are subscribed. You can withdraw consent at any time by emailing{" "}
              <a className="underline" href={"mailto:" + site.email}>{site.email}</a>. After withdrawal, a limited
              record may be kept to honour your preference and document consent. Specific retention periods are pending review.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Your information and contact</h2>
            <p className="mt-2">
              You can contact ISFP at <a className="underline" href={"mailto:" + site.email}>{site.email}</a> to ask what
              information we hold about you, request a copy, correction or deletion, or ask about other rights that may
              apply to your information.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
