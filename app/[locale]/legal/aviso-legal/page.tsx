import { LegalPage } from "@/components/LegalPage";
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
    title: d.legal.avisoLegal.title,
    path: `/${locale}/legal/aviso-legal`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const d = getDictionary(resolveLocale(locale));
  return <LegalPage title={d.legal.avisoLegal.title} body={d.legal.avisoLegal.body} />;
}
