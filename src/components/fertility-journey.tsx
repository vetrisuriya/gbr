"use client";

import {
  useEffect,
  useRef,
  useSyncExternalStore,
  type RefObject,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowRight, ArrowUpRight, MousePointer2 } from "lucide-react";
import { Button } from "./ui/button";

/* ------------------------------------------------------------------ */
/* Geometry: one cubic curve from the lower left into the womb         */
/* ------------------------------------------------------------------ */

const P: [number, number][] = [
  [70, 236],
  [268, 128],
  [372, 330],
  [556, 300],
];

const bez = (a: number, b: number, c: number, d: number, t: number) => {
  const mt = 1 - t;
  return mt * mt * mt * a + 3 * mt * mt * t * b + 3 * mt * t * t * c + t * t * t * d;
};

const STEPS = 40;
const STOPS = Array.from({ length: STEPS + 1 }, (_, i) => i / STEPS);
const XS = STOPS.map((t) => bez(P[0][0], P[1][0], P[2][0], P[3][0], t));
const YS = STOPS.map((t) => bez(P[0][1], P[1][1], P[2][1], P[3][1], t));
const ROTS = STOPS.map((t) => {
  const t2 = Math.min(1, t + 0.012);
  const dx = bez(P[0][0], P[1][0], P[2][0], P[3][0], t2) - bez(P[0][0], P[1][0], P[2][0], P[3][0], t);
  const dy = bez(P[0][1], P[1][1], P[2][1], P[3][1], t2) - bez(P[0][1], P[1][1], P[2][1], P[3][1], t);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
});

const TRAIL = `M ${P[0][0]} ${P[0][1]} C ${P[1][0]} ${P[1][1]}, ${P[2][0]} ${P[2][1]}, ${P[3][0]} ${P[3][1]}`;

const WOMB =
  "M640 44 C792 44 884 158 876 300 C870 398 810 472 734 506 C700 522 684 552 680 596 L600 596 C596 552 580 522 546 506 C470 472 410 398 404 300 C396 158 488 44 640 44 Z";

const PARTICLES = Array.from({ length: 26 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const seed2 = (i * 4517 + 13337) % 199017;
  const r2 = seed2 / 199017;
  return {
    x: 40 + r * 920,
    y: 30 + r2 * 560,
    r: 0.8 + ((i * 7) % 10) / 6,
    delay: (i % 9) * 0.7,
    dur: 5 + (i % 5),
  };
});

const STAGES = [
  { n: "01", label: "Swim" },
  { n: "02", label: "Meet" },
  { n: "03", label: "Divide" },
  { n: "04", label: "Implant" },
  { n: "05", label: "Arrive" },
];

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

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

function StageText({
  progress,
  range,
  n,
  title,
  body,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  n: string;
  title: string;
  body: string;
}) {
  const [a, b] = range;
  const opacity = useTransform(
    progress,
    [a, a + 0.035, b - 0.035, b],
    [0, 1, 1, 0],
  );
  const y = useTransform(progress, [a, b], [28, -28]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-24 left-0 right-0 md:bottom-20"
    >
      <div className="container-x">
        <div className="max-w-lg">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[0.7rem] tracking-[0.2em] text-teal-bright">
              {n}
            </span>
            <span className="h-px w-10 bg-teal-bright/40" />
          </div>
          <h2 className="font-display text-[1.85rem] leading-[1.1] text-cream sm:text-[2.3rem] md:text-[2.8rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-[0.92rem] leading-relaxed text-cream/60">
            {body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
      {STAGES.map((s, i) => {
        const start = i / STAGES.length;
        const end = (i + 1) / STAGES.length;
        return <RailDot key={s.n} progress={progress} start={start} end={end} {...s} />;
      })}
    </div>
  );
}

function RailDot({
  progress,
  start,
  end,
  n,
  label,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  n: string;
  label: string;
}) {
  const active = useTransform(
    progress,
    [Math.max(0, start - 0.04), start, end, Math.min(1, end + 0.04)],
    [0, 1, 1, 0],
  );
  const scale = useTransform(active, [0, 1], [0.7, 1]);
  return (
    <div className="flex items-center justify-end gap-3">
      <motion.span
        style={{ opacity: active }}
        className="text-[0.62rem] uppercase tracking-[0.18em] text-cream/70"
      >
        {label}
      </motion.span>
      <motion.span
        style={{ opacity: active, scale }}
        className="relative grid size-2 place-items-center"
      >
        <span className="absolute inset-0 rounded-full bg-teal-bright" />
      </motion.span>
      <span className="ml-1 font-mono text-[0.6rem] text-cream/25">{n}</span>
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
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const travelled = -rect.top;
      const value = total > 0 ? Math.min(1, Math.max(0, travelled / total)) : 0;
      progress.set(value);
      if (process.env.NODE_ENV !== "production") {
        (window as unknown as { __journeyProgress?: number }).__journeyProgress = value;
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
  const spermOpacity = useTransform(p, [0, 0.05, 0.33, 0.37], [0, 1, 1, 0]);
  const followerOpacity = useTransform(p, [0.02, 0.08, 0.24, 0.31], [0, 0.55, 0.55, 0]);

  const wombDraw = useTransform(p, [0.02, 0.34], [0.08, 1]);
  const wombOpacity = useTransform(p, [0.02, 0.18, 0.8, 0.95], [0, 0.55, 0.5, 0]);

  const trailOpacity = useTransform(p, [0.04, 0.14, 0.34, 0.44], [0, 0.45, 0.4, 0]);

  const eggOpacity = useTransform(p, [0.04, 0.14, 0.38, 0.44], [0, 1, 1, 0]);
  const eggScale = useTransform(p, [0, 0.3, 0.4], [0.85, 1, 1.1]);
  const eggGlow = useTransform(p, [0.1, 0.33], [0.15, 0.6]);

  const flashOpacity = useTransform(p, [0.325, 0.35, 0.42], [0, 0.85, 0]);
  const flashScale = useTransform(p, [0.325, 0.42], [0.35, 2.6]);

  const clusterOpacity = useTransform(p, [0.36, 0.44, 0.66, 0.72], [0, 1, 1, 0]);
  const clusterX = useTransform(p, [0.46, 0.7], [0, 74]);
  const clusterY = useTransform(p, [0.46, 0.7], [0, -26]);
  const clusterScale = useTransform(p, [0.36, 0.46], [0.75, 1]);

  const implantOpacity = useTransform(p, [0.58, 0.7, 0.86], [0, 0.9, 0]);
  const implantScale = useTransform(p, [0.58, 0.86], [0.4, 1.8]);

  const warmOpacity = useTransform(p, [0.7, 0.92], [0, 1]);
  const svgFade = useTransform(p, [0.84, 0.96], [1, 0.15]);

  /* baby reveal */
  const babyOpacity = useTransform(p, [0.84, 0.94], [0, 1]);
  const babyScale = useTransform(p, [0.84, 1], [0.78, 1]);
  const babyBlur = useTransform(p, [0.84, 0.94], ["blur(18px)", "blur(0px)"]);
  const finalOpacity = useTransform(p, [0.87, 0.95], [0, 1]);
  const finalY = useTransform(p, [0.87, 0.98], [24, 0]);

  const cueOpacity = useTransform(p, [0, 0.04, 0.08], [1, 1, 0]);

  return (
    <section
      ref={ref}
      id="journey"
      aria-label="How a pregnancy begins — an animated journey"
      className="relative bg-teal-night"
      style={{ height: "460vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,#0b4749_0%,#05262a_46%,#03191c_100%)]" />
        <motion.div
          aria-hidden
          style={{ opacity: warmOpacity }}
          className="absolute inset-0 bg-[radial-gradient(80%_60%_at_60%_45%,rgba(239,99,151,0.28)_0%,rgba(0,170,171,0.12)_45%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="absolute -left-40 top-0 size-[34rem] rounded-full bg-teal/20 blur-[130px]"
        />
        <div
          aria-hidden
          className="absolute -right-32 bottom-0 size-[30rem] rounded-full bg-pink/10 blur-[130px]"
        />

        {mounted && (
          <motion.div
            aria-hidden
            style={{ opacity: svgFade }}
            className="absolute inset-0"
          >
            <svg
              viewBox="0 0 1000 620"
              preserveAspectRatio="xMidYMid slice"
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
                  <stop offset="0%" stopColor="#bff5ef" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#bff5ef" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="eggGrad" cx="38%" cy="32%" r="72%">
                  <stop offset="0%" stopColor="#fff3e6" />
                  <stop offset="52%" stopColor="#f7c3a5" />
                  <stop offset="100%" stopColor="#e88b76" />
                </radialGradient>
                <radialGradient id="eggHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef6397" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="#ef6397" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="cellGrad" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#d8f7f1" />
                  <stop offset="100%" stopColor="#79e0d6" />
                </radialGradient>
                <radialGradient id="warmGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffd9b8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffd9b8" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="innerWarm" cx="50%" cy="42%" r="60%">
                  <stop offset="0%" stopColor="#ffb9a1" stopOpacity="0.12" />
                  <stop offset="55%" stopColor="#ef6397" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="#00aaab" stopOpacity="0" />
                </radialGradient>
                <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
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
                cx="640"
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
                strokeWidth="1.4"
                strokeOpacity="0.55"
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
              <g transform="translate(556 300)">
                <motion.g style={{ opacity: eggOpacity, scale: eggScale }}>
                  <motion.circle
                    r="78"
                    fill="url(#eggHalo)"
                    style={{ opacity: eggGlow }}
                  />
                  <circle r="44" fill="none" stroke="#f7c3a5" strokeOpacity="0.28" />
                  {Array.from({ length: 14 }).map((_, i) => {
                    const a = (i / 14) * Math.PI * 2;
                    return (
                      <circle
                        key={i}
                        cx={Math.cos(a) * 48}
                        cy={Math.sin(a) * 48}
                        r={2.4}
                        fill="#ffd9c4"
                        opacity={0.55}
                      />
                    );
                  })}
                  <circle r="30" fill="url(#eggGrad)" />
                  <circle r="12" cx="-7" cy="-8" fill="#ffffff" opacity="0.35" />
                </motion.g>
              </g>

              {/* fertilisation flash */}
              <g transform="translate(556 300)">
                <motion.circle
                  r="26"
                  fill="none"
                  stroke="#fff3e6"
                  strokeWidth="2"
                  style={{ opacity: flashOpacity, scale: flashScale }}
                />
                <motion.circle r="46" fill="url(#eggHalo)" style={{ opacity: flashOpacity }} />
              </g>

              {/* dividing embryo */}
              <motion.g style={{ opacity: clusterOpacity, x: clusterX, y: clusterY }}>
                <g transform="translate(556 300)">
                  <motion.g style={{ scale: clusterScale }}>
                    <circle r="38" fill="none" stroke="#9ef0e4" strokeOpacity="0.2" />
                    <Cell progress={p} start={0.39} cx={-10} cy={0} r={8.4} />
                    <Cell progress={p} start={0.42} cx={10} cy={0} r={8.4} />
                    <Cell progress={p} start={0.47} cx={-3.5} cy={-17} r={8.4} />
                    <Cell progress={p} start={0.5} cx={3.5} cy={17} r={8.4} />
                    <Cell progress={p} start={0.55} cx={-20} cy={-12} r={8.4} />
                    <Cell progress={p} start={0.57} cx={20} cy={12} r={8.4} />
                    <Cell progress={p} start={0.6} cx={-17} cy={15} r={8.4} />
                    <Cell progress={p} start={0.62} cx={17} cy={-15} r={8.4} />
                  </motion.g>
                </g>
              </motion.g>

              {/* implantation */}
              <g transform="translate(634 274)">
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
                <Sperm x={x1} y={y1} rotate={r1} opacity={spermOpacity} duration={0.3} />
              </motion.g>
            </svg>
          </motion.div>
        )}

        {/* baby reveal */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[7%] z-10 w-[58vw] max-w-[17rem] -translate-x-1/2 md:left-[63%] md:top-[10%] md:w-[26vw] md:max-w-[22rem]"
        >
          <motion.div
            style={{ opacity: babyOpacity, scale: babyScale, filter: babyBlur }}
          >
            <div className="relative aspect-[1/1.04] overflow-hidden rounded-[48%_52%_46%_54%/52%_48%_54%_46%] ring-1 ring-cream/20">
              <Image
                src="/brand/baby-collage.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 58vw, 26vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-night/55 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-6 -z-10 rounded-full bg-pink/25 blur-3xl" />
          </motion.div>
        </div>

        {/* narrative */}
        <div className="absolute inset-0 z-20">
          <StageText
            progress={p}
            range={[0.02, 0.26]}
            n="01 / 05"
            title="It begins with the smallest odds."
            body="Hundreds of millions start. A handful arrive. Everything we do in the laboratory exists to give that handful a fair chance."
          />
          <StageText
            progress={p}
            range={[0.26, 0.46]}
            n="02 / 05"
            title="One sperm. One egg. One precise moment."
            body="Fertilisation is timing, temperature and pH — and an embryologist who knows when to intervene, and when to leave nature alone."
          />
          <StageText
            progress={p}
            range={[0.46, 0.66]}
            n="03 / 05"
            title="By day three, eight cells."
            body="Time-lapse imaging lets us watch every division without opening the incubator. The embryo that finds a steady rhythm is the one we choose."
          />
          <StageText
            progress={p}
            range={[0.66, 0.84]}
            n="04 / 05"
            title="Then, a place to belong."
            body="A good embryo needs a receptive lining. Thickness, pattern and timing are reviewed before a single transfer is scheduled."
          />

          <motion.div
            style={{ opacity: finalOpacity, y: finalY }}
            className="absolute inset-x-0 bottom-0 z-30"
          >
            <div className="container-x pb-10 md:pb-14">
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow text-teal-bright">05 / 05 — Arrive</p>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.05] text-cream sm:text-[2.7rem] md:text-[3.3rem]">
                  And then, a heartbeat.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-cream/65">
                  Everything before this moment — the scans, the injections, the
                  waiting — becomes a story you tell once, years later, to
                  someone small.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild variant="accent" size="lg">
                    <Link href="/book">
                      Book a consultation <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outlineLight" size="lg">
                    <Link href="/treatments/in-vitro-fertilization-ivf">
                      How IVF works <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-cream/60 backdrop-blur">
            <MousePointer2 className="size-3" /> Scroll to follow the journey
          </span>
        </motion.div>

        <ProgressRail progress={p} />

        {/* vignette for legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-teal-night via-teal-night/70 to-transparent"
        />
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
              <div key={n} className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                <p className="font-mono text-[0.65rem] text-teal-bright">{n}</p>
                <p className="mt-2 font-display text-xl">{t}</p>
                <p className="mt-1 text-sm text-cream/55">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/book" className="rounded-full bg-pink px-6 py-3 text-sm font-medium text-white">
              Book a consultation
            </Link>
            <Link href="/treatments/in-vitro-fertilization-ivf" className="rounded-full border border-cream/25 px-6 py-3 text-sm">
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
