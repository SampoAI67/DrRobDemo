import Link from "next/link";

/**
 * Segnaposto per le pagine interne, che verranno derivate dalla homepage in una
 * run successiva. Serve a non lasciare link rotti, non a fare contenuto.
 */
export function PageStub({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <main id="contenuto" className="section wrap flex min-h-[70svh] flex-col">
      <p className="u-label text-ink-soft">Dott. Dell&rsquo;Avanzato</p>
      <h1 className="u-title mt-8 max-w-[18ch]">{title}</h1>
      <p className="u-statement mt-6 max-w-[46ch] text-ink-soft">{intro}</p>
      <div className="mt-12">
        <Link href="/" className="link-rule u-label">
          <span aria-hidden="true" className="rule" />
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
