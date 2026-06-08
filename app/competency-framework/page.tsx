import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Competency Framework",
  description: "The ISFP competency framework under development for sustainable finance capability expectations."
};

export default function FrameworkPage() {
  const domains = ["Foundational sustainable finance knowledge", "Policy, regulation and market context", "Risk, opportunity and financial decision-making", "Data, disclosure and reporting literacy", "Strategy, governance and implementation", "Professional judgement and applied practice"];

  return (
    <>
      <PageHeader eyebrow="Framework" title="A structured view of sustainable finance capability." description="The ISFP competency framework is being developed to help define practical expectations across roles, sectors and levels of experience." />
      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <Card key={domain} title={domain}>A working capability area for future consultation, assessment design and learning pathway alignment.</Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy">How the framework will be used</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              The framework will support individual development, institutional workforce planning, course mapping, future assessment design and clearer professional expectations.
            </p>
          </div>
          <div className="rounded-md border border-navy/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Under development</p>
            <p className="mt-4 text-sm leading-7 text-slate">
              Future versions may include proficiency levels, role-specific pathways, jurisdictional considerations and domain-level scoring for assessment and benchmarking.
            </p>
          </div>
        </div>
      </Section>
      <CTA title="Interested in the assessment pilot?" body="ISFP will use the framework as a foundation for future capability assessment and reporting." href="/capability-assessment" label="Register pilot interest" />
    </>
  );
}
