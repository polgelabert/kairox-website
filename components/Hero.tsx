import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MonoLabel } from "./ui/Section";
import { localePath, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <Container className="relative pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="max-w-3xl">
          <MonoLabel>{d.hero.eyebrow}</MonoLabel>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--color-fg-strong)] text-balance leading-[1.05]">
            {d.hero.headline}
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-[var(--color-fg-muted)] leading-relaxed max-w-2xl">
            {d.hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={localePath(locale, "contact")} variant="primary">
              {d.hero.cta} →
            </Button>
            <Button href={localePath(locale, "services")} variant="secondary">
              {d.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
