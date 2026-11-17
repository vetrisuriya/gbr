import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CollectionCard } from "@/components/collection-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Stagger, StaggerItem } from "@/components/reveal";
import { specialities } from "@/data/specialities";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Fertility Specialities",
  description:
    "Fertility evaluation, female and male infertility, fertility preservation, donor and surrogacy programmes, gynaecology and obstetric care at GBR Fertility Centre.",
  alternates: { canonical: "/specialities" },
};

export default function SpecialitiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Fertility Specialities at GBR Fertility Centre",
          hasPart: specialities.map((s) => ({
            "@type": "MedicalWebPage",
            name: s.title,
            url: `${site.url}/specialities/${s.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Specialities"
        title={
          <>
            Eight programmes.
            <br className="hidden sm:block" /> One standard of care.
          </>
        }
        intro="Whether you are at the very beginning of trying, or several cycles in, care begins with the right diagnosis. Each programme below is led by the same consultant team and supported by the same laboratory."
        crumbs={[{ label: "Home", href: "/" }, { label: "Specialities" }]}
        highlights={[
          { label: "Consultants", value: "20+ years" },
          { label: "Centres", value: "3 cities" },
          { label: "First visit", value: "Both partners" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialities.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <CollectionCard page={s} href={`/specialities/${s.slug}`} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 grid gap-6 rounded-3xl border border-ink/10 bg-cream-deep/50 p-7 md:grid-cols-3 md:p-9">
            <div>
              <p className="eyebrow">Not sure where to start?</p>
              <h2 className="mt-3 font-display text-2xl leading-snug">
                Begin with an evaluation, not a treatment.
              </h2>
            </div>
            <p className="text-[0.92rem] leading-relaxed text-ink-soft md:col-span-2">
              A fertility evaluation is the shortest route to a plan. It looks at
              both partners, takes two to three weeks, and ends with a written
              summary of the findings and your options. If you already have
              reports, bring them — we will not repeat tests that have been done
              properly.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what you have already tried."
        body="Second opinions are a normal part of fertility care. Bring your previous cycles and we will review them with you."
        primary={{ label: "Book an evaluation", href: "/book" }}
      />
    </>
  );
}
