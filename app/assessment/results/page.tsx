import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Assessment Results",
  description: "Future ISFP assessment results route."
};

export default function AssessmentResultsPage() {
  return <PlaceholderPage eyebrow="Future module" title="Assessment Results" description="A prepared route for future individual capability reports, domain scoring and development recommendations." />;
}
