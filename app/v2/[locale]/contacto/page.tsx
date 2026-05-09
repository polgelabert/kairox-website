import { Section, SectionHeading, MonoLabel } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { getDictionaryV2, LOCALES } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";
import type { Dictionary } from "@/content/types";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ContactV2({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (LOCALES as readonly string[]).includes(raw) ? (raw as Locale) : "es";
  const d = getDictionaryV2(locale);

  // ContactForm expects the v1 Dictionary contact shape — adapt the v2 contact
  // copy into that shape so the form's strings render in the right language.
  const adapter: Dictionary = {
    contact: {
      ...d.contact,
      title: d.contact.title,
      body: d.contact.body,
      bookingLabel: "",
    },
  } as unknown as Dictionary;

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
            <ContactForm d={adapter} locale={locale} />
          </div>
          <aside className="order-1 md:order-2 space-y-8">
            <div>
              <MonoLabel>{d.contact.emailLabel}</MonoLabel>
              <a
                href="mailto:kairoxnd@gmail.com"
                className="block mt-3 text-lg text-[var(--color-fg-strong)] hover:opacity-80 transition-opacity mono"
                style={{ color: "var(--color-fg-strong)" }}
              >
                kairoxnd@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
