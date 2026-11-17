"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { PostCard } from "./post-card";
import { cn } from "@/lib/cn";
import type { Post } from "@/data/posts";

export function PostFilter({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCategory = active === "All" || p.category === active;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [posts, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.8rem] transition-colors",
                active === c
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/15 text-ink-soft hover:border-teal hover:text-teal-deep",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative block w-full md:w-72">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-mute" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="w-full rounded-full border border-ink/15 bg-cream py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-mute/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </label>
      </div>

      <p className="mt-6 text-[0.78rem] uppercase tracking-[0.12em] text-ink-mute">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-ink/10 bg-white/50 p-10 text-center">
          <p className="font-display text-xl">No articles match that search.</p>
          <p className="mt-2 text-sm text-ink-soft">
            Try a different term, or browse all categories.
          </p>
        </div>
      ) : (
        <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <PostCard post={post} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
