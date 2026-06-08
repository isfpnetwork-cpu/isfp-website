import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Courses",
  description: "Future ISFP courses route."
};

export default function CoursesPage() {
  return <PlaceholderPage eyebrow="Future module" title="Courses" description="A prepared route for future learning pathways, course mapping and sustainable finance professional development." />;
}
