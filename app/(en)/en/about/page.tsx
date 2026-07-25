import type { Metadata } from "next";
import { ItsMeView } from "@/views/its-me";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "its-me",
  title: pages.itsMe.meta.title.en,
  description: pages.itsMe.meta.description.en,
});

export default function Page() {
  return <ItsMeView locale="en" />;
}
