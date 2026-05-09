import { describe, it, expect, beforeEach } from "vitest";
import { POST } from "@/app/api/contact/route";

function req(body: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
  });

  it("rejects non-JSON bodies", async () => {
    const bad = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not json",
    });
    const res = await POST(bad);
    expect(res.status).toBe(400);
  });

  it("rejects when consent is missing", async () => {
    const res = await POST(
      req({ name: "Pol", email: "p@x.com", message: "hi", consent: false })
    );
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "consent-required" });
  });

  it("rejects when required fields missing", async () => {
    const res = await POST(req({ consent: true, email: "p@x.com" }));
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "missing-fields" });
  });

  it("rejects on invalid email", async () => {
    const res = await POST(
      req({ consent: true, name: "x", email: "notanemail", message: "hi" })
    );
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "invalid-email" });
  });

  it("accepts valid submission and falls back to logged mode when no Resend key", async () => {
    const res = await POST(
      req({
        consent: true,
        name: "Pol",
        email: "pol@example.com",
        message: "hello world",
        company: "Kairox",
        locale: "es",
      })
    );
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true, mode: "logged" });
  });
});
