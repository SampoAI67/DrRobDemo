import type { Metadata } from "next";
import { BioPage } from "@/components/bio-page";
import { bioContent } from "@/content/bio";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "it",
  routeKey: "biography",
  title: `${bioContent.pageTitle.it} — ${studio.name}`,
  description: bioContent.hero.subtitle.it,
});

export default function Page() {
  return <BioPage locale="it" />;
}
