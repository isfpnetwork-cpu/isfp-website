import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "About ISFP, an emerging professional body developing sustainable finance capability, standards and professional pathways."
};

const audiences = [
  ["Banks, insurers and other financial institutions", "Potential institutional partners"],
  ["Asset managers", "Investment institutions and potential partners"],
  ["Sustainable finance professionals", "Practitioners and prospective members"],
  ["Policymakers and regulators", "Public-sector stakeholders"],
  ["Students and future practitioners", "People exploring professional pathways"],
  ["Universities and educators", "Education and research stakeholders"]
];

const developmentAreas = [
  ["Competency Framework", "Developing common expectations for the knowledge, skills and behaviours of sustainable finance professionals."],
  ["Capability Assessment", "Designing future approaches to understanding individual and organisational strengths and development needs."],
  ["Benchmarking", "Exploring how future assessment data could support comparison across roles, institutions and markets."],
  ["Learning Pathways", "Developing a structure for continuous professional learning and future progression pathways."],
  ["Professional Community", "Building connections between practitioners, educators and institutions to inform ISFP's development."]
];

const stages = [
  ["Emerging Field", "An evolving field with varied roles and uneven expectations for professional capability."],
  ["Professional Standards", "Developing shared competency expectations to guide sustainable finance practice."],
  ["Assessment & Recognition", "Future approaches to assessing capability and recognising professional progression."],
  ["Recognised Profession", "A long-term ambition for trusted professional standing, supported by credible standards and practice."]
];

const workingGroups = [
  "Community, Communications & Partnerships",
  "Strategy & Organisational Development",
  "Professional Standards & Capability",
  "Learning, Research & Thought Leadership"
];

export default function AboutPage() {
  return (
    <div className="[&>section>div]:max-w-[1440px] [&>section>div]:py-10 lg:[&>section>div]:py-12">
      <PageHeader
        eyebrow="About ISFP"
        title="Building Sustainable Finance Capability, Standards & Professionalism."
        description="An emerging professional body developing a shared foundation for sustainable finance practice."
      />

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <div className="lg:border-r lg:border-gold/40 lg:pr-10">
            <Image src="/brand/isfp-wordmark.svg" alt="Institute of Sustainable Finance Professionals" width={365} height={140} className="mx-auto h-auto w-full max-w-[360px] object-contain" />
            <p className="mt-5 text-center text-sm font-semibold text-slate">Professional body in development</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl leading-tight text-navy">Who We Are</h2>
            <div className="mt-4 space-y-3 text-base leading-7 text-slate">
              <p>
                The Institute of Sustainable Finance Professionals (ISFP) is an emerging professional body established to support the development of sustainable finance as a recognised field of professional practice.
              </p>
              <p>
                ISFP is developing a common foundation for professional capability, including competency standards, assessment approaches, learning pathways and future professional recognition.
              </p>
              <p>
                The Institute is currently in its development phase, working with practitioners and stakeholders to shape its frameworks, priorities and long-term institutional model.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card title="Mission">Build a shared foundation for sustainable finance practice through competency standards, practical learning and professional collaboration.</Card>
          <Card title="Vision">A trusted global professional body supporting sustainable finance as a recognised profession.</Card>
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl leading-tight text-navy">What ISFP Is Building</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate">
          These five areas are being developed. Assessment, benchmarking and professional recognition remain future ambitions.
        </p>
        <div className="mt-6 grid gap-4 md:auto-rows-fr md:grid-cols-2">
          {developmentAreas.map(([title, body], index) => (
            <article key={title} className={"min-w-0 rounded-md border border-navy/10 bg-white p-5 " + (index === developmentAreas.length - 1 ? "md:col-span-2" : "")}>
              <div className="mb-3 h-1 w-10 bg-gold" aria-hidden="true" />
              <h3 className="font-serif text-xl leading-7 text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <h2 className="font-serif text-3xl leading-tight text-navy">Who We Serve</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate">
          ISFP is being developed for prospective members, potential institutional partners and wider stakeholders.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([audience, relationship]) => (
            <article key={audience} className="min-w-0 rounded-md border border-sage/40 bg-ivory p-4">
              <h3 className="text-sm font-semibold leading-6 text-navy">{audience}</h3>
              <p className="mt-1 text-sm leading-6 text-slate">{relationship}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Long-Term Ambition</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">Towards a recognised profession.</h2>
            <p className="mt-4 text-base leading-7 text-white/80">
              These four stages describe ISFP&apos;s long-term direction. Recognised professional status is an ambition, not a current accreditation or designation.
            </p>
          </div>
          <ol className="grid gap-4 sm:auto-rows-fr sm:grid-cols-2">
            {stages.map(([title, body], index) => (
              <li key={title} className="min-w-0 rounded-md border border-white/15 bg-white/10 p-5">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{index + 1}</span>
                  <h3 className="font-serif text-xl leading-7">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/80">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl leading-tight text-navy">How ISFP Is Being Developed</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-5">
            <div>
              <h3 className="font-serif text-xl text-navy">Established in Ireland</h3>
              <p className="mt-2 text-base leading-7 text-slate">
                ISFP is established in Ireland as a company limited by guarantee.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy">Advisory Board</h3>
              <p className="mt-2 text-base leading-7 text-slate">
                The Advisory Board provides strategic advice and perspectives to support the Institute&apos;s development.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl text-navy">Working Groups</h3>
            <p className="mt-2 text-sm leading-6 text-slate">Four Working Groups focus on distinct areas of ISFP&apos;s development.</p>
            <ul className="mt-4 grid gap-3 sm:auto-rows-fr sm:grid-cols-2">
              {workingGroups.map((group) => (
                <li key={group} className="min-w-0 rounded-md border border-navy/10 bg-white p-4 text-sm font-semibold leading-6 text-navy">
                  {group}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="border-t border-gold/40 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <h2 className="font-serif text-2xl text-navy">Join the Founding Community</h2>
            <p className="mt-2 text-base leading-7 text-slate">Help shape ISFP&apos;s frameworks, priorities and future professional model.</p>
          </div>
          <div className="shrink-0">
            <ButtonLink href="/founding-community">Join the Founding Community</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
