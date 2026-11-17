"use client";

import type { Faq } from "@/data/types";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FaqAccordion({
  faqs,
  className,
  defaultOpen = 0,
}: {
  faqs: Faq[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const value =
    defaultOpen === null || defaultOpen === undefined
      ? undefined
      : `item-${defaultOpen}`;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={value}
      className={cn("border-t border-ink/10", className)}
    >
      {faqs.map((faq, i) => (
        <AccordionItem key={faq.q} value={`item-${i}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>
            <p>{faq.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
