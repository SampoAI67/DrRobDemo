import type { Metadata } from "next";
import { CoursesView } from "@/views/courses";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "courses",
  title: pages.courses.meta.title.en,
  description: pages.courses.meta.description.en,
});

export default function Page() {
  return <CoursesView locale="en" />;
}
