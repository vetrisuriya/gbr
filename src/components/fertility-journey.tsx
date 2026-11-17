"use client";

import { useEffect, useRef, useSyncExternalStore, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Geometry: one cubic curve from the lower left into the womb         */
/* ------------------------------------------------------------------ */

const P: [number, number][] = [
  [96, 262],
  [190, 150],
  [250, 340],
  [316, 300],
];

const bez = (a: number, b: number, c: number, d: number, t: number) => {
  const mt = 1 - t;
  return (
    mt * mt * mt * a + 3 * mt * mt * t * b + 3 * mt * t * t * c + t * t * t * d
  );
};

const STEPS = 40;
const STOPS = Array.from({ length: STEPS + 1 }, (_, i) => i / STEPS);
const XS = STOPS.map((t) => bez(P[0][0], P[1][0], P[2][0], P[3][0], t));
const YS = STOPS.map((t) => bez(P[0][1], P[1][1], P[2][1], P[3][1], t));
const ROTS = STOPS.map((t) => {
  const t2 = Math.min(1, t + 0.012);
  const dx =
    bez(P[0][0], P[1][0], P[2][0], P[3][0], t2) -
    bez(P[0][0], P[1][0], P[2][0], P[3][0], t);
  const dy =
    bez(P[0][1], P[1][1], P[2][1], P[3][1], t2) -
    bez(P[0][1], P[1][1], P[2][1], P[3][1], t);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
});

const TRAIL = `M ${P[0][0]} ${P[0][1]} C ${P[1][0]} ${P[1][1]}, ${P[2][0]} ${P[2][1]}, ${P[3][0]} ${P[3][1]}`;

const WOMB =
  "M400 44 C552 44 644 158 636 300 C630 398 570 472 494 506 C460 522 444 552 440 596 L360 596 C356 552 340 522 306 506 C230 472 170 398 164 300 C156 158 248 44 400 44 Z";

const PARTICLES = Array.from({ length: 26 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const seed2 = (i * 4517 + 13337) % 199017;
  const r2 = seed2 / 199017;
  return {
    x: 30 + r * 740,
    y: 40 + r2 * 520,
    r: 0.8 + ((i * 7) % 10) / 6,
    delay: (i % 9) * 0.7,
    dur: 5 + (i % 5),
  };
});

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

/* How close a chapter card's centre is to the middle of the viewport.
   Drives the "current chapter" marker independently of the panel's scroll
   progress, so the highlight always matches the card you are reading. */
function useCardFocus(ref: RefObject<HTMLElement | null>) {
  const focus = useMotionValue(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const centre = rect.top + rect.height / 2;
      const distance = Math.abs(centre - window.innerHeight * 0.5);
      focus.set(Math.max(0.2, 1 - distance / (window.innerHeight * 0.45)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, focus]);

  return focus;
}

function Sperm({
  x,
  y,
  rotate,
  opacity,
  scale = 1,
  duration = 0.42,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotate: MotionValue<number>;
  opacity: MotionValue<number>;
  scale?: number;
  duration?: number;
}) {
  return (
    <motion.g style={{ x, y, rotate, opacity, scale }}>
      <g className="sperm-tail" style={{ animationDuration: `${duration}s` }}>
        <path
          d="M-9 0 C-24 -11, -42 11, -60 -3 S-86 7, -99 1"
          fill="none"
          stroke="url(#tailGrad)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
      <ellipse cx="1" cy="0" rx="11.5" ry="7.6" fill="url(#spermGrad)" />
      <ellipse cx="-1" cy="-2" rx="5" ry="2.6" fill="#ffffff" opacity="0.35" />
    </motion.g>
  );
}

function Cell({
  progress,
  start,
  cx,
  cy,
  r = 6.4,
}: {
  progress: MotionValue<number>;
  start: number;
  cx: number;
  cy: number;
  r?: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.02], [0, 1]);
  const scale = useTransform(progress, [start, start + 0.05], [0.1, 1], {
    clamp: true,
  });
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <motion.circle style={{ opacity, scale }} r={r} fill="url(#cellGrad)" />
      <motion.circle
        style={{ opacity, scale }}
        r={r * 0.42}
        fill="#fdf6ec"
        opacity={0.35}
      />
    </g>
  );
}

const CHAPTERS: {
  n: string;
  label: string;
  title: string;
  body: string;
  cta?: boolean;
}[] = [
  {
    n: "01",
    label: "Swim",
    title: "It begins with the smallest odds.",
    body: "Hundreds of millions start. A handful arrive. Everything we do in the laboratory exists to give that handful a fair chance.",
  },
  {
    n: "02",
    label: "Meet",
    title: "One sperm. One egg. One precise moment.",
    body: "Fertilisation is timing, temperature and pH — and an embryologist who knows when to intervene, and when to leave nature alone.",
  },
  {
    n: "03",
    label: "Divide",
    title: "By day three, eight cells.",
    body: "Time-lapse imaging lets us watch every division without opening the incubator. The embryo that finds a steady rhythm is the one we choose.",
  },
  {
    n: "04",
    label: "Implant",
    title: "Then, a place to belong.",
    body: "A good embryo needs a receptive lining. Thickness, pattern and timing are reviewed before a single transfer is scheduled.",
  },
  {
    n: "05",
    label: "Arrive",
    title: "And then, a heartbeat.",
    body: "Everything before this moment — the scans, the injections, the waiting — becomes a story you tell once, years later, to someone small.",
    cta: true,
  },
];

function Chapter({
  n,
  label,
  title,
  body,
  cta,
}: {
  n: string;
  label: string;
  title: string;
  body: string;
  cta?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const focus = useCardFocus(ref);
  const active = useTransform(focus, [0.2, 0.95], [0, 1]);
  const shift = useTransform(focus, [0.2, 1], [10, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ x: shift }}
      className="relative flex min-h-[36vh] flex-col justify-center border-l border-ink/10 py-12 pl-7 md:pl-10"
    >
      <motion.span
        aria-hidden
        style={{ opacity: active, scaleY: active }}
        className="absolute -left-px top-1/2 h-20 w-[2px] -translate-y-1/2 bg-teal"
      />
      <motion.span
        aria-hidden
        style={{ opacity: active }}
        className="absolute -left-[3px] top-1/2 size-[7px] -translate-y-1/2 rounded-full bg-teal-deep ring-2 ring-cream-deep"
      />
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-teal-deep/75">
        {n} / 05 — {label}
      </p>
      <h3 className="mt-3 max-w-md font-display text-[1.6rem] leading-[1.12] text-ink md:text-[1.95rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-[0.92rem] leading-[1.78] text-ink-soft">
        {body}
      </p>
      {cta && (
        <Link
          href="/book"
          className="mt-6 inline-flex w-fit items-center gap-2 border-b border-teal/30 pb-1 text-[0.82rem] font-medium text-teal-deep transition-colors hover:border-teal"
        >
          Start your own journey <ArrowUpRight className="size-3.5" />
        </Link>
      )}
    </motion.article>
  );
}

function PanelProgress({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute inset-x-7 bottom-4 z-20 h-[2px] overflow-hidden rounded-full bg-cream/12">
      <motion.div
        style={{ scaleX: progress }}
        className="h-full origin-left bg-gradient-to-r from-teal-bright/60 via-teal-bright to-pink"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Animated experience                                                 */
/* ------------------------------------------------------------------ */

/* The SVG scene's inline styles are derived from motion values at paint
   time, so they can only be rendered once the client has hydrated. */
const subscribe = () => () => {};
const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

/* ------------------------------------------------------------------ */
/* Scroll progress, measured directly from the section's rect          */
/* ------------------------------------------------------------------ */

function useSectionProgress(ref: RefObject<HTMLElement | null>) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const stage = el.querySelector<HTMLElement>("[data-journey-stage]");
      const panel = el.querySelector<HTMLElement>("[data-journey-panel]");
      if (!stage || !panel) return;

      const stageRect = stage.getBoundingClientRect();
      const panelHeight = panel.getBoundingClientRect().height;
      const stickyTop = parseFloat(getComputedStyle(panel).top) || 0;

      /* The panel is pinned for as long as its parent scrolls past it, so the
         sequence should run out exactly when it unpins. */
      const total = stageRect.height - panelHeight;
      const travelled = stickyTop - stageRect.top;
      const value = total > 0 ? Math.min(1, Math.max(0, travelled / total)) : 0;
      progress.set(value);
      if (process.env.NODE_ENV !== "production") {
        (
          window as unknown as { __journeyProgress?: number }
        ).__journeyProgress = value;
      }
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [progress, ref]);

  return progress;
}

function AnimatedJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const p = useSectionProgress(ref);
  const mounted = useHydrated();

  /* curve travel */
  const journey = useTransform(p, [0.05, 0.33], [0, 1], { clamp: true });
  const journey2 = useTransform(p, [0.05, 0.33], [0, 0.86], { clamp: true });
  const journey3 = useTransform(p, [0.05, 0.33], [0, 0.7], { clamp: true });

  const x1 = useTransform(journey, STOPS, XS);
  const y1 = useTransform(journey, STOPS, YS);
  const r1 = useTransform(journey, STOPS, ROTS);
  const x2 = useTransform(journey2, STOPS, XS);
  const y2 = useTransform(journey2, STOPS, YS);
  const r2 = useTransform(journey2, STOPS, ROTS);
  const x3 = useTransform(journey3, STOPS, XS);
  const y3 = useTransform(journey3, STOPS, YS);
  const r3 = useTransform(journey3, STOPS, ROTS);

  /* scenes */
  const spermOpacity = useTransform(p, [0.33, 0.37], [1, 0]);
  const followerOpacity = useTransform(p, [0.02, 0.24, 0.31], [0.55, 0.55, 0]);

  const wombDraw = useTransform(p, [0, 0.34], [0.5, 1]);
  const wombOpacity = useTransform(
    p,
    [0, 0.18, 0.8, 0.95],
    [0.55, 0.6, 0.5, 0],
  );

  const trailOpacity = useTransform(p, [0.14, 0.34, 0.44], [0.45, 0.4, 0]);

  const eggOpacity = useTransform(p, [0.38, 0.44], [1, 0]);
  const eggScale = useTransform(p, [0, 0.3, 0.4], [0.85, 1, 1.1]);
  const eggGlow = useTransform(p, [0, 0.33], [0.4, 0.65]);

  const flashOpacity = useTransform(p, [0.325, 0.35, 0.42], [0, 0.85, 0]);
  const flashScale = useTransform(p, [0.325, 0.42], [0.35, 2.6]);

  const clusterOpacity = useTransform(
    p,
    [0.36, 0.44, 0.66, 0.72],
    [0, 1, 1, 0],
  );
  const clusterX = useTransform(p, [0.46, 0.7], [0, 74]);
  const clusterY = useTransform(p, [0.46, 0.7], [0, -26]);
  const clusterScale = useTransform(p, [0.36, 0.46], [0.75, 1]);

  const implantOpacity = useTransform(p, [0.58, 0.7, 0.86], [0, 0.9, 0]);
  const implantScale = useTransform(p, [0.58, 0.86], [0.4, 1.8]);

  const warmOpacity = useTransform(p, [0.7, 0.92], [0, 1]);
  const svgFade = useTransform(p, [0.84, 0.96], [1, 0.15]);

  /* baby reveal */
  const babyOpacity = useTransform(p, [0.8, 0.88], [0, 1]);
  const babyScale = useTransform(p, [0.8, 1], [0.86, 1]);
  const babyBlur = useTransform(p, [0.8, 0.88], ["blur(10px)", "blur(0px)"]);

  return (
    <section
      ref={ref}
      id="journey"
      aria-label="How a pregnancy begins — an animated journey"
      className="relative border-y border-ink/8 bg-cream-deep py-20 md:py-28"
    >
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The journey</p>
            <h2 className="mt-3 max-w-xl font-display text-[2rem] leading-[1.08] text-balance md:text-[2.75rem]">
              From the smallest odds to a heartbeat.
            </h2>
          </div>
          <p className="max-w-xs text-[0.9rem] leading-relaxed text-ink-soft md:pb-2 md:text-right">
            Five moments decide it. Scroll to follow the handful of cells that
            make it home.
          </p>
        </div>

        <div
          data-journey-stage
          className="mt-12 lg:grid lg:grid-cols-[1fr_1.02fr] lg:items-start lg:gap-16"
        >
          <div
            data-journey-panel
            className="sticky top-[4.7rem] z-20 bg-cream-deep pb-6 lg:order-2 lg:top-24 lg:pb-0"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-teal-night ring-1 ring-ink/10">
              {/* ambient background */}
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,#0b4749_0%,#05262a_46%,#03191c_100%)]" />
              <motion.div
                aria-hidden
                style={{ opacity: warmOpacity }}
                className="absolute inset-0 bg-[radial-gradient(80%_60%_at_60%_45%,rgba(239,99,151,0.28)_0%,rgba(0,170,171,0.12)_45%,transparent_75%)]"
              />
              <div
                aria-hidden
                className="absolute -left-24 -top-20 size-72 rounded-full bg-teal/20 blur-[90px]"
              />
              <div
                aria-hidden
                className="absolute -bottom-24 -right-20 size-64 rounded-full bg-pink/10 blur-[90px]"
              />

              {mounted && (
                <motion.div
                  aria-hidden
                  style={{ opacity: svgFade }}
                  className="absolute inset-0"
                >
                  <svg
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid meet"
                    className="size-full"
                    role="presentation"
                  >
                    <defs>
                      <radialGradient id="spermGrad" cx="35%" cy="35%" r="75%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="55%" stopColor="#bff5ef" />
                        <stop offset="100%" stopColor="#5fded6" />
                      </radialGradient>
                      <linearGradient id="tailGrad" x1="1" y1="0" x2="0" y2="0">
                        <stop
                          offset="0%"
                          stopColor="#bff5ef"
                          stopOpacity="0.9"
                        />
                        <stop
                          offset="100%"
                          stopColor="#bff5ef"
                          stopOpacity="0.1"
                        />
                      </linearGradient>
                      <radialGradient id="eggGrad" cx="38%" cy="32%" r="72%">
                        <stop offset="0%" stopColor="#fff3e6" />
                        <stop offset="52%" stopColor="#f7c3a5" />
                        <stop offset="100%" stopColor="#e88b76" />
                      </radialGradient>
                      <radialGradient id="eggHalo" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#ef6397"
                          stopOpacity="0.42"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ef6397"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient id="cellGrad" cx="35%" cy="30%" r="75%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="60%" stopColor="#d8f7f1" />
                        <stop offset="100%" stopColor="#79e0d6" />
                      </radialGradient>
                      <radialGradient id="warmGrad" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#ffd9b8"
                          stopOpacity="0.9"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ffd9b8"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient id="innerWarm" cx="50%" cy="42%" r="60%">
                        <stop
                          offset="0%"
                          stopColor="#ffb9a1"
                          stopOpacity="0.12"
                        />
                        <stop
                          offset="55%"
                          stopColor="#ef6397"
                          stopOpacity="0.07"
                        />
                        <stop
                          offset="100%"
                          stopColor="#00aaab"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <filter
                        id="soft"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur stdDeviation="12" />
                      </filter>
                    </defs>

                    {/* drifting particles */}
                    <g opacity="0.5">
                      {PARTICLES.map((dot, i) => (
                        <circle
                          key={i}
                          cx={dot.x}
                          cy={dot.y}
                          r={dot.r}
                          fill="#bff5ef"
                          opacity={0.35}
                          className="animate-[drift_9s_ease-in-out_infinite_alternate]"
                          style={{
                            animationDelay: `${dot.delay}s`,
                            animationDuration: `${dot.dur}s`,
                          }}
                        />
                      ))}
                    </g>

                    {/* uterine outline */}
                    <motion.ellipse
                      cx="400"
                      cy="300"
                      rx="196"
                      ry="216"
                      fill="url(#innerWarm)"
                      style={{ opacity: wombOpacity }}
                    />
                    <motion.path
                      d={WOMB}
                      fill="none"
                      stroke="#7fe0d6"
                      strokeWidth="1.8"
                      strokeOpacity="0.7"
                      style={{ pathLength: wombDraw, opacity: wombOpacity }}
                    />

                    {/* travel trail */}
                    <motion.path
                      d={TRAIL}
                      fill="none"
                      stroke="#bff5ef"
                      strokeWidth="1.2"
                      strokeDasharray="2 9"
                      strokeLinecap="round"
                      style={{ opacity: trailOpacity }}
                    />

                    {/* egg */}
                    <g transform="translate(316 300)">
                      <motion.g
                        style={{ opacity: eggOpacity, scale: eggScale }}
                      >
                        <motion.circle
                          r="92"
                          fill="url(#eggHalo)"
                          style={{ opacity: eggGlow }}
                        />
                        <circle
                          r="52"
                          fill="none"
                          stroke="#f7c3a5"
                          strokeOpacity="0.3"
                        />
                        {Array.from({ length: 14 }).map((_, i) => {
                          const a = (i / 14) * Math.PI * 2;
                          return (
                            <circle
                              key={i}
                              cx={Math.cos(a) * 56}
                              cy={Math.sin(a) * 56}
                              r="2.6"
                              fill="#ffd9c4"
                              opacity={0.55}
                            />
                          );
                        })}
                        <circle r="34" fill="url(#eggGrad)" />
                        <circle
                          r="13"
                          cx="-8"
                          cy="-9"
                          fill="#ffffff"
                          opacity="0.35"
                        />
                      </motion.g>
                    </g>

                    {/* fertilisation flash */}
                    <g transform="translate(316 300)">
                      <motion.circle
                        r="26"
                        fill="none"
                        stroke="#fff3e6"
                        strokeWidth="2"
                        style={{ opacity: flashOpacity, scale: flashScale }}
                      />
                      <motion.circle
                        r="62"
                        fill="url(#eggHalo)"
                        style={{ opacity: flashOpacity }}
                      />
                    </g>

                    {/* dividing embryo */}
                    <motion.g
                      style={{
                        opacity: clusterOpacity,
                        x: clusterX,
                        y: clusterY,
                      }}
                    >
                      <g transform="translate(316 300)">
                        <motion.g style={{ scale: clusterScale }}>
                          <circle
                            r="62"
                            fill="none"
                            stroke="#9ef0e4"
                            strokeOpacity="0.2"
                          />
                          <Cell
                            progress={p}
                            start={0.39}
                            cx={-15}
                            cy={0}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.42}
                            cx={15}
                            cy={0}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.47}
                            cx={-5}
                            cy={-26}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.5}
                            cx={5}
                            cy={26}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.55}
                            cx={-31}
                            cy={-19}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.57}
                            cx={31}
                            cy={19}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.6}
                            cx={-27}
                            cy={23}
                            r={13}
                          />
                          <Cell
                            progress={p}
                            start={0.62}
                            cx={27}
                            cy={-23}
                            r={13}
                          />
                        </motion.g>
                      </g>
                    </motion.g>

                    {/* implantation */}
                    <g transform="translate(394 274)">
                      <motion.circle
                        r="34"
                        fill="url(#warmGrad)"
                        style={{ opacity: implantOpacity, scale: implantScale }}
                      />
                      <motion.circle
                        r="14"
                        fill="none"
                        stroke="#ffe6cf"
                        strokeWidth="1.2"
                        style={{ opacity: implantOpacity }}
                      />
                      {Array.from({ length: 10 }).map((_, i) => {
                        const a = (i / 10) * Math.PI * 2;
                        return (
                          <motion.circle
                            key={i}
                            cx={Math.cos(a) * 22}
                            cy={Math.sin(a) * 22}
                            r="2.2"
                            fill="#ffe6cf"
                            style={{ opacity: implantOpacity }}
                          />
                        );
                      })}
                    </g>

                    {/* sperm */}
                    <motion.g style={{ opacity: spermOpacity }}>
                      <Sperm
                        x={x3}
                        y={y3}
                        rotate={r3}
                        opacity={followerOpacity}
                        scale={0.85}
                        duration={0.52}
                      />
                      <Sperm
                        x={x2}
                        y={y2}
                        rotate={r2}
                        opacity={followerOpacity}
                        scale={1.05}
                        duration={0.38}
                      />
                      <Sperm
                        x={x1}
                        y={y1}
                        rotate={r1}
                        opacity={spermOpacity}
                        duration={0.3}
                      />
                    </motion.g>
                  </svg>
                </motion.div>
              )}

              {/* baby reveal */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[44%] max-w-[15rem] -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  style={{
                    opacity: babyOpacity,
                    scale: babyScale,
                    filter: babyBlur,
                  }}
                >
                  <div className="relative aspect-[1/1.04] overflow-hidden rounded-[48%_52%_46%_54%/52%_48%_54%_46%] ring-1 ring-cream/20">
                    <Image
                      src="/brand/baby-collage.jpg"
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 44vw, 15rem"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-night/55 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -inset-6 -z-10 rounded-full bg-pink/25 blur-3xl" />
                </motion.div>
              </div>

              <PanelProgress progress={p} />

              {/* vignette for legibility */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-teal-night via-teal-night/55 to-transparent"
              />
            </div>
          </div>

          <div className="mt-10 pb-[28vh] lg:order-1 lg:mt-0 lg:pb-[32vh]">
            {CHAPTERS.map((chapter) => (
              <Chapter key={chapter.n} {...chapter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Reduced-motion / no-JS-smooth fallback                              */
/* ------------------------------------------------------------------ */

function StaticJourney() {
  return (
    <section className="relative overflow-hidden bg-teal-night py-24 text-cream">
      <div className="absolute -left-40 top-0 size-[34rem] rounded-full bg-teal/20 blur-[130px]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-teal-bright">The journey</p>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.06] sm:text-[3.2rem]">
            From the smallest odds to a heartbeat.
          </h2>
          <p className="mt-5 max-w-xl text-cream/65">
            Hundreds of millions start. A handful arrive. We follow that handful
            through fertilisation, cell division, implantation — and home.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["01", "The swim", "Millions begin. One arrives."],
              ["02", "The meeting", "Fertilisation, precisely timed."],
              ["03", "The first days", "Eight cells by day three."],
              ["04", "Home", "A lining ready to receive."],
            ].map(([n, t, b]) => (
              <div
                key={n}
                className="rounded-2xl border border-cream/10 bg-cream/5 p-5"
              >
                <p className="font-mono text-[0.65rem] text-teal-bright">{n}</p>
                <p className="mt-2 font-display text-xl">{t}</p>
                <p className="mt-1 text-sm text-cream/55">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-full bg-pink px-6 py-3 text-sm font-medium text-white"
            >
              Book a consultation
            </Link>
            <Link
              href="/treatments/in-vitro-fertilization-ivf"
              className="rounded-full border border-cream/25 px-6 py-3 text-sm"
            >
              How IVF works
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-[1/1.06] w-full max-w-sm overflow-hidden rounded-[48%_52%_46%_54%/52%_48%_54%_46%] ring-1 ring-cream/20">
          <Image
            src="/brand/baby-collage.jpg"
            alt="Families who conceived with GBR Fertility Centre"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function FertilityJourney() {
  const reduced = useReducedMotion();
  if (reduced) return <StaticJourney />;
  return <AnimatedJourney />;
}
