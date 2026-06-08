import Image from "next/image";
import Link from "next/link";
import { futureRoutes, navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Image src="/brand/isfp-white-blue-logo.svg" alt="ISFP" width={96} height={96} className="mb-6 h-20 w-20" />
          <p className="max-w-xl text-sm leading-7 text-white/75">
            The Institute of Sustainable Finance Professionals is being established as a global professional body for capability, standards and lifelong learning in sustainable finance.
          </p>
          <p className="mt-5 text-sm text-white/60">{site.primaryDomain} will be the primary domain. {site.secondaryDomain} can redirect here later.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Website</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded-sm hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Future Platform</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {futureRoutes.map((href) => (
              <li key={href}>
                <Link href={href} className="focus-ring rounded-sm hover:text-white">
                  {href}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/60 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>&copy; {new Date().getFullYear()} Institute of Sustainable Finance Professionals CLG.</p>
          <p>Professional capability. Standards. Lifelong learning.</p>
        </div>
      </div>
    </footer>
  );
}
