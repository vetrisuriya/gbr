import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-teal/10 text-teal-deep ring-1 ring-inset ring-teal/15",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-ink/15 text-ink-soft",
        pink: "border-transparent bg-pink/10 text-pink ring-1 ring-inset ring-pink/20",
        dark: "border-white/15 bg-white/8 text-cream/80",
        solid: "border-transparent bg-ink text-cream",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
