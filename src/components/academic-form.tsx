"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { academics } from "@/data/academics";
import { site } from "@/data/site";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

type Fields = {
  name: string;
  email: string;
  phone: string;
  qualification: string;
  programme: string;
  experience: string;
  message: string;
  consent: boolean;
};

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  qualification: "",
  programme: academics[0]?.title ?? "",
  experience: "",
  message: "",
  consent: false,
};

export function AcademicForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (!values.qualification.trim())
      next.qualification = "Tell us your highest qualification.";
    if (!values.consent)
      next.consent = "Please consent to being contacted about this application.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("sending");
    try {
      const res = await fetch("/api/academic", {
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
        className="rounded-3xl border border-teal/25 bg-white/70 p-8 md:p-10"
      >
        <span className="grid size-12 place-items-center rounded-full bg-teal text-white">
          <Check className="size-5" />
        </span>
        <h3 className="mt-6 font-display text-2xl">
          Thank you, {values.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          Your application has reached the academic office. Shortlisted
          candidates are contacted within four weeks. If you have documents to
          share, email{" "}
          <a
            href={site.emailHref}
            className="text-teal-deep underline underline-offset-2"
          >
            {site.email}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/60 p-6 shadow-soft md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-pink/[0.05] blur-3xl"
      />

      <div className="relative grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="a-name" error={errors.name}>
          <Input
            id="a-name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
            placeholder="As on your degree certificate"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Email" htmlFor="a-email" error={errors.email}>
          <Input
            id="a-email"
            type="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Phone (optional)" htmlFor="a-phone">
          <Input
            id="a-phone"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
            placeholder="+91"
          />
        </Field>
        <Field
          label="Highest qualification"
          htmlFor="a-qualification"
          error={errors.qualification}
        >
          <Input
            id="a-qualification"
            value={values.qualification}
            onChange={(e) => set("qualification", e.target.value)}
            placeholder="MBBS, MS (OG), MSc, etc."
            aria-invalid={Boolean(errors.qualification)}
          />
        </Field>
        <Field label="Programme of interest" htmlFor="a-programme">
          <Select
            id="a-programme"
            value={values.programme}
            onChange={(e) => set("programme", e.target.value)}
          >
            {academics.map((a) => (
              <option key={a.slug} value={a.title}>
                {a.shortTitle}
              </option>
            ))}
            <option>Not sure yet</option>
          </Select>
        </Field>
        <Field label="Years of experience" htmlFor="a-experience">
          <Select
            id="a-experience"
            value={values.experience}
            onChange={(e) => set("experience", e.target.value)}
          >
            <option value="">Select</option>
            <option>Student / intern</option>
            <option>0–2 years</option>
            <option>3–5 years</option>
            <option>6–10 years</option>
            <option>10+ years</option>
          </Select>
        </Field>
        <Field
          label="Anything else we should know?"
          htmlFor="a-message"
          className="sm:col-span-2"
        >
          <Textarea
            id="a-message"
            rows={4}
            className="resize-y"
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Current role, publications, or why this programme interests you."
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
          I consent to GBR Fertility Centre contacting me about this application.
          I have read the{" "}
          <Link
            href="/privacy"
            className="text-teal-deep underline underline-offset-2"
          >
            privacy statement
          </Link>
          .
        </span>
      </label>
      {errors.consent && <p className="mt-2 text-xs text-pink">{errors.consent}</p>}

      {state === "error" && (
        <p className="mt-4 rounded-xl bg-pink/10 px-4 py-3 text-sm text-pink">
          We could not send that just now. Please email {site.email} and we will
          reply directly.
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
            Submit application <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-[0.72rem] text-ink-mute">
        Please do not include patient-identifiable information in this form.
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
