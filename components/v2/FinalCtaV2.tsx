import Link from "next/link";
import { localePathV2, getDictionaryV2 } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function FinalCtaV2({ locale }: { locale: Locale }) {
  const d = getDictionaryV2(locale);
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-10 sm:p-14 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(251,146,60,0.18), transparent 70%)",
        }}
      />
      <div className="relative max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-fg-strong)] text-balance">
          {d.finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-[var(--color-fg-muted)] leading-relaxed">
          {d.finalCta.body}
        </p>
        <div className="mt-8">
          <Link
            href={localePathV2(locale, "contact")}
            className="inline-flex items-center justify-center h-11 px-6 rounded-md text-sm font-medium mono tracking-tight text-[var(--color-bg)]"
            style={{ background: "var(--kx-accent)" }}
          >
            {d.finalCta.cta} →
          </Link>
        </div>
      </div>
    </div>
  );
}
