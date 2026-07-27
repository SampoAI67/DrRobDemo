/**
 * Loader custom per next/image.
 *
 * In public/media esiste un set FISSO di varianti, generate una volta dagli originali
 * del cliente e mai ingrandite (vedi public/media/MANIFEST.md). Il loader riceve una
 * src canonica senza suffisso — `/media/sq-endolift.webp` — e la risolve sulla variante
 * nativa più piccola che copre la larghezza richiesta, senza mai superare il nativo.
 *
 * Deve restare sincrono e senza dipendenze: Next lo importa sia a build sia nel bundle.
 */

/** Larghezze realmente presenti su disco, in ordine crescente. */
const VARIANTS: Record<string, number[]> = {
  "hero-desktop": [1280, 1920, 3200],
  "hero-mobile": [828, 1500],
  "sq-endolift": [480, 640],
  "sq-ultherapy": [480, 800],
  "sq-filler": [480, 640],
  "sq-botulino": [480, 640],
  "sq-profhilo": [480, 640, 1080],
  "sq-liposcultura": [480, 800],
  "sq-blefaroplastica": [480, 640],
  "sq-cellfina": [480, 640],
  "sq-rinosettoplastica": [480, 640],
  "sq-corpo": [480, 640],
  "cluster-1": [400],
  "cluster-2": [300],
  "cluster-3": [300],
  "method-01-esperienza": [960, 1480],
  "method-02-tecnologia": [960, 1480],
  "method-03-insegnamento": [960, 1200],
  "method-04-percorso": [960, 1480],
  logo: [600],
};

export default function mediaLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const match = /^\/media\/([a-z0-9-]+)\.webp$/.exec(src);
  if (!match) return src;

  const widths = VARIANTS[match[1]];
  if (!widths) return src;

  const picked = widths.find((w) => w >= width) ?? widths[widths.length - 1];
  return `/media/${match[1]}-${picked}.webp`;
}
