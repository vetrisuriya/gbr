import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important information about the general nature of content on the GBR Fertility Centre website, individual variation in fertility outcomes, and when to seek urgent care.",
  alternates: { canonical: "/disclaimer" },
};

const sections = [
  {
    title: "General information only",
    body: [
      "The content on this website — including pages about specialities, treatments, conditions, tests and the journal — is provided for general education. It is not medical advice, a diagnosis, or a treatment recommendation for any individual.",
      "Reading this website does not create a doctor–patient relationship. A clinical relationship begins only after a consultation with one of our registered practitioners and the completion of our registration and consent process.",
    ],
  },
  {
    title: "Individual results vary",
    body: [
      "Fertility outcomes depend on many factors, including age, diagnosis, ovarian reserve, sperm parameters, embryo quality, uterine factors and previous treatment history. No website can predict your individual chance of success.",
      "Where we describe possible outcomes or typical approaches, these are general descriptions. Your consultant will discuss what is realistic for you, in writing, before treatment begins. We do not guarantee a pregnancy or a live birth.",
    ],
  },
  {
    title: "Not a substitute for consultation",
    body: [
      "Do not delay seeking medical advice, or start, stop or change any treatment, on the basis of something you have read here. If you have symptoms, abnormal test results or concerns about a pregnancy, contact a qualified clinician.",
    ],
  },
  {
    title: "Emergencies",
    body: [
      `This website and the appointment form are not monitored for emergencies. If you have severe pain, heavy bleeding, fever, signs of ovarian hyperstimulation or any other urgent concern, seek immediate medical attention at the nearest hospital. You may also call us on ${site.phone}, but do not rely on this website in an emergency.`,
    ],
  },
  {
    title: "Accuracy and updates",
    body: [
      "We take care to keep clinical content accurate and current, and pages are reviewed by our clinical team. Medicine changes, and some content may become out of date between reviews. If you spot an error, please tell us so we can correct it.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This website may link to external organisations, resources or social media. Those sites are not under our control and we are not responsible for their content, accuracy or privacy practices.",
    ],
  },
  {
    title: "Regulatory context",
    body: [
      "Fertility treatment in India is regulated by the Assisted Reproductive Technology (Regulation) Act, 2021 and related rules. Our practice follows applicable law, including rules on consent, gamete donation, surrogacy and record-keeping. Nothing on this website overrides those requirements.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <section className="border-b border-ink/8 bg-cream pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
          />
          <p className="eyebrow mt-8">Legal</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.2rem] leading-[1.05] sm:text-[2.9rem] md:text-[3.4rem]">
            Medical disclaimer
          </h1>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            Please read this before relying on any information on this website.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-pink/25 bg-pink/[0.06] p-5">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-pink" />
            <p className="text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">In an emergency,</span> go to
              the nearest hospital or call emergency services. Do not use this
              website or its contact form for urgent medical problems.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.7rem] text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[1.5rem] leading-snug md:text-[1.75rem]">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-4 space-y-4 md:pl-9">
                  {section.body.map((p) => (
                    <p
                      key={p.slice(0, 30)}
                      className="text-[0.98rem] leading-[1.78] text-ink-soft"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-ink/10 pt-6 text-[0.78rem] leading-relaxed text-ink-mute">
            Questions about this disclaimer?{" "}
            <Link href="/contact" className="text-teal-deep underline underline-offset-2">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
