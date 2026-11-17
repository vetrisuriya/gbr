import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Post } from "@/data/posts";
import { cn } from "@/lib/cn";

const accents: Record<string, string> = {
  IVF: "from-teal/20 to-teal/[0.03] text-teal-deep",
  IUI: "from-gold/28 to-gold/[0.04] text-[#8a5a22]",
  "Male Fertility": "from-teal-night/14 to-teal-night/[0.02] text-teal-night",
  PCOS: "from-pink/20 to-pink/[0.03] text-[#a83363]",
  Wellbeing: "from-[#c8d8a8]/45 to-[#c8d8a8]/8 text-[#4c6132]",
  Pregnancy: "from-pink-soft to-cream text-[#a83363]",
  Conditions: "from-sand to-cream-deep text-[#7a5a3a]",
  Diagnostics: "from-teal/16 to-cream text-teal-deep",
  Clinic: "from-cream-deep to-cream text-ink-soft",
};

export const postAccent = (category: string) =>
  accents[category] ?? accents.Clinic;

export function PostCard({
  post,
  className,
  featured = false,
}: {
  post: Post;
  className?: string;
  featured?: boolean;
}) {
  const accent = postAccent(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-lift",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex items-end overflow-hidden bg-gradient-to-br p-7",
          accent,
          featured ? "min-h-52" : "min-h-36",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full border border-current opacity-15 transition-transform duration-500 group-hover:scale-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-4 size-24 rounded-full border border-current opacity-10 transition-transform duration-500 group-hover:scale-125"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-current opacity-10"
        />
        <span className="relative text-[0.66rem] font-semibold uppercase tracking-[0.16em]">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-mute">
          {formatDate(post.date)} · {post.readingTime} min read
        </p>
        <h3
          className={cn(
            "mt-3 font-display leading-[1.15] text-ink",
            featured ? "text-[1.55rem] md:text-[1.85rem]" : "text-[1.22rem]",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-[0.88rem] leading-[1.7] text-ink-soft">
          {post.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-teal-deep">
          Read article
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
