import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Languages, Phone, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site, doctors } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the fertility specialists at GBR Fertility Centre — led by Dr G Buvaneswari, with over 20 years of reproductive medicine experience across Chennai, Thirupattur and Nellore.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "GBR Fertility Centre Doctors",
          hasPart: doctors.map((d) => ({
            "@type": "Physician",
            name: d.name,
            medicalSpecialty: "ReproductiveMedicine",
          })),
        }}
      />

      <PageHero
        eyebrow="Our team"
        title="The specialists who will know your name."
        intro="Fertility care is too personal for a rotating cast. Your consultant follows your case from the first scan to the pregnancy test, supported by embryologists, andrologists, counsellors and nurses who work as one team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
        highlights={[
          { label: "Experience", value: "20+ years" },
          { label: "Languages", value: "English, Tamil, Telugu, Hindi" },
          { label: "Centres", value: "3 cities" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x space-y-8">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05}>
              <article className="group grid gap-8 rounded-3xl border border-ink/10 bg-white/55 p-7 md:grid-cols-[0.5fr_1.5fr] md:p-10">
                <div>
                  {d.photo ? (
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10">
                      <Image
                        src={d.photo}
                        alt={d.name}
                        fill
                        sizes="(max-width: 768px) 90vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl border border-ink/10 bg-cream-deep/60">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full border border-teal/10"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full bg-pink/[0.06] blur-2xl"
                      />
                      <span className="relative grid size-24 place-items-center rounded-full border border-teal/20 bg-cream/70 font-display text-[1.7rem] text-teal-deep/70">
                        {d.name.split(" ").slice(-1)[0].slice(0, 1)}
                      </span>
                    </div>
                  )}
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center gap-2 text-[0.78rem] text-ink-mute">
                      <Languages className="size-3.5 text-teal" />
                      {d.languages.join(" · ")}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-[2rem] leading-tight md:text-[2.4rem]">
                    {d.name}
                  </h2>
                  <p className="mt-1.5 text-[0.92rem] text-teal-deep">{d.role}</p>
                  <p className="mt-1 text-[0.85rem] text-ink-mute">
                    {d.qualification}
                  </p>
                  <p className="mt-1 text-[0.85rem] text-ink-soft">
                    {d.speciality}
                  </p>

                  <div className="mt-6 space-y-4 text-[0.96rem] leading-[1.75] text-ink-soft">
                    {d.bio.map((para) => (
                      <p key={para.slice(0, 30)}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                        <Stethoscope className="size-3.5 text-teal" /> Expertise
                      </p>
                      <ul className="mt-3 space-y-2">
                        {d.expertise.map((e) => (
                          <li
                            key={e}
                            className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink-soft"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {d.memberships.length > 0 && (
                      <div>
                        <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                          <Award className="size-3.5 text-pink" /> Memberships
                        </p>
                        <ul className="mt-3 space-y-2">
                          {d.memberships.map((m) => (
                            <li
                              key={m}
                              className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink-soft"
                            >
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/book">
                        Book a consultation <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={site.phoneHref}>
                        <Phone className="size-4" /> {site.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <div className="rounded-3xl border border-ink/10 bg-cream-deep/50 p-7 md:p-9">
            <div className="grid gap-6 md:grid-cols-[1fr_1.6fr] md:items-center">
              <div>
                <p className="eyebrow">The wider team</p>
                <h2 className="mt-3 font-display text-2xl leading-snug">
                  Behind every consultant is a full laboratory and nursing team.
                </h2>
              </div>
              <p className="text-[0.92rem] leading-relaxed text-ink-soft">
                Embryologists, andrologists, fertility counsellors, nurses and
                patient-care coordinators work alongside our consultants. You will
                meet many of them by name during treatment — and they will know
                yours. If you would like to speak with a particular specialist,
                tell our team when you book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Would you like to consult Dr Buvaneswari?"
        body="First consultations are available across Chennai, Thirupattur and Nellore, with both partners welcome."
        primary={{ label: "Request an appointment", href: "/book" }}
      />
    </>
  );
}
