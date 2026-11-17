import type { MetadataRoute } from "next";
import { specialities } from "@/data/specialities";
import { treatments } from "@/data/treatments";
import { conditions } from "@/data/conditions";
import { centres } from "@/data/centres";
import { academics } from "@/data/academics";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

const base = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/specialities`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/treatments`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/conditions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/centres`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/doctors`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/academics`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/academics/register`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/book`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes,
    ...specialities.map((s) => ({
      url: `${base}/specialities/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...treatments.map((t) => ({
      url: `${base}/treatments/${t.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...conditions.map((c) => ({
      url: `${base}/conditions/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...centres.map((c) => ({
      url: `${base}/centres/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...academics.map((a) => ({
      url: `${base}/academics/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
