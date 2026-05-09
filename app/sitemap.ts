import type { MetadataRoute } from "next";
import { LOCALES } from "@/content/types";

const SITE_URL = "https://kairox.com";
const V1_PATHS = [
  "",
  "/servicios",
  "/trabajo",
  "/nosotros",
  "/contacto",
  "/legal/aviso-legal",
  "/legal/privacidad",
  "/legal/cookies",
];
const V2_PATHS = ["", "/servicios", "/sectores", "/proceso", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const v1 = LOCALES.flatMap((locale) =>
    V1_PATHS.map((p) => ({
      url: `${SITE_URL}/${locale}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1.0 : 0.7,
    }))
  );
  const v2 = LOCALES.flatMap((locale) =>
    V2_PATHS.map((p) => ({
      url: `${SITE_URL}/v2/${locale}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 0.9 : 0.6,
    }))
  );
  return [...v1, ...v2];
}
