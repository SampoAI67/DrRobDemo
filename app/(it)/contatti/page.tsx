import type { Metadata } from "next";
import { ContactView } from "@/views/contact";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "contact",
  title: pages.contact.meta.title.it,
  description: pages.contact.meta.description.it,
});

export default function Page() {
  return <ContactView locale="it" />;
}
