import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { navigation, site } from "@/data/site";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const columns = navigation
  .filter((item) => "items" in item)
  .map((item) => ({
    title: item.label,
    items: (item.items ?? []).slice(0, 6),
    href: item.href,
  }));

const clinicLinks = [
  { label: "About GBR", href: "/about" },
  { label: "Our doctors", href: "/doctors" },
  { label: "Our centres", href: "/centres" },
  { label: "Academics", href: "/academics" },
  { label: "Journal", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-teal-night text-cream/80">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[34rem] rounded-full bg-teal/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-pink/15 blur-[110px]"
      />

      <div className="container-x relative py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo variant="white" className="h-10 w-auto" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-cream/65">
              Compassionate, evidence-based fertility care in Chennai,
              Thirupattur and Nellore. One team, from the first consultation to
              the first heartbeat.
            </p>

            <div className="mt-8 space-y-4 text-[0.92rem]">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/85 transition-colors hover:text-teal-bright"
              >
                <span className="grid size-9 place-items-center rounded-full border border-cream/15">
                  <Phone className="size-4" />
                </span>
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 text-cream/85 transition-colors hover:text-teal-bright"
              >
                <span className="grid size-9 place-items-center rounded-full border border-cream/15">
                  <Mail className="size-4" />
                </span>
                {site.email}
              </a>
              <p className="flex items-start gap-3 text-cream/65">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/15">
                  <MapPin className="size-4" />
                </span>
                <span className="leading-relaxed">
                  {site.address.line1}, {site.address.line2}, {site.address.city} –{" "}
                  {site.address.pin}
                </span>
              </p>
              <p className="flex items-start gap-3 text-cream/65">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/15">
                  <Clock className="size-4" />
                </span>
                <span className="leading-relaxed">
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day} · {h.time}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal-bright">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-[0.9rem]">
                  {col.items.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="text-cream/65 transition-colors hover:text-cream"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={col.href}
                      className="inline-flex items-center gap-1 text-cream/90 underline decoration-cream/25 underline-offset-4 transition-colors hover:text-teal-bright"
                    >
                      All {col.title.toLowerCase()}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal-bright">
                Clinic
              </h3>
              <ul className="mt-4 space-y-2.5 text-[0.9rem]">
                {clinicLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-cream/65 transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-cream/12 bg-cream/[0.04] p-7 md:p-9">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-[1.7rem] text-cream md:text-[2rem]">
                Not sure where to start?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                A 30-minute first consultation, both partners welcome, no
                obligation to begin treatment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/book">
                  Book a consultation <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href={site.whatsapp}>WhatsApp us</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-cream/10 pt-8 text-xs text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.currentYear} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-cream/80">
              Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-cream/80">
              Disclaimer
            </Link>
            <Link href="/contact" className="hover:text-cream/80">
              Contact
            </Link>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-cream/80"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 max-w-4xl text-[0.7rem] leading-relaxed text-cream/35">
          Information on this website is for general education and does not
          replace a consultation with a qualified medical practitioner.
          Fertility outcomes vary between individuals. All treatment is provided
          in accordance with the Assisted Reproductive Technology (Regulation)
          Act, 2021 and applicable Indian law.
        </p>
      </div>
    </footer>
  );
}
