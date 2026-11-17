import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Phone, Stethoscope } from "lucide-react";
import type { ContentPage } from "@/data/types";
import { site } from "@/data/site";
import { findRelated } from "@/lib/content";
import { PageHero } from "./page-hero";
import { CtaBand } from "./cta-band";
import { FaqAccordion } from "./faq-accordion";
import { JsonLd } from "./jsonld";
import { Reveal } from "./reveal";
import { Breadcrumbs } from "./ui";
import { Button } from "./ui/button";

export function ContentDetail({
  page,
  base,
  parentLabel,
}: {
  page: ContentPage;
  base: string;
  parentLabel: string;
}) {
  const related = findRelated(page.related);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: page.title,
            description: page.summary,
            url: `${site.url}${base}/${page.slug}`,
            lastReviewed: "2026-11-01",
            about: { "@type": "MedicalTherapy", name: page.title },
            publisher: { "@type": "MedicalClinic", name: site.name },
          },
          ...(page.faqs?.length
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: page.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                },
              ]
            : []),
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.url },
              { "@type": "ListItem", position: 2, name: parentLabel, item: `${site.url}${base}` },
              { "@type": "ListItem", position: 3, name: page.title },
            ],
          },
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: parentLabel, href: base },
          { label: page.shortTitle ?? page.title },
        ]}
        highlights={page.highlights}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div>
            <div className="space-y-6 text-[1.02rem] leading-[1.8] text-ink-soft">
              {page.intro.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
            </div>

            <div className="mt-16 space-y-14">
              {page.sections.map((section, i) => (
                <Reveal key={section.title} delay={0}>
                  <article>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.7rem] text-teal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-[1.6rem] leading-tight md:text-[2rem]">
                        {section.title}
                      </h2>
                    </div>
                    {section.body && (
                      <p className="mt-4 text-[0.98rem] leading-[1.8] text-ink-soft">
                        {section.body}
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="mt-5 grid gap-3">
                        {section.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft"
                          >
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="mt-5 rounded-2xl border border-teal/20 bg-teal/[0.06] px-5 py-4 text-[0.85rem] leading-relaxed text-teal-deep">
                        {section.note}
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            {page.faqs?.length ? (
              <div className="mt-20">
                <h2 className="font-display text-[1.8rem]">
                  Questions we hear often
                </h2>
                <FaqAccordion
                  faqs={page.faqs}
                  className="mt-7"
                  defaultOpen={null}
                />
              </div>
            ) : null}

            <p className="mt-10 border-t border-ink/10 pt-6 text-[0.78rem] leading-relaxed text-ink-mute">
              Reviewed by the clinical team at {site.name}. This page is general
              information, not a substitute for a consultation. Individual
              outcomes vary — your consultant will discuss what is realistic for
              you.
            </p>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-7">
              <span className="grid size-10 place-items-center rounded-full bg-teal/10 text-teal-deep">
                <Stethoscope className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-[1.35rem] leading-snug">
                Speak to a fertility specialist
              </h2>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-ink-soft">
                A first consultation includes both partners, a review of your
                history and a written plan.
              </p>
              <Button asChild className="mt-6 w-full">
                <Link href="/book">
                  <CalendarCheck className="size-4" /> Book a consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="mt-2.5 w-full">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> {site.phone}
                </a>
              </Button>
              <p className="mt-5 text-[0.72rem] leading-relaxed text-ink-mute">
                Mon–Sat 9am–7pm · Sun 9am–1pm
              </p>
            </div>

            {related.length > 0 && (
              <div className="mt-4 rounded-2xl border border-ink/10 bg-cream-deep/50 p-7">
                <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  Related reading
                </h3>
                <ul className="mt-4 space-y-1">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="group flex items-start justify-between gap-3 rounded-xl px-2 py-2.5 text-[0.9rem] text-ink transition-colors hover:bg-cream"
                      >
                        <span>
                          <span className="block text-[0.64rem] uppercase tracking-[0.12em] text-teal-deep">
                            {r.eyebrow}
                          </span>
                          {r.title}
                        </span>
                        <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-ink-mute transition-transform group-hover:-translate-y-0.5 group-hover:text-teal-deep" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 rounded-2xl border border-ink/10 p-7">
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Our centres
              </h3>
              <ul className="mt-4 space-y-2.5 text-[0.88rem]">
                <li>
                  <Link href="/centres/chennai" className="hover:text-teal-deep">
                    Chennai — Mugappair West
                  </Link>
                </li>
                <li>
                  <Link href="/centres/thirupattur" className="hover:text-teal-deep">
                    Thirupattur
                  </Link>
                </li>
                <li>
                  <Link href="/centres/nellore" className="hover:text-teal-deep">
                    Nellore
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-cream-deep/40 py-8">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: parentLabel, href: base },
              { label: page.shortTitle ?? page.title },
            ]}
          />
        </div>
      </section>

      <CtaBand
        title="You do not need to have it all figured out."
        body="Come with your questions, your reports and your partner. We will start where you are."
      />
    </>
  );
}
