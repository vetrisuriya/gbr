import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, GraduationCap, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Stagger, StaggerItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { academics } from "@/data/academics";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Academics & Training Programmes",
  description:
    "ICOG fellowship in reproductive medicine, fellowship in reproductive medicine, embryologist and andrologist training programmes at GBR Fertility Centre, Chennai.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Academic Programmes at GBR Fertility Centre",
          hasPart: academics.map((a) => ({
            "@type": "EducationalOccupationalProgram",
            name: a.title,
            url: `${site.url}/academics/${a.slug}`,
          })),
        }}
      />

      <PageHero
        eyebrow="Academics"
        title="We train the doctors who will come after us."
        intro="GBR runs an ICOG-recognised fellowship, a reproductive medicine fellowship and dedicated embryology and andrology training. Better-trained clinicians make better fertility care for everyone — not just our own patients."
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
        highlights={[
          { label: "Programmes", value: "4 tracks" },
          { label: "Format", value: "Hands-on, small batch" },
          { label: "Location", value: "Chennai" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {academics.map((a) => (
              <StaggerItem key={a.slug} className="h-full">
                <Link
                  href={`/academics/${a.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white/55 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-soft md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-teal/10 text-teal-deep transition-colors group-hover:bg-teal group-hover:text-white">
                      <GraduationCap className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-ink-mute transition-all group-hover:-translate-y-0.5 group-hover:text-teal-deep" />
                  </div>
                  <h2 className="mt-5 font-display text-[1.5rem] leading-snug md:text-[1.7rem]">
                    {a.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
                    {a.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-4 text-[0.78rem] text-ink-mute">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-teal" /> {a.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="size-3.5 text-teal" /> Limited seats
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 grid gap-8 rounded-3xl border border-ink/10 bg-teal-night p-8 text-cream md:grid-cols-[1.4fr_1fr] md:items-center md:p-10">
            <div>
              <p className="eyebrow text-teal-bright">Apply</p>
              <h2 className="mt-3 font-display text-[1.9rem] leading-tight text-cream md:text-[2.3rem]">
                Academic registration is open.
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-cream/65">
                Submit your CV, degree certificates and references through the
                academic registration form. Shortlisted candidates are notified
                within four weeks and invited for an interview at the Chennai
                centre.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild variant="light" size="lg">
                <Link href="/academics/register">
                  Register your interest <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about a programme?"
        body="Tell us your background and which track interests you. Our academic office will reply with eligibility, dates and fees."
        primary={{ label: "Contact the academic office", href: "/contact" }}
      />
    </>
  );
}
