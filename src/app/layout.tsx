import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/data/site";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GBR Fertility Centre | IVF & Fertility Care in Chennai",
    template: "%s | GBR Fertility Centre",
  },
  description: site.description,
  keywords: [
    "fertility centre Chennai",
    "IVF Chennai",
    "infertility treatment",
    "ICSI",
    "IUI",
    "PCOS treatment",
    "fertility specialist Chennai",
    "GBR Fertility Centre",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "GBR Fertility Centre | Where hope becomes a heartbeat",
    description: site.description,
    images: [{ url: "/brand/family.jpg", width: 2560, height: 1440, alt: "A family supported by GBR Fertility Centre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBR Fertility Centre | IVF & Fertility Care in Chennai",
    description: site.description,
    images: ["/brand/family.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
