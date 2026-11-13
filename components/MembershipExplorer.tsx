"use client";

import { useId, useState } from "react";
import { Section } from "@/components/Section";
import { membershipLevels } from "@/lib/membership-pathways";

export function MembershipExplorer() {
  const id = useId();
  const [selectedId, setSelectedId] = useState(membershipLevels[0].id);
  const selected = membershipLevels.find(level => level.id === selectedId) ?? membershipLevels[0];
  const panelId = id + "-details";
  const headingId = id + "-heading";
  const noticeId = id + "-notice";
  const journeyId = id + "-journey";
  const journeyHeadingId = id + "-journey-heading";
  const details = [
    ["Knowledge and capability", selected.knowledge],
    ["Experience", selected.experience],
    ["Professional development", selected.development],
    ["Continuing Professional Development", selected.cpd],
    ["Progression", selected.progression]
  ];

  return (
    <>
      <Section tone="white">
        <h2 className="mb-3 font-serif text-3xl leading-tight text-navy">Explore the proposed membership levels</h2>
        <p id={noticeId} className="max-w-5xl text-sm leading-6 text-slate">
          All membership expectations and CPD figures below are proposed and subject to consultation, refinement and approval. Selecting a level is for exploration only, not an eligibility decision. ISFP does not currently award Chartered status.
        </p>
        <fieldset aria-describedby={noticeId} className="mt-5 min-w-0">
          <legend className="sr-only">Proposed membership level</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {membershipLevels.map(level => (
              <label key={level.id} className="relative block min-w-0 cursor-pointer">
                <input
                  type="radio"
                  name={id + "-levels"}
                  value={level.id}
                  checked={selectedId === level.id}
                  onChange={() => setSelectedId(level.id)}
                  aria-label={level.name}
                  aria-controls={panelId + " " + journeyId}
                  className="peer sr-only"
                />
                <span className="flex h-full min-h-[104px] flex-col justify-center rounded-md border border-navy/20 bg-ivory px-5 py-4 text-navy hover:border-gold peer-checked:border-gold peer-checked:bg-navy peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2">
                  <span className="font-serif text-2xl leading-8">{level.name}</span>
                  <span className="mt-1 text-sm leading-6 opacity-80">{level.subtitle}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <section id={panelId} aria-labelledby={headingId} aria-describedby={noticeId} className="mt-5 min-w-0 rounded-md border border-gold/50 bg-white p-5 sm:p-6">
          <div aria-live="polite" aria-atomic="true" className="border-b border-gold/40 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Proposed membership profile</p>
            <h3 id={headingId} className="mt-2 font-serif text-2xl leading-tight text-navy">{selected.name}: {selected.subtitle}</h3>
            <h4 className="mt-3 text-sm font-semibold text-navy">Who it may suit</h4>
            <p className="mt-1 max-w-4xl text-base leading-7 text-slate">{selected.suitability}</p>
          </div>
          <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {details.map(([label, value], index) => (
              <div key={label} className={"min-w-0 " + (index === details.length - 1 ? "sm:col-span-2" : "")}>
                <dt className="text-sm font-semibold leading-6 text-navy">{label}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl leading-tight text-navy">Professional Development Journey</h2>
        <div id={journeyId} role="region" aria-labelledby={journeyHeadingId}>
          <div aria-live="polite" aria-atomic="true" className="mt-4">
            <p className="text-sm font-semibold text-slate">{selected.name} journey</p>
            <h3 id={journeyHeadingId} className="mt-2 font-serif text-2xl leading-tight text-navy">{selected.journey.subtitle}</h3>
            <p className="mt-2 max-w-5xl text-base leading-7 text-slate">{selected.journey.description}</p>
          </div>
          <ol className="mt-5 grid gap-y-5 sm:grid-cols-2 sm:gap-x-5 xl:grid-cols-5 xl:gap-x-0">
            {selected.journey.stages.map(([title, body], index) => (
              <li key={index} className={"min-w-0 border-l border-gold/60 pl-4 xl:border-l-0 xl:border-t xl:pl-0 xl:pr-5 xl:pt-3 " + (index === selected.journey.stages.length - 1 ? "sm:col-span-2 xl:col-span-1 xl:pr-0" : "")}>
                <p aria-hidden="true" className="text-sm font-bold text-slate">{String(index + 1).padStart(2, "0")}</p>
                <h4 className="mt-2 font-serif text-xl leading-7 text-navy">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate">{body}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-5 max-w-5xl text-sm leading-6 text-slate">
          These journeys are illustrative, not mandatory membership requirements. Experienced professionals may enter at different levels, subject to future agreed criteria. Assessment and professional recognition arrangements are not yet operational.
        </p>
      </Section>
    </>
  );
}
