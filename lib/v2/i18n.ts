import { v2es } from "@/content/v2/es";
import { v2en } from "@/content/v2/en";
import { v2ca } from "@/content/v2/ca";
import type { V2Dictionary } from "@/content/v2/types";
import type { Locale } from "@/content/types";
import { LOCALES, DEFAULT_LOCALE } from "@/content/types";

const dictionaries: Record<Locale, V2Dictionary> = {
  es: v2es,
  en: v2en,
  ca: v2ca,
};

export const V2_BASE = "/v2";

export function getDictionaryV2(locale: Locale): V2Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export const PATHS_V2 = {
  home: "",
  services: "servicios",
  sectors: "sectores",
  process: "proceso",
  contact: "contacto",
} as const;

export function localePathV2(locale: Locale, path: keyof typeof PATHS_V2): string {
  const segment = PATHS_V2[path];
  return segment ? `${V2_BASE}/${locale}/${segment}` : `${V2_BASE}/${locale}`;
}

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, V2Dictionary };
