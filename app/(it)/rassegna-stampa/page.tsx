import type { Metadata } from "next";
import { PressPage } from "@/components/press-page";
import { pressContent } from "@/content/press";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "it",
  routeKey: "press",
  title: `${pressContent.hero.title.it} — ${studio.name}`,
  description: pressContent.hero.subtitle.it,
});

export default function Page() {
  return <PressPage locale="it" />;
}
