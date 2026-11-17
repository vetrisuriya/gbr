import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page has moved or no longer exists. Start from the homepage, or contact GBR Fertility Centre and we will point you the right way.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-teal/[0.08] blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-[26rem] rounded-full bg-pink/[0.07] blur-[100px]"
      />
      <div className="container-x relative">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-teal-deep">
          404 — Page not found
        </p>
        <h1 className="mt-6 max-w-2xl font-display text-[2.6rem] leading-[1.02] sm:text-[3.6rem] md:text-[4.4rem]">
          This page has wandered off.
        </h1>
        <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
          The link may be old, or the page may have moved. Everything else is
          still where you left it — start from the homepage, or tell us what you
          were looking for and we will point you the right way.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="size-4" /> Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Contact us <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Specialities", href: "/specialities", body: "Eight clinical programmes" },
            { label: "Treatments", href: "/treatments", body: "IUI to IVF and surgery" },
            { label: "Conditions", href: "/conditions", body: "Diagnosis and care" },
            { label: "Journal", href: "/blog", body: "Evidence-based reading" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl border border-ink/10 bg-white/50 p-5 transition-colors hover:border-teal/40 hover:bg-white"
            >
              <span className="flex items-center justify-between font-display text-[1.1rem]">
                {l.label}
                <ArrowUpRight className="size-3.5 text-ink-mute group-hover:text-teal-deep" />
              </span>
              <span className="mt-1 block text-[0.8rem] text-ink-soft">
                {l.body}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
