import { Section, SectionHeading } from "@/components/ui/Section";
import { SectorCard } from "@/components/v2/SectorCard";
import { FinalCtaV2 } from "@/components/v2/FinalCtaV2";
import { getDictionaryV2, LOCALES } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function SectorsV2({
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
          eyebrow={d.sectorsSection.eyebrow}
          title={d.sectorsSection.title}
          body={d.sectorsSection.body}
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {d.sectors.map((s) => (
            <SectorCard key={s.slug} sector={s} full />
          ))}
        </div>
      </Section>

      <Section>
        <FinalCtaV2 locale={locale} />
      </Section>
    </>
  );
}
