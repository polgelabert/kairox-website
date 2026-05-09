import { describe, it, expect } from "vitest";
import { proxy } from "@/proxy";
import { NextRequest } from "next/server";

function makeReq(url: string, accept = "es-ES,es;q=0.9"): NextRequest {
  return new NextRequest(new Request(url, { headers: { "accept-language": accept } }));
}

describe("locale negotiation proxy", () => {
  it("redirects '/' to detected locale (es)", () => {
    const res = proxy(makeReq("http://localhost/"));
    expect(res.headers.get("location")).toMatch(/\/es$/);
  });

  it("redirects '/' to en when accept-language is en", () => {
    const res = proxy(makeReq("http://localhost/", "en-US,en;q=0.9"));
    expect(res.headers.get("location")).toMatch(/\/en$/);
  });

  it("redirects '/' to ca when accept-language is ca", () => {
    const res = proxy(makeReq("http://localhost/", "ca,es;q=0.9"));
    expect(res.headers.get("location")).toMatch(/\/ca$/);
  });

  it("falls back to es when accept-language is unknown", () => {
    const res = proxy(makeReq("http://localhost/", "fr-FR,fr;q=0.9"));
    expect(res.headers.get("location")).toMatch(/\/es$/);
  });

  it("does not redirect when path already has a locale", () => {
    const res = proxy(makeReq("http://localhost/en/servicios"));
    expect(res.headers.get("location")).toBeNull();
  });

  it("does not redirect static files / api / robots / sitemap", () => {
    expect(proxy(makeReq("http://localhost/api/contact")).headers.get("location")).toBeNull();
    expect(proxy(makeReq("http://localhost/robots.txt")).headers.get("location")).toBeNull();
    expect(proxy(makeReq("http://localhost/sitemap.xml")).headers.get("location")).toBeNull();
    expect(proxy(makeReq("http://localhost/favicon.ico")).headers.get("location")).toBeNull();
  });

  it("preserves the requested path when adding locale prefix", () => {
    const res = proxy(makeReq("http://localhost/contacto", "en"));
    expect(res.headers.get("location")).toMatch(/\/en\/contacto$/);
  });
});
