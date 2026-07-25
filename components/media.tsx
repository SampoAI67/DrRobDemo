import manifest from "@/content/images.json";
import type { Locale } from "@/lib/i18n";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const WIDTHS = manifest.widths;

type ImageEntry = { id: string; path: string; alt: Record<string, string> };
const index = new Map<string, ImageEntry>((manifest.images as ImageEntry[]).map((i) => [i.id, i]));

export function altFor(id: string, locale: Locale): string {
  return index.get(id)?.alt[locale] ?? "";
}

interface MediaProps {
  id: string;
  locale: Locale;
  /** proporzioni del contenitore, es. "4/5" — riserva lo spazio ed evita il CLS */
  ratio?: string;
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
  ratio = "3/2",
  sizes = "100vw",
  className = "",
  imgClassName = "",
  priority = false,
  alt,
}: MediaProps) {
  const entry = index.get(id);
  if (!entry) throw new Error(`Immagine non nel manifest: ${id}`);

  const srcSet = WIDTHS.map((w) => `${BASE}/media/${id}-${w}.webp ${w}w`).join(", ");
  const src = `${BASE}/media/${id}-${WIDTHS[WIDTHS.length - 1]}.webp`;

  return (
    <div className={`relative overflow-hidden bg-mist ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt ?? entry.alt[locale] ?? ""}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

/** Percorso assoluto di un asset in /public, con il basePath del deploy. */
export const asset = (path: string) => `${BASE}${path}`;
