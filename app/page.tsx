import Link from "next/link";
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
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Professional architecture</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              A credible institutional foundation for a maturing field.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              Sustainable finance is moving from specialist activity to mainstream financial practice. ISFP is designed to support that transition with standards, assessment and professional community.
            </p>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Framework overview</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              The technical backbone of sustainable finance capability.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              The ISFP Competency Framework will define capability across domains of practice and dimensions of professional competence, supporting future assessment, benchmarking, CPD and workforce planning.
            </p>
          </div>
          <div className="rounded-md border border-navy/10 bg-white p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Foundations", "Governance & Ethics", "Impact & Reporting", "Risk Integration", "Capital Mobilisation", "Leadership"].map((domain) => (
                <div key={domain} className="rounded-md border border-gold/30 bg-ivory p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Domain</span>
                  <p className="mt-2 font-serif text-lg text-navy">{domain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section tone="white">
        <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">What We&apos;re Building</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate">
          Developing the standards, tools, knowledge and professional community to advance sustainable finance practice.
        </p>
        <div className="mt-8 grid gap-6 md:auto-rows-fr md:grid-cols-2">
          {[
            ["Professional Standards & Capability", "Establishing the frameworks and tools to define, assess and benchmark sustainable finance capability across individuals and organisations.", "/competency-framework"],
            ["Community & Collaboration", "Connecting professionals, educators and institutions to share knowledge, build relationships and advance sustainable finance practice.", "/founding-community"],
            ["Research & Insights", "Generating and sharing research, practical insights and thought leadership to inform professional practice and support the development of the sector.", "/resources-insights"],
            ["Learning & Professional Development", "Supporting continuous professional learning, career progression and the development of future professional recognition pathways.", "/cpd"]
          ].map(([title, body, href]) => (
            <Link key={href} href={href} className="focus-ring group block rounded-md border border-sage/40 bg-ivory p-6 transition hover:border-sage">
              <div className="mb-5 h-1 w-14 bg-gold" aria-hidden="true" />
              <h3 className="font-serif text-2xl text-navy underline decoration-sage underline-offset-4 group-hover:decoration-gold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="navy">
        <NewsletterForm source="/">
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Framework updates", "Professional practice notes", "Research and reports", "Community announcements"].map((item) => (
              <div key={item} className="rounded-md border border-white/15 bg-white/10 p-4 text-sm font-medium text-white">{item}</div>
            ))}
          </div>
        </NewsletterForm>
      </Section>
      <CTA title="Help shape the institute." body="ISFP is inviting early participation from professionals and institutions who want to contribute to credible sustainable finance capability development." href="/founding-community" label="Register interest" />
    </>
  );
}
