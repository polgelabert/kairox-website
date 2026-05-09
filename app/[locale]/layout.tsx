import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { LOCALES, resolveLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/content/types";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata(resolveLocale(locale), { path: `/${locale}` });
}

export default async function LocaleLayout({
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
    <div className="flex flex-col min-h-screen">
      <Header locale={typed} />
      <main className="flex-1">{children}</main>
      <Footer locale={typed} />
      <CookieBanner locale={typed} />
    </div>
  );
}
