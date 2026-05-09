import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";
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
    title: d.nav.services,
    path: `/${locale}/servicios`,
  });
}

export default async function ServicesPage({
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
          eyebrow={d.servicesSection.eyebrow}
          title={d.servicesSection.title}
          body={d.servicesSection.body}
        />
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {d.services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} full />
          ))}
        </div>
      </Section>

      <Section>
        <FinalCta locale={locale} />
      </Section>
    </>
  );
}
