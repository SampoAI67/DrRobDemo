/**
 * Percorso di un file statico servito da `public/`, con il `basePath` davanti.
 *
 * `next/link` e `next/image` il prefisso lo mettono da soli; un `<a href>` o un
 * `<source src>` scritti a mano no. È il modo in cui i link della rassegna
 * stampa erano finiti a puntare a `/app/uploads/2019/11/…`: percorso assoluto
 * senza prefisso, quindi fuori dal sito e 404 su ogni deploy in sottocartella.
 *
 * Il valore è lo stesso di `next.config.ts`, che non può essere importato dal
 * codice dell'applicazione — sono due processi diversi — e va quindi tenuto
 * allineato a mano. È l'unica copia: tutto il resto passa di qui.
 */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS ? "/DrRobDemo" : "");

/**
 * `asset("/stampa/x.pdf")` → `/DrRobDemo/stampa/x.pdf` in produzione.
 *
 * Idempotente: un percorso che il prefisso ce l'ha già torna immutato. Serve a
 * `absolute()` in `lib/metadata.ts`, che riceve sia rotte nude da `href()` sia
 * percorsi di file già passati da `media()`, e non può sapere quali siano quali.
 */
export function asset(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && normalised.startsWith(`${BASE_PATH}/`)) return normalised;
  return `${BASE_PATH}${normalised}`;
}
