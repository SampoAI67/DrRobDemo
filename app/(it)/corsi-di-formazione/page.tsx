import type { Metadata } from "next";
import { CoursesView } from "@/views/courses";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "courses",
  title: pages.courses.meta.title.it,
  description: pages.courses.meta.description.it,
});

export default function Page() {
  return <CoursesView locale="it" />;
}
