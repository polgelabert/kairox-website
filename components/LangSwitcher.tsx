"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/lib/i18n";
import type { Locale } from "@/content/types";

// Replaces the current locale prefix with `target`.
// Handles both v1 paths (/es/servicios) and v2 paths (/v2/es/servicios).
export function buildLocaleHref(pathname: string | null, target: Locale): string {
  if (!pathname) return `/${target}`;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;

  // v2 prefix: skip and operate on the next segment
  if (parts[0] === "v2") {
    if (parts.length === 1) return `/v2/${target}`;
    if ((LOCALES as readonly string[]).includes(parts[1])) {
      parts[1] = target;
    } else {
      parts.splice(1, 0, target);
    }
    return "/" + parts.join("/");
  }

  // v1
  if ((LOCALES as readonly string[]).includes(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return "/" + parts.join("/");
}

export function LangSwitcher({
  current,
  variant = "header",
  onNavigate,
}: {
  current: Locale;
  variant?: "header" | "menu";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  if (variant === "menu") {
    return (
      <div className="flex items-center gap-3 mono text-sm text-[var(--color-fg-subtle)]">
        {LOCALES.map((l) => (
          <Link
            key={l}
            href={buildLocaleHref(pathname, l)}
            onClick={onNavigate}
            className={
              l === current
                ? "text-[var(--color-fg-strong)] py-2 px-2"
                : "text-[var(--color-fg-subtle)] py-2 px-2"
            }
          >
            {l}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 sm:gap-1 mono text-[11px] sm:text-xs">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-0.5 sm:gap-1">
          <Link
            href={buildLocaleHref(pathname, l)}
            className={`inline-flex items-center justify-center min-w-[20px] h-8 px-1 ${
              l === current
                ? "text-[var(--color-fg-strong)]"
                : "text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]"
            }`}
          >
            {l}
          </Link>
          {i < LOCALES.length - 1 ? (
            <span className="text-[var(--color-fg-subtle)]">/</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
