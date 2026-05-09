import { Section, SectionHeading } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/v2/ProcessTimeline";
import { FinalCtaV2 } from "@/components/v2/FinalCtaV2";
import { getDictionaryV2, LOCALES } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ProcessV2({
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
          eyebrow={d.processSection.eyebrow}
          title={d.processSection.title}
          body={d.processSection.body}
        />
      </Section>

      <Section>
        <ProcessTimeline steps={d.processSection.steps} detailed />
      </Section>

      <Section>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-6 sm:p-10">
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-fg-strong)]">
            {d.processSection.needs.title}
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {d.processSection.needs.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[var(--color-fg)] leading-relaxed"
              >
                <span
                  className="mono mt-[3px]"
                  style={{ color: "var(--kx-accent)" }}
                >
                  ›
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <FinalCtaV2 locale={locale} />
      </Section>
    </>
  );
}
