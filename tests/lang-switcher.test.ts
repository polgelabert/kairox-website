import { describe, it, expect } from "vitest";
import { buildLocaleHref } from "@/components/LangSwitcher";

describe("buildLocaleHref", () => {
  it("preserves the rest of the path when switching locale", () => {
    expect(buildLocaleHref("/es/servicios", "en")).toBe("/en/servicios");
    expect(buildLocaleHref("/es/legal/privacidad", "ca")).toBe("/ca/legal/privacidad");
    expect(buildLocaleHref("/en", "es")).toBe("/es");
  });

  it("handles root and missing pathname", () => {
    expect(buildLocaleHref("/", "ca")).toBe("/ca");
    expect(buildLocaleHref(null, "en")).toBe("/en");
  });

  it("prepends locale if path has no locale prefix yet", () => {
    expect(buildLocaleHref("/contacto", "en")).toBe("/en/contacto");
  });

  it("does not duplicate the locale", () => {
    expect(buildLocaleHref("/es/contacto", "es")).toBe("/es/contacto");
  });
});
