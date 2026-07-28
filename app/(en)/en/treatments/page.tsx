import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";
import { buildMetadata } from "@/lib/metadata";
import { stubs } from "@/content/stubs";
import { meta } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  routeKey: "treatments",
  title: `${stubs.treatments.title.en} — ${meta.title.en}`,
});

export default function Page() {
  return <PageStub locale="en" routeKey="treatments" />;
}
