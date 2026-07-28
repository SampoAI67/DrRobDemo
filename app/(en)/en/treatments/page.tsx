import type { Metadata } from "next";
import { TreatmentsIndex } from "@/components/treatments-index";
import { treatmentsIndex } from "@/content/treatment-pages";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  routeKey: "treatments",
  title: `${treatmentsIndex.title.en} — ${studio.name}`,
  description: treatmentsIndex.lead.en,
});

export default function Page() {
  return <TreatmentsIndex locale="en" />;
}
