import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PostFilter } from "@/components/post-filter";
import { postAccent } from "@/components/post-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { cn } from "@/lib/utils";
import { posts, postCategories, formatDate } from "@/data/posts";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Practical, evidence-based articles on fertility, IVF, PCOS, male infertility and pregnancy — written and reviewed by the clinical team at GBR Fertility Centre.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "GBR Fertility Centre Journal",
          url: `${site.url}/blog`,
          blogPost: posts.slice(0, 10).map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />

      <PageHero
        eyebrow="The journal"
        title="Written for the questions you actually ask."
        intro="Practical, evidence-based reading on fertility, treatment and pregnancy — reviewed by our clinical team. No jargon, no miracle claims, and no topic too awkward to cover."
        crumbs={[{ label: "Home", href: "/" }, { label: "Journal" }]}
        highlights={[
          { label: "Articles", value: `${posts.length} and counting` },
          { label: "Reviewed", value: "By our clinicians" },
          { label: "Updated", value: "Regularly" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          {featured && (
            <div className="mb-12 grid gap-8 rounded-3xl border border-ink/10 bg-cream-deep/40 p-5 md:grid-cols-[1.05fr_1fr] md:items-center md:p-7">
              <Link
                href={`/blog/${featured.slug}`}
                className={cn(
                  "group relative order-1 flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-7 md:order-2 md:aspect-[4/3] md:min-h-0",
                  postAccent(featured.category),
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full border border-current opacity-15 transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-8 size-32 rounded-full border border-current opacity-10 transition-transform duration-700 group-hover:scale-125"
                />
                <span className="relative flex items-start justify-between gap-4">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em]">
                    {featured.category}
                  </span>
                  <ArrowUpRight className="size-4 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="relative mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-5">
                  <span className="block">
                    <span className="block text-[0.58rem] uppercase tracking-[0.16em] opacity-60">
                      Published
                    </span>
                    <span className="mt-2 block font-display text-[1.05rem] leading-none">
                      {formatDate(featured.date)}
                    </span>
                  </span>
                  <span className="block">
                    <span className="block text-[0.58rem] uppercase tracking-[0.16em] opacity-60">
                      Reading time
                    </span>
                    <span className="mt-2 block font-display text-[1.05rem] leading-none">
                      {featured.readingTime} minutes
                    </span>
                  </span>
                </span>
              </Link>

              <div className="order-2 md:order-1 md:pl-4">
                <p className="eyebrow">Latest article</p>
                <h2 className="mt-3 font-display text-[1.9rem] leading-tight md:text-[2.3rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.8] text-ink-soft">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-7 inline-flex items-center gap-2 border-b border-teal/30 pb-1 text-[0.82rem] font-medium text-teal-deep transition-colors hover:border-teal"
                >
                  Read the article <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          )}

          <PostFilter posts={rest} categories={postCategories} />
        </div>
      </section>

      <CtaBand
        title="Reading is a good start. A conversation is better."
        body="If an article has raised a question about your own situation, our team is happy to talk it through."
        primary={{ label: "Book a consultation", href: "/book" }}
      />
    </>
  );
}
