import type { Metadata } from "next";
import { TreatmentsIndex } from "@/components/treatments-index";
import { treatmentsIndex } from "@/content/treatment-pages";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "it",
  routeKey: "treatments",
  title: `${treatmentsIndex.title.it} — ${studio.name}`,
  description: treatmentsIndex.lead.it,
});

export default function Page() {
  return <TreatmentsIndex locale="it" />;
}
