"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { METHOD } from "@/content/method";
import { method as copy } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/**
 * S6 — il metodo.
 *
 * Fondo scuro: è l'unico punto della pagina, con l'hero, in cui il ciano del logo
 * (#00B0C8) passa AA — qui lo usiamo sul numero della voce attiva.
 *
 * Progressive enhancement: il markup arriva già con la prima voce aperta, quindi
 * all'idratazione non c'è nessuno scatto; il `<noscript>` apre tutti e quattro i
 * pannelli quando JavaScript non c'è.
 */
export function Method({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  return (
    <section
      className="on-dark relative isolate overflow-hidden bg-dark"
      aria-labelledby="metodo"
    >
      <noscript>
        <style>{`.method-panel { display: block !important; }`}</style>
      </noscript>

      {METHOD.map((step, i) => (
        <Image
          key={step.n}
          src={step.image}
          alt=""
          fill
          sizes="100vw"
          className={`-z-10 object-cover transition-opacity duration-[600ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Il testo occupa solo il ~38% sinistro, quindi lì l'overlay resta pieno:
          alcune immagini (studio, camice bianco) sono chiare proprio a sinistra e
          scaricare l'opacità romperebbe il contrasto di .text-invert-soft.
          Si apre solo la metà destra, dove non c'è testo e sta il soggetto. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(17,17,17,0.97) 0%, rgba(17,17,17,0.96) 30%, rgba(17,17,17,0.72) 64%, rgba(17,17,17,0.40) 100%)",
        }}
      />

      <Reveal className="section wrap relative">
        <h2 id="metodo" className="u-label text-invert-soft" data-reveal>
          {copy.kicker[locale]}
        </h2>

        <ul className="mt-12 md:mt-16" data-reveal>
          {METHOD.map((step, i) => (
            <li
              key={step.n}
              data-open={i === active}
              className="border-t border-line-dark last:border-b"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={i === active}
                  aria-controls={`metodo-${step.n}`}
                  onClick={() => setActive(i)}
                  className="flex w-full items-baseline gap-5 py-6 text-left md:gap-8"
                >
                  <span
                    className={`u-label shrink-0 transition-colors ${
                      i === active ? "text-accent-bright" : "text-invert-soft"
                    }`}
                  >
                    {step.n}
                  </span>
                  <span className="method-title">{step.title[locale]}</span>
                </button>
              </h3>

              <div id={`metodo-${step.n}`} className="method-panel">
                <p className="u-body max-w-[58ch] pb-8 pl-[3.25rem] text-invert-soft md:pl-[4rem]">
                  {step.text[locale]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
