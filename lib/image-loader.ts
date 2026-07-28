/**
 * Loader custom per next/image.
 *
 * In public/media esiste un set FISSO di varianti, generate una volta dagli originali
 * del cliente e mai ingrandite (vedi public/media/MANIFEST.md). Il loader riceve una
 * src canonica senza suffisso — `/media/sq-endolift.webp` — e la risolve sulla variante
 * nativa più piccola che copre la larghezza richiesta, senza mai superare il nativo.
 *
 * La tabella delle larghezze è GENERATA da tools/build-media.py dai file effettivamente
 * scritti su disco. Prima era mantenuta a mano qui dentro: bastava aggiungere
 * un'immagine e dimenticare la mappa perché il loader ripiegasse in silenzio sulla src
 * canonica, servendo l'originale a piena risoluzione senza che nessuno se ne accorgesse.
 *
 * Deve restare sincrono e senza dipendenze esterne: Next lo importa sia a build sia
 * nel bundle client.
 */

import { VARIANTS } from "@/lib/image-variants";

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
