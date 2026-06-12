import type { Metadata } from "next";
import { InterestForm } from "@/components/Forms";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Founding Community",
  description: "Join the ISFP founding community and help shape the professional body for sustainable finance."
};

const pathways = [
  ["Community Member", "Follow ISFP's development, join consultations and help build momentum for a recognised sustainable finance profession."],
  ["Working Group Participant", "Contribute practical expertise to framework development, professional standards and future learning pathways."],
  ["Senior Advisor", "Support the institute with strategic perspective, market credibility and independent professional judgement."],
  ["Assessment Pilot Participant", "Help shape the first capability assessment model and the reporting experience that sits behind it."],
  ["Institutional Partner", "Explore collaboration on workforce capability, professional development, research, benchmarking and market engagement."]
];

const journey = ["Join Community", "Contribute Ideas", "Working Groups", "Pilots", "Future Membership Pathways"];

export default function FoundingCommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Founding Community"
        title="Join the ISFP Founding Community."
        description="Help shape the future professional body for sustainable finance capability, standards and professionalism."
      />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Why join</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              A community for the establishment phase of the institute.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              ISFP is inviting professionals, institutions, educators, policymakers and students to help test ideas, review emerging standards, join consultations and build the professional infrastructure sustainable finance needs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Shape professional standards", "Influence framework development", "Join working group activity", "Access pilot updates"].map((item) => (
              <div key={item} className="rounded-md border border-gold/40 bg-ivory p-5">
                <div className="mb-4 h-1 w-14 bg-gold" />
                <h3 className="font-serif text-xl text-navy">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 lg:grid-cols-5">
          {pathways.map(([title, body]) => (
            <article key={title} className="rounded-md border border-navy/10 bg-white p-5 shadow-soft">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Pathway</p>
              <h2 className="font-serif text-xl text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Future pathway</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">From early community to recognised professional pathway.</h2>
            <p className="mt-5 text-sm leading-7 text-white/75">
              The founding community is the bridge between today's establishment work and future ISFP membership, assessment and professional recognition pathways.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              ["Chartered", "Advanced professional recognition for leadership and applied sustainable finance practice."],
              ["Practitioner", "Recognition for professionals applying sustainable finance capability in real-world decisions."],
              ["Affiliate", "Open entry point for students, career switchers and early-career professionals."]
            ].map(([title, body], index) => (
              <div key={title} className={`rounded-md border border-white/15 p-5 ${index === 0 ? "bg-white/15" : "bg-white/10"}`}>
                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Founding journey</p>
            <h2 className="mt-4 font-serif text-3xl text-navy">A practical route into shaping ISFP.</h2>
            <div className="mt-8 grid gap-3">
              {journey.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-md border border-navy/10 bg-ivory p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{index + 1}</span>
                  <span className="font-medium text-navy">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <InterestForm
            title="Founding community participation"
            submitLabel="Register interest"
            interests={[
              { label: "Join Founding Community", value: "founding-community" },
              { label: "Join Working Group", value: "working-group" },
              { label: "Senior Advisor", value: "senior-advisor" },
              { label: "Assessment Pilot", value: "assessment-pilot" },
              { label: "Institutional Partner", value: "institutional-partner" }
            ]}
          />
        </div>
      </Section>
    </>
  );
}
