import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AppointmentForm } from "@/components/appointment-form";
import { JsonLd } from "@/components/jsonld";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { centres } from "@/data/centres";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GBR Fertility Centre — phone, WhatsApp, email and addresses for our Chennai, Thirupattur and Nellore centres. Request an appointment online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact GBR Fertility Centre",
          url: `${site.url}/contact`,
          mainEntity: {
            "@type": "MedicalClinic",
            name: site.name,
            telephone: site.phone,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${site.address.line1}, ${site.address.line2}`,
              addressLocality: site.address.city,
              addressRegion: site.address.state,
              postalCode: site.address.pin,
              addressCountry: "IN",
            },
          },
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Talk to someone who does this every day."
        intro="Whether you have a question, a report to review or a date in mind, our patient-care team will help you find the right next step. Calls are answered by people, not a menu."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        highlights={[
          { label: "Phone", value: site.phone },
          { label: "Reply time", value: "Within 1 working day" },
          { label: "Centres", value: "Chennai, Thirupattur, Nellore" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="space-y-4">
                <a
                  href={site.phoneHref}
                  className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/55 p-5 transition-colors hover:border-teal/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal/10 text-teal-deep">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                      Call us
                    </span>
                    <span className="mt-1 block text-[1.05rem] text-ink">
                      {site.phone}
                    </span>
                    <span className="mt-1 block text-[0.8rem] text-ink-soft">
                      Mon–Sat 9am–7pm · Sun 9am–1pm
                    </span>
                  </span>
                </a>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/55 p-5 transition-colors hover:border-teal/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal/10 text-teal-deep">
                    <MessageCircle className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-[1.05rem] text-ink">
                      Message the team
                    </span>
                    <span className="mt-1 block text-[0.8rem] text-ink-soft">
                      Share reports securely before your visit
                    </span>
                  </span>
                </a>

                <a
                  href={site.emailHref}
                  className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/55 p-5 transition-colors hover:border-teal/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal/10 text-teal-deep">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                      Email
                    </span>
                    <span className="mt-1 block text-[1.05rem] text-ink">
                      {site.email}
                    </span>
                    <span className="mt-1 block text-[0.8rem] text-ink-soft">
                      For non-urgent enquiries and academic requests
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 rounded-3xl border border-ink/10 bg-cream-deep/50 p-6">
                <h2 className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  <MapPin className="size-3.5 text-teal" /> Our centres
                </h2>
                <ul className="mt-4 space-y-4">
                  {centres.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/centres/${c.slug}`}
                        className="group flex items-start justify-between gap-4"
                      >
                        <span>
                          <span className="block text-[0.95rem] text-ink">
                            {c.city}
                          </span>
                          <span className="mt-0.5 block text-[0.8rem] leading-relaxed text-ink-soft">
                            {c.address.join(", ")}
                          </span>
                        </span>
                        <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-ink-mute group-hover:text-teal-deep" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-4 rounded-3xl border border-ink/10 p-6">
                <h2 className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  <Clock className="size-3.5 text-teal" /> Opening hours
                </h2>
                <div className="mt-4 space-y-2">
                  {site.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-2 text-[0.9rem]"
                    >
                      <span className="text-ink-soft">{h.day}</span>
                      <span className="text-ink">{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-mute">
                  This form and phone line are not for medical emergencies.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <h2 className="font-display text-[1.8rem] leading-tight md:text-[2.1rem]">
              Request an appointment
            </h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">
              Tell us a little about what you need and we will call you back to
              confirm a time. If you have reports, you can bring them to the first
              visit or share them beforehand.
            </p>
            <div className="mt-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
