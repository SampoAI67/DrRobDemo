import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/views/article";
import { articleById, articles } from "@/content/articles";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleById(slug);
  if (!article) return {};
  return pageMetadata({
    locale: "it",
    id: "article",
    param: slug,
    title: article.title.it,
    description: article.metaDescription.it,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!articleById(slug)) notFound();
  return <ArticleView id={slug} locale="it" />;
}
