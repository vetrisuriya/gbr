import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CollectionCard } from "@/components/collection-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Stagger, StaggerItem } from "@/components/reveal";
import { treatments } from "@/data/treatments";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Fertility Treatments",
  description:
    "IUI, IVF, ICSI, frozen embryo transfer, laser-assisted hatching, genetic testing, ERA and PRP, and fertility-sparing surgery at GBR Fertility Centre, Chennai.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Fertility Treatments at GBR Fertility Centre",
          hasPart: treatments.map((t) => ({
            "@type": "MedicalTherapy",
            name: t.title,
            url: `${site.url}/treatments/${t.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Treatments"
        title="Treatment is a ladder, not a leap."
        intro="We start at the least invasive option that can work for you and climb only when the evidence says we should. Every step is explained with its realistic chance of success, its cost and its alternatives."
        crumbs={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
        highlights={[
          { label: "First line", value: "Often IUI, not IVF" },
          { label: "Lab", value: "Time-lapse + AI" },
          { label: "Transfer", value: "Single embryo" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <StaggerItem key={t.slug} className="h-full">
                <CollectionCard page={t} href={`/treatments/${t.slug}`} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 rounded-3xl border border-ink/10 bg-teal-night p-8 text-cream md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <p className="eyebrow text-teal-bright">A word on add-ons</p>
                <h2 className="mt-3 font-display text-[1.8rem] leading-tight md:text-[2.2rem]">
                  Not every optional test makes a difference.
                </h2>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-cream/65">
                  Fertility treatment attracts a lot of add-ons: immune testing,
                  embryo glue, routine hatching, endometrial scratches. Some help
                  specific patients. Many do not. We recommend them only when
                  your history gives a reason, and we tell you when the evidence
                  is uncertain.
                </p>
              </div>
              <ul className="space-y-3 text-[0.88rem] text-cream/70">
                {[
                  "Written, itemised costs before you begin",
                  "No add-on without a clinical reason",
                  "Success rates explained by age band, not a single headline figure",
                  "A review conversation after every unsuccessful cycle",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 border-b border-cream/10 pb-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-bright" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Which treatment is right for you?"
        body="That depends on your diagnosis, your age and your history — not on a package. A first consultation will tell you where to start."
      />
    </>
  );
}
