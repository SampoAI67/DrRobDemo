import type { Metadata } from "next";
import { ContactView } from "@/views/contact";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "contact",
  title: pages.contact.meta.title.en,
  description: pages.contact.meta.description.en,
});

export default function Page() {
  return <ContactView locale="en" />;
}
