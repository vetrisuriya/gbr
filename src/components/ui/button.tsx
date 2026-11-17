import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-cream shadow-[0_1px_2px_rgba(11,38,36,0.06)] hover:bg-teal-deep hover:shadow-lift",
        accent:
          "bg-pink text-white shadow-[0_1px_2px_rgba(11,38,36,0.06)] hover:bg-pink/90 hover:shadow-lift",
        outline:
          "border border-ink/15 bg-transparent text-ink hover:border-ink/35 hover:bg-ink/[0.03]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-sand",
        ghost: "text-ink hover:bg-ink/[0.04] hover:text-teal-deep",
        light: "bg-cream text-ink hover:bg-white shadow-soft hover:shadow-lift",
        outlineLight:
          "border border-cream/30 text-cream hover:border-teal-bright hover:text-teal-bright",
        link: "text-teal-deep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[0.8rem]",
        lg: "h-13 px-7 text-[0.95rem]",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
