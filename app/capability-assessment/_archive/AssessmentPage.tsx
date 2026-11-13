import type { Metadata } from "next";
import { InterestForm } from "@/components/Forms";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Capability Assessment",
  description: "Coming soon: ISFP capability assessment and pilot interest registration."
};

export default function AssessmentPage() {
  return (
    <>
      <PageHeader eyebrow="Coming soon" title="Capability Assessment" description="ISFP is preparing a future assessment model to help professionals understand capability strengths, development needs and progression pathways." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-3xl text-navy">Planned assessment features</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate">
              <li>Domain-by-domain sustainable finance capability scoring.</li>
              <li>Individual reports and development recommendations.</li>
              <li>Future benchmarking by role, sector, country, region and experience level.</li>
              <li>Potential organisational dashboards for teams and institutions.</li>
            </ul>
          </div>
          <InterestForm title="Register Interest in the ISFP Assessment Pilot" submitLabel="Register pilot interest" interests={[{ label: "Individual pilot participant", value: "individual" }, { label: "Institutional pilot", value: "institution" }, { label: "Research or education partner", value: "partner" }]} />
        </div>
      </Section>
    </>
  );
}
