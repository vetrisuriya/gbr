import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content-detail";
import { specialities, specialityBySlug } from "@/data/specialities";

export function generateStaticParams() {
  return specialities.map((s) => ({ slug: s.slug }));
}

// Fully prerendered from generateStaticParams, so blocking navigation is
// expected and there is no request-time data to stream.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/specialities/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = specialityBySlug(slug);
  if (!page) return { title: "Speciality not found" };

  return {
    title: page.metaTitle ?? page.title,
    description: page.metaDescription ?? page.summary,
    alternates: { canonical: `/specialities/${page.slug}` },
    openGraph: {
      title: `${page.metaTitle ?? page.title} | GBR Fertility Centre`,
      description: page.metaDescription ?? page.summary,
    },
  };
}

export default async function SpecialityPage({
  params,
}: PageProps<"/specialities/[slug]">) {
  const { slug } = await params;
  const page = specialityBySlug(slug);
  if (!page) notFound();

  return <ContentDetail page={page} base="/specialities" parentLabel="Specialities" />;
}
