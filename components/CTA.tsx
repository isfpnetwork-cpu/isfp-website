import { ButtonLink } from "@/components/ButtonLink";

export function CTA({
  title,
  body,
  href,
  label
}: {
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <h2 className="font-serif text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">{body}</p>
        </div>
        <ButtonLink href={href} variant="light">{label}</ButtonLink>
      </div>
    </section>
  );
}
