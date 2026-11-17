import type { ReactNode } from "react";
import { Breadcrumbs, Pill } from "./ui";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  highlights,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: { label: string; href?: string }[];
  highlights?: { label: string; value: string }[];
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-cream pb-16 pt-12 md:pb-24 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-teal/[0.07] blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 size-[26rem] rounded-full bg-pink/[0.06] blur-[90px]"
      />
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} />
        <div
          className={cn(
            "mt-10 md:mt-12",
            align === "center" && "mx-auto max-w-3xl text-center",
          )}
        >
          <Pill>{eyebrow}</Pill>
          <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.2rem] md:text-[4rem]">
            {title}
          </h1>
          {intro && (
            <p className="mt-7 max-w-2xl text-[1.02rem] leading-[1.75] text-ink-soft">
              {intro}
            </p>
          )}
          {highlights && (
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.label} className="border-l border-ink/12 pl-5">
                  <dt className="text-[0.68rem] uppercase tracking-[0.13em] text-ink-mute">
                    {h.label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.15rem] text-ink">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
