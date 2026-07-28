"use client";

import { useState, type FormEvent } from "react";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contactContent as copy } from "@/content/contact";
import { navLabel, studio } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

function MapPinIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="mx-auto h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "medicina",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setSubmitted(true);
      } catch (err) {
        console.error("Form submit error", err);
      } finally {
        setSubmitting(false);
      }
    } else {
      const subject = encodeURIComponent(`Richiesta informazioni dal sito: ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\nArea: ${formData.topic}\n\nMessaggio:\n${formData.message}`
      );
      window.location.href = `mailto:${studio.phone}?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoUrl = `mailto:${studio.phone}?subject=${encodeURIComponent(
    `Richiesta dal sito: ${formData.name || "Visitatore"}`
  )}&body=${encodeURIComponent(
    `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\nArea: ${formData.topic}\n\nMessaggio:\n${formData.message}`
  )}`;

  return (
    <>
      <SiteHeader locale={locale} routeKey="contact" variant="solid" />

      <main id="contenuto">
        {/* HERO CONTATTI */}
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
          </Reveal>
        </section>

        {/* DETTAGLI STUDIO & FORM */}
        <section className="wrap my-16 md:my-28">
          <Reveal>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* SCHEDA DETTAGLI STUDIO */}
              <div className="space-y-8 lg:col-span-5" data-reveal>
                <div className="border border-line bg-surface p-8">
                  <div className="flex items-start gap-4">
                    <MapPinIcon />
                    <div>
                      <h3 className="u-label text-xs text-ink-soft">
                        {copy.details.addressLabel[locale]}
                      </h3>
                      <p className="u-body mt-2 font-medium text-ink whitespace-pre-line">
                        {copy.details.address[locale]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-4 border-t border-line/60 pt-6">
                    <NavigationIcon />
                    <div>
                      <p className="u-body text-sm text-ink-soft">
                        {copy.details.transport[locale]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-4 border-t border-line/60 pt-6">
                    <PhoneIcon />
                    <div>
                      <h3 className="u-label text-xs text-ink-soft">
                        {copy.details.phoneLabel[locale]}
                      </h3>
                      <a
                        href={`tel:${studio.phoneHref}`}
                        className="u-body mt-1 block font-medium text-ink hover:text-accent"
                      >
                        {studio.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-4 border-t border-line/60 pt-6">
                    <ClockIcon />
                    <div>
                      <h3 className="u-label text-xs text-ink-soft">
                        {copy.details.hoursLabel[locale]}
                      </h3>
                      <p className="u-body mt-1 text-sm text-ink font-medium">
                        {copy.details.hours[locale]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-line bg-surface p-6">
                  <h3 className="u-label text-xs text-ink-soft">
                    {copy.details.emailLabel[locale]}
                  </h3>
                  <p className="u-body mt-2 text-sm text-ink-soft">
                    {copy.details.emailNotice[locale]}
                  </p>
                </div>
              </div>

              {/* FORM DI CONTATTO */}
              <div className="lg:col-span-7" data-reveal>
                <div className="border border-line bg-surface p-8 md:p-10">
                  <h2 className="u-label text-ink-soft">
                    {copy.form.title[locale]}
                  </h2>
                  <p className="u-body mt-2 text-ink-soft">
                    {copy.form.subtitle[locale]}
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded border border-accent/30 bg-accent/5 p-6 text-center">
                      <CheckCircleIcon />
                      <p className="u-body mt-4 font-medium text-ink">
                        {copy.form.successMessage[locale]}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div>
                        <label className="u-label text-xs text-ink block mb-2">
                          {copy.form.nameLabel[locale]} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={copy.form.namePlaceholder[locale]}
                          className="w-full border border-line bg-ground px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="u-label text-xs text-ink block mb-2">
                            {copy.form.emailLabel[locale]} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder={copy.form.emailPlaceholder[locale]}
                            className="w-full border border-line bg-ground px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                          />
                        </div>

                        <div>
                          <label className="u-label text-xs text-ink block mb-2">
                            {copy.form.phoneLabel[locale]}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder={copy.form.phonePlaceholder[locale]}
                            className="w-full border border-line bg-ground px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="u-label text-xs text-ink block mb-2">
                          {copy.form.topicLabel[locale]}
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full border border-line bg-ground px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                        >
                          {copy.form.topicOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label[locale]}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="u-label text-xs text-ink block mb-2">
                          {copy.form.messageLabel[locale]} *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={copy.form.messagePlaceholder[locale]}
                          className="w-full border border-line bg-ground px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                        />
                      </div>

                      <p className="u-body text-xs text-ink-soft">
                        {copy.form.privacyNotice[locale]}
                      </p>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex items-center justify-center gap-3 bg-accent px-8 py-3.5 u-label text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                        >
                          <SendIcon />
                          <span>{copy.form.submitButton[locale]}</span>
                        </button>

                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center justify-center gap-2 border border-line bg-ground px-5 py-3.5 u-label text-xs text-ink hover:border-accent"
                        >
                          <MailIcon />
                          <span>{copy.form.mailtoFallbackButton[locale]}</span>
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* MAPPA PRIVACY-FIRST */}
        <section className="wrap my-16 md:my-28">
          <Reveal>
            <div className="border-t border-line pt-12" data-reveal>
              <h2 className="u-label text-ink-soft">
                {copy.map.title[locale]}
              </h2>

              <div className="mt-8 border border-line bg-surface p-8 text-center">
                {!showMap ? (
                  <div className="mx-auto max-w-[50ch] py-8">
                    <MapPinIcon />
                    <p className="u-body mt-4 text-sm text-ink-soft">
                      {copy.map.privacyNote[locale]}
                    </p>
                    <button
                      onClick={() => setShowMap(true)}
                      className="mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3 u-label text-white transition-opacity hover:opacity-90"
                    >
                      <MapPinIcon />
                      <span>{copy.map.loadButton[locale]}</span>
                    </button>
                  </div>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden border border-line">
                    <iframe
                      title="Studio Medico Dr. Roberto Dell'Avanzato Milano"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=9.1870%2C45.4660%2C9.1950%2C45.4720&amp;layer=mapnik&amp;marker=45.4690%2C9.1910"
                      className="border-0"
                    />
                  </div>
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
