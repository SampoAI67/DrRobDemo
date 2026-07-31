"use client";

import { useState, type FormEvent } from "react";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contactContent as copy } from "@/content/contact";
import { navLabel, studio, ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

/**
 * Endpoint esterno per l'invio del modulo, deciso al deploy.
 *
 * L'export è statico: senza endpoint nessun server riceve niente, e l'unico
 * canale che resta è il programma di posta dell'utente. Le due modalità non si
 * limitano a cambiare la destinazione — cambiano cosa il sito può onestamente
 * dire di aver fatto, quindi cambiano l'etichetta del pulsante, la conferma e
 * la nota sui dati. Va letto fuori dal componente: Next lo sostituisce a build
 * time, non è una variabile che cambia a runtime.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Status = "idle" | "sending" | "done" | "error";

const FIELD =
  "mt-2 w-full border border-line bg-ground px-4 py-3 text-base text-ink " +
  // Niente `outline-none`: la classe di Tailwind vince per cascata sul
  // `:focus-visible` globale e lascia i campi senza anello di focus, con il solo
  // bordo da 1px a cambiare colore. Da tastiera diventa impossibile capire dove
  // si è. Il focus ring del sito — 2px accent, offset 3px — qui deve arrivare
  // intatto, e senza `outline-none` arriva: non serve ridichiararne il colore.
  "transition-colors focus:border-accent";

/**
 * `text-base` e non `text-sm`: sotto i 16px Safari su iOS ingrandisce la pagina
 * a ogni focus, e su un modulo da cinque campi l'utente passa il tempo a
 * rimettere a fuoco lo schermo.
 */

export function ContactPage({ locale }: { locale: Locale }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "medicina",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [showMap, setShowMap] = useState(false);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const topicLabel =
    copy.form.topicOptions.find((o) => o.id === form.topic)?.label[locale] ??
    form.topic;

  const mailtoUrl = () => {
    const subject = `${copy.form.mailSubject[locale]} — ${form.name}`.trim();
    const body = [
      `${copy.form.nameLabel[locale]}: ${form.name}`,
      `${copy.form.emailLabel[locale]}: ${form.email}`,
      `${copy.form.phoneLabel[locale]}: ${form.phone}`,
      `${copy.form.topicLabel[locale]}: ${topicLabel}`,
      "",
      `${copy.form.messageLabel[locale]}:`,
      form.message,
    ].join("\n");

    // La destinazione è l'e-mail dello studio. La versione precedente ci metteva
    // `studio.phone`, cioè `mailto:+39 02 7202 3474`: un indirizzo che non
    // esiste, quindi un modulo che non recapitava nulla mentre annunciava
    // all'utente che il messaggio era partito.
    return `mailto:${studio.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!ENDPOINT) {
      window.location.href = mailtoUrl();
      setStatus("done");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // `fetch` non solleva sugli status di errore: senza questo controllo un
      // 500 verrebbe annunciato all'utente come invio riuscito.
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SiteHeader locale={locale} routeKey="contact" variant="solid" />

      <main id="contenuto">
        {/* Apertura e azione. Il telefono sta in cima perché è il canale che
            converte: prima la pagina si apriva su indirizzo, mezzi e orari, e
            l'azione arrivava dopo tre schermate. */}
        <section className="wrap pt-14 md:pt-20">
          <Reveal>
            <p className="u-label text-ink-soft" data-reveal>
              {copy.hero.eyebrow[locale]}
            </p>
            <h1 className="u-title mt-6 max-w-[20ch]" data-reveal>
              {copy.hero.title[locale]}
            </h1>
            <p className="u-lead mt-6 max-w-[50ch] text-ink" data-reveal>
              {copy.hero.subtitle[locale]}
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              data-reveal
            >
              <a
                href={`tel:${studio.phoneHref}`}
                className="btn btn-solid u-label"
              >
                {studio.phone}
              </a>
              <a href={mailtoUrl()} className="link-rule u-label">
                <span aria-hidden="true" className="rule" />
                {ui.write[locale]}
              </a>
            </div>

            <p className="u-body mt-6 max-w-[46ch] text-ink-soft" data-reveal>
              {copy.action.note[locale]}
            </p>
          </Reveal>
        </section>

        {/* Lo studio. Filetti e tipografia, senza le icone della versione
            precedente: il resto del sito non ne usa nessuna. */}
        <section aria-labelledby="studio" className="wrap mt-20 md:mt-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="studio" className="u-label text-ink-soft" data-reveal>
                {copy.details.title[locale]}
              </h2>

              <dl
                className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-4"
                data-reveal
              >
                <div>
                  <dt className="u-label text-xs text-ink-soft">
                    {copy.details.addressLabel[locale]}
                  </dt>
                  <dd className="u-body mt-2 whitespace-pre-line text-ink">
                    {copy.details.address[locale]}
                  </dd>
                </div>

                <div>
                  <dt className="u-label text-xs text-ink-soft">
                    {copy.details.transportLabel[locale]}
                  </dt>
                  <dd className="u-body mt-2 text-ink">
                    {copy.details.transport[locale]}
                  </dd>
                </div>

                <div>
                  <dt className="u-label text-xs text-ink-soft">
                    {copy.details.phoneLabel[locale]}
                  </dt>
                  <dd className="u-body mt-2 text-ink">
                    <a
                      href={`tel:${studio.phoneHref}`}
                      className="flex min-h-11 items-center transition-colors hover:text-accent"
                    >
                      {studio.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="u-label text-xs text-ink-soft">
                    {copy.details.hoursLabel[locale]}
                  </dt>
                  <dd className="u-body mt-2 text-ink">
                    {copy.details.hours[locale]}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </section>

        {/* Modulo. */}
        <section aria-labelledby="modulo" className="wrap mt-20 md:mt-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="modulo" className="u-label text-ink-soft" data-reveal>
                {copy.form.title[locale]}
              </h2>
              <p className="u-body mt-4 max-w-[60ch] text-ink-soft" data-reveal>
                {ENDPOINT
                  ? copy.form.subtitleEndpoint[locale]
                  : copy.form.subtitle[locale]}
              </p>

              <noscript>
                <p className="u-body mt-6 max-w-[60ch] border-l-2 border-accent pl-4 text-ink">
                  {copy.form.noScript[locale]}
                </p>
              </noscript>

              {/* `aria-live`: la conferma compare senza spostare il fuoco, e
                  senza annuncio uno screen reader non saprebbe che è cambiato
                  qualcosa. */}
              <div aria-live="polite">
                {status === "done" ? (
                  <p
                    className="u-body mt-8 max-w-[60ch] border-l-2 border-accent pl-4 text-ink"
                    data-reveal
                  >
                    {ENDPOINT
                      ? copy.form.doneEndpoint[locale]
                      : copy.form.doneMailto[locale]}
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="u-body mt-8 max-w-[60ch] border-l-2 border-ink pl-4 text-ink">
                    {copy.form.errorEndpoint[locale]}
                  </p>
                ) : null}
              </div>

              {status === "done" ? null : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 max-w-[46rem]"
                  data-reveal
                >
                  {/* Ogni campo ha `id`, `htmlFor` e `name`. Prima non ne aveva
                      nessuno dei tre: uno screen reader annunciava cinque
                      controlli senza nome, e il modulo era di fatto inutilizzabile
                      senza vederlo. `autoComplete` risparmia la digitazione su
                      telefono. */}
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-8">
                    <p className="sm:col-span-2">
                      <label htmlFor="nome" className="u-label text-xs text-ink">
                        {copy.form.nameLabel[locale]}
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        className={FIELD}
                      />
                    </p>

                    <p>
                      <label
                        htmlFor="email"
                        className="u-label text-xs text-ink"
                      >
                        {copy.form.emailLabel[locale]}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        className={FIELD}
                      />
                    </p>

                    <p>
                      <label
                        htmlFor="telefono"
                        className="u-label text-xs text-ink"
                      >
                        {copy.form.phoneLabel[locale]}{" "}
                        <span className="text-ink-soft lowercase tracking-normal">
                          ({copy.form.phoneHint[locale].toLowerCase()})
                        </span>
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        className={FIELD}
                      />
                    </p>

                    <p className="sm:col-span-2">
                      <label htmlFor="area" className="u-label text-xs text-ink">
                        {copy.form.topicLabel[locale]}
                      </label>
                      <select
                        id="area"
                        name="area"
                        value={form.topic}
                        onChange={(e) => set("topic")(e.target.value)}
                        className={FIELD}
                      >
                        {copy.form.topicOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label[locale]}
                          </option>
                        ))}
                      </select>
                    </p>

                    <p className="sm:col-span-2">
                      <label
                        htmlFor="messaggio"
                        className="u-label text-xs text-ink"
                      >
                        {copy.form.messageLabel[locale]}
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => set("message")(e.target.value)}
                        className={FIELD}
                      />
                    </p>
                  </div>

                  <p className="u-body mt-8 max-w-[60ch] text-xs text-ink-soft">
                    {ENDPOINT
                      ? copy.form.privacyEndpoint[locale]
                      : copy.form.privacyMailto[locale]}
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-solid u-label mt-8 disabled:opacity-60"
                  >
                    {status === "sending"
                      ? copy.form.submitting[locale]
                      : ENDPOINT
                        ? copy.form.submitEndpoint[locale]
                        : copy.form.submitMailto[locale]}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </section>

        {/* Mappa, caricata solo al clic. */}
        <section aria-labelledby="mappa" className="wrap my-20 md:my-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="mappa" className="u-label text-ink-soft" data-reveal>
                {copy.map.title[locale]}
              </h2>

              <div className="mt-8 max-w-[60ch]" data-reveal>
                {showMap ? (
                  <div className="relative aspect-video w-full overflow-hidden border border-line">
                    <iframe
                      title={copy.map.iframeTitle[locale]}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      // Riquadro centrato sulle coordinate reali di Via Andegari 18,
                      // prese da Nominatim e non stimate a occhio.
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                        studio.lon - 0.004
                      }%2C${studio.lat - 0.003}%2C${studio.lon + 0.004}%2C${
                        studio.lat + 0.003
                      }&layer=mapnik&marker=${studio.lat}%2C${studio.lon}`}
                      className="border-0"
                    />
                  </div>
                ) : (
                  <>
                    <p className="u-body text-ink-soft">
                      {copy.map.privacyNote[locale]}
                    </p>
                    <button
                      onClick={() => setShowMap(true)}
                      className="btn btn-solid u-label mt-6"
                    >
                      {copy.map.loadButton[locale]}
                    </button>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          { name: navLabel.contact[locale] },
        ])}
      />
    </>
  );
}
