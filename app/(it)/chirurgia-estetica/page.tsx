import type { Metadata } from "next";
import { AreaView } from "@/views/area";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "chirurgia",
  title: pages.chirurgia.meta.title.it,
  description: pages.chirurgia.meta.description.it,
});

export default function Page() {
  return <AreaView area="chirurgia" locale="it" />;
}
