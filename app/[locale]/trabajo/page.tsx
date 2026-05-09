import { Section, SectionHeading } from "@/components/ui/Section";
import { WorkCard } from "@/components/WorkCard";
import { FinalCta } from "@/components/FinalCta";
import { getDictionary, resolveLocale, LOCALES } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const d = getDictionary(resolveLocale(locale));
  return buildMetadata(resolveLocale(locale), {
    title: d.nav.work,
    path: `/${locale}/trabajo`,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const d = getDictionary(locale);

  return (
    <>
      <Section className="!border-t-0">
        <SectionHeading
          eyebrow={d.workSection.eyebrow}
          title={d.workSection.title}
          body={d.workSection.body}
        />
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {d.work.map((w, i) => (
            <WorkCard key={w.slug} work={w} locale={locale} index={i} />
          ))}
        </div>
      </Section>

      <Section>
        <FinalCta locale={locale} />
      </Section>
    </>
  );
}
