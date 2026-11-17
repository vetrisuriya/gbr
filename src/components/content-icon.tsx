import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  Clock,
  Dna,
  FlaskConical,
  Flower2,
  HandHeart,
  HeartPulse,
  Hourglass,
  Microscope,
  Orbit,
  Repeat,
  Ribbon,
  RotateCcw,
  Route,
  ScanLine,
  Scissors,
  Search,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Stethoscope,
  Sunrise,
  Syringe,
  Target,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  search: Search,
  flower: Flower2,
  snowflake: Snowflake,
  shield: ShieldCheck,
  "heart-handshake": HandHeart,
  baby: Baby,
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  flask: FlaskConical,
  syringe: Syringe,
  target: Target,
  sparkles: Sparkles,
  dna: Dna,
  activity: Activity,
  scan: ScanLine,
  microscope: Microscope,
  scissors: Scissors,
  route: Route,
  orbit: Orbit,
  ribbon: Ribbon,
  hourglass: Hourglass,
  clock: Clock,
  repeat: Repeat,
  "rotate-ccw": RotateCcw,
  sunrise: Sunrise,
};

export function ContentIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
