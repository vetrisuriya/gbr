"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A photograph that drifts slightly against the scroll.
 * Oversized by ~10% so the parallax never reveals an edge.
 */
export function ParallaxMedia({
  src,
  alt,
  sizes,
  priority,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)}>
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 scale-[1.1] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover object-center", imageClassName)}
        />
      </motion.div>
    </div>
  );
}
