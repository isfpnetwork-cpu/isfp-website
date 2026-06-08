import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Assessment Start",
  description: "Future ISFP assessment start route."
};

export default function AssessmentStartPage() {
  return <PlaceholderPage eyebrow="Future module" title="Assessment Start" description="A prepared entry point for the future ISFP capability assessment experience." />;
}
