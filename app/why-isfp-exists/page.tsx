import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Why ISFP Exists",
  description: "The professional rationale for ISFP's development of sustainable finance capability standards, applied learning and future professional pathways."
};

export default function WhyPage() {
  const challenges = [
    ["Knowledge does not always translate into practice", "Sustainable finance education often focuses on concepts, regulations and frameworks. Professionals also need to apply that knowledge to real decisions, such as assessing transition plans, evaluating sustainability risks and structuring financing solutions."],
    ["Qualifications do not provide a complete picture of capability", "Qualifications and training certificates demonstrate learning, but do not necessarily establish how effectively someone can apply their knowledge in a professional role. Employers need ways to understand practical capability alongside formal education and experience."],
    ["Professional development lacks a clear progression pathway", "Practitioners can access courses, qualifications and learning resources, but it is not always clear how these connect to different career stages or levels of responsibility. A structured pathway could help professionals identify what to develop next."],
    ["Sustainable finance lacks a universally recognised professional standard", "Unlike some established professions, sustainable finance does not have a single, universally adopted framework defining professional competence, ethical expectations and continuing development. Existing initiatives provide important foundations, but approaches remain varied across markets and institutions."]
  ];

  const opportunities = [
    ["Education & Learning", "Supporting alignment between educational offerings and professional capability needs."],
    ["Professional Practice", "Articulating how knowledge, skills and behaviours translate into applied professional capability."],
    ["Standards & Recognition", "Developing a common foundation for future assessment, professional development and recognition."]
  ];

  const response = [
    ["Capability", "Articulating the knowledge, skills, professional behaviours and impact orientation needed for sustainable finance practice."],
    ["Standards", "Establishing a common competency foundation to inform professional development, assessment and organisational capability."],
    ["Professionalism", "Supporting ethical practice, continuous development, professional community and future recognition pathways."]
  ];

  return (
    <div className="[&>section>div]:max-w-[1440px] [&>section>div]:py-12 lg:[&>section>div]:py-[4.5rem]">
      <Section className="border-b border-navy/10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate">The Rationale</p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
          Sustainable finance needs stronger capability infrastructure.
        </h1>
        <div className="mt-6 max-w-5xl space-y-4 text-lg leading-8 text-slate">
          <p>
            As sustainability considerations become increasingly embedded in financial decision-making, professionals face growing expectations around technical knowledge, applied skills, professional judgement and accountability.
          </p>
          <p>
            While education, qualifications and professional development initiatives continue to expand, opportunities remain to strengthen the consistency, accessibility and practical application of sustainable finance capability standards.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">The Capability Challenge</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Developing sustainable finance expertise is only part of the challenge. Demonstrating and recognising professional capability is another.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate">
              As sustainable finance becomes embedded in financial decision-making, professionals need more than technical knowledge. They need the ability to apply it, demonstrate their competence and continue developing throughout their careers. Establishing clearer expectations for professional practice is an important part of that process.
            </p>
          </div>
          <div className="grid gap-4 sm:auto-rows-fr sm:grid-cols-2">
            {challenges.map(([title, body]) => (
              <article key={title} className="min-w-0 rounded-md border border-navy/10 bg-ivory p-5">
                <div aria-hidden="true" className="mb-3 h-1 w-10 bg-gold" />
                <h3 className="font-serif text-xl leading-7 text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">The Opportunity</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">
          Connecting learning, capability and professional practice.
        </h2>
        <p className="mt-4 max-w-5xl text-base leading-7 text-slate">
          Sustainable finance capability is developed through a combination of education, professional experience, applied learning and continuous development. ISFP aims to provide a shared professional foundation that connects these activities through competency standards, assessment approaches and pathways for lifelong development.
        </p>
        <p className="mt-3 max-w-5xl text-base leading-7 text-slate">
          ISFP aims to complement the work of universities, professional bodies, training providers and employers, not replace it.
        </p>
        <div className="mt-6 grid gap-4 md:auto-rows-fr md:grid-cols-3">
          {opportunities.map(([title, body]) => (
            <Card key={title} title={title}>{body}</Card>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">The ISFP Response</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Capability. Standards. Professionalism.</h2>
        <p className="mt-4 max-w-5xl text-base leading-7 text-white/80">
          Capability, standards and professionalism are three connected elements of ISFP&apos;s proposed institutional contribution. ISFP is developing its competency framework; assessment, benchmarking and recognition services remain future developments.
        </p>
        <div className="mt-6 grid gap-4 md:auto-rows-fr md:grid-cols-3">
          {response.map(([title, body]) => (
            <article key={title} className="min-w-0 rounded-md border border-gold/40 bg-white/5 p-6">
              <div aria-hidden="true" className="mb-3 h-1 w-10 bg-gold" />
              <h3 className="font-serif text-xl leading-7 text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-start gap-4 border-t border-gold/30 pt-6 sm:flex-row sm:items-center sm:gap-6">
          <ButtonLink href="/competency-framework" variant="light">Explore the Competency Framework</ButtonLink>
          <Link href="/founding-community" className="focus-ring rounded-sm text-sm font-semibold text-white underline decoration-gold underline-offset-4">
            Join the Founding Community
          </Link>
        </div>
      </Section>
    </div>
  );
}
