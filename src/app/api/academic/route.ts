import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  qualification?: string;
  programme?: string;
  experience?: string;
  message?: string;
  consent?: boolean;
};

const clean = (value: unknown, max = 600) =>
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
    email: clean(body.email, 160),
    phone: clean(body.phone, 24),
    qualification: clean(body.qualification, 160),
    programme: clean(body.programme, 120),
    experience: clean(body.experience, 80),
    message: clean(body.message, 3000),
    receivedAt: new Date().toISOString(),
  };

  if (record.name.length < 2) {
    return NextResponse.json({ error: "A name is required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(record.email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 422 },
    );
  }
  if (body.consent !== true) {
    return NextResponse.json(
      { error: "Consent is required to process this application." },
      { status: 422 },
    );
  }

  const webhook =
    process.env.ACADEMIC_WEBHOOK_URL ?? process.env.APPOINTMENT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "academic", ...record }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("[academic] webhook delivery failed", error);
      return NextResponse.json(
        { error: "We could not record that. Please email the academic office." },
        { status: 502 },
      );
    }
  } else {
    console.info("[academic] new application", record);
  }

  return NextResponse.json({ ok: true });
}
