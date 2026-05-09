import { HeaderV2 } from "@/components/v2/HeaderV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { CookieBanner } from "@/components/CookieBanner";
import { LOCALES } from "@/lib/i18n";
import { getDictionaryV2 } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(LOCALES as readonly string[]).includes(locale)) return {};
  const d = getDictionaryV2(locale as Locale);
  const url = `https://kairox.com/v2/${locale}`;
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: url,
      languages: {
        es: `https://kairox.com/v2/es`,
        en: `https://kairox.com/v2/en`,
        ca: `https://kairox.com/v2/ca`,
      },
    },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url,
      siteName: "Kairox",
      locale: locale === "es" ? "es_ES" : locale === "ca" ? "ca_ES" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description },
  };
}

export default async function V2LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  const typed = locale as Locale;

  return (
    <div className="theme-v2 flex flex-col min-h-screen">
      <HeaderV2 locale={typed} />
      <main className="flex-1">{children}</main>
      <FooterV2 locale={typed} />
      <CookieBanner locale={typed} />
    </div>
  );
}
