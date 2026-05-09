import { describe, it, expect } from "vitest";
import {
  getDictionary,
  isLocale,
  resolveLocale,
  localePath,
  LOCALES,
  DEFAULT_LOCALE,
} from "@/lib/i18n";

describe("i18n helpers", () => {
  it("DEFAULT_LOCALE is es", () => {
    expect(DEFAULT_LOCALE).toBe("es");
  });

  it("LOCALES contains es, en, ca", () => {
    expect(LOCALES).toEqual(["es", "en", "ca"]);
  });

  it("isLocale narrows known locales", () => {
    expect(isLocale("es")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("ca")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("")).toBe(false);
  });

  it("resolveLocale falls back to default for unknown / undefined", () => {
    expect(resolveLocale("es")).toBe("es");
    expect(resolveLocale("fr")).toBe("es");
    expect(resolveLocale(undefined)).toBe("es");
    expect(resolveLocale("")).toBe("es");
  });

  it("getDictionary returns a non-empty dictionary for every locale", () => {
    for (const l of LOCALES) {
      const d = getDictionary(l);
      expect(d.meta.title).toBeTruthy();
      expect(d.hero.headline).toBeTruthy();
      expect(d.services.length).toBe(4);
      expect(d.work.length).toBeGreaterThanOrEqual(3);
      expect(d.heroVisual.feed.length).toBeGreaterThanOrEqual(3);
      expect(d.heroVisual.feedExtra.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("each service has a tag (no 'bespoke' in es/ca)", () => {
    expect(getDictionary("es").services.map((s) => s.tag)).not.toContain("bespoke");
    expect(getDictionary("ca").services.map((s) => s.tag)).not.toContain("bespoke");
    expect(getDictionary("en").services.every((s) => s.tag.length > 0)).toBe(true);
  });

  it("legal copy has all placeholders filled (no {{X}} markers in shipping content)", () => {
    for (const l of LOCALES) {
      const d = getDictionary(l);
      const blob = JSON.stringify(d);
      // Allowed to keep DATOS_REGISTRALES until owner fills it.
      const remaining = blob.match(/\{\{[A-Z_]+\}\}/g) ?? [];
      const unexpected = remaining.filter((m) => m !== "{{DATOS_REGISTRALES}}");
      expect(unexpected).toEqual([]);
    }
  });

  it("localePath builds correct routes", () => {
    expect(localePath("es", "home")).toBe("/es");
    expect(localePath("en", "services")).toBe("/en/servicios");
    expect(localePath("ca", "privacidad")).toBe("/ca/legal/privacidad");
  });
});
