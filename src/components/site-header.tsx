"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";
import { navigation, site } from "@/data/site";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-ink/8 bg-cream/97 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            aria-label="GBR Fertility Centre — home"
            className="shrink-0 rounded-lg transition-opacity hover:opacity-80"
          >
            <Logo href={null} priority className="h-8 w-auto md:h-9" />
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            {navigation.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              const hasItems = "items" in item && item.items?.length;

              if (!hasItems) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[0.85rem] transition-colors xl:px-3.5",
                      active
                        ? "text-teal-deep"
                        : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-teal-deep/60"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="group relative shrink-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[0.85rem] transition-colors xl:px-3.5",
                      active
                        ? "text-teal-deep"
                        : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3 opacity-50 transition-transform duration-300 group-hover:rotate-180" />
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-teal-deep/60"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>

                  <div className="pointer-events-none absolute left-1/2 top-full z-20 w-[30rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-3xl border border-ink/8 bg-cream shadow-lift">
                      <div className="grid grid-cols-2 gap-0.5 p-3">
                        {item.items?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="group/link flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-[0.88rem] text-ink-soft transition-colors hover:bg-cream-deep/70 hover:text-ink"
                          >
                            <span className="line-clamp-1">{sub.label}</span>
                            <ArrowUpRight className="size-3 shrink-0 -translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-60" />
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between gap-3 border-t border-ink/8 bg-cream-deep/40 px-6 py-3.5 text-[0.8rem] font-medium text-ink transition-colors hover:bg-cream-deep"
                      >
                        View all {item.label.toLowerCase()}
                        <ArrowUpRight className="size-3.5 text-teal-deep" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden xl:inline-flex h-10 gap-2 pr-4 pl-3 text-[0.82rem]"
            >
              <a href={site.phoneHref}>
                <Phone className="size-3.5 text-teal" />
                {site.phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon-sm"
              className="hidden md:inline-flex xl:hidden"
            >
              <a href={site.phoneHref} aria-label={`Call ${site.phone}`}>
                <Phone className="size-4 text-teal" />
              </a>
            </Button>

            <Button
              asChild
              variant="accent"
              size="sm"
              className="hidden h-10 whitespace-nowrap px-5 text-[0.82rem] sm:inline-flex"
            >
              <Link href="/book">Book a consultation</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(92vw,26rem)] gap-0 p-0">
                <SheetHeader className="border-b border-ink/8 px-6 pb-5 pt-6">
                  <SheetTitle className="font-display text-2xl">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-6">
                  <Accordion type="multiple" className="w-full">
                    {navigation.map((item) => {
                      const hasItems = "items" in item && item.items?.length;
                      if (!hasItems) {
                        return (
                          <div
                            key={item.href}
                            className="border-b border-ink/10"
                          >
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="flex items-center justify-between py-5 font-display text-[1.4rem] text-ink"
                              >
                                {item.label}
                                <ArrowUpRight className="size-4 text-ink-mute" />
                              </Link>
                            </SheetClose>
                          </div>
                        );
                      }
                      return (
                        <AccordionItem key={item.href} value={item.href}>
                          <AccordionTrigger className="py-5 font-display text-[1.4rem] hover:no-underline">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 pl-0">
                            <div className="grid gap-0.5">
                              <SheetClose asChild>
                                <Link
                                  href={item.href}
                                  className="rounded-lg px-1 py-2 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-teal-deep"
                                >
                                  View all {item.label.toLowerCase()}
                                </Link>
                              </SheetClose>
                              {item.items?.map((sub) => (
                                <SheetClose asChild key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className="rounded-lg px-1 py-2 text-[0.95rem] text-ink-soft"
                                  >
                                    {sub.label}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>

                <div className="mt-6 grid gap-2.5 border-t border-ink/10 p-6">
                  <SheetClose asChild>
                    <Button asChild variant="accent" size="lg">
                      <Link href="/book">Book a consultation</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="outline" size="lg">
                      <a href={site.phoneHref}>
                        <Phone className="size-4 text-teal" /> {site.phone}
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-teal/25 to-transparent"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
