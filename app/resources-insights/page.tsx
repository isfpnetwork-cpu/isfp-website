import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { NewsletterForm } from "@/components/Forms";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Resources and Insights",
  description: "ISFP resources, insights and future research updates."
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader eyebrow="Resources" title="Resources & Insights" description="A future home for ISFP articles, framework updates, research notes and practical guidance for sustainable finance professionals." />
      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Framework updates">Consultation notes and progress updates on the ISFP competency framework.</Card>
          <Card title="Professional practice">Clear, evidence-based commentary on sustainable finance capability and market practice.</Card>
          <Card title="Research and reports">Future research releases, benchmarking insights and institutional learning from the assessment platform.</Card>
        </div>
      </Section>
      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-serif text-3xl">Receive new resources.</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">Sign up for updates when ISFP publishes framework notes, pilot invitations and professional resources.</p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
