import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <Image src="/brand/isfp-primary-logo.svg" alt="Institute of Sustainable Finance Professionals" width={132} height={132} className="mb-8 h-24 w-24" priority />
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate">Global professional body in formation</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
            Sustainable finance capability, standards and lifelong learning.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
            ISFP is being established to support practical, evidence-based professional capability across sustainable finance roles, sectors and levels of experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/membership">Join the founding community</ButtonLink>
            <ButtonLink href="/competency-framework" variant="secondary">Explore the framework</ButtonLink>
          </div>
        </div>
        <div className="border-l border-navy/10 pl-0 lg:pl-10">
          <div className="grid gap-4">
            {[
              ["For institutions", "A future basis for clear capability expectations, benchmarking and workforce development."],
              ["For professionals", "A pathway from foundational understanding to advanced sustainable finance practice."],
              ["For the market", "An independent professional institute focused on standards, learning and practical competence."]
            ].map(([title, body]) => (
              <div key={title} className="rounded-md border border-navy/10 bg-white p-6 shadow-soft">
                <h2 className="font-serif text-xl text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
