import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";
import { buildMetadata } from "@/lib/metadata";
import { stubs } from "@/content/stubs";
import { meta } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  locale: "it",
  routeKey: "contact",
  title: `${stubs.contact.title.it} — ${meta.title.it}`,
});

export default function Page() {
  return <PageStub locale="it" routeKey="contact" />;
}
