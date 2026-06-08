import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "white" | "navy";
};

export function Section({ children, className = "", tone = "ivory" }: SectionProps) {
  const tones = {
    ivory: "bg-ivory",
    white: "bg-white",
    navy: "bg-navy text-white"
  };

  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">{children}</div>
    </section>
  );
}
