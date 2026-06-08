import { ButtonLink } from "@/components/ButtonLink";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export function PlaceholderPage({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <Section tone="white">
        <div className="max-w-3xl rounded-md border border-navy/10 bg-ivory p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Platform placeholder</p>
          <p className="mt-4 text-sm leading-7 text-slate">
            This route is intentionally prepared for future functionality. It can later connect to authentication, database records, reporting logic, charts, payments or learning management tools without changing the public website structure.
          </p>
          <div className="mt-6">
            <ButtonLink href="/membership" variant="secondary">Register interest</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
