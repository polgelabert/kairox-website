import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MonoLabel } from "./ui/Section";
import { HeroVisual } from "./HeroVisual";
import { localePath, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);

  // Highlight the closing phrase of the headline by splitting at the
  // last comma/period — works across ES/EN/CA without per-locale logic.
  const headline = d.hero.headline;
  const splitAt = Math.max(headline.lastIndexOf(","), 0);
  const headHead = splitAt > 0 ? headline.slice(0, splitAt + 1) : headline;
  const headTail = splitAt > 0 ? headline.slice(splitAt + 1) : "";

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <Container className="relative pt-14 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <MonoLabel>{d.hero.eyebrow}</MonoLabel>
            <h1 className="mt-5 text-[34px] leading-[1.08] sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
              <span className="text-[var(--color-fg-strong)]">{headHead}</span>
              {headTail ? (
                <span className="kx-gradient-text"> {headTail.trim()}</span>
              ) : null}
            </h1>
            <p className="mt-5 sm:mt-7 text-base sm:text-xl text-[var(--color-fg-muted)] leading-relaxed max-w-2xl">
              {d.hero.subhead}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
              <Button href={localePath(locale, "contact")} variant="primary">
                {d.hero.cta} →
              </Button>
              <Button href={localePath(locale, "services")} variant="secondary">
                {d.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--color-fg-subtle)] mono text-[11px] sm:text-xs">
              <Platform name="WhatsApp" />
              <Platform name="Telegram" />
              <Platform name="Instagram" />
              <Platform name="Reddit" />
              <Platform name="TikTok" />
            </div>
          </div>

          <div className="lg:pl-4">
            <HeroVisual d={d.heroVisual} />
          </div>
        </div>
      </Container>
    </div>
  );
}

function Platform({ name }: { name: string }) {
  return (
    <span className="hover:text-[var(--color-fg-muted)] transition-colors">
      {name}
    </span>
  );
}
