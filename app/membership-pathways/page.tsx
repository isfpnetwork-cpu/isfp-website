import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { MembershipExplorer } from "@/components/MembershipExplorer";
import { Section } from "@/components/Section";
import { frameworkDimensions } from "@/lib/competency-framework";

export const metadata: Metadata = {
  title: "Membership & Pathways",
  description: "Explore ISFP's proposed Affiliate, Practitioner and Chartered membership model and illustrative professional development journey. The model is under development."
};

export default function MembershipPathwaysPage() {
  return (
    <div className="[&>section>div]:max-w-[1440px] [&>section>div]:py-8 lg:[&>section>div]:py-10">
      <Section className="border-b border-navy/10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Membership &amp; Professional Pathways</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl">A pathway for professional growth in sustainable finance.</h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate">
          ISFP is developing a membership model designed to support professionals at different stages of their sustainable finance careers. The proposed pathway connects professional knowledge, practical experience, continuing development and future professional recognition.
        </p>
        <p className="mt-4 inline-block rounded-sm border border-gold/60 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-navy">Proposed model | Under development</p>
      </Section>

      <MembershipExplorer />

      <Section tone="navy">
        <h2 className="font-serif text-3xl leading-tight">Grounded in the Competency Framework</h2>
        <p className="mt-3 max-w-5xl text-base leading-7 text-white/80">
          The proposed membership model could draw on ISFP&apos;s developing Competency Framework. Its four dimensions are considered across six professional domains and could inform future membership expectations and professional development pathways.
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {frameworkDimensions.map(dimension => (
            <li key={dimension.id} className="min-w-0 border-l-2 border-gold pl-4 font-serif text-xl leading-7">{dimension.name}</li>
          ))}
        </ul>
        <div className="mt-6">
          <ButtonLink href="/competency-framework" variant="light">Explore the Competency Framework</ButtonLink>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Development Status</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-navy">Shaping the proposed model</h2>
            <p className="mt-3 text-base leading-7 text-slate">
              The membership model is proposed and subject to consultation, refinement and approval. Assessment and professional recognition arrangements are not yet operational.
            </p>
          </div>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-semibold leading-6 text-navy">Professional Standards &amp; Capability Working Group</dt>
              <dd className="mt-1 text-sm leading-6 text-slate">Responsible for developing knowledge, competency and assessment expectations.</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold leading-6 text-navy">Strategy &amp; Organisational Development Working Group</dt>
              <dd className="mt-1 text-sm leading-6 text-slate">Considers the wider membership model, including fees and financial sustainability.</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold leading-6 text-navy">Community, Communications &amp; Partnerships Working Group</dt>
              <dd className="mt-1 text-sm leading-6 text-slate">Supports future member recruitment and engagement.</dd>
            </div>
          </dl>
        </div>
      </Section>

      <div className="border-t border-gold/40 bg-ivory">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="min-w-0">
            <h2 className="font-serif text-2xl leading-tight text-navy">Help shape the future of sustainable finance professionalism.</h2>
            <p className="mt-2 text-sm leading-7 text-slate">Join the Founding Community and contribute your perspectives on the proposed membership model.</p>
          </div>
          <div className="shrink-0">
            <ButtonLink href="/founding-community">Join the Founding Community</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
