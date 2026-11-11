import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section className="border-b border-navy/10 bg-ivory">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-8 xl:max-w-[1440px] xl:grid-cols-[minmax(0,1fr)_30.6rem] 2xl:max-w-none 2xl:px-20">
        <div>
          <div className="relative mb-6 w-full max-w-[408px]">
            <Image src="/brand/isfp-wordmark.svg" alt="ISFP" width={365} height={140} className="h-auto w-full object-contain object-left" priority />
            <p className="absolute left-[33.15%] right-0 top-[69%] text-[10px] font-medium leading-[1.35] text-navy sm:text-sm">
              <span className="block">INSTITUTE OF SUSTAINABLE</span>
              <span className="block">FINANCE PROFESSIONALS</span>
            </p>
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Global professional body in formation</p>
          <h1 className="max-w-5xl font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
            Building Sustainable Finance Capability, Standards & Professionalism.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate">
            ISFP is being established as the professional architecture for sustainable finance: a home for capability standards, assessment, benchmarking, learning pathways and long-term professional recognition.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/founding-community">Join the founding community</ButtonLink>
            <ButtonLink href="/competency-framework" variant="secondary">Explore the framework</ButtonLink>
          </div>
        </div>
        <div className="border-l border-gold/50 pl-0 lg:pl-10">
          <div className="mb-5 rounded-md bg-navy p-6 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Institutional ambition</p>
            <p className="mt-4 font-serif text-2xl leading-snug">A recognised professional body for sustainable finance practice.</p>
          </div>
          <div className="grid gap-4">
            {[
              ["Capability", "Clear expectations for knowledge, skills, behaviours and impact orientation."],
              ["Standards", "A shared professional language for institutions, educators and practitioners."],
              ["Recognition", "A future pathway from early community to assessed professional standing."]
            ].map(([title, body]) => (
              <div key={title} className="rounded-md border border-navy/10 bg-white p-5 shadow-soft">
                <div className="mb-4 h-1 w-12 bg-gold" />
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
