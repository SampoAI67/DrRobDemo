"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, ui } from "@/content/copy";
import { studio } from "@/content/site";
import { href, resolve, routes, type PageId } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

const navIds: Record<string, PageId> = {
  "/its-me": "its-me",
  "/medicina-estetica": "medicina",
  "/chirurgia-estetica": "chirurgia",
  "/advanced-beauty-technology": "technology",
  "/rassegna-stampa": "press",
  "/corsi-di-formazione": "courses",
  "/contatti": "contact",
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const other: Locale = locale === "it" ? "en" : "it";
  const current = resolve(pathname);
  const otherHref =
    (current && routes.find((r) => r.id === current.route.id && r.param === current.route.param)?.path[other]) ??
    href("home", other);

  const items = nav.map((item) => {
    const id = navIds[item.href];
    return {
      primary: item.primary === true,
      label: item.label[locale],
      short: (item.short ?? item.label)[locale],
      href: href(id, locale),
      active: current?.route.id === id,
    };
  });

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur transition-[padding] duration-300 ${
        shrunk ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[84rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href={href("home", locale)} className="flex flex-col leading-none">
          <span className="whitespace-nowrap font-display text-lg tracking-tight sm:text-xl">Dott. Roberto Dell&rsquo;Avanzato</span>
          <span className="mt-1 hidden whitespace-nowrap text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft sm:block">
            {locale === "it" ? "Medicina e chirurgia estetica" : "Aesthetic medicine and surgery"}
          </span>
        </Link>

        <nav aria-label={ui.menu[locale]} className="hidden items-center gap-6 xl:flex">
          {items
            .filter((item) => item.primary)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`whitespace-nowrap text-[0.78rem] uppercase tracking-[0.1em] transition-colors hover:text-clinic ${
                  item.active ? "text-clinic" : "text-ink-soft"
                }`}
              >
                {item.short}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={otherHref}
            hrefLang={other}
            lang={other}
            className="hidden min-h-11 items-center px-2 text-[0.8rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-clinic sm:inline-flex"
            aria-label={ui.languageSwitchLabel[locale]}
          >
            {ui.languageSwitch[locale]}
          </Link>
          <a
            href={`tel:${studio.phoneHref}`}
            className="hidden min-h-11 items-center gap-2 bg-clinic px-4 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep lg:inline-flex"
          >
            <Phone size={15} aria-hidden />
            {ui.callShort[locale]}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center text-ink xl:hidden"
            aria-label={ui.menu[locale]}
            aria-expanded={open}
          >
            <Menu size={22} aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper xl:hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="font-display text-lg">{ui.menu[locale]}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center"
              aria-label={ui.close[locale]}
            >
              <X size={22} aria-hidden />
            </button>
          </div>
          <nav aria-label={ui.menu[locale]} className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={item.active ? "page" : undefined}
                className={`border-b border-line py-4 font-display text-2xl ${item.active ? "text-clinic" : "text-ink"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={otherHref}
              hrefLang={other}
              lang={other}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-ink-soft"
            >
              {ui.languageSwitch[locale]}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
