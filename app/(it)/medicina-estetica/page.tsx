import type { Metadata } from "next";
import { AreaView } from "@/views/area";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "medicina",
  title: pages.medicina.meta.title.it,
  description: pages.medicina.meta.description.it,
});

export default function Page() {
  return <AreaView area="medicina" locale="it" />;
}
