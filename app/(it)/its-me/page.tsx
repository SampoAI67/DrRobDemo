import type { Metadata } from "next";
import { ItsMeView } from "@/views/its-me";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "its-me",
  title: pages.itsMe.meta.title.it,
  description: pages.itsMe.meta.description.it,
});

export default function Page() {
  return <ItsMeView locale="it" />;
}
