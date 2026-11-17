import { specialities } from "@/data/specialities";
import { treatments } from "@/data/treatments";
import { conditions } from "@/data/conditions";

const all = [
  ...specialities.map((p) => ({ ...p, base: "/specialities" })),
  ...treatments.map((p) => ({ ...p, base: "/treatments" })),
  ...conditions.map((p) => ({ ...p, base: "/conditions" })),
];

export type ResolvedLink = { title: string; href: string; eyebrow: string };

export function findRelated(slugs: string[] | undefined): ResolvedLink[] {
  if (!slugs?.length) return [];
  return slugs.flatMap((slug) => {
    const hit = all.find((p) => p.slug === slug);
    if (!hit) return [];
    return [{ title: hit.title, href: `${hit.base}/${hit.slug}`, eyebrow: hit.eyebrow }];
  });
}

export function findContent(slug: string) {
  return all.find((p) => p.slug === slug);
}
