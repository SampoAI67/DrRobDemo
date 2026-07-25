import type { Metadata } from "next";
import { PressView } from "@/views/press";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "press",
  title: pages.press.meta.title.it,
  description: pages.press.meta.description.it,
});

export default function Page() {
  return <PressView locale="it" />;
}
