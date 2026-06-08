import type { ReactNode } from "react";

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-md border border-navy/10 bg-white p-6 shadow-soft">
      <h3 className="font-serif text-xl text-navy">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate">{children}</div>
    </article>
  );
}
