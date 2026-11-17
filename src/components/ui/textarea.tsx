import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-xl border border-ink/12 bg-white/70 px-4 py-3 text-[0.95rem] text-ink shadow-[inset_0_1px_1px_rgba(11,38,36,0.03)] transition-colors",
        "placeholder:text-ink-mute/70",
        "hover:border-ink/20",
        "focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/20",
        "aria-invalid:border-pink aria-invalid:ring-2 aria-invalid:ring-pink/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
