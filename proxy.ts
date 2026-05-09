import { NextRequest, NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/content/types";

const PUBLIC_FILE = /\.(.*)$/;

function detectLocale(req: NextRequest): string {
  const accept = req.headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    const base = tag.split("-")[0];
    if ((LOCALES as readonly string[]).includes(base)) return base;
  }
  return DEFAULT_LOCALE;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // v2 prefix handling
  if (pathname === "/v2" || pathname.startsWith("/v2/")) {
    const v2Rest = pathname.slice(3); // strip "/v2"
    const hasLocaleV2 = LOCALES.some(
      (l) => v2Rest === `/${l}` || v2Rest.startsWith(`/${l}/`)
    );
    if (hasLocaleV2) return NextResponse.next();

    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/v2/${locale}${v2Rest === "" || v2Rest === "/" ? "" : v2Rest}`;
    return NextResponse.redirect(url);
  }

  // v1 (root) handling
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
