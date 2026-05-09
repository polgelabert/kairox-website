import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { StudioVisual } from "./StudioVisual";
import { SafeBoundary } from "@/components/SafeBoundary";
import { localePathV2, getDictionaryV2 } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function HeroV2({ locale }: { locale: Locale }) {
  const d = getDictionaryV2(locale);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(251,146,60,0.18), rgba(251,146,60,0.04) 40%, transparent 70%)",
        }}
      />
      <Container className="relative pt-14 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span
              className="mono text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--kx-accent)" }}
            >
              {d.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-[34px] leading-[1.08] sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
              <span className="text-[var(--color-fg-strong)]">{d.hero.headline}</span>
              <span className="kx-grad-text">{d.hero.headlineTail}</span>
            </h1>
            <p className="mt-5 sm:mt-7 text-base sm:text-xl text-[var(--color-fg-muted)] leading-relaxed max-w-2xl">
              {d.hero.subhead}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
              <Link
                href={localePathV2(locale, "contact")}
                className="inline-flex items-center justify-center h-11 px-6 rounded-md text-sm font-medium mono tracking-tight text-[var(--color-bg)]"
                style={{ background: "var(--kx-accent)" }}
              >
                {d.hero.cta} →
              </Link>
              <Link
                href={localePathV2(locale, "services")}
                className="inline-flex items-center justify-center h-11 px-6 rounded-md text-sm font-medium mono tracking-tight border border-[var(--color-border-strong)] text-[var(--color-fg-strong)] hover:border-white/30 hover:bg-white/[0.03]"
              >
                {d.hero.secondaryCta}
              </Link>
            </div>
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 mono text-[11px] sm:text-xs">
              {d.hero.badges.map((b) => (
                <span
                  key={b}
                  className="px-2.5 py-1 rounded border"
                  style={{
                    borderColor: "color-mix(in srgb, var(--kx-accent) 25%, transparent)",
                    color: "var(--kx-accent-bright)",
                    background: "color-mix(in srgb, var(--kx-accent) 6%, transparent)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:pl-4">
            <SafeBoundary>
              <StudioVisual d={d.studioVisual} />
            </SafeBoundary>
          </div>
        </div>
      </Container>
    </div>
  );
}
