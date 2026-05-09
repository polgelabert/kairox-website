import { Section, SectionHeading, MonoLabel } from "@/components/ui/Section";
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
    title: d.nav.about,
    path: `/${locale}/nosotros`,
  });
}

export default async function AboutPage({
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
          eyebrow={d.about.eyebrow}
          title={d.about.title}
          body={d.about.body}
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Founder
            role={d.about.techRole}
            name="Pol Gelabert"
            bio={d.about.techBio}
          />
          <Founder
            role={d.about.salesRole}
            name="Andrea Nicolás"
            bio={d.about.salesBio}
          />
        </div>
      </Section>

      <Section>
        <FinalCta locale={locale} />
      </Section>
    </>
  );
}

function Founder({
  role,
  name,
  bio,
}: {
  role: string;
  name: string;
  bio: string;
}) {
  return (
    <article className="p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)]">
      <MonoLabel>{role}</MonoLabel>
      <h3 className="mt-3 text-2xl font-semibold text-[var(--color-fg-strong)] tracking-tight">
        {name}
      </h3>
      <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed whitespace-pre-line">
        {bio}
      </p>
    </article>
  );
}
