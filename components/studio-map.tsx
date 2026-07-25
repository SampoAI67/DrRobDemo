"use client";

import { useState } from "react";
import { MapPin, TrainFront, ExternalLink, Building2 } from "lucide-react";
import { studio } from "@/content/site";
import { ui } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

/**
 * La mappa del sito originale era centrata sul quartiere e non sul civico, e
 * caricava uno script di terze parti a ogni visita. Qui il riquadro parte
 * statico — con indirizzo, riferimenti e pulsanti — e la mappa interattiva
 * (OpenStreetMap, nessun cookie) viene caricata solo se l'utente la chiede,
 * già inquadrata stretta sul civico.
 */

const D = 0.0025; // ~250 m di lato: il civico, non il quartiere
const bbox = [studio.lng - D, studio.lat - D / 2, studio.lng + D, studio.lat + D / 2].join("%2C");
const embed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${studio.lat}%2C${studio.lng}`;
const query = encodeURIComponent(`${studio.street}, ${studio.zip} ${studio.city}`);
const gmaps = `https://www.google.com/maps/search/?api=1&query=${query}`;
const osm = `https://www.openstreetmap.org/?mlat=${studio.lat}&mlon=${studio.lng}#map=18/${studio.lat}/${studio.lng}`;

export function StudioMap({ locale }: { locale: Locale }) {
  const [live, setLive] = useState(false);

  const label = {
    show: { it: "Mostra la mappa interattiva", en: "Show the interactive map" },
    note: {
      it: "La mappa viene caricata da OpenStreetMap solo dopo il tuo clic.",
      en: "The map is loaded from OpenStreetMap only after you click.",
    },
    title: { it: "Mappa dello studio", en: "Map of the practice" },
  };

  return (
    <div className="border border-line">
      {live ? (
        <iframe
          title={label.title[locale]}
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="block h-[24rem] w-full border-0 sm:h-[28rem]"
        />
      ) : (
        <div className="relative flex h-[24rem] flex-col justify-between overflow-hidden bg-mist p-7 sm:h-[28rem]">
          {/* reticolo decorativo: nessuna richiesta di rete finché non si apre la mappa */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative">
            <p className="kicker">{studio.city}</p>
            <p className="mt-4 font-display text-3xl leading-tight">
              {studio.street}
              <span className="block text-lg text-ink-soft">{studio.detail[locale]}</span>
            </p>
          </div>

          <div className="relative flex items-center gap-3">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-clinic text-paper">
              <MapPin size={22} aria-hidden />
            </span>
            <span className="text-sm text-ink-soft">
              {studio.zip} {studio.city} — {studio.country[locale]}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setLive(true)}
            className="relative inline-flex min-h-12 w-fit items-center gap-2 bg-ink px-5 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic"
          >
            {label.show[locale]}
          </button>
          <p className="relative text-xs text-ink-soft">{label.note[locale]}</p>
        </div>
      )}

      <div className="grid gap-4 border-t border-line p-6 sm:grid-cols-2">
        <ul className="space-y-2 text-sm text-ink-soft">
          <li className="flex items-start gap-3">
            <TrainFront size={17} aria-hidden className="mt-0.5 flex-none text-clinic" />
            {studio.landmarks[locale][0]}
          </li>
          <li className="flex items-start gap-3">
            <Building2 size={17} aria-hidden className="mt-0.5 flex-none text-clinic" />
            {studio.landmarks[locale][1]}
          </li>
        </ul>
        <div className="flex flex-wrap items-start gap-4">
          <a
            href={gmaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-clinic underline underline-offset-4"
          >
            {ui.openMaps[locale]}
            <ExternalLink size={14} aria-hidden />
          </a>
          <a
            href={osm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-ink-soft underline underline-offset-4"
          >
            OpenStreetMap
            <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
