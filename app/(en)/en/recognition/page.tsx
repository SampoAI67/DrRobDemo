import type { Metadata } from "next";
import { PressView } from "@/views/press";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "press",
  title: pages.press.meta.title.en,
  description: pages.press.meta.description.en,
});

export default function Page() {
  return <PressView locale="en" />;
}
