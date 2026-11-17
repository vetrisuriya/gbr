import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content-detail";
import { treatmentBySlug, treatments } from "@/data/treatments";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

// Fully prerendered from generateStaticParams, so blocking navigation is
// expected and there is no request-time data to stream.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = treatmentBySlug(slug);
  if (!page) return { title: "Treatment not found" };

  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: `/treatments/${page.slug}` },
    openGraph: {
      title: `${page.title} | GBR Fertility Centre`,
      description: page.summary,
    },
  };
}

export default async function TreatmentPage({
  params,
}: PageProps<"/treatments/[slug]">) {
  const { slug } = await params;
  const page = treatmentBySlug(slug);
  if (!page) notFound();

  return <ContentDetail page={page} base="/treatments" parentLabel="Treatments" />;
}
