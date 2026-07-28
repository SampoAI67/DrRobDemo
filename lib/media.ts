/**
 * Percorso canonico di un'immagine, dal nome senza suffisso.
 *
 * I moduli di `content/` tengono il nome nudo — `sq-endolift` — non il percorso:
 * la variante giusta la sceglie il loader di next/image leggendo `lib/image-variants.ts`,
 * generato dalla pipeline. Avere il nome in un posto solo evita che i dati e i file
 * su disco si separino.
 */
export function media(name: string): string {
  return `/media/${name}.webp`;
}
