import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Pill({
  children,
  tone = "teal",
  className,
}: {
  children: ReactNode;
  tone?: "teal" | "pink" | "cream" | "dark";
  className?: string;
}) {
  const tones = {
    teal: "default",
    pink: "pink",
    cream: "secondary",
    dark: "dark",
  } as const;

  return (
    <Badge variant={tones[tone]} className={cn("px-3.5 py-1.5", className)}>
      {children}
    </Badge>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
};

export function Btn({
  href,
  children,
  variant = "primary",
  className,
  external,
}: BtnProps) {
  const variants = {
    primary: "default",
    secondary: "outline",
    ghost: "ghost",
    light: "light",
  } as const;

  const cls = cn(
    "group text-[0.9rem] [&_svg]:transition-transform [&_svg]:duration-300",
    className,
  );

  if (external) {
    return (
      <Button asChild variant={variants[variant]} className={cls}>
        <a href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      </Button>
    );
  }
  return (
    <Button asChild variant={variants[variant]} className={cls}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "dark" && "text-teal-bright",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-px w-6",
              tone === "dark" ? "bg-teal-bright/50" : "bg-teal/50",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[2.1rem] leading-[1.02] tracking-[-0.01em] sm:text-[2.8rem] md:text-[3.4rem]",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[1.02rem] leading-[1.75]",
            tone === "dark" ? "text-cream/65" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: { label: string; href?: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-[0.75rem]",
          tone === "dark" ? "text-cream/50" : "text-ink-mute",
        )}
      >
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  tone === "dark" ? "hover:text-cream" : "hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(tone === "dark" ? "text-cream/80" : "text-ink")}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Figure({
  value,
  label,
  tone = "light",
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div>
      <p
        className={cn(
          "font-display text-3xl md:text-4xl",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-1 text-[0.78rem] uppercase tracking-[0.12em]",
          tone === "dark" ? "text-cream/45" : "text-ink-mute",
        )}
      >
        {label}
      </p>
    </div>
  );
}
