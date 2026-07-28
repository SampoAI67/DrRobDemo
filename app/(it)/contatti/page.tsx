import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { contactContent } from "@/content/contact";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "it",
  routeKey: "contact",
  title: `${contactContent.hero.title.it} — ${studio.name}`,
  description: contactContent.hero.subtitle.it,
});

export default function Page() {
  return <ContactPage locale="it" />;
}
