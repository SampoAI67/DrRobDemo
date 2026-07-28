/**
 * Percorso canonico di un'immagine, dal nome senza suffisso.
 *
 * I moduli di `content/` tengono il nome nudo — `sq-endolift` — non il percorso:
 * la variante giusta la sceglie il loader di next/image leggendo `lib/image-variants.ts`,
 * generato dalla pipeline. Avere il nome in un posto solo evita che i dati e i file
 * su disco si separino.
 */

import { VARIANTS } from "@/lib/image-variants";
export function media(name: string): string {
  return `/media/${name}.webp`;
}

/**
 * Percorso di un file che esiste davvero su disco.
 *
 * `media()` restituisce una src canonica che nessun browser può scaricare: il file
 * reale ha il suffisso della variante, e a risolverlo è il loader di next/image.
 * Fuori da next/image — dati strutturati, og:image — serve il percorso vero, o si
 * pubblica un 404. Senza `width` prende la variante più grande disponibile.
 */
export function mediaFile(name: string, width?: number): string {
  const widths = VARIANTS[name];
  if (!widths?.length) return media(name);
  const picked =
    (width === undefined ? undefined : widths.find((w) => w >= width)) ??
    widths[widths.length - 1];
  return `/media/${name}-${picked}.webp`;
}
