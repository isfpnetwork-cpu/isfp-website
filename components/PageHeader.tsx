type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-navy/10 bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate">{eyebrow}</p> : null}
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{description}</p>
      </div>
    </section>
  );
}
