import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <a href="#main" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="ISFP home" className="focus-ring rounded-md">
          <Image src="/brand/isfp-primary-logo.svg" alt="Institute of Sustainable Finance Professionals" width={156} height={156} className="h-14 w-14 lg:h-16 lg:w-16" priority />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-sm font-medium text-navy/80 transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/founding-community" className="focus-ring hidden rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink sm:inline-flex">
            Join the founding community
          </Link>
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="border-t border-navy/10 px-5 py-3 lg:hidden">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring whitespace-nowrap rounded-md border border-navy/10 bg-white px-3 py-2 text-sm font-medium text-navy">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
