"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, Send } from "lucide-react";
import { zones } from "@/content/zones";
import { studio, medicalNotice } from "@/content/site";
import type { Locale } from "@/lib/i18n";

/**
 * Form di richiesta visita in quattro passaggi. Chiedere prima l'interesse e poi
 * i dati personali qualifica la richiesta e abbassa l'attrito: il modulo del
 * sito originale chiedeva tutto insieme in un unico blocco.
 *
 * L'invio va a Web3Forms (nessun backend, compatibile con l'export statico).
 * Senza chiave configurata il form ripiega su un mailto già compilato, quindi
 * resta utilizzabile in ogni caso.
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_W3F_KEY ?? "";

const t = {
  steps: {
    it: ["Interesse", "Zona", "Tempistica", "Contatti"],
    en: ["Interest", "Area", "Timing", "Contact"],
  },
  q1: { it: "Di cosa vorresti parlare?", en: "What would you like to discuss?" },
  q2: { it: "Quale zona ti interessa?", en: "Which area are you interested in?" },
  q3: { it: "Entro quando vorresti essere ricontattato?", en: "When would you like to be contacted?" },
  q4: { it: "Come ti ricontattiamo?", en: "How can we reach you?" },
  areas: {
    it: ["Medicina estetica", "Chirurgia estetica", "Advanced beauty technology", "Non lo so ancora"],
    en: ["Aesthetic medicine", "Aesthetic surgery", "Advanced beauty technology", "Not sure yet"],
  },
  timing: {
    it: ["Il prima possibile", "Entro un mese", "Entro tre mesi", "Sto solo raccogliendo informazioni"],
    en: ["As soon as possible", "Within a month", "Within three months", "Just gathering information"],
  },
  name: { it: "Nome e cognome", en: "Full name" },
  email: { it: "E-mail", en: "E-mail" },
  phone: { it: "Telefono (facoltativo)", en: "Phone (optional)" },
  message: { it: "Qualcosa che dovremmo sapere (facoltativo)", en: "Anything we should know (optional)" },
  consent: {
    it: "Ho letto l'informativa e acconsento al trattamento dei miei dati per essere ricontattato.",
    en: "I have read the privacy notice and consent to my data being used to contact me.",
  },
  back: { it: "Indietro", en: "Back" },
  next: { it: "Avanti", en: "Next" },
  send: { it: "Invia la richiesta", en: "Send request" },
  sending: { it: "Invio in corso…", en: "Sending…" },
  okTitle: { it: "Richiesta inviata", en: "Request sent" },
  okBody: {
    it: "Grazie. Lo studio ti ricontatta ai recapiti che hai lasciato. Per urgenze puoi sempre chiamare il numero dello studio.",
    en: "Thank you. The practice will contact you using the details you left. For anything urgent you can always call the practice.",
  },
  errBody: {
    it: "Non è stato possibile inviare la richiesta. Riprova, oppure scrivi direttamente a",
    en: "The request could not be sent. Please try again, or write directly to",
  },
  stepOf: { it: "Passo", en: "Step" },
  of: { it: "di", en: "of" },
} as const;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState({
    area: "",
    zone: "",
    timing: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const set = (patch: Partial<typeof data>) => setData((d) => ({ ...d, ...patch }));

  const canContinue =
    (step === 0 && data.area) ||
    (step === 1 && data.zone) ||
    (step === 2 && data.timing) ||
    (step === 3 && data.name && data.email && data.consent);

  const summary = () =>
    [
      `${t.steps[locale][0]}: ${data.area}`,
      `${t.steps[locale][1]}: ${data.zone}`,
      `${t.steps[locale][2]}: ${data.timing}`,
      data.phone ? `${t.phone[locale]}: ${data.phone}` : "",
      data.message ? `\n${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canContinue) return;

    if (!ACCESS_KEY) {
      // nessun servizio configurato: si apre il client di posta già compilato
      const subject = encodeURIComponent(locale === "it" ? "Richiesta di visita" : "Consultation request");
      const body = encodeURIComponent(`${data.name}\n${data.email}\n\n${summary()}`);
      window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: locale === "it" ? "Richiesta di visita dal sito" : "Consultation request from the website",
          from_name: data.name,
          email: data.email,
          message: summary(),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-clinic bg-clinic/5 p-8">
        <p className="flex items-center gap-3 font-display text-2xl text-clinic">
          <Check size={24} aria-hidden />
          {t.okTitle[locale]}
        </p>
        <p className="mt-4 max-w-[60ch] text-ink-soft">{t.okBody[locale]}</p>
        <a href={`tel:${studio.phoneHref}`} className="mt-6 inline-flex min-h-11 items-center font-medium text-clinic underline underline-offset-4">
          {studio.phone}
        </a>
      </div>
    );
  }

  const options =
    step === 0
      ? t.areas[locale]
      : step === 1
        ? zones.map((z) => z.name[locale])
        : step === 2
          ? t.timing[locale]
          : [];

  const question = [t.q1, t.q2, t.q3, t.q4][step][locale];
  const field = (["area", "zone", "timing"] as const)[step];

  return (
    <form onSubmit={submit} className="border border-line bg-paper p-6 sm:p-9" noValidate>
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-ink-soft">
        <span>
          {t.stepOf[locale]} {step + 1} {t.of[locale]} 4 — {t.steps[locale][step]}
        </span>
        <span aria-hidden className="flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-1 w-8 ${i <= step ? "bg-clinic" : "bg-line"}`} />
          ))}
        </span>
      </div>

      <fieldset className="mt-8 border-0 p-0">
        <legend className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)]">{question}</legend>

        {step < 3 ? (
          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {options.map((option) => {
              const checked = data[field] === option;
              return (
                <label
                  key={option}
                  className={`flex min-h-12 cursor-pointer items-center gap-3 border px-4 py-3 text-[0.95rem] transition-colors ${
                    checked ? "border-clinic bg-clinic/5 text-clinic" : "border-line text-ink-soft hover:border-clinic"
                  }`}
                >
                  <input
                    type="radio"
                    name={field}
                    value={option}
                    checked={checked}
                    onChange={() => set({ [field]: option })}
                    className="h-4 w-4 accent-[var(--color-clinic)]"
                  />
                  {option}
                </label>
              );
            })}
          </div>
        ) : (
          <div className="mt-7 grid gap-5">
            <label className="grid gap-2 text-sm text-ink-soft">
              {t.name[locale]} *
              <input
                required
                type="text"
                autoComplete="name"
                value={data.name}
                onChange={(e) => set({ name: e.target.value })}
                className="min-h-12 border border-line bg-paper px-4 text-base text-ink"
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-ink-soft">
                {t.email[locale]} *
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => set({ email: e.target.value })}
                  className="min-h-12 border border-line bg-paper px-4 text-base text-ink"
                />
              </label>
              <label className="grid gap-2 text-sm text-ink-soft">
                {t.phone[locale]}
                <input
                  type="tel"
                  autoComplete="tel"
                  value={data.phone}
                  onChange={(e) => set({ phone: e.target.value })}
                  className="min-h-12 border border-line bg-paper px-4 text-base text-ink"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-ink-soft">
              {t.message[locale]}
              <textarea
                rows={4}
                value={data.message}
                onChange={(e) => set({ message: e.target.value })}
                className="border border-line bg-paper p-4 text-base text-ink"
              />
            </label>
            <label className="flex items-start gap-3 text-sm text-ink-soft">
              <input
                required
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set({ consent: e.target.checked })}
                className="mt-1 h-4 w-4 flex-none accent-[var(--color-clinic)]"
              />
              <span>{t.consent[locale]}</span>
            </label>
            <p className="border-l-2 border-gold-bright pl-4 text-sm leading-relaxed text-ink-soft">
              {medicalNotice[locale]}
            </p>
          </div>
        )}
      </fieldset>

      {status === "error" && (
        <p role="alert" className="mt-6 border-l-2 border-clinic pl-4 text-sm text-ink">
          {t.errBody[locale]}{" "}
          <a href={`mailto:${studio.email}`} className="underline underline-offset-4">
            {studio.email}
          </a>
          .
        </p>
      )}

      <div className="mt-9 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex min-h-12 items-center gap-2 px-2 text-sm uppercase tracking-[0.12em] text-ink-soft disabled:invisible"
        >
          <ArrowLeft size={16} aria-hidden />
          {t.back[locale]}
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            disabled={!canContinue}
            className="inline-flex min-h-12 items-center gap-2 bg-clinic px-6 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.next[locale]}
            <ArrowRight size={16} aria-hidden />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue || status === "sending"}
            className="inline-flex min-h-12 items-center gap-2 bg-clinic px-6 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={16} aria-hidden className="animate-spin" />
                {t.sending[locale]}
              </>
            ) : (
              <>
                <Send size={16} aria-hidden />
                {t.send[locale]}
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
