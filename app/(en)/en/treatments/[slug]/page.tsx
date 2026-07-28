import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentPage } from "@/components/treatment-page";
import { studio } from "@/content/site";
import { bySlug, TREATMENTS } from "@/content/treatments";
import { buildMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

/** Gli slug inglesi: `filler` qui è `dermal-fillers`. Vedi la rotta italiana. */
export const dynamicParams = false;

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug.en }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = bySlug(slug);
  if (!t) return {};

  return buildMetadata({
    locale: "en",
    routeKey: "treatment",
    slug: t.slug,
    title: `${t.title.en} — ${studio.name}`,
    description: t.summary.en,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const t = bySlug(slug);
  if (!t) notFound();

  return <TreatmentPage locale="en" treatment={t} />;
}
