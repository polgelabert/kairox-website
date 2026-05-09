import { es } from "@/content/es";
import { en } from "@/content/en";
import { ca } from "@/content/ca";
import type { Dictionary, Locale } from "@/content/types";
import { LOCALES, DEFAULT_LOCALE } from "@/content/types";

const dictionaries: Record<Locale, Dictionary> = { es, en, ca };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}

// Site uses Spanish-canonical slugs across all locales (ship-in-days
// trade-off). URLs read in Spanish; page content is per-locale.
export const PATHS = {
  home: "",
  services: "servicios",
  work: "trabajo",
  about: "nosotros",
  contact: "contacto",
  legal: "legal",
  avisoLegal: "legal/aviso-legal",
  privacidad: "legal/privacidad",
  cookies: "legal/cookies",
} as const;

export function localePath(locale: Locale, path: keyof typeof PATHS): string {
  const segment = PATHS[path];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Dictionary };
