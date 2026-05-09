"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Dictionary, Locale } from "@/content/types";
import { localePath } from "@/lib/i18n";

const CONTACT_EMAIL = "kairoxnd@gmail.com";

export function ContactForm({
  d,
  locale,
}: {
  d: Dictionary;
  locale: Locale;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);

    if (!form.get("consent")) {
      setError(d.contact.formConsentRequired);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          company: form.get("company"),
          email: form.get("email"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
          locale,
        }),
      });
      if (!res.ok) throw new Error("send-failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="p-6 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]">
        <p className="text-[var(--color-fg-strong)]">{d.contact.formSuccess}</p>
      </div>
    );
  }

  const consentText = d.contact.formConsent.replace("{privacy}", "__PRIVACY__");
  const [before, after] = consentText.split("__PRIVACY__");

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label={d.contact.formName} name="name" required />
      <Field label={d.contact.formCompany} name="company" />
      <Field label={d.contact.formEmail} name="email" type="email" required />
      <Field label={d.contact.formMessage} name="message" textarea required />

      <label className="flex items-start gap-3 text-sm text-[var(--color-fg-muted)] cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 accent-[var(--color-accent)]"
        />
        <span>
          {before}
          <Link
            href={localePath(locale, "privacidad")}
            className="text-[var(--color-fg-strong)] underline hover:text-[var(--color-accent)]"
          >
            {d.contact.privacyLink}
          </Link>
          {after}
        </span>
      </label>

      {error ? (
        <p className="text-sm text-red-400 mono">{error}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-400 mono">
          {d.contact.formError.replace("{email}", CONTACT_EMAIL)}
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? d.contact.formSubmitting : d.contact.formSubmit} →
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "w-full bg-[var(--color-bg)] border border-[var(--color-border-strong)] rounded-md px-4 py-3 text-[var(--color-fg-strong)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors";
  return (
    <div>
      <label className="block mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-2">
        {label}
        {required ? <span className="text-[var(--color-accent)] ml-1">*</span> : null}
      </label>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </div>
  );
}
