import type { Metadata } from "next";
import { AreaView } from "@/views/area";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "technology",
  title: pages.technology.meta.title.it,
  description: pages.technology.meta.description.it,
});

export default function Page() {
  return <AreaView area="technology" locale="it" />;
}
