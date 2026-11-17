import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs, Pill } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { centres, centreBySlug } from "@/data/centres";

export function generateStaticParams() {
  return centres.map((c) => ({ slug: c.slug }));
}

// Fully prerendered from generateStaticParams, so blocking navigation is
// expected and there is no request-time data to stream.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/centres/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const centre = centreBySlug(slug);
  if (!centre) return { title: "Centre not found" };

  return {
    title: `${centre.title} — Address, Timings & Directions`,
    description: centre.summary,
    alternates: { canonical: `/centres/${centre.slug}` },
    openGraph: {
      title: `${centre.title} | GBR Fertility Centre`,
      description: centre.summary,
    },
  };
}

export default async function CentrePage({
  params,
}: PageProps<"/centres/[slug]">) {
  const { slug } = await params;
  const centre = centreBySlug(slug);
  if (!centre) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: centre.title,
          description: centre.summary,
          url: `${site.url}/centres/${centre.slug}`,
          telephone: centre.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: centre.address.join(", "),
            addressLocality: centre.city,
            addressCountry: "IN",
          },
          openingHoursSpecification: centre.timings.map((t) => ({
            "@type": "OpeningHoursSpecification",
            description: `${t.day}: ${t.time}`,
          })),
        }}
      />

      <section className="relative overflow-hidden border-b border-ink/8 bg-cream pt-10 pb-14 md:pt-14 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-teal/[0.07] blur-[90px]"
        />
        <div className="container-x relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Centres", href: "/centres" },
              { label: centre.city },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Pill>{centre.city}</Pill>
              <h1 className="mt-5 max-w-3xl font-display text-[2.3rem] leading-[1.04] sm:text-[3rem] md:text-[3.6rem]">
                {centre.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
                {centre.summary}
              </p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white/60 p-6">
              <div className="flex flex-wrap gap-2.5">
                <Button asChild variant="accent">
                  <Link href="/book">
                    <CalendarCheck className="size-4" /> Book at {centre.city}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={centre.phoneHref}>
                    <Phone className="size-4" /> Call
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-mute">
                Appointments are confirmed by phone within one working day. For
                urgent concerns, call {site.phone} directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <div className="space-y-5 text-[1.02rem] leading-[1.75] text-ink-soft">
              {centre.intro.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-[1.7rem] md:text-[2rem]">
              Facilities & services
            </h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {centre.facilities.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white/50 px-4 py-3 text-[0.9rem] leading-relaxed text-ink-soft"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  {f}
                </li>
              ))}
            </ul>

            {centre.directions && (
              <>
                <h2 className="mt-12 font-display text-[1.7rem] md:text-[2rem]">
                  Getting here
                </h2>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
                  {centre.directions}
                </p>
              </>
            )}

            {centre.mapUrl && (
              <Button asChild variant="outline" className="mt-6">
                <a
                  href={centre.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MapPin className="size-4 text-teal" /> Open in Google Maps
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-3xl border border-ink/10 bg-cream-deep/50 p-6">
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  Address
                </h2>
                <address className="mt-3 text-[0.95rem] not-italic leading-relaxed text-ink">
                  {centre.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <h2 className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  Timings
                </h2>
                <div className="mt-3 space-y-1.5">
                  {centre.timings.map((t) => (
                    <div
                      key={t.day}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-1.5 text-[0.9rem]"
                    >
                      <span className="text-ink-soft">{t.day}</span>
                      <span className="text-ink">{t.time}</span>
                    </div>
                  ))}
                </div>

                <h2 className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  Contact
                </h2>
                <div className="mt-3 space-y-2 text-[0.9rem]">
                  <a
                    href={centre.phoneHref}
                    className="flex items-center gap-2 text-ink transition-colors hover:text-teal-deep"
                  >
                    <Phone className="size-3.5 text-teal" /> {centre.phone}
                  </a>
                  <a
                    href={site.emailHref}
                    className="flex items-center gap-2 text-ink transition-colors hover:text-teal-deep"
                  >
                    <Mail className="size-3.5 text-teal" />
                    {site.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="mt-4 rounded-3xl border border-ink/10 p-6">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Other centres
              </h3>
              <ul className="mt-3 space-y-2 text-[0.9rem]">
                {centres
                  .filter((c) => c.slug !== centre.slug)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/centres/${c.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-cream-deep/60"
                      >
                        {c.city}
                        <ArrowUpRight className="size-3.5 text-ink-mute" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`Planning a visit to ${centre.city}?`}
        body="Tell us where you are travelling from and what you need. We will plan your investigations around as few visits as possible."
        primary={{ label: "Book a consultation", href: "/book" }}
      />
    </>
  );
}
