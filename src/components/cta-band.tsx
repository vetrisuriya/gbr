import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./ui/button";

export function CtaBand({
  title = "Let's talk about where you are.",
  body = "A first consultation is a conversation, not a commitment. Bring your questions, your reports and your partner — we will take it from there.",
  primary = { label: "Book a consultation", href: "/book" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-20 text-cream md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-[30rem] rounded-full bg-teal/30 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 size-[26rem] rounded-full bg-pink/20 blur-[100px]"
      />
      <div className="grain container-x relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-teal-bright">
            <span aria-hidden className="h-px w-6 bg-teal-bright/50" />
            Next step
          </p>
          <h2 className="mt-4 font-display text-[2.1rem] leading-[1.05] text-cream sm:text-[2.7rem] md:text-[3.1rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.75] text-cream/70">
            {body}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Button asChild size="lg" variant="light">
            <Link href={primary.href}>
              {primary.label} <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outlineLight"
            className="backdrop-blur-sm"
          >
            <a href={site.phoneHref}>
              <Phone className="size-4" /> {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
