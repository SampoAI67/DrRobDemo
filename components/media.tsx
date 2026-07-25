import manifest from "@/content/images.json";
import lock from "@/content/images.lock.json";
import type { Locale } from "@/lib/i18n";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const WIDTHS = manifest.widths;

type ImageEntry = { id: string; path: string; alt: Record<string, string> };
const index = new Map<string, ImageEntry>((manifest.images as ImageEntry[]).map((i) => [i.id, i]));

const dimensions = lock as Record<string, { width: number; height: number; widths: number[]; ratio: number }>;

/**
 * Proporzioni reali del file, scritte da tools/fetch-images.mjs. Usarle come
 * default evita di ritagliare le foto originali per farle stare in un box
 * deciso a priori: i banner del sito sono 2.38:1, le foto dei trattamenti 1.56:1.
 */
export const naturalRatio = (id: string): string => {
  const entry = dimensions[id];
  return entry ? `${entry.width}/${entry.height}` : "3/2";
};

export function altFor(id: string, locale: Locale): string {
  return index.get(id)?.alt[locale] ?? "";
}

interface MediaProps {
  id: string;
  locale: Locale;
  /** proporzioni del contenitore; se omesse si usano quelle reali del file */
  ratio?: string;
  /** punto di messa a fuoco quando il ritaglio è voluto, es. "center 35%" */
  position?: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** sovrascrive l'alt del manifest (immagini decorative: stringa vuota) */
  alt?: string;
}

/**
 * Immagine responsive servita dalle varianti WebP generate da
 * tools/fetch-images.mjs. Il contenitore ha un aspect-ratio fisso, quindi il
 * layout è stabile anche prima che l'immagine arrivi.
 */
export function Media({
  id,
  locale,
  ratio,
  position,
  sizes = "100vw",
  className = "",
  imgClassName = "",
  priority = false,
  alt,
}: MediaProps) {
  const entry = index.get(id);
  if (!entry) throw new Error(`Immagine non nel manifest: ${id}`);

  // solo le larghezze effettivamente generate: l'originale spesso è < 1600px
  const available = dimensions[id]?.widths ?? WIDTHS;
  const srcSet = available.map((w) => `${BASE}/media/${id}-${w}.webp ${w}w`).join(", ");
  const src = `${BASE}/media/${id}-${available[available.length - 1]}.webp`;

  return (
    <div
      className={`relative overflow-hidden bg-mist ${className}`}
      style={{ aspectRatio: ratio ?? naturalRatio(id) }}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt ?? entry.alt[locale] ?? ""}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        style={position ? { objectPosition: position } : undefined}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

/** Percorso assoluto di un asset in /public, con il basePath del deploy. */
export const asset = (path: string) => `${BASE}${path}`;
