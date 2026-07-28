import { Fragment, type ReactNode } from "react";

/**
 * Rende una stringa marcando i simboli ® perché si comportino bene in due contesti
 * molto diversi.
 *
 * Nel testo corrente il ® va in apice piccolo, altrimenti pesa troppo. Dentro
 * `.u-label` — maiuscoletto con `letter-spacing` largo — l'apice si stacca dalla
 * parola, perché la spaziatura si applica anche dopo l'ultima lettera: lì il glifo
 * deve restare inline. La differenza è gestita in CSS su `.reg`, così i testi in
 * `content/` restano stringhe pulite con dentro un normale carattere ®.
 *
 * Serve soprattutto in vista delle schede trattamento, che di ® ne hanno molti.
 */
export function RegMark({ children }: { children: string }): ReactNode {
  if (!children.includes("®")) return children;

  const parts = children.split("®");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 ? <sup className="reg">®</sup> : null}
    </Fragment>
  ));
}
