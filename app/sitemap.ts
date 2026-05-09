import type { MetadataRoute } from "next";
import { LOCALES } from "@/content/types";

const SITE_URL = "https://kairox.com";
const PATHS = ["", "/servicios", "/trabajo", "/nosotros", "/contacto", "/legal/aviso-legal", "/legal/privacidad", "/legal/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LOCALES.flatMap((locale) =>
    PATHS.map((p) => ({
      url: `${SITE_URL}/${locale}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1.0 : 0.7,
    }))
  );
}
