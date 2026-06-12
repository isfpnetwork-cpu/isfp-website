import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Why ISFP Exists",
  description: "The market gap and professional rationale behind the Institute of Sustainable Finance Professionals."
};

export default function WhyPage() {
  const challenges = [
    ["Fragile capability programmes", "Sustainable finance capability initiatives can be vulnerable when funding cycles, market momentum or organisational priorities shift."],
    ["The missing middle", "Professionals often face a gap between free awareness content and expensive, time-intensive formal qualifications."],
    ["Unclear standards", "Employers and practitioners need a clearer view of what good sustainable finance practice requires across roles and experience levels."],
    ["Limited benchmarking", "Institutions lack consistent tools to understand capability maturity across teams, sectors, regions and professional groups."]
  ];

  const response = [
    ["Capability", "Define practical expectations for sustainable finance knowledge, skills, behaviours and impact orientation."],
    ["Standards", "Create a shared professional language that can support learning, assessment and workforce planning."],
    ["Professionalism", "Build pathways for community, development, recognition, CPD and trusted applied practice."]
  ];

  return (
    <>
      <PageHeader eyebrow="Rationale" title="Sustainable finance needs stronger capability infrastructure." description="Capability-building is often fragmented, funding-dependent and uneven across roles, markets and institutions. ISFP is being built to support capability, standards and professionalism." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">The capability gap</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Sustainable finance is growing faster than its professional infrastructure.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              Finance professionals are expected to interpret evolving disclosure rules, transition plans, climate and nature risks, impact claims, taxonomies and stakeholder expectations. Yet the capability system around them remains uneven.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {challenges.map(([title, body]) => (
              <article key={title} className="rounded-md border border-navy/10 bg-ivory p-6">
                <div className="mb-5 h-1 w-14 bg-gold" />
                <h3 className="font-serif text-xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-md border border-navy/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Current state</p>
            <h2 className="mt-4 font-serif text-2xl text-navy">Free awareness content</h2>
            <p className="mt-3 text-sm leading-7 text-slate">Useful for orientation, but rarely enough to define applied professional capability.</p>
          </div>
          <div className="rounded-md border-2 border-gold bg-navy p-6 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Missing middle</p>
            <h2 className="mt-4 font-serif text-2xl">Practical professional infrastructure</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">The space ISFP is designed to occupy: standards, assessment, benchmarking, community and lifelong learning.</p>
          </div>
          <div className="rounded-md border border-navy/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Current state</p>
            <h2 className="mt-4 font-serif text-2xl text-navy">Formal qualifications</h2>
            <p className="mt-3 text-sm leading-7 text-slate">Valuable, but often costly, time-intensive and not always mapped to workplace capability needs.</p>
          </div>
        </div>
      </Section>
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">What is needed</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Capability, standards and professionalism.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              As sustainable finance becomes embedded in mainstream financial decision-making, the field needs clearer expectations, credible assessment and a trusted professional home.
            </p>
          </div>
          <div className="grid gap-5">
            {response.map(([title, body]) => (
              <Card key={title} title={title}>{body}</Card>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">ISFP response</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">A professional architecture for sustainable finance.</h2>
            <p className="mt-5 text-sm leading-7 text-white/75">
              ISFP can provide a stable professional home for capability development: practical enough for working professionals, credible enough for institutions, and structured enough to support future assessment, benchmarking and recognition.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "Professionals gain clearer development pathways.",
              "Employers gain a common benchmark for workforce capability.",
              "Educators gain a framework for course and programme alignment.",
              "Policymakers gain stronger market capability infrastructure."
            ].map((benefit) => (
              <div key={benefit} className="rounded-md border border-white/15 bg-white/10 p-4 text-sm leading-7 text-white">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
