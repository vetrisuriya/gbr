import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  variant?: "color" | "white" | "teal";
  className?: string;
  href?: string | null;
  priority?: boolean;
};

const sources = {
  color: { src: "/brand/logo-color.png", w: 536, h: 120 },
  white: { src: "/brand/logo-white.png", w: 715, h: 160 },
  teal: { src: "/brand/logo-teal.png", w: 736, h: 165 },
};

export function Logo({
  variant = "color",
  className = "h-9 w-auto",
  href = "/",
  priority = false,
}: LogoProps) {
  const { src, w, h } = sources[variant];
  const img = (
    <Image
      src={src}
      alt={`${site.name} logo`}
      width={w}
      height={h}
      priority={priority}
      className={className}
    />
  );

  if (!href) return img;

  return (
    <Link href={href} aria-label={`${site.name} — home`} className="inline-flex items-center">
      {img}
    </Link>
  );
}
