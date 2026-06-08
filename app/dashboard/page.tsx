import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Future ISFP dashboard route."
};

export default function DashboardPage() {
  return <PlaceholderPage eyebrow="Future module" title="Dashboard" description="A prepared route for future user profiles, assessment history, membership status and professional development activity." />;
}
