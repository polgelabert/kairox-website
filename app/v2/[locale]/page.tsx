import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { HeroV2 } from "@/components/v2/HeroV2";
import { TierCard } from "@/components/v2/TierCard";
import { SectorCard } from "@/components/v2/SectorCard";
import { ProcessTimeline } from "@/components/v2/ProcessTimeline";
import { ComparisonTable } from "@/components/v2/ComparisonRow";
import { FinalCtaV2 } from "@/components/v2/FinalCtaV2";
import { getDictionaryV2, localePathV2, LOCALES } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function HomeV2({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (LOCALES as readonly string[]).includes(raw) ? (raw as Locale) : "es";
  const d = getDictionaryV2(locale);

  return (
    <>
      <HeroV2 locale={locale} />

      <Section>
        <SectionHeading
          eyebrow={d.servicesSection.eyebrow}
          title={d.servicesSection.title}
          body={d.servicesSection.body}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {d.services.map((s) => (
            <TierCard key={s.slug} service={s} pricingNote={d.servicesSection.pricingNote} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={localePathV2(locale, "services")}
            className="inline-flex items-center justify-center h-10 px-5 rounded-md text-sm font-medium mono tracking-tight border border-[var(--color-border-strong)] text-[var(--color-fg-strong)] hover:border-white/30 hover:bg-white/[0.03]"
          >
            {d.servicesSection.seeAll} →
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.comparisonSection.eyebrow}
          title={d.comparisonSection.title}
          body={d.comparisonSection.body}
        />
        <ComparisonTable
          leftLabel={d.comparisonSection.leftLabel}
          rightLabel={d.comparisonSection.rightLabel}
          rows={d.comparisonSection.rows}
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.sectorsSection.eyebrow}
          title={d.sectorsSection.title}
          body={d.sectorsSection.body}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.sectors.slice(0, 3).map((s) => (
            <SectorCard key={s.slug} sector={s} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={localePathV2(locale, "sectors")}
            className="inline-flex items-center justify-center h-10 px-5 rounded-md text-sm font-medium mono tracking-tight border border-[var(--color-border-strong)] text-[var(--color-fg-strong)] hover:border-white/30 hover:bg-white/[0.03]"
          >
            {d.sectorsSection.seeAll} →
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.processSection.eyebrow}
          title={d.processSection.title}
          body={d.processSection.body}
        />
        <ProcessTimeline steps={d.processSection.steps} />
      </Section>

      <Section>
        <FinalCtaV2 locale={locale} />
      </Section>
    </>
  );
}
