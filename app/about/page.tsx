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
  return (
    <>
      <PageHeader eyebrow="About ISFP" title="An emerging professional body for sustainable finance practice." description="ISFP is being established to support professional capability, standards and lifelong learning across the sustainable finance field." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Image src="/brand/isfp-primary-logo.svg" alt="ISFP primary logo" width={280} height={280} className="h-44 w-44" />
          <div className="space-y-5 text-base leading-8 text-slate">
            <p>
              Sustainable finance is becoming a core part of financial decision-making, regulation, risk management, investment practice and institutional strategy. The profession now needs clearer expectations for capability and practice.
            </p>
            <p>
              ISFP is positioned as a professional institute, not a consultancy, marketing body or short-course provider. Its purpose is to support credible professional development and practical standards that can be used across markets.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Mission">Develop sustainable finance capability through practical standards, assessment and learning pathways.</Card>
          <Card title="Positioning">Operate as a serious professional body for practitioners, institutions, educators and policy stakeholders.</Card>
          <Card title="Long-term role">Create a foundation for recognition, CPD, benchmarking and organisational capability development.</Card>
        </div>
      </Section>
      <CTA title="Explore the rationale for ISFP." body="The institute is being formed in response to clear gaps in sustainable finance capability development and professional standards." href="/why-isfp-exists" label="Why ISFP exists" />
    </>
  );
}
