import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Benchmarking",
  description: "Future ISFP benchmarking route."
};

export default function BenchmarkingPage() {
  return <PlaceholderPage eyebrow="Future module" title="Benchmarking" description="A prepared route for future benchmarking by role, sector, region, country and experience level." />;
}
