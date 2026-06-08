import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Sustainable Finance Capability and Standards`,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: `${site.shortName} | Sustainable Finance Capability and Standards`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  icons: {
    icon: "/brand/isfp-icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
