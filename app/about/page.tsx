import Image from "next/image";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "About the Institute of Sustainable Finance Professionals and its purpose as a professional body in formation."
};

export default function AboutPage() {
  const audiences = [
    "Financial institutions",
    "Asset managers",
    "Sustainable finance professionals",
    "Policymakers and regulators",
    "Students and future practitioners",
    "Universities and educators"
  ];

  const deliverables = [
    ["Competency framework", "A structured view of sustainable finance capability across professional domains and dimensions."],
    ["Capability assessment", "A future assessment layer for individuals, teams and organisations."],
    ["Benchmarking", "Future insights into capability maturity by role, sector, region and experience level."],
    ["Learning pathways", "Practical development pathways that can support future CPD and recognition."],
    ["Professional community", "A global community focused on standards, learning, research and practice."]
  ];

  return (
    <>
      <PageHeader eyebrow="About ISFP" title="Building Sustainable Finance Capability, Standards & Professionalism." description="ISFP is being established as an emerging professional body for sustainable finance practice, supporting capability development, standards, assessment and lifelong learning." />
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-md border border-gold/40 bg-ivory p-8">
            <Image src="/brand/isfp-primary-logo.svg" alt="ISFP primary logo" width={360} height={360} className="mx-auto h-56 w-56 sm:h-64 sm:w-64" />
            <div className="mt-8 border-t border-gold pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Professional body in formation</p>
              <p className="mt-3 font-serif text-2xl leading-snug text-navy">
                A long-term institutional home for sustainable finance capability.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Who we are</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              An institute for a field moving into mainstream professional practice.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate">
              <p>
                Sustainable finance is becoming a core part of financial decision-making, regulation, risk management, investment practice and institutional strategy. As the field matures, professionals and employers need clearer expectations for capability, conduct and applied practice.
              </p>
              <p>
                ISFP is positioned as a professional institute, not a consultancy, marketing body or generic short-course provider. Its purpose is to build credible capability infrastructure that can support professional standards, assessment, benchmarking and lifelong learning across markets.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Mission">Develop sustainable finance capability through practical standards, assessment, benchmarking and learning pathways.</Card>
          <Card title="Vision">Become a trusted global professional body for sustainable finance practitioners and institutions.</Card>
          <Card title="Purpose">Support the professionalisation of sustainable finance through credible standards, community and lifelong development.</Card>
        </div>
      </Section>
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">What ISFP will deliver</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy">Capability infrastructure for professionals and institutions.</h2>
            <p className="mt-5 text-base leading-8 text-slate">
              ISFP is being built around practical tools that help people understand, develop, assess and recognise sustainable finance capability.
            </p>
          </div>
          <div className="grid gap-4">
            {deliverables.map(([title, body]) => (
              <div key={title} className="rounded-md border border-navy/10 bg-ivory p-5">
                <div className="mb-4 h-1 w-12 bg-gold" />
                <h3 className="font-serif text-xl text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Who we serve</p>
            <h2 className="mt-4 font-serif text-3xl text-navy">A professional institute for the sustainable finance ecosystem.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-md border border-navy/10 bg-white p-4 text-sm font-medium text-navy shadow-soft">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Long-term ambition</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Supporting sustainable finance as a recognised profession.</h2>
            <p className="mt-5 text-sm leading-7 text-white/75">
              ISFP&apos;s long-term role is to provide the standards, assessment, CPD, governance and professional community needed for sustainable finance to develop with greater consistency, credibility and trust.
            </p>
          </div>
          <div className="grid gap-4">
            {["Emerging field", "Professional standards", "Assessment and recognition", "Recognised profession"].map((stage, index) => (
              <div key={stage} className="flex items-center gap-4 rounded-md border border-white/15 bg-white/10 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{index + 1}</span>
                <span className="font-serif text-xl text-white">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTA title="Explore the rationale for ISFP." body="The institute is being formed in response to clear gaps in sustainable finance capability development, professional standards and benchmarking." href="/why-isfp-exists" label="Why ISFP exists" />
    </>
  );
}
