import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CollectionCard } from "@/components/collection-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Stagger, StaggerItem } from "@/components/reveal";
import { conditions } from "@/data/conditions";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "PCOS, endometriosis, poor ovarian reserve, recurrent implantation failure, male infertility and more — explained and treated by the specialists at GBR Fertility Centre.",
  alternates: { canonical: "/conditions" },
};

export default function ConditionsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Fertility Conditions Treated at GBR Fertility Centre",
          hasPart: conditions.map((c) => ({
            "@type": "MedicalCondition",
            name: c.title,
            url: `${site.url}/conditions/${c.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Conditions"
        title="The reasons are many. The plan is personal."
        intro="A diagnosis is not a verdict. PCOS, endometriosis, low reserve and male factor each change the protocol — and each one has a path forward. Here is what we look for, and how we treat it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Conditions" }]}
        highlights={[
          { label: "Diagnosis", value: "2–3 weeks" },
          { label: "Both partners", value: "Tested together" },
          { label: "Approach", value: "Evidence-led" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c) => (
              <StaggerItem key={c.slug} className="h-full">
                <CollectionCard page={c} href={`/conditions/${c.slug}`} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 grid gap-6 rounded-3xl border border-ink/10 bg-cream-deep/50 p-7 md:grid-cols-3 md:p-9">
            <div>
              <p className="eyebrow">Two partners, one file</p>
              <h2 className="mt-3 font-display text-2xl leading-snug">
                Half of fertility problems involve the male partner.
              </h2>
            </div>
            <p className="text-[0.92rem] leading-relaxed text-ink-soft md:col-span-2">
              A semen analysis is quick, inexpensive and often decisive, yet it is
              routinely delayed by months. We assess both partners at the first
              visit so that treatment is never planned on an incomplete picture.
              Where a cause cannot be found, we explain what that means and which
              options remain.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Come with the diagnosis you already have."
        body="Bring your reports and previous treatment. We will review them honestly and tell you what we would do differently — and what we would not."
        primary={{ label: "Book a consultation", href: "/book" }}
      />
    </>
  );
}
