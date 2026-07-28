import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentPage } from "@/components/treatment-page";
import { studio } from "@/content/site";
import { bySlug, TREATMENTS } from "@/content/treatments";
import { buildMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

/**
 * Gli slug sono localizzati, quindi ogni rotta genera i suoi: qui gli italiani,
 * sotto `/en/treatments` gli inglesi. `dynamicParams = false` chiude la porta a
 * percorsi fuori elenco, che con `output: "export"` non avrebbero comunque un file.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug.it }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = bySlug(slug);
  if (!t) return {};

  return buildMetadata({
    locale: "it",
    routeKey: "treatment",
    // Lo slug intero: il canonical prende l'italiano, l'hreflang inglese il suo.
    slug: t.slug,
    title: `${t.title.it} — ${studio.name}`,
    description: t.summary.it,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const t = bySlug(slug);
  if (!t) notFound();

  return <TreatmentPage locale="it" treatment={t} />;
}
