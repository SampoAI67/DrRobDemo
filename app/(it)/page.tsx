import type { Metadata } from "next";
import { HomeView } from "@/views/home";
import { home } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "it",
  id: "home",
  title: home.meta.title.it,
  description: home.meta.description.it,
});

export default function Page() {
  return <HomeView locale="it" />;
}
