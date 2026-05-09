import { NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "hello@kairox.com";
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? "web@kairox.com";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid-body" }, { status: 400 });
  }

  const { name, email, message, consent, company, locale } = body as {
    name?: string;
    email?: string;
    message?: string;
    consent?: boolean;
    company?: string;
    locale?: string;
  };

  if (!consent) {
    return NextResponse.json({ error: "consent-required" }, { status: 400 });
  }
  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing-fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid-email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No provider configured yet — log and accept so the form doesn't
    // hard-break on a fresh deploy. Owner sees submissions in logs.
    console.log("[contact:no-resend-key]", { name, email, company, locale, message });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const text = [
    `From: ${name} <${email}>`,
    company ? `Company: ${company}` : null,
    `Locale: ${locale ?? "?"}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: `[kairox.com] ${name}${company ? ` · ${company}` : ""}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[contact:resend-error]", res.status, detail);
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
