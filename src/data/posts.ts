import raw from "./posts.json";

export type PostBlock =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: number;
  words: number;
  excerpt: string;
  body: PostBlock[];
};

export const posts = raw as Post[];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postCategories = Array.from(
  new Set(posts.map((p) => p.category)),
).sort();

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
