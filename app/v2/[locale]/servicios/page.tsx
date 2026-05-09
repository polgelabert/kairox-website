import { Section, SectionHeading } from "@/components/ui/Section";
import { TierCard } from "@/components/v2/TierCard";
import { ComparisonTable } from "@/components/v2/ComparisonRow";
import { FinalCtaV2 } from "@/components/v2/FinalCtaV2";
import { getDictionaryV2, LOCALES } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ServicesV2({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (LOCALES as readonly string[]).includes(raw) ? (raw as Locale) : "es";
  const d = getDictionaryV2(locale);

  return (
    <>
      <Section className="!border-t-0">
        <SectionHeading
          eyebrow={d.servicesSection.eyebrow}
          title={d.servicesSection.title}
          body={d.servicesSection.body}
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {d.services.map((s) => (
            <TierCard
              key={s.slug}
              service={s}
              full
              pricingNote={d.servicesSection.pricingNote}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.comparisonSection.eyebrow}
          title={d.comparisonSection.title}
        />
        <ComparisonTable
          leftLabel={d.comparisonSection.leftLabel}
          rightLabel={d.comparisonSection.rightLabel}
          rows={d.comparisonSection.rows}
        />
      </Section>

      <Section>
        <FinalCtaV2 locale={locale} />
      </Section>
    </>
  );
}
