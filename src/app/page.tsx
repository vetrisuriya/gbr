import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  MapPin,
  Phone,
} from "lucide-react";
import { FertilityJourney } from "@/components/fertility-journey";
import { ParallaxMedia } from "@/components/parallax-media";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading, Btn, Pill } from "@/components/ui";
import { Card } from "@/components/ui/card";
import { ContentIcon } from "@/components/content-icon";
import { Testimonials } from "@/components/testimonials";
import { FaqAccordion } from "@/components/faq-accordion";
import { PostCard } from "@/components/post-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { doctors, site, trustPoints } from "@/data/site";
import { specialities } from "@/data/specialities";
import { treatments } from "@/data/treatments";
import { conditions } from "@/data/conditions";
import { centres } from "@/data/centres";
import { academics } from "@/data/academics";
import { generalFaqs } from "@/data/faqs";
import { posts } from "@/data/posts";

const marquee = [
  "IVF",
  "ICSI",
  "IUI",
  "Frozen embryo transfer",
  "PGT",
  "Egg freezing",
  "Laparoscopy",
  "Hysteroscopy",
  "Fertility preservation",
  "Donor programmes",
  "PCOS care",
  "Male infertility",
];

const approach = [
  {
    n: "01",
    title: "We listen first",
    body: "A 45-minute first consultation, both partners in the room, and a history taken properly before a single test is ordered.",
  },
  {
    n: "02",
    title: "We investigate precisely",
    body: "Only the tests that will change your plan. Most couples complete their workup within two to three weeks.",
  },
  {
    n: "03",
    title: "We explain the odds",
    body: "Your realistic chance of success with each option, in writing, including the option of waiting or stopping.",
  },
  {
    n: "04",
    title: "We stay through it",
    body: "The same consultant from first scan to pregnancy test — and an obstetric team that already knows your history.",
  },
];

export default function HomePage() {
  const doctor = doctors[0];
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: site.name,
            description: site.description,
            url: site.url,
            telephone: site.phone,
            email: site.email,
            image: `${site.url}/brand/family.jpg`,
            medicalSpecialty: "ReproductiveMedicine",
            address: {
              "@type": "PostalAddress",
              streetAddress: `${site.address.line1}, ${site.address.line2}`,
              addressLocality: site.address.city,
              addressRegion: site.address.state,
              postalCode: site.address.pin,
              addressCountry: "IN",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "09:00",
                closes: "13:00",
              },
            ],
            sameAs: site.socials.map((s) => s.href),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: generalFaqs.slice(0, 6).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-56 -top-56 size-[46rem] rounded-full bg-teal/[0.08] blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-40 size-[28rem] rounded-full bg-pink/[0.07] blur-[100px]"
        />

        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden className="h-px w-7 bg-teal/50" />
                Chennai · Thirupattur · Nellore
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-7 font-display text-[3rem] leading-[0.96] tracking-[-0.025em] sm:text-[4.2rem] md:text-[4.9rem]">
                Where hope
                <br />
                becomes a{" "}
                <span className="relative inline-block italic text-teal-deep">
                  heartbeat
                  <svg
                    aria-hidden
                    viewBox="0 0 220 14"
                    className="absolute -bottom-2 left-0 w-full text-pink/70"
                    fill="none"
                  >
                    <path
                      d="M2 9C48 3 96 12 140 6C172 2 198 6 218 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-9 max-w-xl text-[1.05rem] leading-[1.75] text-ink-soft">
                GBR is a fertility centre built around one idea: that the path to
                parenthood should be explained clearly, planned honestly, and
                walked together. Twenty years of reproductive medicine, one team,
                three centres.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Btn href="/book">
                  Book a consultation <ArrowRight className="size-4" />
                </Btn>
                <Btn href="/specialities" variant="secondary">
                  Explore our care
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-ink/12 pt-7">
                {site.stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-display text-[1.75rem] leading-none text-ink md:text-[2rem]">
                        {s.value}
                      </span>
                      <span className="mt-2 block text-[0.62rem] uppercase tracking-[0.09em] text-ink-mute sm:text-[0.7rem] sm:tracking-[0.12em]">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={32}>
            <figure className="relative mx-auto w-full max-w-[29rem]">
              <div
                aria-hidden
                className="absolute -inset-px -z-10 rounded-[13rem_13rem_2rem_2rem] bg-gradient-to-b from-teal/25 via-transparent to-pink/15"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[13rem_13rem_2rem_2rem] bg-cream-deep">
                <ParallaxMedia
                  src="/brand/family.jpg"
                  alt="Parents holding their baby after fertility treatment at GBR Fertility Centre"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                  className="absolute inset-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-night/30 via-transparent to-transparent" />
              </div>

              <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-ink/12 pt-4 text-[0.7rem] uppercase tracking-[0.13em] text-ink-mute">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-3 text-teal" />
                  Mugappair West, Chennai
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award className="size-3 text-pink" />
                  Good Doctor Award
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- MARQUEE */}
      <div className="relative overflow-hidden border-y border-ink/8 bg-cream-deep/70 py-5">
        <div className="mask-fade-x flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center gap-10"
              aria-hidden={dup === 1}
            >
              {marquee.map((m) => (
                <span
                  key={`${dup}-${m}`}
                  className="flex items-center gap-10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-mute"
                >
                  {m}
                  <span className="size-1 rounded-full bg-teal/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- JOURNEY */}
      <FertilityJourney />

      {/* ------------------------------------------------------------ APPROACH */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <Reveal>
              <SectionHeading
                eyebrow="The GBR approach"
                title={
                  <>
                    Fertility care that treats
                    <br className="hidden md:block" /> the whole story.
                  </>
                }
                intro="Investigations can find a cause. They cannot find what it feels like to wait. Our process is built to do both — clear medicine, delivered without hurry."
              />
              <div className="mt-9">
                <Btn href="/about" variant="secondary">
                  About the clinic <ArrowUpRight className="size-4" />
                </Btn>
              </div>
            </Reveal>

            <Stagger className="grid gap-x-12 gap-y-11 sm:grid-cols-2">
              {approach.map((step) => (
                <StaggerItem key={step.n}>
                  <div className="group border-t border-ink/12 pt-6">
                    <span className="font-mono text-[0.7rem] tracking-[0.22em] text-teal-deep">
                      {step.n}
                    </span>
                    <h3 className="mt-3 font-display text-[1.4rem] leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.06} className="h-full">
                <Card className="group h-full gap-0 border-ink/8 bg-white/55 py-0 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:bg-white/90 hover:shadow-soft">
                  <span className="grid size-9 place-items-center rounded-full bg-teal/10 text-teal-deep transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <Check className="size-4" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-[1.7] text-ink-soft">
                    {point.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- SPECIALITIES */}
      <section className="border-y border-ink/8 bg-cream-deep/60 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Specialities"
                title="Care organised around what you need."
                intro="Eight clinical programmes, one team. Every speciality shares the same laboratory, the same records and the same consultant group."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Btn href="/specialities" variant="secondary">
                All specialities <ArrowRight className="size-4" />
              </Btn>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialities.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Card className="group h-full gap-0 border-ink/8 bg-cream py-0 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-soft">
                  <Link
                    href={`/specialities/${s.slug}`}
                    className="flex h-full flex-col p-7"
                  >
                    <span className="grid size-11 place-items-center rounded-2xl bg-teal/10 text-teal-deep transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <ContentIcon name={s.icon} className="size-5" />
                    </span>
                    <h3 className="mt-6 font-display text-[1.18rem] leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[0.84rem] leading-[1.7] text-ink-soft">
                      {s.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-teal-deep">
                      Learn more
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------------------------------------------------------------- DOCTOR */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <Reveal>
            <figure className="relative mx-auto max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-deep">
                <ParallaxMedia
                  src={doctor.photo ?? "/brand/dr-buvaneswari.jpg"}
                  alt={doctor.name}
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  imageClassName="object-top"
                  className="absolute inset-0"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/12 pt-4">
                <span className="font-display text-[1.05rem] text-ink">
                  {doctor.name}
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.13em] text-ink-mute">
                  Clinical lead
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <Pill tone="pink">Meet your consultant</Pill>
            <h2 className="mt-6 font-display text-[2.2rem] leading-[1.04] sm:text-[2.8rem] md:text-[3.2rem]">
              {doctor.name}
            </h2>
            <p className="mt-4 text-[0.88rem] leading-relaxed text-ink-mute">
              {doctor.qualification}
            </p>
            <p className="mt-1.5 text-[0.9rem] text-teal-deep">
              {doctor.speciality}
            </p>

            <div className="mt-7 space-y-4 text-[0.98rem] leading-[1.75] text-ink-soft">
              {doctor.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 border-t border-ink/10 pt-6">
              {doctor.memberships.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 text-[0.88rem] leading-relaxed text-ink-soft"
                >
                  <Award className="mt-0.5 size-4 shrink-0 text-pink" />
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/doctors">Meet the team</Btn>
              <Btn href="/book" variant="secondary">
                Book with Dr Buvaneswari
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- TREATMENTS */}
      <section className="border-y border-ink/8 bg-teal-night py-24 text-cream md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Treatments"
              title="From a single scan to a full IVF cycle."
              intro="Treatment is a ladder, not a leap. We start at the least invasive rung that can work for you, and only climb when the evidence says we should."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/treatments" variant="light">
                All treatments <ArrowUpRight className="size-4" />
              </Btn>
              <Btn href="/book" variant="ghost" className="text-cream hover:bg-white/5 hover:text-teal-bright">
                Not sure where you fit?
              </Btn>
            </div>
          </Reveal>

          <Stagger className="divide-y divide-cream/10 border-y border-cream/10">
            {treatments.slice(0, 7).map((t, i) => (
              <StaggerItem key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-6"
                >
                  <span className="mt-1.5 font-mono text-[0.7rem] text-cream/30 transition-colors group-hover:text-teal-bright/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-[1.25rem] text-cream transition-colors group-hover:text-teal-bright md:text-[1.4rem]">
                      {t.title}
                    </span>
                    <span className="mt-1.5 hidden max-w-xl text-[0.85rem] leading-relaxed text-cream/55 sm:block">
                      {t.summary}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1.5 size-4 shrink-0 text-cream/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-bright" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------------------------------------------------- CONDITIONS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Conditions we treat"
                title="The reasons are many. The plan is personal."
                intro="PCOS, endometriosis, low reserve, repeated failure, male factor. Each one changes the protocol — and each one has a path forward."
              />
              <div className="mt-9">
                <Btn href="/conditions" variant="secondary">
                  All conditions <ArrowRight className="size-4" />
                </Btn>
              </div>
            </Reveal>

            <Stagger className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {conditions.map((c) => (
                <StaggerItem key={c.slug}>
                  <Link
                    href={`/conditions/${c.slug}`}
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/50 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/35 hover:bg-white"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-pink/10 text-pink transition-colors duration-300 group-hover:bg-pink group-hover:text-white">
                      <ContentIcon name={c.icon} className="size-4" />
                    </span>
                    <span className="flex-1 text-[0.9rem] text-ink">
                      {c.shortTitle ?? c.title}
                    </span>
                    <ArrowUpRight className="size-3.5 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-teal-deep" />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- VOICES */}
      <section className="relative overflow-hidden bg-teal-night py-24 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 size-[30rem] rounded-full bg-teal/15 blur-[110px]"
        />
        <div className="container-x relative">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-cream/10 pb-5">
            <p className="eyebrow flex items-center gap-3 text-teal-bright">
              <span aria-hidden className="h-px w-6 bg-teal-bright/50" />
              In their words
            </p>
            <p className="hidden text-[0.72rem] uppercase tracking-[0.14em] text-cream/35 md:block">
              Patient stories, shared with permission
            </p>
          </div>
          <Testimonials />
          <p className="mt-14 max-w-2xl text-[0.72rem] leading-relaxed text-cream/30">
            Individual results vary. These accounts describe personal
            experiences and are not a guarantee of outcome.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- CENTRES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our centres"
                title="Three cities. One standard of care."
                intro="Consultations close to home, with the full laboratory and surgical team a short journey away when you need them."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Btn href="/centres" variant="secondary">
                Centre details <ArrowRight className="size-4" />
              </Btn>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {centres.map((c) => (
              <StaggerItem key={c.slug} className="h-full">
                <Card className="group flex h-full flex-col gap-0 border-ink/10 bg-white/55 py-0 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-soft md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-[1.65rem]">{c.city}</h3>
                    <span className="grid size-8 place-items-center rounded-full bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <MapPin className="size-3.5" />
                    </span>
                  </div>
                  <p className="mt-4 text-[0.85rem] leading-[1.7] text-ink-soft">
                    {c.summary}
                  </p>
                  <div className="mt-6 space-y-1 border-t border-ink/10 pt-5 text-[0.8rem] leading-relaxed text-ink-mute">
                    {c.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <Link
                      href={`/centres/${c.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[0.75rem] text-cream transition-colors hover:bg-teal-deep"
                    >
                      Visit page <ArrowUpRight className="size-3" />
                    </Link>
                    <a
                      href={c.phoneHref}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-[0.75rem] text-ink transition-colors hover:border-teal"
                    >
                      <Phone className="size-3" /> Call
                    </a>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ----------------------------------------------------------- ACADEMICS */}
      <section className="border-y border-ink/8 bg-cream-deep/60 py-24 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Academics"
              title="We train the doctors who will come after us."
              intro="GBR runs an ICOG-recognised fellowship, a reproductive medicine fellowship and dedicated embryology and andrology training — because better-trained clinicians make better fertility care for everyone."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/academics">Programmes & dates</Btn>
              <Btn href="/academics/register" variant="secondary">
                Academic registration
              </Btn>
            </div>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2">
            {academics.map((a) => (
              <StaggerItem key={a.slug} className="h-full">
                <Card className="group h-full gap-0 border-ink/10 bg-cream py-0 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-soft">
                  <Link
                    href={`/academics/${a.slug}`}
                    className="flex h-full flex-col p-6"
                  >
                    <span className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-pink">
                      {a.duration}
                    </span>
                    <span className="mt-2.5 font-display text-[1.12rem] leading-snug">
                      {a.shortTitle}
                    </span>
                    <span className="mt-2 text-[0.8rem] leading-[1.65] text-ink-soft">
                      {a.summary}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-teal-deep">
                      Details
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ------------------------------------------------------------- JOURNAL */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="The journal"
                title="Written for the questions you actually ask."
                intro="Practical, evidence-based reading on fertility, treatment and pregnancy — reviewed by our clinical team."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Btn href="/blog" variant="secondary">
                All articles <ArrowRight className="size-4" />
              </Btn>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07} className="h-full">
                <PostCard post={post} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- FAQ */}
      <section className="border-t border-ink/8 bg-cream-deep/40 py-24 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Before you book."
              intro="The things people ask us first — answered without a consultation fee."
            />
            <div className="mt-9">
              <Btn href="/faq" variant="secondary">
                Read all FAQs <ArrowRight className="size-4" />
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqAccordion faqs={generalFaqs.slice(0, 6)} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
