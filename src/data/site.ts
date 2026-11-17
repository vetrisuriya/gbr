export const site = {
  name: "GBR Fertility Centre",
  shortName: "GBR",
  // Canonical origin for metadata, JSON-LD, sitemap and robots.
  // Change this in one place if the production domain ever changes.
  url: "https://gbrclinic.com",
  tagline: "Where hope becomes a heartbeat.",
  description:
    "GBR Fertility Centre is a leading fertility and IVF centre in Chennai, Thirupattur and Nellore — offering compassionate, evidence-based reproductive care for every stage of your journey.",
  phone: "+91 99401 05555",
  phoneHref: "tel:+919940105555",
  whatsapp: "https://wa.me/919940105555",
  email: "contact@gbrclinic.com",
  emailHref: "mailto:contact@gbrclinic.com",
  address: {
    line1: "HIG – 1027, 6th Main Road",
    line2: "Mugappair Eri Scheme, Mugappair West",
    city: "Chennai",
    state: "Tamil Nadu",
    pin: "600 037",
    country: "India",
  },
  mapsUrl: "https://maps.app.goo.gl/S75g5stJiRTiuj9G9",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "9:00 AM – 1:00 PM" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/gbrfertilitycentre.chennai/" },
    { label: "Facebook", href: "https://www.facebook.com/people/GBR-Fertility-Centre-Chennai/61575082950034/" },
    { label: "YouTube", href: "https://www.youtube.com/@gbrfertilitycentre" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/gbrfertilitycentre/" },
  ],
  established: 2005,
  // Static copyright year so the layout stays prerenderable under Cache Components.
  currentYear: 2026,
  stats: [
    { value: "20+", label: "Years of care" },
    { value: "1 lakh+", label: "Happy patients" },
    { value: "10k+", label: "Babies born" },
    { value: "3", label: "Centres across South India" },
  ],
};

export const doctors = [
  {
    name: "Dr G Buvaneswari",
    slug: "dr-g-buvaneswari",
    role: "Clinical Lead & Medical Director",
    qualification: "MBBS, DGO, DNB (OG), Dip ALS (Germany), AMRCOG (UK), FICOG",
    speciality: "Infertility Specialist, Laparoscopic & Robotic Surgeon",
    photo: "/brand/dr-buvaneswari.jpg",
    bio: [
      "Dr G Buvaneswari has spent more than two decades helping families grow. As the Clinical Lead and Medical Director of GBR Fertility Centre, she combines advanced reproductive medicine with a deeply personal, patient-first approach.",
      "A recipient of the IMA Honorary Professor award and the Good Doctor Award for excellence in fertility care, she leads a team of fertility specialists, embryologists, counsellors and nurses across Chennai, Thirupattur and Nellore.",
    ],
    expertise: [
      "IVF, ICSI and fertility preservation",
      "Laparoscopic and robotic fertility surgery",
      "PCOS, endometriosis and recurrent implantation failure",
      "Oncofertility and fertility counselling",
    ],
    memberships: [
      "Fellow, Indian College of Obstetricians and Gynaecologists (FICOG)",
      "Association of Medical Consultants of the Royal College of Obstetricians (AMRCOG, UK)",
      "Diploma in Advanced Laparoscopic Surgery (Germany)",
    ],
    languages: ["English", "Tamil", "Telugu", "Hindi"],
  },
  {
    name: "Dr Sindhuja",
    slug: "dr-sindhuja",
    role: "Junior Consultant, Infertility",
    qualification: "MBBS, MS (OG), FRM",
    speciality: "Reproductive Medicine",
    photo: null,
    bio: [
      "Dr Sindhuja supports the fertility team with a focus on ovulation induction, IUI cycles and early pregnancy care. She is known for the time she takes to explain every step of treatment.",
    ],
    expertise: ["Ovulation induction", "IUI", "Early pregnancy monitoring"],
    memberships: [],
    languages: ["English", "Tamil"],
  },
];

export const testimonials = [
  {
    quote:
      "Myself and my wife were married for 8 years. With a couple of miscarriages early in the first trimester we were completely devastated. By god's grace a family friend referred Dr Buvaneswari madam. After proper tests and guidance, we were blessed with a baby boy. GBR means a lot personally to us.",
    name: "Rajan Raghuraman",
    context: "After 8 years and recurrent loss",
  },
  {
    quote:
      "My mother was admitted with cyst pain. Doctor visited the same night, tests were done the next day, and laparoscopy was performed by Dr G Bhuvaneshwari. Patient started walking within 6 hours of surgery. The care from the duty nurses and doctors was extremely helpful.",
    name: "Nithish Yogith",
    context: "Laparoscopic surgery",
  },
  {
    quote:
      "We did not have a baby for 7 years. We went to many hospitals but GBR gave us our dream after laparoscopy and tubal block removal surgery by Dr G Buvaneswari. Today we are pregnancy positive. The hospital environment and staff are very friendly.",
    name: "Priya Sathishkumar",
    context: "Tubal recanalisation",
  },
];

export const trustPoints = [
  {
    title: "Fertility-only focus",
    body: "Every protocol, scan and lab decision is built around one goal — a healthy pregnancy.",
  },
  {
    title: "Senior specialists",
    body: "Your care is led by consultants with 20+ years of reproductive medicine experience.",
  },
  {
    title: "Advanced IVF laboratory",
    body: "Time-lapse incubation, AI-assisted embryo grading, laser hatching and vitrification in-house.",
  },
  {
    title: "Transparent pricing",
    body: "Package costs are explained in writing before you begin. No hidden add-ons.",
  },
];

export const navigation = [
  {
    label: "Specialities",
    href: "/specialities",
    items: [
      { label: "Fertility Evaluation", href: "/specialities/fertility-evaluation" },
      { label: "Female Infertility", href: "/specialities/female-infertility" },
      { label: "Male Infertility", href: "/specialities/male-infertility" },
      { label: "Fertility Preservation", href: "/specialities/fertility-preservation" },
      { label: "Donor Program", href: "/specialities/donor-program" },
      { label: "Surrogacy Program", href: "/specialities/surrogacy-program" },
      { label: "Gynecology", href: "/specialities/gynecology-services" },
      { label: "Obstetrics", href: "/specialities/obstetrics-services" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatments",
    items: [
      { label: "IUI", href: "/treatments/intrauterine-insemination-iui" },
      { label: "IVF", href: "/treatments/in-vitro-fertilization-ivf" },
      { label: "ICSI", href: "/treatments/icsi" },
      { label: "FET", href: "/treatments/frozen-embryo-transfer-fet" },
      { label: "Laser-Assisted Hatching", href: "/treatments/laser-assisted-hatching" },
      { label: "Genetic Testing", href: "/treatments/genetic-testing-services" },
      { label: "ERA & PRP", href: "/treatments/era-prp" },
      { label: "Laparoscopy", href: "/treatments/laparoscopy" },
      { label: "Hysteroscopy", href: "/treatments/hysteroscopy" },
      { label: "Myomectomy", href: "/treatments/myomectomy" },
      { label: "Tubal Recanalization", href: "/treatments/tubal-recanalization" },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions",
    items: [
      { label: "PCOS", href: "/conditions/pcos" },
      { label: "Endometriosis", href: "/conditions/endometriosis" },
      { label: "Poor Ovarian Reserve", href: "/conditions/poor-ovarian-reserve" },
      { label: "Premature Ovarian Failure", href: "/conditions/premature-ovarian-failure" },
      { label: "Recurrent Implantation Failure", href: "/conditions/recurrent-implantation-failure" },
      { label: "Recurrent IVF Failure", href: "/conditions/recurrent-ivf-failure" },
      { label: "Male Infertility", href: "/conditions/male-infertility" },
      { label: "Parenthood After 40", href: "/conditions/parenthood-after-40" },
    ],
  },
  { label: "Centres", href: "/centres" },
  { label: "Academics", href: "/academics" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/blog" },
];
