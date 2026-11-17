import type { AcademicProgram } from "./types";

export const academics: AcademicProgram[] = [
  {
    slug: "icog-fellowship-reproductive-medicine",
    title: "ICOG Fellowship in Reproductive Medicine",
    shortTitle: "ICOG Fellowship",
    summary:
      "A one-year, ICOG-recognised fellowship for practising gynaecologists who want advanced, hands-on clinical and laboratory training in infertility.",
    duration: "1 year, full time",
    eligibility:
      "MBBS with MD/MS/DNB in Obstetrics & Gynaecology. Indian nationals with a valid medical degree only.",
    accreditation:
      "Recognised by the Indian College of Obstetricians & Gynaecologists (ICOG). Certificate issued on completion.",
    intro: [
      "Most gynaecologists finish training having managed infertility on paper but never having run a full IVF cycle. This fellowship exists to close that gap.",
      "Fellows work inside the unit, not alongside it. You will sit in first consultations, plan stimulation protocols, scrub for retrievals and transfers, sit with embryologists during grading, and follow your patients through to a pregnancy test. Seats are deliberately limited — two per batch — so supervision is genuinely one-to-one.",
    ],
    curriculum: [
      {
        title: "Clinical training",
        body: "Hands-on experience in IUI, IVF, ICSI and ovulation induction. You will manage protocols for PCOS, endometriosis, recurrent pregnancy loss, poor ovarian reserve and male infertility, and take part in weekly case discussions with the consultant team.",
      },
      {
        title: "Laboratory exposure",
        body: "Structured rotations through semen preparation, oocyte handling, embryo culture, vitrification and quality control. Fellows are not expected to become embryologists, but they leave able to read a lab report and question it intelligently.",
      },
      {
        title: "Surgical exposure",
        body: "Observation and assisted participation in diagnostic hysteroscopy, ovarian cystectomy, myomectomy and laparoscopic adhesiolysis, with a focus on fertility-sparing technique.",
      },
      {
        title: "Research and academics",
        body: "One supervised research project, a paper presentation at a state or national conference, and a completed dissertation. Regular journal club keeps the reading habit alive after training.",
      },
      {
        title: "Workshops",
        body: "Scheduled sessions on laparoscopy and hysteroscopy, pre-implantation genetic testing, ultrasound in fertility, and counselling communication skills.",
      },
      {
        title: "Career preparation",
        body: "Guidance on setting up an ART practice, understanding the ART (Regulation) Act 2021, building a lab, and choosing between clinical and academic pathways.",
      },
    ],
    highlights: [
      "Two seats per batch for genuine one-to-one mentorship",
      "Rotations through a high-volume tertiary IVF unit",
      "ICOG-recognised certification",
      "Monthly workshop series included",
      "Conference presentation support",
      "Placement and practice-setup guidance",
    ],
    faqs: [
      {
        q: "Is accommodation provided?",
        a: "No. Fellows arrange their own accommodation nearby. Our team can suggest options and the unit runs Mon–Sat, so most fellows stay within a short commute.",
      },
      {
        q: "Is a stipend available?",
        a: "This is a training programme and no stipend is paid by GBR. The ICOG fee is defined by ICOG and paid directly by the candidate.",
      },
      {
        q: "Can international candidates apply?",
        a: "The ICOG fellowship is open to Indian nationals with a valid medical degree. International doctors should contact us about observer or short-term training options instead.",
      },
      {
        q: "How do I apply?",
        a: "Submit your CV, degree certificates and two reference letters through the academic registration form. Shortlisted candidates are notified within four weeks and invited for an interview.",
      },
    ],
  },
  {
    slug: "fellowship-in-reproductive-medicine",
    title: "Fellowship in Reproductive Medicine",
    shortTitle: "Fellowship in RM",
    summary:
      "A six-month intensive fellowship for gynaecologists who want practical, protocol-level competence in reproductive medicine without a full year away from practice.",
    duration: "6 months, full time",
    eligibility:
      "MBBS with MD/MS/DNB in Obstetrics & Gynaecology, or DGO with significant clinical experience. Indian nationals preferred.",
    accreditation: "GBR Fertility Centre certificate of completion",
    intro: [
      "Not every clinician can step out of practice for a year. The six-month fellowship covers the same clinical core in a compressed format, built for working gynaecologists who need to return to their own patients with usable skills.",
      "The structure is deliberately clinical rather than academic: protocol planning, cycle monitoring, IUI technique, scan interpretation, patient counselling and complication management. The dissertation is optional and replaced with a case portfolio.",
    ],
    curriculum: [
      {
        title: "Core clinical blocks",
        body: "First consultation skills, investigation planning, ovarian reserve interpretation, stimulation protocol selection and cycle monitoring. By week eight you are presenting your own plans for review.",
      },
      {
        title: "Procedure competence",
        body: "Supervised IUI, mock embryo transfer, follicular scan technique and assisted participation in oocyte retrieval. Logged procedures count toward your portfolio.",
      },
      {
        title: "Laboratory literacy",
        body: "A shortened lab rotation covering sperm preparation, fertilisation checks, embryo grading and the meaning of a blastocyst report — the parts of the process clinicians most often misunderstand.",
      },
      {
        title: "Difficult conversations",
        body: "Counselling patients through failed cycles, miscarriage, donor gametes and stopping treatment. Observed sessions with our counsellor, then supervised practice.",
      },
      {
        title: "Case portfolio",
        body: "Twelve documented cases across PCOS, male factor, endometriosis, poor responder and recurrent implantation failure, each with a written reflection.",
      },
      {
        title: "Law and regulation",
        body: "The ART (Regulation) Act 2021 in practice: consent, record-keeping, donor eligibility, surrogacy rules and inspection readiness.",
      },
    ],
    highlights: [
      "Six-month format for working clinicians",
      "Logged procedures and a written case portfolio",
      "Focused on protocol decisions, not memorising theory",
      "Counselling training included",
      "ART Act compliance module",
      "Rolling intake, subject to seat availability",
    ],
    faqs: [
      {
        q: "Is the six-month fellowship recognised?",
        a: "It carries a GBR certificate rather than ICOG recognition. Candidates seeking an ICOG-certified qualification should apply for the one-year fellowship instead.",
      },
      {
        q: "Can I continue my own practice during the fellowship?",
        a: "The fellowship is full time. Most fellows keep a limited weekend practice, but the weekday schedule is fixed.",
      },
      {
        q: "Is there a stipend or accommodation?",
        a: "No stipend is provided, and accommodation is not arranged. Fees and dates are shared on enquiry.",
      },
    ],
  },
  {
    slug: "embryologist-training-program",
    title: "Embryologist Training Program",
    shortTitle: "Embryologist Training",
    summary:
      "Hands-on ART laboratory training for life-science graduates and lab technicians — from semen analysis to blastocyst grading and vitrification.",
    duration: "6 to 12 months (flexible)",
    eligibility:
      "MSc in Biotechnology, Microbiology, Life Sciences or equivalent, or an existing IVF lab technician seeking formal training.",
    accreditation: "GBR-accredited certificate on completion",
    intro: [
      "An IVF laboratory is only as good as the people handling gametes. This programme trains them properly, inside a working lab, on real cases — not on discarded samples alone.",
      "Batch sizes are intentionally small so that every trainee performs each technique under direct supervision until sign-off. Progress is assessed by competency log, not attendance.",
    ],
    curriculum: [
      {
        title: "Core andrology",
        body: "Semen analysis with WHO reference criteria, sperm preparation for IUI, IVF and ICSI, cryopreservation and thawing protocols, sperm DNA fragmentation testing, and assistance with TESA and PESA retrievals.",
      },
      {
        title: "Advanced andrology",
        body: "Sperm vitality testing, retrograde semen processing, leukocyte detection and sperm function tests. Interpretation of testosterone, FSH and LH profiles, plus patient counselling support for male infertility.",
      },
      {
        title: "Embryology essentials",
        body: "Oocyte identification and handling, insemination technique, fertilisation assessment, cleavage-stage and blastocyst grading, embryo selection for transfer and vitrification.",
      },
      {
        title: "Quality management",
        body: "Internal and external quality control, air and temperature monitoring, media handling, documentation and traceability. This is the part that separates a reliable lab from a lucky one.",
      },
      {
        title: "Research and audit",
        body: "Participation in ongoing male fertility and embryo outcome studies, with training in data collection and basic statistical review.",
      },
      {
        title: "Professional practice",
        body: "Consent, confidentiality, the ART Act 2021 laboratory requirements, and how to work as part of a clinical team rather than in isolation.",
      },
    ],
    highlights: [
      "Real case exposure — oligospermia, azoospermia, post-vasectomy samples",
      "Competency-based sign-off for each technique",
      "Double supervision by andrologist and embryologist",
      "Small, limited-seat batches",
      "Quality control training included",
      "Placement assistance with partner ART centres",
    ],
    faqs: [
      {
        q: "Do I need prior lab experience?",
        a: "Prior experience helps but is not mandatory for the six-month track. Candidates without experience start with an extended andrology module.",
      },
      {
        q: "Will I perform procedures independently?",
        a: "Only after competency sign-off and always within the lab's supervision policy. Patient safety comes before training pace.",
      },
      {
        q: "Is accommodation or a stipend provided?",
        a: "Neither is provided. Trainees arrange their own stay, and fees are shared on enquiry.",
      },
      {
        q: "When is the next intake?",
        a: "Intakes run through the year with a limited number of seats. Contact the academic office for the next available batch.",
      },
    ],
  },
  {
    slug: "andrologist-training-program",
    title: "Andrologist Training Program",
    shortTitle: "Andrologist Training",
    summary:
      "A focused programme in male reproductive health — semen analysis, sperm retrieval, hormonal interpretation and the clinical management of male infertility.",
    duration: "3 to 6 months",
    eligibility:
      "MBBS, MSc or equivalent in a relevant life science, or practising clinicians and technicians in reproductive medicine.",
    accreditation: "GBR certificate of completion",
    intro: [
      "Male infertility is half of the fertility problem and a fraction of the training. Most ART teams have no dedicated andrologist, which is why so many semen reports are read superficially.",
      "This programme builds that capability: laboratory competence in semen handling combined with clinical understanding of why the numbers look the way they do, and what to do next.",
    ],
    curriculum: [
      {
        title: "Andrology laboratory skills",
        body: "Semen analysis, morphology assessment, sperm preparation, cryopreservation, DNA fragmentation testing and vitality testing, with attention to technique standardisation and inter-observer reliability.",
      },
      {
        title: "Surgical andrology",
        body: "Observation of TESA, PESA and micro-TESE, plus an understanding of when each retrieval method is appropriate and what it means for the couple's counselling.",
      },
      {
        title: "Clinical interpretation",
        body: "Hormone profiles, varicocele assessment, genetic causes including karyotype and Y-chromosome microdeletions, and the difference between treatable and bypassable causes.",
      },
      {
        title: "Counselling men",
        body: "How to discuss results without blame or shame, involve the partner appropriately, and set realistic expectations about timelines — sperm production takes roughly three months to change.",
      },
      {
        title: "Quality control",
        body: "Internal and external QC, equipment calibration, documentation and audit. Reliable andrology is a process discipline before it is a skill.",
      },
      {
        title: "Research participation",
        body: "Contribute to ongoing studies in male fertility, with support for a poster or paper if you wish to publish.",
      },
    ],
    highlights: [
      "Dual mentorship from andrologist and embryologist",
      "Real clinical material across the full spectrum of male factor",
      "Structured QC and documentation training",
      "Counselling skills for a sensitive consultation",
      "Research participation with publication support",
      "Suitable for clinicians and laboratory scientists",
    ],
    faqs: [
      {
        q: "Is this programme for doctors only?",
        a: "No. It suits laboratory scientists and technicians as well as clinicians. The clinical interpretation modules are optional for non-clinical trainees.",
      },
      {
        q: "How long does it take?",
        a: "Three months for laboratory-focused training, six months if you include the clinical and research modules.",
      },
      {
        q: "Do you provide a stipend?",
        a: "No stipend is provided. Fees and the current schedule are shared when you enquire.",
      },
    ],
  },
];

export const academicBySlug = (slug: string) =>
  academics.find((a) => a.slug === slug);
