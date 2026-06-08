import type { Metadata } from "next";
import { InterestForm } from "@/components/Forms";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Advisory Board and Working Groups",
  description: "Opportunities to contribute to ISFP advisory activity and working groups."
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHeader eyebrow="Advisory" title="Advisory Board & Working Groups" description="ISFP will draw on experienced practitioners and institutions to shape practical standards, framework development and future market engagement." />
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy">Contribution areas</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate">
              <li>Strategic advisory input for the institute.</li>
              <li>Competency framework review and professional standards development.</li>
              <li>Thematic working groups across practice domains.</li>
              <li>Regional or market-specific insight and engagement.</li>
            </ul>
          </div>
          <InterestForm title="Advisory and working group interest" submitLabel="Register interest" interests={[{ label: "Advisory board", value: "advisory-board" }, { label: "Competency framework working group", value: "framework" }, { label: "Regional working group", value: "regional" }, { label: "Education or research contributor", value: "education" }]} />
        </div>
      </Section>
    </>
  );
}
