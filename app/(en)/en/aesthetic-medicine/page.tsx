import type { Metadata } from "next";
import { AreaView } from "@/views/area";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "medicina",
  title: pages.medicina.meta.title.en,
  description: pages.medicina.meta.description.en,
});

export default function Page() {
  return <AreaView area="medicina" locale="en" />;
}
