import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AcademicForm } from "@/components/academic-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Academic Registration",
  description:
    "Apply for the ICOG fellowship, reproductive medicine fellowship, embryologist or andrologist training programme at GBR Fertility Centre, Chennai.",
  alternates: { canonical: "/academics/register" },
};

export default function AcademicRegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic registration"
        title="Apply to train with us."
        intro="Tell us about your background and the track that interests you. The academic office reviews every application and replies within four weeks."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "Register" },
        ]}
        highlights={[
          { label: "Review time", value: "4 weeks" },
          { label: "Interview", value: "At Chennai" },
          { label: "Intake", value: "Limited seats" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <AcademicForm />
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ink/10 bg-cream-deep/50 p-6">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                What to include
              </h2>
              <ul className="mt-4 space-y-2.5 text-[0.88rem] leading-relaxed text-ink-soft">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  An up-to-date CV
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  Degree and registration certificates
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  Two reference letters
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  A short note on why you are applying
                </li>
              </ul>
              <p className="mt-5 text-[0.78rem] leading-relaxed text-ink-mute">
                Documents can be emailed after this form. We do not charge an
                application fee.
              </p>
            </div>

            <div className="mt-4 rounded-3xl border border-ink/10 p-6">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Academic office
              </h2>
              <a
                href={site.emailHref}
                className="mt-4 flex items-center gap-2.5 text-[0.9rem] text-ink transition-colors hover:text-teal-deep"
              >
                <Mail className="size-4 text-teal" /> {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="mt-2.5 flex items-center gap-2.5 text-[0.9rem] text-ink transition-colors hover:text-teal-deep"
              >
                <Phone className="size-4 text-teal" /> {site.phone}
              </a>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-mute">
                Monday to Saturday, 9:00 AM – 6:00 PM.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
