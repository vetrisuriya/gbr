import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, FileText, MessageCircle, Phone, Users } from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { JsonLd } from "@/components/jsonld";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request a fertility consultation at GBR Fertility Centre, Chennai, Thirupattur or Nellore. Both partners welcome; no obligation to begin treatment.",
  alternates: { canonical: "/book" },
};

const expectations = [
  {
    icon: Clock,
    title: "45 minutes, unhurried",
    body: "A full history from both partners before any test is ordered. Bring your questions.",
  },
  {
    icon: FileText,
    title: "A written plan",
    body: "You leave with the investigations we recommend, why we recommend them, and what each will cost.",
  },
  {
    icon: Users,
    title: "Both partners welcome",
    body: "Male factor contributes to nearly half of cases. Testing both partners together saves months.",
  },
  {
    icon: MessageCircle,
    title: "No obligation",
    body: "A consultation is a conversation. You are free to go away and think, or seek a second opinion.",
  },
];

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Book a Fertility Consultation",
          url: `${site.url}/book`,
          about: {
            "@type": "MedicalClinic",
            name: site.name,
            telephone: site.phone,
          },
        }}
      />

      <section className="relative overflow-hidden bg-teal-night py-16 text-cream md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 size-[34rem] rounded-full bg-teal/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-pink/15 blur-[110px]"
        />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-teal-bright">Book a consultation</p>
            <h1 className="mt-4 font-display text-[2.4rem] leading-[1.03] sm:text-[3.2rem] md:text-[3.7rem]">
              Start where you are.
            </h1>
            <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-cream/70">
              You do not need to have it all figured out, or to know whether you
              want IVF. A first consultation is a conversation about your history,
              your options and what a realistic next step looks like.
            </p>

            <dl className="mt-10 grid gap-5 sm:grid-cols-2">
              {expectations.map((e) => (
                <div key={e.title} className="border-t border-cream/15 pt-4">
                  <dt className="flex items-center gap-2 font-display text-[1.05rem] text-cream">
                    <e.icon className="size-4 text-teal-bright" />
                    {e.title}
                  </dt>
                  <dd className="mt-1.5 text-[0.85rem] leading-relaxed text-cream/55">
                    {e.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="light">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> Call {site.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href={site.whatsapp} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-8 max-w-md text-[0.75rem] leading-relaxed text-cream/35">
              All treatment is provided in accordance with the Assisted
              Reproductive Technology (Regulation) Act, 2021. Information on this
              site is general and does not replace medical advice.
            </p>
          </div>

          <div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            {
              title: "What to bring",
              items: [
                "Any previous reports or scans",
                "A list of current medications",
                "Details of previous cycles, if any",
                "Your partner, if possible",
              ],
            },
            {
              title: "What happens next",
              items: [
                "We call within one working day",
                "You confirm a date and centre",
                "We send a short pre-visit checklist",
                "First consultation, then a written plan",
              ],
            },
            {
              title: "Not sure you are ready?",
              items: [
                "A second opinion is welcome",
                "You can ask for a phone conversation first",
                "No treatment is started on day one",
                "You can bring a family member",
              ],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-ink/10 bg-white/50 p-6"
            >
              <h2 className="font-display text-[1.3rem]">{block.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-ink-soft"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="container-x mt-8">
          <p className="text-[0.8rem] text-ink-mute">
            Prefer to read first?{" "}
            <Link href="/faq" className="text-teal-deep underline underline-offset-2">
              Browse the FAQs
            </Link>{" "}
            or{" "}
            <Link href="/specialities" className="text-teal-deep underline underline-offset-2">
              explore our specialities
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
