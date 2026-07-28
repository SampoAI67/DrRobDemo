import type { Metadata } from "next";
import { PressPage } from "@/components/press-page";
import { pressContent } from "@/content/press";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  routeKey: "press",
  title: `${pressContent.hero.title.en} — ${studio.name}`,
  description: pressContent.hero.subtitle.en,
});

export default function Page() {
  return <PressPage locale="en" />;
}
