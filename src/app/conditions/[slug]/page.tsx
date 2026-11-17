import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content-detail";
import { conditionBySlug, conditions } from "@/data/conditions";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

// Fully prerendered from generateStaticParams, so blocking navigation is
// expected and there is no request-time data to stream.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/conditions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = conditionBySlug(slug);
  if (!page) return { title: "Condition not found" };

  return {
    title: page.metaTitle ?? page.title,
    description: page.metaDescription ?? page.summary,
    alternates: { canonical: `/conditions/${page.slug}` },
    openGraph: {
      title: `${page.metaTitle ?? page.title} | GBR Fertility Centre`,
      description: page.metaDescription ?? page.summary,
    },
  };
}

export default async function ConditionPage({
  params,
}: PageProps<"/conditions/[slug]">) {
  const { slug } = await params;
  const page = conditionBySlug(slug);
  if (!page) notFound();

  return <ContentDetail page={page} base="/conditions" parentLabel="Conditions" />;
}
