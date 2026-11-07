import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <a href="#main" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-5 px-5 py-2 sm:gap-8 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Institute of Sustainable Finance Professionals home" className="focus-ring shrink-0 rounded-md">
          <Image src="/brand/isfp-wordmark.svg" alt="ISFP" width={365} height={140} className="h-auto w-28 object-contain sm:w-40 lg:w-44" priority />
        </Link>
        <nav aria-label="Primary navigation" className="min-w-0 flex-1 overflow-x-auto">
          <div className="flex min-w-max justify-end gap-4 py-2 lg:gap-5">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring shrink-0 whitespace-nowrap rounded-sm px-1 py-1 text-sm font-medium text-navy/80 transition hover:text-navy">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
