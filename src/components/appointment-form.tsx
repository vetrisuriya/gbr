"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const centres = ["Chennai", "Thirupattur", "Nellore", "Not sure yet"];

const services = [
  "First fertility consultation",
  "Second opinion",
  "IVF / ICSI",
  "IUI",
  "Fertility testing",
  "Fertility preservation",
  "PCOS / endometriosis",
  "Male infertility",
  "Academic programme",
];

type Fields = {
  name: string;
  partner: string;
  phone: string;
  email: string;
  centre: string;
  service: string;
  date: string;
  message: string;
  consent: boolean;
};

const initial: Fields = {
  name: "",
  partner: "",
  phone: "",
  email: "",
  centre: "Chennai",
  service: services[0],
  date: "",
  message: "",
  consent: false,
};

export function AppointmentForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[+()\d\s-]{8,18}$/.test(values.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.consent)
      next.consent = "Please consent to being contacted about your enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("sending");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-teal/25 bg-cream p-8 shadow-lift md:p-10"
      >
        <span className="grid size-12 place-items-center rounded-full bg-teal text-white">
          <Check className="size-5" />
        </span>
        <h3 className="mt-6 font-display text-2xl">
          Thank you, {values.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          Your request has reached our patient care team. We will call you on{" "}
          <span className="text-ink">{values.phone}</span> within one working day
          to confirm a time. If you would rather speak now, call us directly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={site.phoneHref}>
              <Phone className="size-3.5" /> {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.whatsapp}>Message on WhatsApp</a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative overflow-hidden rounded-3xl border border-cream/15 bg-cream p-6 shadow-lift md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-teal/[0.06] blur-3xl"
      />

      <div className="relative grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name} htmlFor="name">
          <Input
            id="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Partner's name (optional)" htmlFor="partner">
          <Input
            id="partner"
            value={values.partner}
            onChange={(e) => set("partner", e.target.value)}
            placeholder="If applicable"
            autoComplete="off"
          />
        </Field>
        <Field label="Phone" error={errors.phone} htmlFor="phone">
          <Input
            id="phone"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field label="Email (optional)" error={errors.email} htmlFor="email">
          <Input
            id="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Preferred centre" htmlFor="centre">
          <Select
            id="centre"
            value={values.centre}
            onChange={(e) => set("centre", e.target.value)}
          >
            {centres.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
        </Field>
        <Field label="What can we help with?" htmlFor="service">
          <Select
            id="service"
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <Field
          label="Preferred date (optional)"
          htmlFor="date"
          className="sm:col-span-2"
        >
          <Input
            id="date"
            type="date"
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </Field>
        <Field
          label="Anything we should know?"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            rows={4}
            className="resize-y"
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Diagnosis, previous treatment, or simply your question."
          />
        </Field>
      </div>

      <label className="relative mt-6 flex items-start gap-3 text-[0.8rem] leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-0.5 size-4 shrink-0 rounded border-ink/25 accent-teal"
        />
        <span>
          I consent to GBR Fertility Centre contacting me about this enquiry. I
          have read the{" "}
          <Link
            href="/privacy"
            className="text-teal-deep underline underline-offset-2"
          >
            privacy statement
          </Link>
          .
        </span>
      </label>
      {errors.consent && (
        <p className="mt-2 text-xs text-pink">{errors.consent}</p>
      )}

      {state === "error" && (
        <p className="mt-4 rounded-xl bg-pink/10 px-4 py-3 text-sm text-pink">
          We could not send that just now. Please call us on {site.phone} and we
          will book you in directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state === "sending"}
        className="mt-7 w-full sm:w-auto"
      >
        {state === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            Request an appointment <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-[0.72rem] text-ink-mute">
        This form is not for medical emergencies. For urgent concerns, call{" "}
        {site.phone}.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-2">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-pink">{error}</p>}
    </div>
  );
}
