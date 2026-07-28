/**
 * Loader custom per next/image.
 *
 * In public/media esiste un set FISSO di varianti, generate una volta dagli originali
 * del cliente e mai ingrandite (vedi public/media/MANIFEST.md). Il loader riceve una
 * src canonica senza suffisso — `/media/sq-endolift.webp` — e la risolve sulla variante
 * nativa più piccola che copre la larghezza richiesta.
 */

import { VARIANTS } from "@/lib/image-variants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? "/DrRobDemo" : "");

export default function mediaLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const cleanSrc = basePath && src.startsWith(basePath) ? src.slice(basePath.length) : src;
  const match = /^\/media\/([a-z0-9-]+)\.webp$/.exec(cleanSrc);
  if (!match) return src;

  const widths = VARIANTS[match[1]];
  if (!widths) return src;

  const picked = widths.find((w) => w >= width) ?? widths[widths.length - 1];
  return `${basePath}/media/${match[1]}-${picked}.webp`;
}
