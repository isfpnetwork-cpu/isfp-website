"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <a href="#main" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-5 px-5 py-2 sm:gap-8 sm:px-8 lg:px-10 xl:max-w-[1440px] 2xl:max-w-none 2xl:px-20">
        <Link href="/" aria-label="Institute of Sustainable Finance Professionals home" className="focus-ring shrink-0 rounded-md lg:ml-7 2xl:ml-5">
          <Image src="/brand/isfp-header-symbol.svg" alt="ISFP symbol" width={92} height={130} className="h-14 w-auto object-contain sm:h-16 lg:h-[88px] 2xl:h-28" priority />
        </Link>
        <nav aria-label="Primary navigation" className="min-w-0 flex-1 overflow-x-auto">
          <div className="flex min-w-max justify-end gap-4 py-2 lg:gap-3 xl:gap-5 2xl:gap-7">
            {navigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={"focus-ring shrink-0 whitespace-nowrap rounded-sm px-1 py-1 text-sm font-bold text-navy transition hover:text-navy 2xl:text-lg" + (active ? " underline decoration-gold decoration-2 underline-offset-8" : "")}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
