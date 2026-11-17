import type { Centre } from "./types";

export const centres: Centre[] = [
  {
    slug: "chennai",
    city: "Chennai",
    title: "GBR Fertility Centre, Chennai",
    address: [
      "HIG – 1027, 6th Main Road",
      "Mugappair Eri Scheme, Mugappair West",
      "Chennai, Tamil Nadu 600 037",
    ],
    phone: "+91 99401 05555",
    phoneHref: "tel:+919940105555",
    timings: [
      { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
      { day: "Sunday", time: "9:00 AM – 1:00 PM" },
    ],
    summary:
      "Our flagship tertiary fertility centre — full IVF laboratory, day-care surgical suite and the senior consultant team, all under one roof in Mugappair West.",
    intro: [
      "Chennai is where GBR began, and it remains the centre of everything we do. The Mugappair West facility brings consultation rooms, a full-service embryology laboratory, a day-care theatre, a scan suite and counselling space into a single building — so most of your journey happens without travelling between locations.",
      "This is our highest-volume centre and the one that handles complex cases: repeated IVF failure, severe endometriosis, fertility-sparing surgery, oncofertility and third-party reproduction. If your case needs a multidisciplinary review, it happens here.",
    ],
    facilities: [
      "Level 2 IVF and ICSI laboratory with time-lapse incubation",
      "Laser-assisted hatching, vitrification and embryo banking",
      "Day-care laparoscopy and hysteroscopy theatre",
      "In-house andrology lab with sperm DNA fragmentation testing",
      "3D/4D ultrasound and follicular monitoring suite",
      "Counselling and fertility nutrition clinic",
      "Dedicated academic training wing for fellows and embryologists",
    ],
    directions:
      "Five minutes from Mugappair West bus depot and easily reached from Anna Nagar, Ambattur, Koyambedu and Padi. Parking is available on site.",
    mapUrl: "https://maps.app.goo.gl/S75g5stJiRTiuj9G9",
  },
  {
    slug: "thirupattur",
    city: "Thirupattur",
    title: "GBR Fertility Centre, Thirupattur",
    address: ["GBR Fertility Centre", "Thirupattur, Tamil Nadu"],
    phone: "+91 99401 05555",
    phoneHref: "tel:+919940105555",
    timings: [
      { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
      { day: "Sunday", time: "By appointment" },
    ],
    summary:
      "A district-level fertility clinic bringing GBR's consultation, scanning and IUI services closer to families in the Tirupattur and Vellore belt.",
    intro: [
      "Couples in the Tirupattur district often travel three hours to Chennai for a single scan. Our Thirupattur centre exists so that the first half of the journey — investigation, ovulation tracking and IUI — can happen close to home.",
      "The clinic runs the same protocols and the same record system as Chennai, with consultant visits scheduled through the week. When a case needs IVF or surgery, we coordinate the transfer to Chennai directly, with your notes and scans already reviewed.",
    ],
    facilities: [
      "Fertility consultation and second-opinion clinic",
      "Follicular monitoring and obstetric ultrasound",
      "IUI and ovulation induction cycles",
      "Semen analysis and basic andrology",
      "Antenatal and gynecology check-ups",
      "Direct referral pathway to the Chennai IVF laboratory",
    ],
    directions:
      "Located in Thirupattur town, within reach of Vaniyambadi, Ambur, Jolarpettai and the Vellore district. Call ahead for the day's consultant schedule.",
  },
  {
    slug: "nellore",
    city: "Nellore",
    title: "GBR Fertility Centre, Nellore",
    address: ["GBR Fertility Centre", "Nellore, Andhra Pradesh"],
    phone: "+91 99401 05555",
    phoneHref: "tel:+919940105555",
    timings: [
      { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
      { day: "Sunday", time: "By appointment" },
    ],
    summary:
      "Our Andhra Pradesh centre, serving Nellore and the surrounding coastal districts with Telugu-speaking fertility consultation and treatment support.",
    intro: [
      "Nellore is our bridge to Andhra Pradesh. Many of the families we see here have already spent years travelling between specialists in three cities; the centre gives them one team, one set of records and one plan.",
      "Consultations, scans and IUI cycles are delivered locally in Telugu and English. Advanced IVF, genetic testing and fertility-sparing surgery are performed in Chennai, with travel and admission planned in advance so you are not arranging logistics at short notice.",
    ],
    facilities: [
      "Telugu and English fertility consultations",
      "Transvaginal scan and follicular monitoring",
      "IUI, ovulation induction and cycle tracking",
      "PCOS and male infertility assessment",
      "Pregnancy confirmation and early antenatal care",
      "Coordinated IVF and surgery scheduling in Chennai",
    ],
    directions:
      "Accessible from Nellore city and the surrounding mandals, including Kavali, Kovur and Podalakur. Call for the current consultation timetable before travelling.",
  },
];

export const centreBySlug = (slug: string) =>
  centres.find((c) => c.slug === slug);
