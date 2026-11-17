"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Carries the journey story past the sticky animation: a hairline thread in
 * the page margin whose fill and travelling embryo follow the reader down to
 * the closing call to action. Purely decorative — hidden below xl.
 */
export function JourneyThread({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.9"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const dotTop = useTransform(fill, (value) => `${value * 100}%`);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-5 z-0 hidden w-8 xl:block"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="relative h-[52vh] w-px bg-ink/15">
            <motion.span
              style={{ scaleY: fill }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-teal/45 via-teal/60 to-pink/70"
            />
            <motion.span
              style={{ top: dotTop }}
              className="absolute left-1/2 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-deep ring-4 ring-teal/10"
            />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
