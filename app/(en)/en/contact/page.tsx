import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { contactContent } from "@/content/contact";
import { studio } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  routeKey: "contact",
  title: `${contactContent.hero.title.en} — ${studio.name}`,
  description: contactContent.hero.subtitle.en,
});

export default function Page() {
  return <ContactPage locale="en" />;
}
