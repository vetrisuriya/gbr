import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          "flex h-12 w-full appearance-none rounded-xl border border-ink/12 bg-white/70 py-3 pl-4 pr-11 text-[0.95rem] text-ink shadow-[inset_0_1px_1px_rgba(11,38,36,0.03)] transition-colors",
          "hover:border-ink/20",
          "focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/20",
          "aria-invalid:border-pink aria-invalid:ring-2 aria-invalid:ring-pink/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-mute"
      />
    </div>
  );
}

export { Select };
