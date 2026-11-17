import type { ContentPage } from "./types";

export const conditions: ContentPage[] = [
  {
    slug: "pcos",
    title: "Polycystic Ovary Syndrome (PCOS)",
    shortTitle: "PCOS",
    eyebrow: "Condition",
    icon: "orbit",
    summary:
      "Irregular cycles, insulin resistance and difficult ovulation — PCOS is manageable, and most women with it can conceive with the right plan.",
    intro: [
      "PCOS is one of the most common hormonal conditions in women of reproductive age. It affects how the ovaries ovulate, how the body handles insulin, and sometimes how pregnancy progresses.",
      "It is also one of the most treatable causes of infertility. The key is treating the whole picture, not just the missing period.",
    ],
    highlights: [
      { label: "Prevalence", value: "1 in 10 women" },
      { label: "Common sign", value: "Irregular cycles" },
      { label: "Outlook", value: "Highly treatable" },
    ],
    sections: [
      {
        title: "What is happening in your body",
        body: "In PCOS, eggs often mature but do not release. Hormones such as LH and testosterone can be elevated, and insulin resistance pushes the body to store fat and produce more androgens. The result is irregular ovulation, acne, unwanted hair growth and sometimes weight gain.",
      },
      {
        title: "How we diagnose it",
        bullets: [
          "Cycle history and clinical signs",
          "Pelvic ultrasound for ovarian morphology",
          "LH, FSH, testosterone, AMH and thyroid function",
          "Fasting glucose, insulin and lipid profile",
        ],
      },
      {
        title: "Treatment, step by step",
        bullets: [
          "Lifestyle and nutrition: even 5–10% weight loss can restore ovulation",
          "Metformin or inositol to improve insulin sensitivity",
          "Letrozole or clomiphene for ovulation induction",
          "IUI or IVF when ovulation induction alone is not enough",
          "Frozen embryo transfer and OHSS prevention in high responders",
        ],
      },
      {
        title: "PCOS and pregnancy",
        body: "Women with PCOS have a higher risk of gestational diabetes, high blood pressure and preterm birth. We plan antenatal care with that in mind, including early glucose screening and closer growth monitoring.",
      },
    ],
    faqs: [
      {
        q: "Can I get pregnant with PCOS?",
        a: "Yes. Most women with PCOS conceive with lifestyle change, ovulation induction, IUI or IVF. PCOS is a cause of infertility, not a barrier to parenthood.",
      },
      {
        q: "Do I need IVF for PCOS?",
        a: "Usually not. Ovulation induction and IUI work for many women. IVF is considered when those fail or when there are other factors.",
      },
      {
        q: "Will losing weight really help?",
        a: "For many women, yes. A 5–10% reduction in body weight can restore regular ovulation and improve IVF outcomes.",
      },
    ],
    related: ["female-infertility", "in-vitro-fertilization-ivf", "intrauterine-insemination-iui"],
  },
  {
    slug: "endometriosis",
    title: "Endometriosis",
    shortTitle: "Endometriosis",
    eyebrow: "Condition",
    icon: "ribbon",
    summary:
      "Painful periods and unexplained infertility often share one cause. We diagnose endometriosis properly and treat it with fertility preservation in mind.",
    intro: [
      "Endometriosis is a chronic condition in which tissue similar to the uterine lining grows outside the uterus — on the ovaries, tubes, bowel or pelvic wall.",
      "It can cause severe pain, and it can damage fertility. But with the right diagnosis and surgery, many women conceive naturally or with IVF.",
    ],
    highlights: [
      { label: "Diagnosis delay", value: "7–10 years (global)" },
      { label: "Symptoms", value: "Pain, heavy periods" },
      { label: "Treatment", value: "Excision + IVF" },
    ],
    sections: [
      {
        title: "Signs to take seriously",
        bullets: [
          "Period pain that stops you from working or studying",
          "Pain during intercourse or with bowel movements",
          "Heavy or prolonged bleeding",
          "Chronic pelvic pain",
          "Difficulty conceiving with no other explanation",
        ],
      },
      {
        title: "How endometriosis affects fertility",
        body: "Endometriosis can distort pelvic anatomy, block tubes, reduce egg quality and create an inflammatory environment that affects implantation. The stage does not always match the symptoms — severe pain can occur with minimal disease, and extensive disease can be silent.",
      },
      {
        title: "Our approach",
        bullets: [
          "Diagnosis by clinical assessment, ultrasound and MRI where needed",
          "Laparoscopic excision of endometriosis by a trained surgeon",
          "Ovarian tissue preservation during cystectomy",
          "Ovulation suppression before IVF in selected cases",
          "Individualised IVF protocols for endometriosis",
        ],
      },
      {
        title: "A realistic plan",
        body: "Surgery can improve natural conception in mild to moderate disease. In severe disease or after surgery, IVF is often the faster and more predictable route. We discuss both honestly, including the risk of recurrence.",
      },
    ],
    faqs: [
      {
        q: "Can endometriosis be cured?",
        a: "There is no permanent cure, but excision surgery and hormonal management can control symptoms and improve fertility for long periods.",
      },
      {
        q: "Should I have surgery before IVF?",
        a: "Not always. It depends on symptoms, cyst size and prior surgery. We individualise the decision.",
      },
      {
        q: "Does pregnancy cure endometriosis?",
        a: "No. Symptoms may improve during pregnancy, but the disease can return afterwards.",
      },
    ],
    related: ["laparoscopy", "female-infertility", "in-vitro-fertilization-ivf"],
  },
  {
    slug: "poor-ovarian-reserve",
    title: "Poor Ovarian Reserve",
    shortTitle: "Poor Ovarian Reserve",
    eyebrow: "Condition",
    icon: "hourglass",
    summary:
      "Fewer eggs does not mean no hope. We assess your reserve accurately and choose a protocol that gives every remaining egg the best chance.",
    intro: [
      "Ovarian reserve is the number of eggs you have left. It declines with age, and in some women it declines earlier than expected.",
      "A low AMH or a low antral follicle count can be frightening. It is a measure of quantity, not a verdict on quality — and it changes the strategy, not the goal.",
    ],
    highlights: [
      { label: "Tests", value: "AMH + AFC" },
      { label: "Key message", value: "Quantity ≠ quality" },
      { label: "Strategy", value: "Gentle stimulation" },
    ],
    sections: [
      {
        title: "How we measure reserve",
        bullets: [
          "AMH blood test — usable at any point in the cycle",
          "Antral follicle count on day 2–3 ultrasound",
          "FSH and oestradiol where needed",
          "Response to previous stimulation cycles",
        ],
      },
      {
        title: "What it means for treatment",
        body: "With a low reserve, the aim is to collect a small number of good eggs rather than chase a high number. We use gentler stimulation, consider mild IVF protocols, and discuss embryo banking over several cycles where appropriate.",
      },
      {
        title: "Options when reserve is very low",
        bullets: [
          "Modified natural or mild stimulation IVF",
          "Embryo accumulation across cycles",
          "Donor eggs, if own eggs are no longer viable",
          "Honest discussion of when to stop and change direction",
        ],
      },
    ],
    faqs: [
      {
        q: "Does low AMH mean I cannot get pregnant?",
        a: "No. Women with low AMH do conceive, both naturally and with IVF. AMH predicts response to stimulation better than it predicts pregnancy.",
      },
      {
        q: "Can I improve my ovarian reserve?",
        a: "No treatment reliably increases egg numbers. Supplements and lifestyle changes may support quality, but they do not restore reserve.",
      },
      {
        q: "Is IVF worth trying with very low reserve?",
        a: "It can be, especially if you are under 40 and have some follicles. Success is lower, and we will discuss realistic expectations and alternatives.",
      },
    ],
    related: ["premature-ovarian-failure", "in-vitro-fertilization-ivf", "fertility-preservation"],
  },
  {
    slug: "premature-ovarian-failure",
    title: "Premature Ovarian Failure",
    shortTitle: "POF",
    eyebrow: "Condition",
    icon: "clock",
    summary:
      "When ovarian function stops before 40, the diagnosis is life-changing — but donor eggs, hormone support and counselling can still build a family.",
    intro: [
      "Premature ovarian failure — now often called primary ovarian insufficiency — means the ovaries stop producing eggs and hormones before the age of 40.",
      "It affects about 1% of women. It can be caused by genetics, autoimmune disease, surgery or cancer treatment, but in many cases no cause is found.",
    ],
    highlights: [
      { label: "Definition", value: "Before age 40" },
      { label: "Key tests", value: "FSH, AMH, karyotype" },
      { label: "Path to parenthood", value: "Donor eggs" },
    ],
    sections: [
      {
        title: "How it is diagnosed",
        bullets: [
          "Missed or infrequent periods for at least four months",
          "FSH above 40 on two occasions, several weeks apart",
          "Low AMH and low antral follicle count",
          "Karyotype, autoimmune screen and thyroid testing to find a cause",
        ],
      },
      {
        title: "What it means for your health",
        body: "Beyond fertility, low oestrogen affects bone density, heart health and wellbeing. Hormone replacement is usually recommended until the natural age of menopause, and we coordinate that with your physician.",
      },
      {
        title: "Building a family",
        body: "If a few follicles remain, IVF with your own eggs may occasionally be possible. For most women, donor eggs offer the highest chance of pregnancy. Surrogacy may be considered where carrying a pregnancy is not medically advisable.",
      },
      {
        title: "The emotional side",
        body: "A POF diagnosis can feel like grief. Counselling is part of the plan, not an afterthought, and we give you time before asking you to decide anything.",
      },
    ],
    faqs: [
      {
        q: "Can POF be reversed?",
        a: "In rare cases, ovarian function can fluctuate or return briefly. There is no reliable treatment to restore it.",
      },
      {
        q: "Can I still carry a pregnancy?",
        a: "Often yes, with donor eggs and hormone preparation of the uterus, provided there is no medical contraindication.",
      },
      {
        q: "Is POF hereditary?",
        a: "Some causes are genetic. Karyotyping and genetic counselling can clarify risk for relatives.",
      },
    ],
    related: ["donor-program", "poor-ovarian-reserve", "fertility-preservation"],
  },
  {
    slug: "recurrent-implantation-failure",
    title: "Recurrent Implantation Failure",
    shortTitle: "RIF",
    eyebrow: "Condition",
    icon: "repeat",
    summary:
      "Good embryos, repeated negative tests. RIF needs a systematic review of the embryo, the lining and the transfer — not another blind attempt.",
    intro: [
      "Recurrent implantation failure means repeated IVF transfers of good-quality embryos without a pregnancy. It is frustrating precisely because everything looked right.",
      "The answer is usually found by reviewing the whole cycle — embryo, lining, transfer technique and timing — rather than ordering every test available.",
    ],
    highlights: [
      { label: "Definition", value: "≥3 failed good-quality transfers" },
      { label: "Focus", value: "Embryo + lining + timing" },
      { label: "Approach", value: "Systematic review" },
    ],
    sections: [
      {
        title: "What we review",
        bullets: [
          "Embryo quality and whether PGT-A is appropriate",
          "Endometrial thickness, pattern and receptivity (ERA)",
          "Uterine cavity — polyps, adhesions, septum, chronic infection",
          "Transfer technique and catheter placement",
          "Thyroid, prolactin, clotting and immune factors where indicated",
        ],
      },
      {
        title: "What we avoid",
        body: "Routine immune testing, empiric steroids and unproven add-ons are not a substitute for a careful review. We use tests only when the result would change what we do next.",
      },
      {
        title: "A plan for the next cycle",
        body: "Sometimes the answer is a change in protocol. Sometimes it is surgery, ERA timing, PGT-A, or a different transfer strategy. Occasionally it is donor eggs. We present the evidence and decide together.",
      },
    ],
    faqs: [
      {
        q: "How many failed transfers before RIF is diagnosed?",
        a: "Most specialists use three or more failed transfers of good-quality embryos, though two may be enough to investigate in older women.",
      },
      {
        q: "Does ERA help?",
        a: "It can, in a subgroup of women whose implantation window is displaced. It is not a universal fix.",
      },
      {
        q: "Should we change clinics?",
        a: "Not necessarily. A structured review of your records and a clear plan can often achieve more than starting over.",
      },
    ],
    related: ["era-prp", "recurrent-ivf-failure", "hysteroscopy"],
  },
  {
    slug: "recurrent-ivf-failure",
    title: "Recurrent IVF Failure",
    shortTitle: "Recurrent IVF Failure",
    eyebrow: "Condition",
    icon: "rotate-ccw",
    summary:
      "Several cycles, no pregnancy. We audit every previous cycle to find what was missed and design a different, evidence-based next attempt.",
    intro: [
      "Going through IVF more than once without success is exhausting — emotionally, physically and financially. Repeating the same protocol rarely changes the outcome.",
      "Our recurrent IVF failure clinic reviews your full history: stimulation response, fertilisation, embryo development, transfer and luteal support.",
    ],
    highlights: [
      { label: "Review", value: "Every prior cycle" },
      { label: "Focus", value: "What can change" },
      { label: "Plan", value: "Written, costed" },
    ],
    sections: [
      {
        title: "What we examine",
        bullets: [
          "Was the diagnosis complete before the first cycle?",
          "Did you respond well to stimulation, and were doses optimal?",
          "Fertilisation and blastocyst rates — a lab or sperm issue?",
          "Was the embryo the best available, and was PGT considered?",
          "Was the lining adequate and the transfer straightforward?",
        ],
      },
      {
        title: "Common missed factors",
        body: "In our experience, a meaningful proportion of 'unexplained' failures have an identifiable contributor: undiagnosed endometriosis, a hydrosalpinx, a cavity abnormality, sperm DNA fragmentation, or simply a suboptimal stimulation protocol.",
      },
      {
        title: "Changing the plan, not just repeating it",
        body: "Your next cycle should look different because we learned something. That may mean a different protocol, surgery, PGT-A, ERA, ICSI, or a donor pathway. We put the reasoning and the costs in writing.",
      },
    ],
    faqs: [
      {
        q: "How many IVF cycles should we try?",
        a: "It depends on your age, embryo quality and response. There is no fixed number, but after two or three failed cycles the plan should be formally reviewed.",
      },
      {
        q: "Can changing the protocol improve success?",
        a: "Sometimes, yes. A poor responder may benefit from a different stimulation approach; a repeated implantation failure may need a lining review.",
      },
      {
        q: "Is it worth doing more tests?",
        a: "Only tests that change the plan are worth doing. We prioritise those.",
      },
    ],
    related: ["recurrent-implantation-failure", "in-vitro-fertilization-ivf", "genetic-testing-services"],
  },
  {
    slug: "male-infertility",
    title: "Male Infertility",
    shortTitle: "Male Infertility",
    eyebrow: "Condition",
    icon: "shield",
    summary:
      "Low count, poor motility or high DNA fragmentation — male infertility is common, investigable and often treatable.",
    metaTitle: "Male Infertility: Causes, Tests & Treatment",
    metaDescription:
      "What causes male infertility, which tests matter, and how low count, poor motility or high DNA fragmentation are treated — explained by the clinical team at GBR Fertility Centre.",
    intro: [
      "Male factors contribute to nearly half of all infertility. Yet it is still the most commonly skipped part of a fertility workup.",
      "A semen analysis is quick and inexpensive. When it is abnormal, we investigate why — and treat the cause where we can.",
    ],
    highlights: [
      { label: "Share of cases", value: "~50%" },
      { label: "First test", value: "Semen analysis" },
      { label: "Advanced", value: "DNA fragmentation" },
    ],
    sections: [
      {
        title: "What can go wrong",
        bullets: [
          "Low sperm count (oligospermia) or no sperm (azoospermia)",
          "Poor motility or abnormal shape",
          "High sperm DNA fragmentation",
          "Varicocele, infection or hormonal imbalance",
          "Obstruction after surgery or infection",
          "Genetic causes",
        ],
      },
      {
        title: "What we investigate",
        body: "We repeat the semen analysis if the first result is abnormal, then check hormones, scrotal ultrasound and — where indicated — DNA fragmentation and genetics. The cause determines whether we treat, bypass with ICSI, or retrieve sperm surgically.",
      },
      {
        title: "Treatment options",
        bullets: [
          "Lifestyle change, weight and heat exposure",
          "Varicocele repair",
          "Antibiotics for infection",
          "Hormonal correction",
          "ICSI with ejaculated or surgically retrieved sperm",
        ],
      },
    ],
    faqs: [
      {
        q: "Can male infertility be cured?",
        a: "Some causes — infection, varicocele, hormonal imbalance — can be treated. Others are managed with ICSI or sperm retrieval.",
      },
      {
        q: "How long does improvement take?",
        a: "Sperm production takes about three months, so re-testing is usually done after 12 weeks.",
      },
      {
        q: "Is DNA fragmentation tested routinely?",
        a: "Not routinely, but it is useful in unexplained infertility, recurrent loss and failed IVF.",
      },
    ],
    related: ["male-infertility-speciality", "icsi", "fertility-evaluation"],
  },
  {
    slug: "parenthood-after-40",
    title: "Parenthood After 40",
    shortTitle: "After 40",
    eyebrow: "Condition",
    icon: "sunrise",
    summary:
      "It is later than you planned — but it is not too late to get a clear answer. Honest assessment, tailored protocols and donor options if needed.",
    intro: [
      "Fertility declines with age, most sharply after 35. By 40, both egg quantity and quality are lower, and miscarriage risk is higher.",
      "None of that means pregnancy is impossible. It means the assessment needs to be faster and the plan more focused.",
    ],
    highlights: [
      { label: "Key test", value: "AMH + AFC" },
      { label: "Timeline", value: "Decide quickly" },
      { label: "Options", value: "Own or donor eggs" },
    ],
    sections: [
      {
        title: "What changes after 40",
        bullets: [
          "Fewer eggs and more chromosomal abnormalities in embryos",
          "Lower IVF success per cycle, especially with own eggs",
          "Higher miscarriage and aneuploidy risk",
          "More chance of fibroids, endometriosis and medical conditions",
        ],
      },
      {
        title: "The assessment",
        body: "AMH, antral follicle count, thyroid and general health screening give a realistic picture within a week or two. We do not ask you to wait six months to 'keep trying' if the numbers suggest otherwise.",
      },
      {
        title: "Your options, honestly",
        bullets: [
          "IVF with your own eggs, with PGT-A considered",
          "Donor eggs, which offer the highest success rates at this age",
          "Embryo donation or surrogacy where medically indicated",
          "Stopping treatment, with counselling and closure",
        ],
      },
      {
        title: "Pregnancy care after 40",
        body: "If you conceive, you will need closer antenatal monitoring for blood pressure, diabetes and fetal growth. Our obstetric team plans that from the first visit.",
      },
    ],
    faqs: [
      {
        q: "Can I get pregnant naturally at 42?",
        a: "It is possible but uncommon. The chance per cycle is low, and the miscarriage risk is higher. Testing your reserve gives you a clearer picture.",
      },
      {
        q: "Is IVF with my own eggs worth trying?",
        a: "It can be, depending on your AMH and follicle count. We will give you a realistic estimate before you commit.",
      },
      {
        q: "Are donor eggs successful at 45?",
        a: "Donor egg pregnancy rates remain strong into the mid-40s, provided your health and uterus are suitable.",
      },
    ],
    related: ["poor-ovarian-reserve", "donor-program", "premature-ovarian-failure"],
  },
];

export const conditionBySlug = (slug: string) =>
  conditions.find((c) => c.slug === slug);
