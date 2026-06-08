import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "CPD",
  description: "Future ISFP CPD route."
};

export default function CpdPage() {
  return <PlaceholderPage eyebrow="Future module" title="CPD" description="A prepared route for future continuing professional development tracking and recognition." />;
}
