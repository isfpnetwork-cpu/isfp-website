import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const variants = {
    primary: "bg-navy text-white hover:bg-ink",
    secondary: "border border-navy/20 bg-white text-navy hover:border-navy/50",
    ghost: "text-navy underline decoration-gold underline-offset-4 hover:text-slate",
    light: "bg-white text-navy hover:bg-ivory"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
