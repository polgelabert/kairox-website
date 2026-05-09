import type { Metadata } from "next";
import { getDictionary } from "./i18n";
import type { Locale } from "@/content/types";

const SITE_URL = "https://kairox.com";

export function buildMetadata(
  locale: Locale,
  opts: { title?: string; description?: string; path?: string } = {}
): Metadata {
  const d = getDictionary(locale);
  const title = opts.title ?? d.meta.title;
  const description = opts.description ?? d.meta.description;
  const path = opts.path ?? `/${locale}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es${opts.path ? opts.path.replace(/^\/[a-z]{2}/, "") : ""}`,
        en: `${SITE_URL}/en${opts.path ? opts.path.replace(/^\/[a-z]{2}/, "") : ""}`,
        ca: `${SITE_URL}/ca${opts.path ? opts.path.replace(/^\/[a-z]{2}/, "") : ""}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kairox",
      locale: locale === "es" ? "es_ES" : locale === "ca" ? "ca_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
