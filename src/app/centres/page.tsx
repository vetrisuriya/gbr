import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { centres } from "@/data/centres";

export const metadata: Metadata = {
  title: "Our Centres",
  description:
    "GBR Fertility Centre has three locations — Chennai, Thirupattur and Nellore — offering consultations, scans and fertility treatment close to home.",
  alternates: { canonical: "/centres" },
};

export default function CentresPage() {
  return (
    <>
      <PageHero
        eyebrow="Our centres"
        title="Three cities. One standard of care."
        intro="Consultations close to home, with the full laboratory and surgical team a short journey away when you need them. The same consultants, the same records and the same protocols at every location."
        crumbs={[{ label: "Home", href: "/" }, { label: "Centres" }]}
        highlights={[
          { label: "Chennai", value: "Flagship & IVF lab" },
          { label: "Thirupattur", value: "District clinic" },
          { label: "Nellore", value: "Andhra Pradesh" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x space-y-8">
          {centres.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <article className="grid gap-8 rounded-3xl border border-ink/10 bg-white/55 p-7 md:grid-cols-[1.3fr_1fr] md:p-10">
                <div>
                  <p className="eyebrow">
                    {i === 0 ? "Flagship centre" : "Regional centre"}
                  </p>
                  <h2 className="mt-3 font-display text-[2rem] leading-tight md:text-[2.4rem]">
                    {c.city}
                  </h2>
                  <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">
                    {c.summary}
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                        <MapPin className="size-3.5 text-teal" /> Address
                      </p>
                      <address className="mt-2 text-[0.88rem] not-italic leading-relaxed text-ink-soft">
                        {c.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                        <Clock className="size-3.5 text-teal" /> Timings
                      </p>
                      <div className="mt-2 space-y-1 text-[0.88rem] leading-relaxed text-ink-soft">
                        {c.timings.map((t) => (
                          <p key={t.day}>
                            {t.day} · {t.time}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    <Button asChild size="sm" className="h-10 px-5 text-[0.82rem]">
                      <Link href={`/centres/${c.slug}`}>
                        Centre details <ArrowUpRight className="size-3.5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="h-10 px-5 text-[0.82rem]"
                    >
                      <a href={c.phoneHref}>
                        <Phone className="size-3.5 text-teal" /> {c.phone}
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-ink/10 bg-cream-deep/50 p-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                    What you will find here
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {c.facilities.slice(0, 5).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which centre is closest to you?"
        body="Tell us where you are travelling from and we will suggest the centre that saves you the most journeys, with the full team reachable when needed."
        primary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
