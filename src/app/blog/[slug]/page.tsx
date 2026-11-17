import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { formatDate, postBySlug, posts, type PostBlock } from "@/data/posts";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Fully prerendered from generateStaticParams, so blocking navigation is
// expected and there is no request-time data to stream.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-[1.6rem] leading-tight first:mt-0 md:text-[1.9rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display text-[1.3rem] leading-snug md:text-[1.45rem]">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-[1.02rem] leading-[1.8] text-ink-soft">
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-2 border-teal pl-5 font-display text-[1.2rem] leading-relaxed text-ink">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mt-4 grid gap-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-ink-soft"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suggestions = related.length > 0 ? related : fallback;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          url: `${site.url}/blog/${post.slug}`,
          articleSection: post.category,
          wordCount: post.words,
          publisher: {
            "@type": "MedicalClinic",
            name: "GBR Fertility Centre",
            url: site.url,
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.url },
              { "@type": "ListItem", position: 2, name: "Journal", item: `${site.url}/blog` },
              { "@type": "ListItem", position: 3, name: post.title },
            ],
          },
        }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-ink/8 bg-cream pt-10 pb-12 md:pt-14 md:pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-teal/[0.07] blur-[90px]"
          />
          <div className="container-x relative max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Journal", href: "/blog" },
                { label: post.category },
              ]}
            />
            <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.14em] text-ink-mute">
              <span className="rounded-full bg-teal/10 px-3 py-1 text-teal-deep">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3" /> {post.readingTime} min read
              </span>
            </p>
            <h1 className="mt-5 font-display text-[2.1rem] leading-[1.08] sm:text-[2.7rem] md:text-[3.2rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="py-14 md:py-20">
          <div className="container-x max-w-3xl">
            <div>
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-ink/10 bg-cream-deep/40 px-5 py-4 text-[0.8rem] leading-relaxed text-ink-mute">
              This article is general information and does not replace a
              consultation with a qualified medical practitioner. Fertility
              outcomes vary between individuals; your consultant will discuss what
              is realistic for you.
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-teal-deep"
              >
                <ArrowLeft className="size-4" /> All articles
              </Link>
              <Button asChild size="sm" className="h-10 px-5">
                <Link href="/book">
                  Book a consultation <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-ink/8 bg-cream-deep/40 py-20 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-[1.8rem] md:text-[2.2rem]">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p) => (
              <PostCard key={p.slug} post={p} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question the article did not answer?"
        body="Send it to our team, or bring it to a first consultation. No question is too small."
        primary={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
