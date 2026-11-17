import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/jsonld";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { academics, academicBySlug } from "@/data/academics";
import { site } from "@/data/site";

export function generateStaticParams() {
  return academics.map((a) => ({ slug: a.slug }));
}

// Fully prerendered from generateStaticParams, so blocking navigation is
// expected and there is no request-time data to stream.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/academics/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const programme = academicBySlug(slug);
  if (!programme) return { title: "Programme not found" };

  return {
    title: programme.title,
    description: programme.summary,
    alternates: { canonical: `/academics/${programme.slug}` },
    openGraph: {
      title: `${programme.title} | GBR Fertility Centre`,
      description: programme.summary,
    },
  };
}

export default async function AcademicProgrammePage({
  params,
}: PageProps<"/academics/[slug]">) {
  const { slug } = await params;
  const programme = academicBySlug(slug);
  if (!programme) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalProgram",
          name: programme.title,
          description: programme.summary,
          url: `${site.url}/academics/${programme.slug}`,
          programPrerequisites: programme.eligibility,
          educationalCredentialAwarded: programme.accreditation,
          provider: { "@type": "MedicalClinic", name: "GBR Fertility Centre" },
        }}
      />

      <PageHero
        eyebrow="Academic programme"
        title={programme.title}
        intro={programme.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: programme.shortTitle },
        ]}
        highlights={[
          { label: "Duration", value: programme.duration },
          { label: "Accreditation", value: programme.accreditation ?? "GBR certificate" },
          { label: "Seats", value: "Limited" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <div className="space-y-5 text-[1.02rem] leading-[1.78] text-ink-soft">
              {programme.intro.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-[1.8rem] md:text-[2.1rem]">
              Curriculum
            </h2>
            <div className="mt-6 space-y-7">
              {programme.curriculum.map((block, i) => (
                <Reveal key={block.title}>
                  <article className="border-t border-ink/10 pt-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.7rem] text-teal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[1.25rem] leading-snug md:text-[1.4rem]">
                        {block.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[0.95rem] leading-[1.75] text-ink-soft">
                      {block.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            {programme.faqs?.length ? (
              <div className="mt-14">
                <h2 className="font-display text-[1.8rem]">
                  Programme questions
                </h2>
                <FaqAccordion
                  faqs={programme.faqs}
                  className="mt-6"
                  defaultOpen={null}
                />
              </div>
            ) : null}

            <div className="mt-10 rounded-2xl border border-teal/20 bg-teal/[0.06] px-5 py-4 text-[0.85rem] leading-relaxed text-teal-deep">
              GBR is a training centre, not a placement agency. Completion of a
              programme does not guarantee employment. Fees, dates and seat
              availability are confirmed by the academic office in writing.
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ink/10 bg-cream-deep/50 p-6">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Eligibility
              </h2>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">
                {programme.eligibility}
              </p>

              <h2 className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Duration
              </h2>
              <p className="mt-3 text-[0.9rem] text-ink">{programme.duration}</p>

              <h2 className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Highlights
              </h2>
              <ul className="mt-3 space-y-2">
                {programme.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-ink-soft"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-teal" />
                    {h}
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-6 w-full">
                <Link href="/academics/register">
                  Apply for this programme <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="mt-2.5 w-full">
                <Link href="/academics">All programmes</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Train inside a working IVF unit."
        body="Seats are deliberately limited so supervision is genuine. Tell us your background and we will advise which track fits."
        primary={{ label: "Academic registration", href: "/academics/register" }}
      />
    </>
  );
}
