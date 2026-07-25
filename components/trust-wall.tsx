import { GraduationCap, Award, Users, HeartHandshake, BookOpen } from "lucide-react";
import { awards, humanitarian, kol, societies, teaching, training } from "@/content/credentials";
import { Reveal } from "./reveal";
import type { Locale } from "@/lib/i18n";

const labels = {
  teaching: { it: "Docenze universitarie", en: "University teaching" },
  training: { it: "Formazione", en: "Training" },
  societies: { it: "Società scientifiche", en: "Scientific societies" },
  awards: { it: "Premi e riconoscimenti", en: "Awards and recognition" },
  kol: { it: "Key Opinion Leader", en: "Key Opinion Leader" },
  humanitarian: { it: "Missioni umanitarie", en: "Humanitarian missions" },
};

function Column({
  icon: Icon,
  title,
  items,
  delay = 0,
}: {
  icon: typeof Award;
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal as="section" delay={delay} className="border-t border-line pt-6">
      <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-clinic">
        <Icon size={17} aria-hidden />
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-[0.95rem] leading-snug text-ink-soft">
        {items.map((item) => (
          <li key={item} className="border-l-2 border-line pl-4">
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/**
 * Al posto della galleria prima/dopo — che in Italia la disciplina della
 * pubblicità sanitaria rende impraticabile — il muro di credibilità è fatto di
 * cose verificabili: cattedre, società, premi, missioni.
 */
export function TrustWall({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      <Column icon={GraduationCap} title={labels.teaching[locale]} items={teaching.map((t) => t[locale])} />
      <Column icon={BookOpen} title={labels.training[locale]} items={training.map((t) => t[locale])} delay={60} />
      <Column icon={Users} title={labels.societies[locale]} items={societies} delay={120} />
      <Column icon={Award} title={labels.awards[locale]} items={awards.map((a) => a[locale])} delay={60} />
      <Column icon={Users} title={labels.kol[locale]} items={kol.map((k) => k[locale])} delay={120} />
      <Column
        icon={HeartHandshake}
        title={labels.humanitarian[locale]}
        items={humanitarian.map((h) => h[locale])}
        delay={180}
      />
    </div>
  );
}
