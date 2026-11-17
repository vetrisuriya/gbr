import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Eye,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ParallaxMedia } from "@/components/parallax-media";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { site, doctors } from "@/data/site";

export const metadata: Metadata = {
  title: "About GBR Fertility Centre",
  description:
    "Creating happy families since 2005. Learn about GBR Fertility Centre's mission, values, accreditations and the team behind Chennai's leading fertility hospital.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Heart,
    title: "Patient-centric care",
    body: "Individualised treatment with emotional support at every step — because the waiting is part of the medicine.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical practice",
    body: "Adherence to Indian reproductive law, including the ART (Regulation) Act, 2021, without exception.",
  },
  {
    icon: Target,
    title: "Evidence-based protocols",
    body: "Proven outcomes built on protocols that are reviewed, audited and revised when the evidence changes.",
  },
  {
    icon: Sparkles,
    title: "Affordable access",
    body: "Transparent costs, written estimates and flexible financing so advanced care is not out of reach.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    body: "To provide world-class fertility care at an affordable cost through state-of-the-art facilities, accessible to couples across India and beyond.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "To be the fertility centre families recommend to the people they love — known for honesty as much as for outcomes.",
  },
  {
    icon: Heart,
    title: "Values",
    body: "Compassion, confidentiality, ethical practice and respect for every family's definition of parenthood.",
  },
];

const achievements = [
  "First Russian national IVF baby born in Chennai, Tamil Nadu",
  "First Russian national IVF twins born in Chennai, Tamil Nadu",
  "Patients treated from 15 countries",
  "ISAR accreditation",
  "ISO 9001:2015 certified",
  "NABH entry-level accreditation",
  "All India Top Standalone IVF Clinics — Times of India Best Hospital Survey, 10 years running (2014–2024)",
  "Times Healthcare Achievers Award",
  "Best IVF Clinic (South) — Economic Times National Fertility Conclave, New Delhi",
  "YouTube 1 million viewers award",
  "WhatClinic.com Best Customer Care Award",
  "World's Greatest Brands & Leaders Award, Dubai",
  "ICOG Post Doctoral Fellowship",
];

const stats = [
  { value: "20+", label: "Years of care" },
  { value: "1 lakh+", label: "Patients treated" },
  { value: "10k+", label: "Babies born" },
  { value: "15", label: "Countries served" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About GBR Fertility Centre",
          url: `${site.url}/about`,
          mainEntity: {
            "@type": "MedicalClinic",
            name: site.name,
            foundingDate: "2005",
            telephone: site.phone,
            description: site.description,
          },
        }}
      />

      <PageHero
        eyebrow="About GBR"
        title="Creating happy families since 2005."
        intro="GBR Fertility Centre is a premier destination for advanced reproductive care — cutting-edge fertility solutions delivered with compassion, honesty and a respect for the individual story behind every file."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        highlights={[
          { label: "Established", value: "2005" },
          { label: "Centres", value: "Chennai, Thirupattur, Nellore" },
          { label: "Accreditation", value: "ISAR · ISO · NABH" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="space-y-5 text-[1.02rem] leading-[1.78] text-ink-soft">
              <p>
                GBR began with a simple conviction: that advanced fertility care
                should be explained clearly, delivered ethically and made
                accessible to the families who need it most. Two decades later,
                that conviction still shapes how we work.
              </p>
              <p>
                With state-of-the-art facilities and a team of highly skilled
                fertility specialists, embryologists and andrologists, we build
                personalised treatment plans around each patient&rsquo;s unique
                needs. Our services include IVF, ICSI, IUI, fertility
                preservation, genetic testing, donor programmes and surrogacy,
                supported by technology such as laser-assisted hatching and CASA
                for semen analysis.
              </p>
              <p>
                With centres in Chennai, Thirupattur and Nellore, we are
                committed to making world-class fertility care accessible —
                whether the concern is PCOS, endometriosis, male infertility,
                recurrent pregnancy loss or age-related fertility.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10 bg-cream-deep">
                <ParallaxMedia
                  src="/brand/family.jpg"
                  alt="A family holding their baby after fertility treatment at GBR"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/12 pt-4">
                <span className="font-display text-[1.05rem] text-ink">
                  Since 2005
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.13em] text-ink-mute">
                  Creating happy families
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-cream-deep/60 py-12">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <p className="font-display text-[2.2rem] leading-none text-ink md:text-[2.8rem]">
                  {s.value}
                </p>
                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.12em] text-ink-mute">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="What guides us"
              title="Mission, vision and the values in between."
              align="center"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white/55 p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-teal/10 text-teal-deep">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.35rem]">{v.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink/10 p-6">
                  <p.icon className="size-4 text-teal-deep" />
                  <h3 className="mt-4 font-display text-[1.1rem]">{p.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-teal-night py-16 text-cream md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Recognition"
              title="Achievements, accreditations and the work behind them."
              intro="Recognition matters less than the families it represents. Still, we are proud of what the team has built — and of the standards we are held to."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 border-b border-cream/10 pb-3 text-[0.88rem] leading-relaxed text-cream/70"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-teal-bright" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="The people behind GBR."
              intro="Clinical leadership, laboratory science and patient care working as one team across three centres."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {doctors.map((d) => (
              <Reveal key={d.slug}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white/55 p-7">
                  <div className="flex items-center gap-4">
                    {d.photo ? (
                      <Image
                        src={d.photo}
                        alt={d.name}
                        width={96}
                        height={96}
                        className="size-20 rounded-2xl object-cover"
                      />
                    ) : (
                      <span className="grid size-20 place-items-center rounded-2xl bg-teal/10 font-display text-2xl text-teal-deep">
                        {d.name
                          .split(" ")
                          .slice(-1)
                          .join("")
                          .slice(0, 2)}
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-[1.35rem]">{d.name}</h3>
                      <p className="mt-0.5 text-[0.8rem] text-teal-deep">{d.role}</p>
                      <p className="mt-1 text-[0.78rem] text-ink-mute">
                        {d.qualification}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-[0.9rem] leading-relaxed text-ink-soft">
                    {d.bio[0]}
                  </p>
                  <Link
                    href="/doctors"
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-teal-deep"
                  >
                    Meet the team <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Twenty years of care, one family at a time."
        body="If you are starting out, or starting again after a difficult chapter, we would like to hear your story."
        primary={{ label: "Book a consultation", href: "/book" }}
      />
    </>
  );
}
