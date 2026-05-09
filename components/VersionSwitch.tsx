"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE } from "@/content/types";
import type { Locale } from "@/content/types";

// Subtle chip linking to the other version of the site (v1 ↔ v2).
// Reads the current pathname to extract locale and preserve it on
// the swap so the user lands on the same locale they were on.

function detectLocale(parts: string[]): Locale {
  // /v2/<locale>/...
  if (parts[0] === "v2" && parts[1] && (LOCALES as readonly string[]).includes(parts[1])) {
    return parts[1] as Locale;
  }
  // /<locale>/...
  if (parts[0] && (LOCALES as readonly string[]).includes(parts[0])) {
    return parts[0] as Locale;
  }
  return DEFAULT_LOCALE;
}

export function VersionSwitch({
  direction,
  label,
}: {
  direction: "to-v1" | "to-v2";
  label: string;
}) {
  const pathname = usePathname() ?? "/";
  const parts = pathname.split("/").filter(Boolean);
  const locale = detectLocale(parts);
  const href = direction === "to-v1" ? `/${locale}` : `/v2/${locale}`;

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mono text-xs px-3 py-2 rounded border border-[var(--color-border-strong)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg-strong)] hover:border-white/30 transition-colors"
    >
      {label}
    </Link>
  );
}
