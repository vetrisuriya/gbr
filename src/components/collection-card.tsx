import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentPage } from "@/data/types";
import { ContentIcon } from "./content-icon";
import { cn } from "@/lib/cn";

export function CollectionCard({
  page,
  href,
  className,
}: {
  page: ContentPage;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/55 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:bg-white hover:shadow-soft",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-teal/10 text-teal-deep transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
          <ContentIcon name={page.icon} className="size-5" />
        </span>
        <ArrowUpRight className="size-4 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-deep" />
      </div>
      <h2 className="mt-6 font-display text-[1.3rem] leading-snug md:text-[1.45rem]">
        {page.title}
      </h2>
      <p className="mt-3 flex-1 text-[0.9rem] leading-[1.7] text-ink-soft">
        {page.summary}
      </p>
      {page.highlights && (
        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/10 pt-5">
          {page.highlights.slice(0, 2).map((h) => (
            <div key={h.label}>
              <dt className="text-[0.62rem] uppercase tracking-[0.11em] text-ink-mute">
                {h.label}
              </dt>
              <dd className="mt-1 text-[0.82rem] text-ink">{h.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </Link>
  );
}
