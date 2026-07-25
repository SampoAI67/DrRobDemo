"use client";

import { useEffect, useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { zones, procedureLabels } from "@/content/zones";
import { ui } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

/**
 * Sostituisce la sezione «Come vorresti valorizzarti?» del sito originale, dove
 * oltre 200 trattamenti erano stampati in due colonne di bullet illeggibili.
 * Qui la zona è il filtro: si sceglie il punto del corpo e restano solo i
 * trattamenti che lo riguardano. Lo stato finisce nella query string, così un
 * link a una zona specifica è condivisibile.
 */
export function BodyZoneSelector({ locale }: { locale: Locale }) {
  const param = locale === "it" ? "zona" : "area";
  const [active, setActive] = useState(zones[1].id); // «Volto e collo»: la zona più richiesta

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get(param);
    if (fromUrl && zones.some((z) => z.id === fromUrl)) setActive(fromUrl);
  }, [param]);

  const select = (id: string) => {
    setActive(id);
    const url = new URL(window.location.href);
    url.searchParams.set(param, id);
    window.history.replaceState(null, "", url);
  };

  const zone = useMemo(() => zones.find((z) => z.id === active) ?? zones[0], [active]);

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[19rem_1fr] lg:gap-16">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">{ui.chooseZone[locale]}</h3>
        <ul role="tablist" aria-orientation="vertical" className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-0">
          {zones.map((z) => {
            const Icon = (Icons[z.icon as keyof typeof Icons] ?? Icons.Circle) as Icons.LucideIcon;
            const selected = z.id === zone.id;
            return (
              <li key={z.id} role="presentation" className="lg:w-full">
                <button
                  type="button"
                  role="tab"
                  id={`zone-tab-${z.id}`}
                  aria-selected={selected}
                  aria-controls={`zone-panel-${z.id}`}
                  onClick={() => select(z.id)}
                  className={`flex min-h-11 w-full items-center gap-3 border-b border-line px-3 py-3 text-left text-sm transition-colors lg:px-2 ${
                    selected ? "border-clinic bg-clinic/5 text-clinic" : "text-ink-soft hover:text-clinic"
                  }`}
                >
                  <Icon size={17} aria-hidden className="flex-none" />
                  <span className="flex-1">{z.name[locale]}</span>
                  <span className="text-xs tabular-nums opacity-60">{z.procedures.length}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        role="tabpanel"
        id={`zone-panel-${zone.id}`}
        aria-labelledby={`zone-tab-${zone.id}`}
        key={zone.id}
        className="min-w-0"
      >
        <p className="kicker">{zone.name[locale]}</p>
        <p className="mt-4 font-display text-[clamp(1.6rem,3vw,2.4rem)]">
          {zone.procedures.length} {ui.procedures[locale]}
        </p>
        {zone.note && <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink-soft">{zone.note[locale]}</p>}

        <ul className="mt-8 columns-1 gap-x-10 md:columns-2">
          {zone.procedures.map((key, i) => (
            <li
              key={key}
              style={{ animationDelay: `${Math.min(i * 22, 420)}ms` }}
              className="mb-3 break-inside-avoid border-l-2 border-line pl-4 text-[0.95rem] leading-snug text-ink-soft transition-colors hover:border-gold-bright hover:text-ink motion-safe:animate-[zone-in_320ms_ease-out_both]"
            >
              {procedureLabels[key][locale]}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes zone-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
