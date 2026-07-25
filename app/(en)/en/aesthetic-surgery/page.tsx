import type { Metadata } from "next";
import { AreaView } from "@/views/area";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "chirurgia",
  title: pages.chirurgia.meta.title.en,
  description: pages.chirurgia.meta.description.en,
});

export default function Page() {
  return <AreaView area="chirurgia" locale="en" />;
}
