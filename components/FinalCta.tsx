import { Button } from "./ui/Button";
import { localePath, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export function FinalCta({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-10 sm:p-14 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow opacity-60 pointer-events-none" />
      <div className="relative max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-fg-strong)] text-balance">
          {d.finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-[var(--color-fg-muted)] leading-relaxed">
          {d.finalCta.body}
        </p>
        <div className="mt-8">
          <Button href={localePath(locale, "contact")} variant="primary">
            {d.finalCta.cta} →
          </Button>
        </div>
      </div>
    </div>
  );
}
