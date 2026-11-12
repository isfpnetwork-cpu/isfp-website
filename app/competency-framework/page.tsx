import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { FrameworkExplorer } from "@/components/FrameworkExplorer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Competency Framework",
  description: "Explore the six domains and four competency dimensions of the ISFP framework under development."
};

const potentialUses = [
  ["Professional Development", "Help individuals understand the capabilities relevant to their work, identify gaps and plan their learning and career progression."],
  ["Education & Programme Development", "Guide the design of courses, qualifications and learning resources by linking content and learning outcomes to professional capability needs."],
  ["Assessment & Benchmarking", "Inform future tools for assessing capability and tracking progress, with potential to compare results across roles, sectors, organisations and regions."],
  ["Organisational Capability", "Help employers identify capability gaps across teams, prioritise training and recruitment, and build the expertise needed to deliver their sustainable finance objectives."]
];

export default function FrameworkPage() {
  return (
    <div className="[&>section>div]:max-w-[1440px] [&>section>div]:py-8 lg:[&>section>div]:py-10">
      <PageHeader
        eyebrow="Competency Framework"
        title="A shared foundation for sustainable finance capability."
        description="ISFP is developing a structured competency framework to articulate the knowledge, skills, professional behaviours and impact orientation relevant to sustainable finance practice."
      />

      <Section tone="white">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-baseline lg:justify-between">
          <h2 className="font-serif text-2xl text-navy">Framework Explorer</h2>
          <p className="max-w-xl text-sm leading-6 text-slate">
            Under development. These provisional website descriptions are subject to further consultation and validation.
          </p>
        </div>
        <FrameworkExplorer />
      </Section>

      <Section>
        <h2 className="font-serif text-3xl leading-tight text-navy">How the Framework Could Be Used</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate">
          The framework provides a foundation for professional, educational and organisational development. Assessment tools and benchmarking services would require further development and validation.
        </p>
        <div className="mt-6 grid gap-4 md:auto-rows-fr md:grid-cols-2">
          {potentialUses.map(([title, body]) => <Card key={title} title={title}>{body}</Card>)}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Development Status</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">Developed through consultation.</h2>
          </div>
          <div className="space-y-3 text-base leading-7 text-white/80">
            <p>
              The framework is being developed and refined through ISFP&apos;s Professional Standards &amp; Capability Working Group and wider stakeholder engagement.
            </p>
            <p>
              It is not presented as formally approved, accredited or adopted as an industry standard.
            </p>
            <div className="border-t border-gold/40 pt-4">
              <h3 className="font-serif text-xl text-white">Get Involved</h3>
              <p className="mt-2 text-sm leading-7">
                To contribute to framework development or share your perspective, contact{" "}
                <a href={"mailto:" + site.email} className="focus-ring rounded-sm text-white underline decoration-gold underline-offset-4">{site.email}</a>.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
