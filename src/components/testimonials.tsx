"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const go = (dir: number) =>
    setI((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
      <div className="min-h-[15rem]">
        <Quote className="size-7 text-pink/60" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="mt-6 max-w-3xl font-display text-[1.4rem] leading-[1.45] text-cream sm:text-[1.7rem] md:text-[2rem]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-sm">
              <span className="grid size-9 place-items-center rounded-full bg-teal/20 text-xs font-medium text-teal-bright">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <span>
                <span className="block text-cream">{t.name}</span>
                <span className="block text-cream/45">{t.context}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3">
        <span className="mr-2 font-mono text-xs text-cream/40">
          {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-teal-bright hover:text-teal-bright"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-teal-bright hover:text-teal-bright"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
