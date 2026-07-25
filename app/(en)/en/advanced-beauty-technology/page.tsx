import type { Metadata } from "next";
import { AreaView } from "@/views/area";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "technology",
  title: pages.technology.meta.title.en,
  description: pages.technology.meta.description.en,
});

export default function Page() {
  return <AreaView area="technology" locale="en" />;
}
