import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { WorkCard } from "@/components/WorkCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FinalCta } from "@/components/FinalCta";
import { Button } from "@/components/ui/Button";
import { getDictionary, localePath, resolveLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata(resolveLocale(locale), { path: `/${locale}` });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const d = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} />

      <Section>
        <SectionHeading
          eyebrow={d.servicesSection.eyebrow}
          title={d.servicesSection.title}
          body={d.servicesSection.body}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {d.services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
        <div className="mt-10">
          <Button href={localePath(locale, "services")} variant="secondary">
            {d.servicesSection.seeAll} →
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.processSection.eyebrow}
          title={d.processSection.title}
          body={d.processSection.body}
        />
        <ProcessSteps steps={d.processSection.steps} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.workSection.eyebrow}
          title={d.workSection.title}
          body={d.workSection.body}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {d.work.slice(0, 2).map((w) => (
            <WorkCard key={w.slug} work={w} locale={locale} />
          ))}
        </div>
        <div className="mt-10">
          <Button href={localePath(locale, "work")} variant="secondary">
            {d.workSection.seeAll} →
          </Button>
        </div>
      </Section>

      <Section>
        <FinalCta locale={locale} />
      </Section>
    </>
  );
}
