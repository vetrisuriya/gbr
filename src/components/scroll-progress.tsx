"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const value = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${value})`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        ref={bar}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-teal via-teal-bright to-pink will-change-transform"
      />
    </div>
  );
}
