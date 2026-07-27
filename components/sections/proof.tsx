import Link from "next/link";
import { Reveal } from "@/components/reveal";

type Block = { label: string; lines: string[] };

/**
 * Solo dati che risultano dal materiale del cliente. Tutto ciò che non risulta sta
 * nel blocco «Da confermare»: non si inventano orari, e-mail, nomi o sedi.
 */
const COLUMNS: Block[][] = [
  [
    {
      label: "Studio",
      lines: [
        "Via Andegari 18, 20121 Milano",
        "50 m dalla metro Montenapoleone",
        "Tel +39 02 7202 3474",
        "P. IVA 0977885100",
      ],
    },
    {
      label: "Albo",
      lines: ["Ordine dei Medici Chirurghi di Milano n. 47924"],
    },
  ],
  [
    {
      label: "Responsabile medicina estetica",
      lines: [
        "Dipartimento medico Espace Chenot Health Wellness & Spa, L’Albereta Relais & Châteaux, Erbusco (BS)",
      ],
    },
    {
      label: "Key opinion leader",
      lines: [
        "Teoxane · Merz · Eufoton · Filorga · Medicap · High Tech Aesthetic",
      ],
    },
    {
      label: "Docente a contratto",
      lines: ["Università di San Marino · La Sapienza, Roma"],
    },
  ],
  [
    {
      label: "Missioni umanitarie",
      lines: [
        "Work in Progress Onlus (Gambia, Senegal) — socio fondatore",
        "Depilex Smileagain Foundation (Pakistan, Bangladesh, 2003-2005)",
      ],
    },
    {
      label: "Da confermare",
      lines: [
        "Orari di studio",
        "Indirizzo e-mail pubblico",
        "Direttore sanitario",
        "Elenco completo delle sedi",
      ],
    },
  ],
];

const NAV = [
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/biografia", label: "Biografia" },
  { href: "/contatti", label: "Contatti" },
];

/** S7 — prova e contatto. Denso, si legge come un curriculum. */
export function Proof() {
  return (
    <section className="section bg-ground" aria-labelledby="studio">
      <Reveal className="wrap">
        <h2 id="studio" className="u-label text-ink-soft" data-reveal>
          Studio e credenziali
        </h2>

        <div
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3"
          data-reveal
        >
          {COLUMNS.map((column, i) => (
            <dl key={i} className="flex flex-col gap-8">
              {column.map((block) => (
                <div key={block.label}>
                  <dt className="u-label text-ink-soft">{block.label}</dt>
                  {block.lines.map((line) => (
                    <dd key={line} className="u-meta mt-2 text-ink">
                      {line}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          ))}
        </div>

        <div
          className="mt-16 flex flex-col gap-8 border-t border-line pt-8 md:mt-20 md:flex-row md:items-center md:justify-between"
          data-reveal
        >
          <nav aria-label="Pagine del sito">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="u-label flex min-h-11 items-center text-ink transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/contatti" className="btn btn-solid u-label self-start">
            Prenota una visita
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
