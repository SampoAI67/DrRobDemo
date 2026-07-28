import type { Metadata } from "next";
import { BioPage } from "@/components/bio-page";
import { bioContent } from "@/content/bio";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  routeKey: "biography",
  title: `${bioContent.hero.title.en} — ${studio.name}`,
  description: bioContent.hero.subtitle.en,
});

export default function Page() {
  return <BioPage locale="en" />;
}
