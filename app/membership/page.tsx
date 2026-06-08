import type { Metadata } from "next";
import { InterestForm } from "@/components/Forms";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join the ISFP founding community."
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader eyebrow="Founding community" title="Join the founding community." description="Formal paid membership is not yet open. ISFP is inviting early expressions of interest from professionals and institutions who want to follow or contribute to its development." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-3xl text-navy">Who should register?</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Sustainable finance practitioners, students, educators, financial institutions, regulators, policymakers, consultants, asset managers and strategic partners are welcome to register interest.
            </p>
          </div>
          <InterestForm title="Founding community interest" submitLabel="Join the founding community" />
        </div>
      </Section>
    </>
  );
}
