import type { Metadata } from "next";
import { InterestForm } from "@/components/Forms";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Institute of Sustainable Finance Professionals."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact ISFP" description="Use the form below for general enquiries, partnership discussions, media requests or interest in contributing to the institute." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="font-serif text-3xl text-navy">General enquiries</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Primary website: {site.primaryDomain}
              <br />
              Email: {site.email}
            </p>
          </div>
          <InterestForm title="Contact form" submitLabel="Send enquiry" />
        </div>
      </Section>
    </>
  );
}
