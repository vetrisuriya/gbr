import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/jsonld";
import { Button } from "@/components/ui/button";
import { generalFaqs } from "@/data/faqs";
import { site } from "@/data/site";
import type { Faq } from "@/data/types";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about fertility testing, IVF, IUI, costs, success rates, confidentiality and travelling to GBR Fertility Centre.",
  alternates: { canonical: "/faq" },
};

const treatmentFaqs: Faq[] = [
  {
    q: "What is the difference between IUI and IVF?",
    a: "IUI places prepared sperm into the uterus around ovulation, relying on fertilisation happening naturally inside the body. IVF retrieves eggs, fertilises them in the laboratory and transfers an embryo back. IUI is less invasive and less expensive; IVF is more effective for blocked tubes, severe male factor or when IUI has not worked.",
  },
  {
    q: "Is ICSI always better than standard IVF?",
    a: "No. ICSI is used when there is a clear reason — low sperm count or motility, previous fertilisation failure, or surgically retrieved sperm. For couples without male factor, standard IVF gives comparable results without the extra cost.",
  },
  {
    q: "Do you transfer one embryo or two?",
    a: "Our default is a single embryo transfer, particularly for women under 35 with good-quality embryos, because it reduces the risks of a twin pregnancy for both mother and babies. In specific situations — older age, repeated failure, poor embryo quality — two may be discussed with you.",
  },
  {
    q: "How long does one IVF cycle take?",
    a: "From the start of stimulation to the pregnancy test is usually six to seven weeks. Preparation, investigations and any waiting between cycles are planned around your calendar.",
  },
  {
    q: "Can I exercise or work during treatment?",
    a: "Yes. Normal activity is fine during stimulation. After egg retrieval, we advise avoiding strenuous exercise for about a week. Most patients continue working throughout, adjusting only for scan and procedure days.",
  },
];

const costFaqs: Faq[] = [
  {
    q: "Do you offer packages?",
    a: "We itemise every cycle rather than selling a single headline price. A basic IVF package covers monitoring scans, egg retrieval, laboratory fertilisation and fresh embryo transfer. Optional items — freezing, genetic testing, assisted hatching — are listed separately so you can see exactly what each adds.",
  },
  {
    q: "Are medications included?",
    a: "Medication is usually billed separately because dose and protocol vary between patients. Your estimate will include an indicative medication range for your protocol.",
  },
  {
    q: "What happens if a cycle is cancelled?",
    a: "If a cycle stops before egg retrieval, you pay only for the monitoring and medication used up to that point. Where a retrieval has happened but no transfer is possible, laboratory and freezing costs apply — we explain these scenarios in writing before you start.",
  },
  {
    q: "Do you accept insurance?",
    a: "Some Indian insurers now cover fertility investigations and, less commonly, treatment. Our billing team will provide the documentation your insurer requires. We do not guarantee reimbursement.",
  },
];

export default function FaqPage() {
  const all = [...generalFaqs, ...treatmentFaqs, ...costFaqs];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow="Questions"
        title="Before you book, you probably want to ask this."
        intro="These are the questions we hear most often — about testing, treatment, cost, timelines and what happens if it does not work. If yours is not here, ask us directly."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        highlights={[
          { label: "First consult", value: "30 minutes" },
          { label: "Both partners", value: "Welcome" },
          { label: "No obligation", value: "To start treatment" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="space-y-14">
            <div>
              <h2 className="font-display text-[1.7rem] md:text-[2rem]">
                Getting started
              </h2>
              <FaqAccordion faqs={generalFaqs} className="mt-5" />
            </div>
            <div>
              <h2 className="font-display text-[1.7rem] md:text-[2rem]">
                Treatment
              </h2>
              <FaqAccordion
                faqs={treatmentFaqs}
                className="mt-5"
                defaultOpen={null}
              />
            </div>
            <div>
              <h2 className="font-display text-[1.7rem] md:text-[2rem]">
                Costs & practicalities
              </h2>
              <FaqAccordion faqs={costFaqs} className="mt-5" defaultOpen={null} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ink/10 bg-white/60 p-6">
              <span className="grid size-10 place-items-center rounded-full bg-pink/10 text-pink">
                <MessageCircle className="size-5" />
              </span>
              <h2 className="mt-4 font-display text-[1.35rem] leading-snug">
                Still have a question?
              </h2>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">
                Ask us anything — including the awkward things. A patient-care
                coordinator will reply, or arrange a call with a consultant if
                your question needs one.
              </p>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">
                  Contact the team <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="mt-2.5 w-full">
                <a href={site.whatsapp}>Message on WhatsApp</a>
              </Button>
            </div>

            <div className="mt-4 rounded-3xl border border-ink/10 p-6">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Helpful pages
              </h3>
              <ul className="mt-3 space-y-2 text-[0.9rem]">
                {[
                  { label: "Fertility evaluation", href: "/specialities/fertility-evaluation" },
                  { label: "How IVF works", href: "/treatments/in-vitro-fertilization-ivf" },
                  { label: "All treatments", href: "/treatments" },
                  { label: "Our centres", href: "/centres" },
                  { label: "Book a consultation", href: "/book" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex items-center justify-between gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-cream-deep/60"
                    >
                      {l.label}
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
        title="The fastest way to an answer is a conversation."
        body="A first consultation gives you a plan, not a sales pitch. Both partners welcome."
      />
    </>
  );
}
