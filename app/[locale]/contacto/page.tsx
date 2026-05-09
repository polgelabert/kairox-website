import { Section, SectionHeading, MonoLabel } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
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
    title: d.nav.contact,
    path: `/${locale}/contacto`,
  });
}

export default async function ContactPage({
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
          eyebrow={d.contact.eyebrow}
          title={d.contact.title}
          body={d.contact.body}
        />
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="order-2 md:order-1">
            <ContactForm d={d} locale={locale} />
          </div>
          <aside className="order-1 md:order-2 space-y-8">
            <div>
              <MonoLabel>{d.contact.emailLabel}</MonoLabel>
              <a
                href="mailto:kairoxnd@gmail.com"
                className="block mt-3 text-lg text-[var(--color-fg-strong)] hover:text-[var(--color-accent)] transition-colors mono"
              >
                {`kairoxnd@gmail.com`}
              </a>
            </div>
            {/* Booking block hidden until a real Cal.com URL is set.
                Replace null below with the cal.com link when ready. */}
            {null}
          </aside>
        </div>
      </Section>
    </>
  );
}
