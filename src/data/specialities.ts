import type { ContentPage } from "./types";

export const specialities: ContentPage[] = [
  {
    slug: "fertility-evaluation",
    title: "Fertility Evaluation",
    eyebrow: "Speciality",
    icon: "search",
    summary:
      "A clear, compassionate fertility assessment that finds the real reason you are not conceiving — and the shortest path to a plan that works.",
    intro: [
      "A fertility evaluation is not a test you pass or fail. It is a structured conversation, a set of focused investigations, and a clear answer to one question: what is standing between you and a healthy pregnancy?",
      "At GBR we investigate both partners together, in one place, with a plan you can understand before any treatment begins.",
    ],
    highlights: [
      { label: "First consultation", value: "45–60 min" },
      { label: "Both partners", value: "Assessed together" },
      { label: "Results", value: "Same-day review" },
    ],
    sections: [
      {
        title: "What a fertility evaluation covers",
        body: "We build a complete picture rather than chasing a single abnormal result.",
        bullets: [
          "Medical, menstrual and pregnancy history for both partners",
          "Ovarian reserve: AMH, antral follicle count and cycle tracking",
          "Tubal patency and uterine cavity assessment",
          "Semen analysis with morphology and, where needed, DNA fragmentation",
          "Hormonal profile including thyroid, prolactin and vitamin D",
        ],
      },
      {
        title: "When should you consider an evaluation?",
        body: "You do not need to wait a full year if something already feels wrong. Book an assessment if:",
        bullets: [
          "You have been trying to conceive for 12 months (6 months if you are over 35)",
          "Your cycles are irregular, very painful or unusually heavy",
          "You have had two or more miscarriages",
          "You have a known diagnosis such as PCOS, endometriosis or a blocked tube",
          "Your partner has had testicular surgery, infection or previous fertility treatment",
        ],
      },
      {
        title: "How we investigate, gently",
        body: "Most investigations are completed in one or two visits and timed around your cycle. We explain each step, what it measures, and what it means before we move on. Where a test will not change the plan, we do not order it.",
      },
      {
        title: "Your plan, in writing",
        body: "At the end of the evaluation you leave with a written summary: the findings, the options, the realistic chances of each, and the cost. You are never pushed toward the most expensive treatment first.",
      },
    ],
    faqs: [
      {
        q: "Do we both need to be evaluated?",
        a: "Yes. Male factors contribute to nearly half of infertility cases, and a semen analysis is quick, inexpensive and often decisive.",
      },
      {
        q: "How long does the evaluation take?",
        a: "Most couples complete their investigations within two to three weeks, depending on where they are in the menstrual cycle.",
      },
      {
        q: "Is the evaluation painful?",
        a: "Blood tests and ultrasound are painless. A tubal patency test may cause brief cramping, and we take time to make you comfortable.",
      },
    ],
    related: ["female-infertility", "male-infertility", "intrauterine-insemination-iui"],
  },
  {
    slug: "female-infertility",
    title: "Female Infertility",
    eyebrow: "Speciality",
    icon: "flower",
    summary:
      "From irregular cycles to blocked tubes, we diagnose the cause of female infertility and build a treatment plan around your body and your timeline.",
    intro: [
      "Female infertility is rarely one single problem. Ovulation, tube health, egg quality, the uterine lining and age all interact. Our job is to find which of these is limiting you — and which can be treated.",
      "We see women who have been told they have 'no option', and we see women who simply needed the right investigation at the right time.",
    ],
    highlights: [
      { label: "Common causes", value: "Ovulation, tubes, age" },
      { label: "Diagnosis", value: "Usually 1–2 visits" },
      { label: "Treatment", value: "From timed cycles to IVF" },
    ],
    sections: [
      {
        title: "Common causes we treat",
        bullets: [
          "Ovulatory disorders including PCOS and thyroid imbalance",
          "Blocked or damaged fallopian tubes, including hydrosalpinx",
          "Endometriosis and pelvic adhesions",
          "Uterine fibroids, polyps and septums",
          "Diminished ovarian reserve and age-related egg quality decline",
          "Unexplained infertility, where all routine tests are normal",
        ],
      },
      {
        title: "A diagnosis before a prescription",
        body: "Treatment should follow evidence, not habit. A 28-year-old with irregular cycles and a 41-year-old with regular cycles need very different plans. We use AMH, antral follicle count, ultrasound, tubal assessment and hormone testing to decide whether ovulation induction, IUI, IVF or surgery is the right first step.",
      },
      {
        title: "Fertility-sparing surgery",
        body: "Where fibroids, endometriosis or tubal damage are the cause, surgery can restore natural fertility. Our laparoscopic and hysteroscopic surgery is performed with fertility preservation as the first priority — protecting ovarian tissue and the uterine lining.",
      },
      {
        title: "Emotional care is part of the plan",
        body: "Fertility treatment is demanding. Counselling, clear timelines and honest success rates are built into every plan, and your partner is included at every stage.",
      },
    ],
    faqs: [
      {
        q: "Can I get pregnant with blocked tubes?",
        a: "Sometimes surgery can reopen a tube. When it cannot, IVF bypasses the tubes entirely and is often the most direct route.",
      },
      {
        q: "Does age really change my chances?",
        a: "Yes. Egg quantity and quality decline with age, most noticeably after 35. Testing your reserve early gives you more options.",
      },
      {
        q: "We have unexplained infertility. What now?",
        a: "Unexplained does not mean untreatable. We usually start with ovulation tracking and IUI, then move to IVF if needed.",
      },
    ],
    related: ["fertility-evaluation", "pcos", "endometriosis"],
  },
  {
    slug: "fertility-preservation",
    title: "Fertility Preservation",
    eyebrow: "Speciality",
    icon: "snowflake",
    summary:
      "Egg, sperm and embryo freezing for people who want to protect their future options — before cancer treatment, surgery or simply the passage of time.",
    intro: [
      "Fertility preservation is about keeping a door open. Whether you are facing cancer treatment, undergoing surgery that may affect your ovaries, or planning parenthood later in life, freezing gametes or embryos now can protect the choices available to you later.",
      "Our oncofertility pathway is coordinated with your oncology team so that fertility preservation happens quickly, without delaying treatment.",
    ],
    highlights: [
      { label: "Egg freezing", value: "Vitrification" },
      { label: "Sperm freezing", value: "Same-day" },
      { label: "Embryo freezing", value: "98% thaw survival" },
    ],
    sections: [
      {
        title: "What can be preserved",
        bullets: [
          "Eggs (oocyte cryopreservation) — for women delaying parenthood or facing gonadotoxic treatment",
          "Sperm — before chemotherapy, radiation or testicular surgery",
          "Embryos — for couples who have completed a cycle and want future transfers",
          "Ovarian tissue — in selected cases, coordinated with specialist centres",
        ],
      },
      {
        title: "How egg freezing works",
        body: "You take hormone injections for 8–12 days to mature several eggs. They are retrieved under mild sedation, vitrified within minutes and stored in liquid nitrogen. When you are ready, they are thawed, fertilised and transferred.",
      },
      {
        title: "Why timing matters",
        body: "The number and quality of eggs you can freeze depends on your age and ovarian reserve. A single consultation with AMH testing gives you a realistic picture of what is achievable — before you commit to a cycle.",
      },
      {
        title: "Oncofertility, without delay",
        body: "For cancer patients, we compress the stimulation protocol and coordinate directly with oncologists so treatment can begin on schedule. Sperm freezing can be completed the same day.",
      },
    ],
    faqs: [
      {
        q: "What is the best age to freeze eggs?",
        a: "Before 35, ideally. Results are still possible later, but the number of eggs needed rises with age.",
      },
      {
        q: "How long can eggs be stored?",
        a: "Vitrified eggs can be stored for many years. Indian regulations permit long-term storage with periodic consent.",
      },
      {
        q: "Can I freeze sperm the same day?",
        a: "Yes. A sample can be collected, analysed and cryopreserved within a few hours.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "genetic-testing-services", "donor-program"],
  },
  {
    slug: "male-infertility",
    title: "Male Infertility",
    eyebrow: "Speciality",
    icon: "shield",
    summary:
      "Nearly half of infertility involves a male factor. We investigate sperm health properly and treat it — from lifestyle and medication to ICSI and surgical sperm retrieval.",
    metaTitle: "Male Infertility Treatment & ICSI",
    metaDescription:
      "Male factor fertility care at GBR Fertility Centre — semen analysis, DNA fragmentation testing, medication, ICSI and surgical sperm retrieval across Chennai, Thirupattur and Nellore.",
    intro: [
      "Male infertility is often silent. There are usually no symptoms, which is why a semen analysis is one of the most important — and most skipped — tests in a fertility workup.",
      "Our andrology service evaluates sperm count, motility, morphology and DNA integrity, then treats the cause where possible and works around it where not.",
    ],
    highlights: [
      { label: "Of cases involve male factors", value: "~50%" },
      { label: "First test", value: "Semen analysis" },
      { label: "Advanced", value: "DNA fragmentation" },
    ],
    sections: [
      {
        title: "What we assess",
        bullets: [
          "Semen volume, concentration, motility and morphology",
          "Sperm DNA fragmentation (DFI) for unexplained infertility and recurrent loss",
          "Hormonal profile including testosterone, FSH and prolactin",
          "Varicocele, obstruction and prior testicular surgery",
          "Genetic causes such as Y-chromosome microdeletions and karyotype abnormalities",
        ],
      },
      {
        title: "Treatable causes",
        body: "Not every low count needs IVF. Varicocele repair, infection treatment, hormone correction, lifestyle change and avoiding heat exposure can improve parameters in a meaningful proportion of men. We re-test after three months, the length of one sperm production cycle.",
      },
      {
        title: "When IVF or ICSI is the answer",
        body: "If sperm numbers or quality remain low, ICSI allows a single healthy sperm to be injected directly into an egg. For men with no sperm in the ejaculate (azoospermia), surgical retrieval — TESA, PESA or micro-TESE — can still make fatherhood possible.",
      },
      {
        title: "A note for partners",
        body: "Male infertility is a medical condition, not a measure of masculinity. We discuss results privately, without blame, and always as a couple's shared plan.",
      },
    ],
    faqs: [
      {
        q: "How long should we abstain before a semen analysis?",
        a: "Two to three days is ideal. Longer or shorter abstinence can distort the result.",
      },
      {
        q: "Can a low sperm count improve?",
        a: "Often, yes. Treating varicocele, infection or hormonal issues and improving sleep, weight and heat exposure can raise parameters over 3–6 months.",
      },
      {
        q: "What is DNA fragmentation?",
        a: "It measures damage to the genetic material inside sperm. High DFI can affect fertilisation and miscarriage risk, even when the count looks normal.",
      },
    ],
    related: ["male-infertility-conditions", "icsi", "fertility-evaluation"],
  },
  {
    slug: "donor-program",
    title: "Donor Program",
    eyebrow: "Speciality",
    icon: "heart-handshake",
    summary:
      "Medically screened, legally compliant egg, sperm and embryo donation — with counselling and anonymity handled with care.",
    intro: [
      "For some families, donation is the path to parenthood. It is a decision that deserves time, information and complete transparency.",
      "Our donor programme operates in full compliance with the Assisted Reproductive Technology (Regulation) Act, 2021 and the Surrogacy (Regulation) Act, 2021.",
    ],
    highlights: [
      { label: "Screening", value: "Medical + genetic" },
      { label: "Anonymity", value: "Protected by law" },
      { label: "Counselling", value: "Included" },
    ],
    sections: [
      {
        title: "Types of donation",
        bullets: [
          "Egg donation — for premature ovarian failure, poor egg quality or age-related decline",
          "Sperm donation — for azoospermia, genetic risk or single women where legally permitted",
          "Embryo donation — from consenting IVF patients who have completed their family",
        ],
      },
      {
        title: "How donors are screened",
        body: "Donors are between 21 and 35 (eggs) or 21 and 45 (sperm), with a healthy BMI and no significant medical or genetic history. Screening includes infectious disease testing, karyotyping, ovarian reserve assessment and psychological evaluation.",
      },
      {
        title: "The legal framework",
        bullets: [
          "Treatment follows the Assisted Reproductive Technology (Regulation) Act, 2021",
          "Donation is altruistic — compensation is limited to medical expenses and insurance",
          "Donor identity is protected; recipients receive non-identifying characteristics",
          "Donors have no parental rights or claims",
          "Recipient eligibility follows current Indian law",
        ],
      },
      {
        title: "Counselling before you decide",
        body: "Every recipient couple meets our counsellor to talk through disclosure, family building and the emotional questions that come with donation. There is no pressure and no deadline.",
      },
    ],
    faqs: [
      {
        q: "Will the child be able to find the donor?",
        a: "No. Indian law protects donor anonymity. Recipients may receive basic physical and medical information.",
      },
      {
        q: "Can a donor donate more than once?",
        a: "An egg donor may donate only once in her lifetime. Sperm donation is regulated by the ART Act.",
      },
      {
        q: "Is donor treatment confidential?",
        a: "Yes. All records are confidential and managed under the clinic's privacy policy.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "surrogacy-program", "fertility-preservation"],
  },
  {
    slug: "surrogacy-program",
    title: "Surrogacy Program",
    eyebrow: "Speciality",
    icon: "baby",
    summary:
      "Ethical, legally compliant altruistic surrogacy support — from eligibility and board approval to embryo transfer and the parental order.",
    intro: [
      "Surrogacy in India is governed by the Surrogacy (Regulation) Act, 2021. Only altruistic, gestational surrogacy is permitted, and the process is deliberately rigorous to protect everyone involved.",
      "We guide intended parents through every legal and medical step, with a single team coordinating the clinic, the surrogate and the paperwork.",
    ],
    highlights: [
      { label: "Permitted", value: "Altruistic only" },
      { label: "Approval", value: "National Board" },
      { label: "Coordination", value: "End-to-end" },
    ],
    sections: [
      {
        title: "Who is eligible",
        bullets: [
          "Married Indian couples who have a medical indication for surrogacy",
          "The child must be genetically related to at least one intended parent",
          "The surrogate must be a willing, altruistic woman — typically a close relative",
          "Both parties must meet the medical and legal criteria set by the Act",
        ],
      },
      {
        title: "The legal process",
        bullets: [
          "Eligibility assessment and documentation",
          "Application to the National Surrogacy Board through the clinic",
          "Notarised surrogacy agreement covering medical costs, insurance and rights",
          "Parental order and birth certificate in the intended parents' names",
        ],
      },
      {
        title: "The medical process",
        body: "The surrogate's cycle is prepared with medication to synchronise her endometrium with the intended parents' embryos. Embryo transfer follows, then pregnancy monitoring and delivery with our obstetric team.",
      },
      {
        title: "Ethics first",
        body: "Surrogacy involves a third person's body and a child's future. We do not proceed without independent counselling, informed consent from every party, and full legal review.",
      },
    ],
    faqs: [
      {
        q: "Is commercial surrogacy legal in India?",
        a: "No. Only altruistic surrogacy is permitted under the 2021 Act.",
      },
      {
        q: "Can the surrogate be a family member?",
        a: "Yes, a close relative is the most common arrangement under the Act.",
      },
      {
        q: "How long does the process take?",
        a: "From approval to delivery usually takes 18–24 months, depending on board timelines and medical factors.",
      },
    ],
    related: ["donor-program", "in-vitro-fertilization-ivf", "obstetrics-services"],
  },
  {
    slug: "gynecology-services",
    title: "Gynecology Services",
    eyebrow: "Speciality",
    icon: "stethoscope",
    summary:
      "Complete women's health care with a fertility-first lens — from cycle problems and PCOS to minimally invasive surgery and preventive screening.",
    intro: [
      "Fertility and gynecology are not separate journeys. A painful period, an irregular cycle or a fibroid can be both a health problem and a fertility problem.",
      "Our gynecologists are trained in reproductive medicine, so treatment is always planned with your future fertility in mind.",
    ],
    highlights: [
      { label: "Care across life stages", value: "Adolescence to menopause" },
      { label: "Surgery", value: "Laparoscopic & hysteroscopic" },
      { label: "Screening", value: "Pap, HPV, breast" },
    ],
    sections: [
      {
        title: "What we treat",
        bullets: [
          "Irregular, heavy or painful periods",
          "PCOS and hormonal imbalance",
          "Fibroids, ovarian cysts and endometriosis",
          "Pelvic pain and infection",
          "Preconception counselling and contraception",
          "Menopause and perimenopause support",
        ],
      },
      {
        title: "Minimally invasive surgery",
        body: "Laparoscopy and hysteroscopy allow us to treat fibroids, cysts, polyps, adhesions and ectopic pregnancy through keyhole incisions. Recovery is faster, scarring is minimal and fertility outcomes are better than with open surgery.",
      },
      {
        title: "Preventive care",
        body: "Annual well-woman examinations, Pap smears, HPV vaccination and breast examination are part of staying well. Prevention is cheaper and kinder than treatment.",
      },
    ],
    faqs: [
      {
        q: "Should I see a gynecologist or a fertility specialist?",
        a: "If you are trying to conceive or have a known fertility diagnosis, a fertility specialist is the better first step. We cover both.",
      },
      {
        q: "Do you treat teenagers?",
        a: "Yes. We see adolescents for cycle problems, PCOS and reproductive health education.",
      },
    ],
    related: ["pcos", "endometriosis", "laparoscopy"],
  },
  {
    slug: "obstetrics-services",
    title: "Obstetrics Services",
    eyebrow: "Speciality",
    icon: "heart-pulse",
    summary:
      "Prenatal, delivery and postpartum care designed for fertility patients — with high-risk pregnancy expertise and continuity from conception to home.",
    intro: [
      "A fertility pregnancy deserves obstetric care that understands how it began. Our obstetricians work alongside the fertility team, so the transition from a positive test to a safe delivery is seamless.",
      "We support vaginal delivery, VBAC, elective and emergency caesarean sections, and high-risk pregnancies with advanced fetal monitoring.",
    ],
    highlights: [
      { label: "High-risk care", value: "IVF & multiple pregnancy" },
      { label: "Fetal medicine", value: "Anomaly & growth scans" },
      { label: "Postpartum", value: "Lactation & mental health" },
    ],
    sections: [
      {
        title: "Prenatal care, trimester by trimester",
        bullets: [
          "First trimester: dating scan, NT/NB ultrasound, NIPT and genetic counselling",
          "Second trimester: anomaly scan, gestational diabetes screening, cervical length",
          "Third trimester: growth scans, Doppler studies, birth planning",
        ],
      },
      {
        title: "High-risk pregnancy care",
        body: "IVF pregnancies, multiple gestations, advanced maternal age, hypertension and diabetes need closer monitoring. We build a surveillance schedule around your specific risk rather than applying one protocol to everyone.",
      },
      {
        title: "Delivery your way — safely",
        body: "We support normal vaginal delivery, epidural analgesia, VBAC where appropriate, and caesarean delivery when it is safer. The plan is discussed openly and can change if your baby needs it to.",
      },
      {
        title: "After the birth",
        body: "Lactation support, newborn care guidance, postpartum depression screening and long-term follow-up are part of the package — because care does not end when you leave the labour room.",
      },
    ],
    faqs: [
      {
        q: "Can I deliver at GBR if I conceived elsewhere?",
        a: "Yes. We accept transfers at any stage of pregnancy, with your records reviewed at the first visit.",
      },
      {
        q: "Do you support VBAC?",
        a: "Yes, where the risks are appropriate and after a full assessment and counselling.",
      },
      {
        q: "Is a paediatrician available?",
        a: "Yes, newborn assessment and neonatal support are available at delivery.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "gynecology-services", "surrogacy-program"],
  },
];

export const specialityBySlug = (slug: string) =>
  specialities.find((s) => s.slug === slug);
