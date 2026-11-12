"use client";

import { useId, useState } from "react";
import { frameworkDimensions, frameworkDomains } from "@/lib/competency-framework";

export function FrameworkExplorer() {
  const id = useId();
  const [selectedId, setSelectedId] = useState(frameworkDomains[0].id);
  const selected = frameworkDomains.find(domain => domain.id === selectedId) ?? frameworkDomains[0];
  const panelId = id + "-domain";
  const headingId = id + "-heading";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.8fr)] lg:gap-8">
      <div className="min-w-0 lg:hidden">
        <label htmlFor={id + "-select"} className="mb-2 block text-sm font-semibold text-navy">Professional domain</label>
        <select
          id={id + "-select"}
          value={selectedId}
          onChange={event => setSelectedId(event.target.value)}
          aria-controls={panelId}
          className="focus-ring min-h-12 w-full min-w-0 rounded-md border border-navy/20 bg-ivory px-3 text-sm text-navy"
        >
          {frameworkDomains.map(domain => <option key={domain.id} value={domain.id}>{domain.name}</option>)}
        </select>
      </div>

      <fieldset className="hidden min-w-0 lg:block">
        <legend className="mb-3 text-sm font-semibold text-navy">Professional domains</legend>
        <div className="grid gap-2">
          {frameworkDomains.map((domain, index) => (
            <label key={domain.id} className="relative block cursor-pointer">
              <input
                type="radio"
                name={id + "-domains"}
                value={domain.id}
                checked={selectedId === domain.id}
                onChange={() => setSelectedId(domain.id)}
                aria-controls={panelId}
                className="peer sr-only"
              />
              <span className="flex min-h-[72px] items-center gap-3 rounded-md border border-navy/15 bg-white px-4 py-3 text-sm font-semibold leading-6 text-navy hover:border-gold peer-checked:border-gold peer-checked:bg-navy peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2">
                <span aria-hidden="true" className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold " + (selectedId === domain.id ? "bg-gold text-navy" : "bg-ivory text-slate")}>{index + 1}</span>
                <span>{domain.name}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <section id={panelId} aria-labelledby={headingId} className="min-w-0">
        <div aria-live="polite" aria-atomic="true" className="border-b border-gold/50 pb-5">
          <h3 id={headingId} className="font-serif text-2xl leading-tight text-navy sm:text-3xl">{selected.name}</h3>
          <p className="mt-3 text-base leading-7 text-slate">{selected.description}</p>
        </div>
        <h4 className="mt-5 text-sm font-semibold text-navy">Four competency dimensions</h4>
        <p className="mt-2 text-sm leading-6 text-slate">Each domain is considered through these four dimensions.</p>
        <div className="mt-4 grid gap-3 sm:auto-rows-fr sm:grid-cols-2">
          {frameworkDimensions.map(dimension => (
            <article key={dimension.id} className="min-w-0 rounded-md border border-navy/10 bg-ivory p-5">
              <h5 className="font-serif text-xl leading-7 text-navy">{dimension.name}</h5>
              <p className="mt-2 text-sm leading-6 text-slate">{selected.dimensions[dimension.id]}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
