import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Statement",
  description:
    "How GBR Fertility Centre collects, uses and protects the personal and health information you share through this website and during treatment.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Who we are",
    body: [
      `GBR Fertility Centre ("GBR", "we", "us") provides fertility and reproductive healthcare through our centres in Chennai, Thirupattur and Nellore. This statement explains how we handle information collected through this website. It is separate from, and additional to, the clinical consent and records policies you receive as a patient.`,
      `If you have a question about this statement, write to ${site.email} or call ${site.phone}.`,
    ],
  },
  {
    title: "Information we collect",
    body: [
      "When you submit the appointment form, we ask for your name, your partner's name (optional), phone number, email address (optional), preferred centre, service of interest, preferred date and any message you choose to include. We also record whether you have given consent to be contacted.",
      "We do not ask for medical reports or detailed health information through this website. Please do not include patient-identifiable clinical details in the message field. If we need clinical information before a visit, our team will tell you how to share it securely.",
      "Like most websites, our hosting provider may collect standard technical information such as browser type, device type, approximate location and pages visited, in server logs used for security and performance.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use the information you submit to respond to your enquiry, arrange an appointment and contact you about your request. With your consent, we may also send relevant service information. We do not sell your information.",
      "Where you are already a patient, clinical records are maintained separately under our patient records policy and applicable Indian law, including the Assisted Reproductive Technology (Regulation) Act, 2021.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "Information is shared with members of our patient-care and clinical teams who need it to respond to your request. We may use service providers — for example, a hosting provider or a secure enquiry-delivery service — that process information on our behalf under confidentiality obligations.",
      "We may disclose information where required by law, by a court, or by a regulator, or to protect the safety of a patient or another person.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "Website enquiries are retained only as long as needed to handle your request and any resulting appointment, and then for the period required by our internal records policy or applicable law. You can ask us to delete an enquiry that did not lead to a clinical relationship.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to confirm what information we hold about you, to correct it, or to delete website enquiry information. You can withdraw consent to marketing contact at any time. To make a request, contact us using the details above; we may need to verify your identity before acting.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "This website is designed to work without advertising cookies. If we add analytics in future, we will update this statement and, where required, ask for consent. Your browser settings let you block or delete cookies; doing so should not prevent you from reading the site or submitting the appointment form.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organisational measures to protect the information you submit, including encrypted transmission between your browser and our server. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Changes to this statement",
    body: [
      "We may update this statement to reflect changes in our practices or the law. The current version is always available on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-ink/8 bg-cream pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
          />
          <p className="eyebrow mt-8">Legal</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.2rem] leading-[1.05] sm:text-[2.9rem] md:text-[3.4rem]">
            Privacy statement
          </h1>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            Your privacy matters, especially in fertility care. This page explains
            what we collect through this website, why, and the choices you have.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
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
                <div className="mt-4 space-y-4 pl-0 md:pl-9">
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
            This statement is provided for transparency and does not create
            rights beyond those available under applicable law. For clinical
            privacy matters, the patient consent documents you receive at the
            centre apply.
          </p>
        </div>
      </section>
    </>
  );
}
