import type { Metadata } from "next";
import { HomeView } from "@/views/home";
import { home } from "@/content/copy";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  id: "home",
  title: home.meta.title.en,
  description: home.meta.description.en,
});

export default function Page() {
  return <HomeView locale="en" />;
}
