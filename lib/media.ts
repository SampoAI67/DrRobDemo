/**
 * Percorso canonico di un'immagine, dal nome senza suffisso.
 *
 * I moduli di `content/` tengono il nome nudo — `sq-endolift` — non il percorso:
 * la variante giusta la sceglie il loader di next/image leggendo `lib/image-variants.ts`.
 */

import { asset } from "@/lib/asset";
import { VARIANTS } from "@/lib/image-variants";

export function media(name: string): string {
  return asset(`/media/${name}.webp`);
}

/**
 * Percorso di un file che esiste davvero su disco.
 */
export function mediaFile(name: string, width?: number): string {
  const widths = VARIANTS[name];
  if (!widths?.length) return media(name);
  const picked =
    (width === undefined ? undefined : widths.find((w) => w >= width)) ??
    widths[widths.length - 1];
  return asset(`/media/${name}-${picked}.webp`);
}
