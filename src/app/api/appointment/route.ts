import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  partner?: string;
  phone?: string;
  email?: string;
  centre?: string;
  service?: string;
  date?: string;
  message?: string;
  consent?: boolean;
};

const clean = (value: unknown, max = 400) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const record = {
    name: clean(body.name, 120),
    partner: clean(body.partner, 120),
    phone: clean(body.phone, 24),
    email: clean(body.email, 160),
    centre: clean(body.centre, 40),
    service: clean(body.service, 80),
    date: clean(body.date, 24),
    message: clean(body.message, 2000),
    receivedAt: new Date().toISOString(),
  };

  if (record.name.length < 2) {
    return NextResponse.json({ error: "A name is required." }, { status: 422 });
  }
  if (!/^[+()\d\s-]{8,18}$/.test(record.phone)) {
    return NextResponse.json(
      { error: "A valid phone number is required." },
      { status: 422 },
    );
  }
  if (record.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(record.email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 422 },
    );
  }
  if (body.consent !== true) {
    return NextResponse.json(
      { error: "Consent is required to process this enquiry." },
      { status: 422 },
    );
  }

  // Delivery hook.
  // Set APPOINTMENT_WEBHOOK_URL in the environment to forward enquiries to a
  // CRM, Google Sheet webhook, or transactional email provider. Without it the
  // enquiry is logged server-side so nothing is lost during local development.
  const webhook = process.env.APPOINTMENT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("[appointment] webhook delivery failed", error);
      return NextResponse.json(
        { error: "We could not record that. Please call the clinic." },
        { status: 502 },
      );
    }
  } else {
    console.info("[appointment] new enquiry", record);
  }

  return NextResponse.json({ ok: true });
}
