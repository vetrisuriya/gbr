import type { ContentPage } from "./types";

export const treatments: ContentPage[] = [
  {
    slug: "in-vitro-fertilization-ivf",
    title: "In Vitro Fertilization (IVF)",
    shortTitle: "IVF",
    eyebrow: "Treatment",
    icon: "flask",
    summary:
      "The most established path to parenthood when natural conception is not possible — delivered with an advanced lab, single-embryo focus and honest odds.",
    intro: [
      "IVF brings fertilisation into the laboratory. Eggs are collected, fertilised with sperm, grown for a few days, and one healthy embryo is transferred into the uterus.",
      "It is the treatment of choice for blocked tubes, severe male factor, advanced maternal age, endometriosis and unexplained infertility that has not responded to simpler options.",
    ],
    highlights: [
      { label: "Cycle length", value: "4–6 weeks" },
      { label: "Transfer day", value: "Day 5 blastocyst" },
      { label: "Lab", value: "Time-lapse + AI grading" },
    ],
    sections: [
      {
        title: "Who IVF is for",
        bullets: [
          "Blocked or absent fallopian tubes",
          "Severe male factor infertility",
          "Endometriosis or prior pelvic surgery",
          "Advanced maternal age or low ovarian reserve",
          "Unexplained infertility after IUI",
          "Couples who need genetic screening of embryos",
        ],
      },
      {
        title: "The IVF cycle, step by step",
        bullets: [
          "Ovarian stimulation with daily injections for 8–12 days",
          "Monitoring through ultrasound and blood tests every few days",
          "Egg retrieval under mild sedation, usually 15–20 minutes",
          "Fertilisation by conventional IVF or ICSI",
          "Embryo culture to day 5 in time-lapse incubators",
          "Single embryo transfer, then a blood test 12 days later",
        ],
      },
      {
        title: "Why we prefer single embryo transfer",
        body: "A healthy singleton pregnancy is the goal. Transferring one good-quality blastocyst lowers the risk of twins and prematurity without reducing your chance of a live birth in most cases. Additional good embryos are vitrified for later.",
      },
      {
        title: "The laboratory matters",
        body: "Embryos are only as good as the environment that grows them. Our lab uses filtered air, strict temperature and pH control, time-lapse imaging and AI-assisted grading to select the embryo with the best chance.",
      },
      {
        title: "Understanding success rates",
        body: "IVF success depends mostly on female age, egg quality, diagnosis and embryo quality — not on a single clinic-wide number. We review your individual odds before you start, and we publish our outcomes by age band on request.",
        note: "Success rates describe groups, not individuals. Your consultant will explain what is realistic for you.",
      },
    ],
    faqs: [
      {
        q: "How long does one IVF cycle take?",
        a: "Around 4–6 weeks from the first injection to the pregnancy test, including monitoring, retrieval and transfer.",
      },
      {
        q: "Is egg retrieval painful?",
        a: "The procedure is done under mild sedation. Most women feel mild cramping for a day or two afterwards.",
      },
      {
        q: "Can we choose the gender of the embryo?",
        a: "No. Gender selection is not permitted in India except to prevent a serious sex-linked genetic disorder.",
      },
      {
        q: "What happens to unused embryos?",
        a: "Good-quality embryos can be vitrified for future transfers, donated with consent, or allowed to lapse according to your instructions and the law.",
      },
    ],
    related: ["icsi", "frozen-embryo-transfer-fet", "genetic-testing-services"],
  },
  {
    slug: "intrauterine-insemination-iui",
    title: "Intrauterine Insemination (IUI)",
    shortTitle: "IUI",
    eyebrow: "Treatment",
    icon: "syringe",
    summary:
      "A gentle, lower-cost first step: prepared sperm placed directly into the uterus around ovulation, timed precisely to your cycle.",
    intro: [
      "IUI is often the first assisted treatment couples try. It is less invasive and less expensive than IVF, and for the right couple it works well.",
      "We prepare the sperm in the lab, concentrate the healthiest swimmers, and place them through the cervix at the moment you ovulate.",
    ],
    highlights: [
      { label: "Procedure time", value: "5 minutes" },
      { label: "Recovery", value: "Same day" },
      { label: "Cycles", value: "3–4 before review" },
    ],
    sections: [
      {
        title: "Who IUI helps most",
        bullets: [
          "Mild male factor infertility",
          "Unexplained infertility in younger couples",
          "Cervical factor or mild ovulation irregularity",
          "Couples using donor sperm",
          "Couples who prefer to try a simpler option before IVF",
        ],
      },
      {
        title: "How the cycle works",
        body: "We may use mild ovulation induction or track your natural cycle with scans. When the follicle is ready, a trigger injection matures the egg. The next day, a prepared sperm sample is inserted through a thin catheter. It feels similar to a Pap smear.",
      },
      {
        title: "What IUI cannot do",
        body: "IUI cannot bypass blocked tubes, and it is much less effective when sperm numbers are very low or egg reserve is poor. If three to four cycles have not worked, we review whether IVF would give you a better chance rather than repeating the same treatment.",
      },
    ],
    faqs: [
      {
        q: "Does IUI hurt?",
        a: "Most women describe mild cramping, similar to a period. No anaesthesia is needed.",
      },
      {
        q: "How many IUI cycles should we try?",
        a: "Usually three to four. If there is no pregnancy by then, the plan should be reviewed rather than repeated indefinitely.",
      },
      {
        q: "Can we use donor sperm with IUI?",
        a: "Yes, where legally eligible. Donor sperm is screened and prepared in the same way.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "fertility-evaluation", "male-infertility"],
  },
  {
    slug: "icsi",
    title: "Intracytoplasmic Sperm Injection (ICSI)",
    shortTitle: "ICSI",
    eyebrow: "Treatment",
    icon: "target",
    summary:
      "A single healthy sperm injected directly into an egg — the answer to severe male factor infertility and previous fertilisation failure.",
    intro: [
      "ICSI is a laboratory technique used alongside IVF. Instead of mixing sperm and eggs and hoping fertilisation happens, an embryologist selects one good sperm and injects it into the centre of a mature egg.",
      "It is one of the most important advances in male infertility treatment.",
    ],
    highlights: [
      { label: "Sperm needed", value: "One per egg" },
      { label: "Used with", value: "IVF" },
      { label: "Also for", value: "Prior failed fertilisation" },
    ],
    sections: [
      {
        title: "When ICSI is recommended",
        bullets: [
          "Low sperm count, poor motility or abnormal morphology",
          "Sperm retrieved surgically (TESA, PESA, micro-TESE)",
          "Previous IVF cycle with failed or low fertilisation",
          "Frozen sperm or frozen eggs",
          "Pre-implantation genetic testing, where avoiding extra sperm DNA is preferred",
        ],
      },
      {
        title: "What happens in the lab",
        body: "The egg is held gently with a micropipette. A selected sperm is immobilised, drawn into a fine needle and injected into the egg's cytoplasm. The egg is then cultured like any other IVF embryo.",
      },
      {
        title: "Is ICSI always better?",
        body: "No. For couples with normal semen parameters, conventional IVF fertilises just as well and lets nature do the selection. We use ICSI when there is a clear reason, not by default.",
      },
    ],
    faqs: [
      {
        q: "Does ICSI guarantee fertilisation?",
        a: "No. It improves the chance when sperm quality is the barrier, but fertilisation still depends on egg quality and other factors.",
      },
      {
        q: "Can ICSI be used with frozen sperm?",
        a: "Yes. Frozen and surgically retrieved sperm are routinely used with ICSI.",
      },
      {
        q: "Does ICSI increase birth defects?",
        a: "Large studies show a small increase in risk that is largely linked to the underlying infertility, not the technique itself. We discuss this in counselling.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "male-infertility", "male-infertility-conditions"],
  },
  {
    slug: "frozen-embryo-transfer-fet",
    title: "Frozen Embryo Transfer (FET)",
    shortTitle: "FET",
    eyebrow: "Treatment",
    icon: "snowflake",
    summary:
      "Thawed embryos transferred in a natural or prepared cycle — often with better outcomes and a calmer, injection-free path to pregnancy.",
    intro: [
      "Not every embryo is transferred fresh. Freezing good-quality embryos lets your body recover from stimulation, allows genetic testing, and gives you more than one chance from a single egg collection.",
      "Modern vitrification means embryos survive thawing at very high rates.",
    ],
    highlights: [
      { label: "Thaw survival", value: "~98% vitrification" },
      { label: "Cycle", value: "Natural or programmed" },
      { label: "Recovery", value: "No injections (natural)" },
    ],
    sections: [
      {
        title: "Why freeze embryos",
        bullets: [
          "To avoid transferring in a cycle where the lining or hormones are not ideal",
          "To allow pre-implantation genetic testing",
          "To preserve extra embryos for siblings later",
          "To reduce the risk of ovarian hyperstimulation in high responders",
        ],
      },
      {
        title: "How the transfer cycle works",
        body: "In a natural cycle we track your ovulation and time the transfer. In a programmed cycle, oestrogen and progesterone prepare the lining without relying on your own cycle. Both are valid; the choice depends on your cycle regularity and history.",
      },
      {
        title: "Vitrification, not slow freezing",
        body: "Vitrification cools embryos so rapidly that ice crystals cannot form. This is why modern frozen transfer outcomes match fresh transfer outcomes in most age groups.",
      },
    ],
    faqs: [
      {
        q: "Are frozen embryos as good as fresh?",
        a: "In most cases, yes. Vitrified embryos have excellent survival and implantation rates.",
      },
      {
        q: "How long can embryos be stored?",
        a: "Many years, with periodic consent and storage fees. Storage is regulated under the ART Act.",
      },
      {
        q: "Do I need injections for FET?",
        a: "Not always. A natural-cycle FET often needs only monitoring and progesterone support.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "genetic-testing-services", "era-prp"],
  },
  {
    slug: "laser-assisted-hatching",
    title: "Laser-Assisted Hatching (LAH)",
    shortTitle: "LAH",
    eyebrow: "Treatment",
    icon: "sparkles",
    summary:
      "A precise laser makes a tiny opening in the embryo's outer shell, helping the embryo implant — used in selected cases, not routinely.",
    intro: [
      "Before an embryo can implant, it must hatch out of its protective outer layer, the zona pellucida. In some embryos that shell is thicker or harder than usual.",
      "Laser-assisted hatching uses a controlled micro-laser to thin a small area of the shell, giving the embryo an easier exit.",
    ],
    highlights: [
      { label: "Precision", value: "Micron-level laser" },
      { label: "Procedure", value: "Minutes" },
      { label: "Used", value: "Selectively" },
    ],
    sections: [
      {
        title: "When we consider LAH",
        bullets: [
          "Repeated implantation failure with good-quality embryos",
          "Embryos with a visibly thickened zona pellucida",
          "Frozen-thawed embryos, where the shell can harden",
          "Women over 38 undergoing IVF",
        ],
      },
      {
        title: "What happens",
        body: "Immediately before transfer, the embryo is held steady and a laser creates a small opening at the edge of the zona. The embryo is not damaged, and the procedure adds only a few minutes to the lab workflow.",
      },
      {
        title: "An evidence-led view",
        body: "LAH is not a routine add-on for every IVF cycle. The evidence is strongest in selected groups, so we recommend it only when your history suggests it may help — and we explain the limits honestly.",
      },
    ],
    faqs: [
      {
        q: "Is laser hatching safe for the embryo?",
        a: "Yes. The laser is calibrated to thin only the outer shell and does not touch the embryo itself.",
      },
      {
        q: "Should everyone have it?",
        a: "No. It is offered for specific indications such as repeated implantation failure or a thickened zona.",
      },
      {
        q: "Does it hurt?",
        a: "No. It happens in the lab before transfer; you are not aware of it.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "recurrent-implantation-failure", "frozen-embryo-transfer-fet"],
  },
  {
    slug: "genetic-testing-services",
    title: "Genetic Testing & Counselling",
    shortTitle: "Genetic Testing",
    eyebrow: "Treatment",
    icon: "dna",
    summary:
      "Pre-implantation genetic testing and carrier screening that help you start a pregnancy with more certainty — and less inherited risk.",
    intro: [
      "Some couples carry a genetic condition without knowing it. Others have embryos that fail to implant for chromosomal reasons. Genetic testing can answer both questions.",
      "Our service combines laboratory testing with counselling, so results are explained in plain language before any decision is made.",
    ],
    highlights: [
      { label: "PGT-A", value: "Chromosome screening" },
      { label: "PGT-M", value: "Single-gene disorders" },
      { label: "Screening", value: "Carrier panel" },
    ],
    sections: [
      {
        title: "Tests we offer",
        bullets: [
          "PGT-A — screens embryos for abnormal chromosome number",
          "PGT-M — tests for a known single-gene disorder such as thalassaemia",
          "PGT-SR — for structural chromosome rearrangements",
          "Carrier screening for both partners before conception",
          "Karyotyping for recurrent pregnancy loss",
        ],
      },
      {
        title: "Who may benefit",
        bullets: [
          "Recurrent miscarriage or repeated implantation failure",
          "Advanced maternal age",
          "A known family history of genetic disease",
          "Consanguineous couples",
          "Previous pregnancy or child with a genetic condition",
        ],
      },
      {
        title: "The limits — explained honestly",
        body: "PGT reduces risk; it does not remove it. Mosaicism, testing error and conditions not covered by the panel can still occur. We explain what a result can and cannot tell you before you consent.",
      },
    ],
    faqs: [
      {
        q: "Does PGT-A improve success for everyone?",
        a: "No. The benefit is clearest in older women and those with repeated failure. For young women with good embryos, routine PGT-A is debated.",
      },
      {
        q: "Is testing safe for the embryo?",
        a: "A few cells are removed at the blastocyst stage by an experienced embryologist. The risk is low but not zero.",
      },
      {
        q: "Can PGT detect all genetic diseases?",
        a: "No. PGT-M is designed for a specific known condition. It cannot screen for every possible disorder.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "recurrent-implantation-failure", "fertility-preservation"],
  },
  {
    slug: "era-prp",
    title: "ERA & PRP",
    shortTitle: "ERA & PRP",
    eyebrow: "Treatment",
    icon: "activity",
    summary:
      "Two targeted tools for repeated implantation failure: ERA to time the transfer window, and PRP to support a thin or poorly responsive lining.",
    intro: [
      "When good embryos repeatedly fail to implant, the problem may be the lining rather than the embryo. ERA and PRP are two ways we investigate and treat that.",
      "Both are used selectively, after a proper review of your history — not as routine add-ons.",
    ],
    highlights: [
      { label: "ERA", value: "Transfer timing" },
      { label: "PRP", value: "Lining support" },
      { label: "Best for", value: "Repeated failure" },
    ],
    sections: [
      {
        title: "ERA — Endometrial Receptivity Array",
        body: "ERA takes a small sample of the lining during a mock cycle and analyses the expression of genes associated with receptivity. It tells us whether your window of implantation is early, on time or late, so the next transfer can be timed precisely.",
      },
      {
        title: "PRP — Platelet-Rich Plasma",
        body: "PRP uses a concentrated portion of your own blood, rich in growth factors, infused into the uterus. It is used in selected cases of a persistently thin lining or poor endometrial response, where standard medication has not worked.",
      },
      {
        title: "Who we consider",
        bullets: [
          "Three or more failed transfers with good-quality embryos",
          "A lining that repeatedly stays below 6–7 mm",
          "Prior uterine surgery or Asherman's syndrome",
          "Unexplained implantation failure after a full workup",
        ],
      },
      {
        title: "Realistic expectations",
        body: "Neither test guarantees a pregnancy. ERA can correct timing in a subgroup of patients; PRP may improve lining thickness in some. We discuss the evidence, the cost and the alternatives before proceeding.",
      },
    ],
    faqs: [
      {
        q: "Does ERA hurt?",
        a: "It is similar to a smear or endometrial biopsy — brief cramping, usually without anaesthesia.",
      },
      {
        q: "Is PRP safe?",
        a: "Because PRP is made from your own blood, allergic reaction risk is very low. Infection and discomfort are uncommon.",
      },
      {
        q: "How many transfers should fail before testing?",
        a: "Most specialists investigate after two to three failed transfers of good-quality embryos.",
      },
    ],
    related: ["recurrent-implantation-failure", "in-vitro-fertilization-ivf", "frozen-embryo-transfer-fet"],
  },
  {
    slug: "laparoscopy",
    title: "Fertility-Sparing Laparoscopy",
    shortTitle: "Laparoscopy",
    eyebrow: "Treatment",
    icon: "scan",
    summary:
      "Keyhole surgery to treat endometriosis, cysts, adhesions and fibroids while protecting your ovaries and your fertility.",
    intro: [
      "Laparoscopy lets us see and treat pelvic problems through small incisions. For fertility, the priority is not just removing disease — it is leaving the ovaries and tubes in the best possible condition.",
      "Our surgeons are trained in fertility-sparing technique, including ovarian cystectomy that preserves healthy tissue.",
    ],
    highlights: [
      { label: "Stay", value: "Day-care / 1 night" },
      { label: "Recovery", value: "3–7 days" },
      { label: "Scarring", value: "Minimal" },
    ],
    sections: [
      {
        title: "What we treat",
        bullets: [
          "Endometriosis and endometriomas",
          "Ovarian cysts",
          "Pelvic adhesions",
          "Fibroids (myomectomy)",
          "Hydrosalpinx — tube removal or repair",
          "Ectopic pregnancy",
        ],
      },
      {
        title: "Fertility-sparing technique",
        body: "Every decision in the operating theatre affects your ovarian reserve. We use meticulous haemostasis, avoid unnecessary coagulation near the ovary, and remove only what is diseased. Where surgery could harm fertility more than help it, we say so.",
      },
      {
        title: "What recovery looks like",
        body: "Most women go home the same day or the next morning and return to normal activity within a week. You will have a follow-up to review findings and plan the next step.",
      },
    ],
    faqs: [
      {
        q: "Will laparoscopy improve my fertility?",
        a: "It depends on the finding. Removing endometriosis or adhesions can improve natural conception and IVF outcomes; some conditions do not benefit.",
      },
      {
        q: "How soon can we try to conceive after surgery?",
        a: "Usually within a few weeks, depending on what was done. Your surgeon will give you a specific timeline.",
      },
      {
        q: "Is it painful?",
        a: "Keyhole surgery causes less pain than open surgery. Most women manage with simple pain relief for a few days.",
      },
    ],
    related: ["endometriosis", "myomectomy", "hysteroscopy"],
  },
  {
    slug: "hysteroscopy",
    title: "Fertility-Focused Hysteroscopy",
    shortTitle: "Hysteroscopy",
    eyebrow: "Treatment",
    icon: "microscope",
    summary:
      "A direct look inside the uterus to find and fix polyps, fibroids, adhesions and septum — often the missing piece in implantation failure.",
    intro: [
      "The uterus is where an embryo must live for nine months. Small polyps, scar tissue or a septum can quietly prevent implantation, and they are invisible on a routine scan.",
      "Hysteroscopy lets us see the cavity directly and treat most problems in the same sitting.",
    ],
    highlights: [
      { label: "Procedure", value: "10–20 minutes" },
      { label: "Anaesthesia", value: "Sedation / local" },
      { label: "Recovery", value: "Same day" },
    ],
    sections: [
      {
        title: "What we find and fix",
        bullets: [
          "Endometrial polyps",
          "Submucosal fibroids",
          "Intrauterine adhesions (Asherman's syndrome)",
          "Uterine septum",
          "Retained products or abnormal bleeding",
        ],
      },
      {
        title: "Why it matters before IVF",
        body: "An untreated cavity problem can waste good embryos. We offer hysteroscopy before a first IVF cycle where ultrasound is suspicious, and always after repeated implantation failure.",
      },
      {
        title: "What to expect",
        body: "The procedure is usually done as a day case. A thin camera is passed through the cervix, and instruments remove or divide the problem. Most women return to normal activity the next day.",
      },
    ],
    faqs: [
      {
        q: "Does hysteroscopy hurt?",
        a: "With sedation or local anaesthesia, most women feel only mild cramping. It is often compared to a strong period pain afterwards.",
      },
      {
        q: "When can I start an IVF cycle afterwards?",
        a: "Usually in the next cycle, depending on what was treated. Your consultant will confirm.",
      },
      {
        q: "Can it improve IVF success?",
        a: "Correcting a cavity abnormality can improve implantation. Some studies also suggest a benefit from a 'scratch', but evidence is mixed.",
      },
    ],
    related: ["recurrent-implantation-failure", "laparoscopy", "in-vitro-fertilization-ivf"],
  },
  {
    slug: "myomectomy",
    title: "Myomectomy",
    shortTitle: "Myomectomy",
    eyebrow: "Treatment",
    icon: "scissors",
    summary:
      "Removal of fibroids with the uterus preserved — planned around your fertility, your symptoms and your timeline to pregnancy.",
    intro: [
      "Fibroids are common, and most do not need surgery. But when they distort the uterine cavity, cause heavy bleeding or are linked to pregnancy loss, removing them can improve your chances.",
      "Myomectomy removes the fibroids and leaves the uterus intact, which matters if you want to carry a pregnancy.",
    ],
    highlights: [
      { label: "Uterus", value: "Preserved" },
      { label: "Approach", value: "Laparoscopic / open" },
      { label: "Pregnancy", value: "After healing" },
    ],
    sections: [
      {
        title: "When surgery is worth it",
        bullets: [
          "Fibroids that distort the cavity or press on the tubes",
          "Heavy bleeding or pain affecting quality of life",
          "Recurrent miscarriage with no other cause",
          "Fibroids growing quickly or causing pressure symptoms",
        ],
      },
      {
        title: "Choosing the approach",
        body: "Small or moderate fibroids can often be removed laparoscopically. Very large or deeply embedded fibroids may need an open approach for safety. The goal is complete removal with the strongest possible uterine wall for a future pregnancy.",
      },
      {
        title: "Planning pregnancy after surgery",
        body: "Depending on the size and depth of the fibroids, we usually advise waiting 3–6 months before attempting pregnancy or embryo transfer, to allow the uterine wall to heal.",
      },
    ],
    faqs: [
      {
        q: "Will my fibroids come back?",
        a: "New fibroids can develop over time. The risk is lower if all visible fibroids are removed, but it is never zero.",
      },
      {
        q: "Can I deliver normally after myomectomy?",
        a: "Sometimes, but a caesarean may be advised depending on how deep the fibroids were and how the uterus was repaired.",
      },
      {
        q: "Is myomectomy better than hysterectomy?",
        a: "If you want to preserve fertility, yes. Hysterectomy is only considered when childbearing is complete or medically necessary.",
      },
    ],
    related: ["laparoscopy", "hysteroscopy", "female-infertility"],
  },
  {
    slug: "tubal-recanalization",
    title: "Tubal Recanalization",
    shortTitle: "Tubal Recanalization",
    eyebrow: "Treatment",
    icon: "route",
    summary:
      "Opening a blocked fallopian tube so sperm and egg can meet again — an alternative to IVF for selected women.",
    intro: [
      "Fallopian tubes are the meeting point for sperm and egg. When a tube is blocked, usually after infection or surgery, natural conception becomes very unlikely.",
      "Tubal recanalization uses a fine guidewire under X-ray or hysteroscopic guidance to reopen a blocked section, avoiding the need for IVF in the right candidate.",
    ],
    highlights: [
      { label: "Approach", value: "Minimally invasive" },
      { label: "Stay", value: "Day case" },
      { label: "Best for", value: "Proximal block" },
    ],
    sections: [
      {
        title: "Who is a good candidate",
        bullets: [
          "Blockage at the proximal (uterine) end of the tube",
          "A single blocked tube with a healthy ovary on that side",
          "No severe pelvic adhesions or hydrosalpinx",
          "A partner with normal semen parameters",
        ],
      },
      {
        title: "What the procedure involves",
        body: "Under fluoroscopic or hysteroscopic guidance, a thin catheter and guidewire are advanced into the tube. Contrast confirms whether the tube is open. The procedure takes about 30 minutes and you go home the same day.",
      },
      {
        title: "When IVF is the better choice",
        body: "If the tube is damaged along its length, filled with fluid (hydrosalpinx), or surrounded by dense adhesions, recanalization is unlikely to help. IVF bypasses the tube entirely and is often more predictable.",
      },
    ],
    faqs: [
      {
        q: "How soon can we try to conceive?",
        a: "Usually in the next cycle, once your doctor confirms the tube is open.",
      },
      {
        q: "Can the tube block again?",
        a: "Yes, re-blockage is possible. Your consultant will monitor and discuss options if it recurs.",
      },
      {
        q: "Is the procedure painful?",
        a: "Most women feel cramping during and shortly after the procedure. Simple analgesia is usually enough.",
      },
    ],
    related: ["in-vitro-fertilization-ivf", "female-infertility", "hysteroscopy"],
  },
];

export const treatmentBySlug = (slug: string) =>
  treatments.find((t) => t.slug === slug);
