"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDictionary, localePath } from "@/lib/i18n";
import type { Locale } from "@/content/types";

const STORAGE_KEY = "kairox.cookies.choice";

export function CookieBanner({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() })
      );
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50">
      <div className="rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] p-5 shadow-2xl shadow-black/40">
        <p className="text-sm text-[var(--color-fg)] leading-relaxed">
          {d.cookies.body}{" "}
          <Link
            href={localePath(locale, "cookies")}
            className="text-[var(--color-fg-strong)] underline hover:text-[var(--color-accent)]"
          >
            {d.cookies.privacyLink}
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => choose("accepted")}
            className="mono text-xs h-8 px-4 rounded-md bg-[var(--color-fg-strong)] text-[var(--color-bg)] hover:bg-white"
          >
            {d.cookies.accept}
          </button>
          <button
            onClick={() => choose("rejected")}
            className="mono text-xs h-8 px-4 rounded-md border border-[var(--color-border-strong)] text-[var(--color-fg-strong)] hover:border-white/30"
          >
            {d.cookies.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
