import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Why ISFP Exists",
  description: "The market gap and professional rationale behind the Institute of Sustainable Finance Professionals."
};

export default function WhyPage() {
  return (
    <>
      <PageHeader eyebrow="Rationale" title="Sustainable finance needs stronger capability infrastructure." description="Capability-building is often fragmented, funding-dependent and uneven across roles, markets and institutions. ISFP is being built to help address that gap." />
      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="A fragile capability base">When market momentum or programme funding changes, sustainable finance capability initiatives can be among the first areas to lose support.</Card>
          <Card title="A missing middle">There is a gap between free introductory content and expensive, time-intensive formal qualifications.</Card>
          <Card title="Unclear expectations">Professionals and employers need better ways to understand what good practice looks like across domains and experience levels.</Card>
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-navy">The opportunity</h2>
          <p className="mt-5 text-base leading-8 text-slate">
            ISFP can provide a stable professional home for sustainable finance capability development: practical enough for working professionals, credible enough for institutions, and structured enough to support future assessment, benchmarking and professional recognition.
          </p>
        </div>
      </Section>
    </>
  );
}
