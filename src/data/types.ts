export type Faq = { q: string; a: string };

export type Section = {
  title: string;
  body?: string;
  bullets?: string[];
  note?: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  shortTitle?: string;
  eyebrow: string;
  summary: string;
  metaTitle?: string;
  metaDescription?: string;
  intro: string[];
  highlights?: { label: string; value: string }[];
  sections: Section[];
  faqs?: Faq[];
  icon: string;
  related?: string[];
};

export type Centre = {
  slug: string;
  city: string;
  title: string;
  address: string[];
  phone: string;
  phoneHref: string;
  timings: { day: string; time: string }[];
  summary: string;
  intro: string[];
  facilities: string[];
  directions?: string;
  mapUrl?: string;
};

export type AcademicProgram = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  eligibility: string;
  accreditation?: string;
  intro: string[];
  curriculum: { title: string; body: string }[];
  highlights: string[];
  faqs?: Faq[];
};
