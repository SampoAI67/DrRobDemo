/**
 * Un blocco `application/ld+json`.
 *
 * `dangerouslySetInnerHTML` è l'unico modo di scrivere JSON dentro uno `<script>`
 * senza che React ne faccia l'escape dei caratteri: il contenuto non viene da input
 * esterno, è serializzato da `lib/structured-data.ts`.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
