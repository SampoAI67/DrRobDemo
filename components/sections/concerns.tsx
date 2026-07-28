"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CONCERNS } from "@/content/concerns";
import { media } from "@/lib/media";
import { concerns as copy } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/**
 * S4 — da cosa vuoi partire.
 *
 * Le otto voci sono link veri e restano tutte in pagina: l'immagine che cambia è
 * un'aggiunta, non il modo di accedere al contenuto. La prima voce è attiva di
 * default, così anche senza puntatore la colonna sinistra mostra qualcosa.
 */
export function Concerns({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-ground" aria-labelledby="da-dove-partire">
      <Reveal className="wrap">
        <h2 id="da-dove-partire" className="u-label text-ink-soft" data-reveal>
          {copy.kicker[locale]}
        </h2>
        <p className="u-lead mt-6 max-w-[34ch] text-ink" data-reveal>
          {copy.lead[locale]}
        </p>

        <div
          className="mt-14 grid grid-cols-12 gap-x-8 gap-y-10 md:mt-20"
          data-reveal
        >
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-square w-full max-w-[32.5rem] overflow-hidden bg-line">
              {CONCERNS.map((c, i) => (
                <Image
                  key={c.n}
                  src={media(c.image)}
                  alt={i === active ? c.alt[locale] : ""}
                  aria-hidden={i === active ? undefined : true}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className={`object-cover transition-opacity duration-500 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <ul className="col-span-12 md:col-span-6 md:col-start-7">
            {CONCERNS.map((c, i) => (
              <li key={c.n} className="border-t border-line last:border-b">
                <Link
                  href={href("treatments", locale)}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex min-h-14 items-baseline gap-6 py-4"
                >
                  <span
                    className={`u-label transition-colors ${
                      i === active ? "text-accent" : "text-ink-soft"
                    }`}
                  >
                    {c.n}
                  </span>
                  <span
                    className={`u-label transition-colors ${
                      i === active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {c.label[locale]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
