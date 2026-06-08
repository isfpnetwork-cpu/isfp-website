import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { NewsletterForm } from "@/components/Forms";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">What ISFP is building</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              A professional institute for a maturing sustainable finance field.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card title="Capability standards">A competency framework to help professionals and institutions understand what good practice requires.</Card>
            <Card title="Assessment pathways">A future capability assessment and reporting model for individuals, teams and organisations.</Card>
            <Card title="Lifelong learning">Learning pathways that can support practical development and future CPD recognition.</Card>
            <Card title="Global community">A professional community for finance practitioners, academics, policymakers and market contributors.</Card>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Credible", "Designed for financial institutions, asset managers, regulators, universities and practitioners who need professional rigour."],
            ["Practical", "Focused on applied capability rather than broad sustainability claims or generic ESG messaging."],
            ["Future-ready", "Structured so membership, assessment, benchmarking and learning functionality can be added as the institute grows."]
          ].map(([title, body]) => (
            <div key={title} className="border-t border-gold pt-6">
              <h3 className="font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Updates</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Follow the development of ISFP.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Receive updates on the competency framework, founding community, assessment pilot and working group opportunities.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
      <CTA title="Help shape the institute." body="ISFP is inviting early participation from professionals and institutions who want to contribute to credible sustainable finance capability development." href="/membership" label="Register interest" />
    </>
  );
}
