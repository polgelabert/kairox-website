"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { LangSwitcher } from "@/components/LangSwitcher";
import { localePathV2, getDictionaryV2 } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function MobileNavV2({ locale }: { locale: Locale }) {
  const d = getDictionaryV2(locale);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.width = prev.bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const links = [
    { href: localePathV2(locale, "services"), label: d.nav.services },
    { href: localePathV2(locale, "sectors"), label: d.nav.sectors },
    { href: localePathV2(locale, "process"), label: d.nav.process },
    { href: localePathV2(locale, "contact"), label: d.nav.contact },
  ];

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-[var(--color-fg-strong)]"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && mounted
        ? createPortal(
            <div
              className="md:hidden flex flex-col"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100dvh",
                zIndex: 9999,
                backgroundColor: "#0a0a0a",
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="flex items-center justify-between h-16 px-6">
                <Link
                  href={localePathV2(locale, "home")}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <Image
                    src="/kairox-mark.svg"
                    alt="Kairox"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                    unoptimized
                  />
                  <span className="mono text-base font-semibold text-[var(--color-fg-strong)]">
                    kairox
                  </span>
                  <span
                    className="mono text-[10px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded ml-1"
                    style={{
                      color: "var(--kx-accent-bright)",
                      border: "1px solid color-mix(in srgb, var(--kx-accent) 35%, transparent)",
                    }}
                  >
                    studio
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-[var(--color-fg-strong)]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 flex flex-col px-6 pt-8 gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-semibold tracking-tight text-[var(--color-fg-strong)] py-3 border-b border-[var(--color-border)]"
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="mt-8">
                  <Link
                    href={localePathV2(locale, "contact")}
                    onClick={() => setOpen(false)}
                    className="mono inline-flex items-center justify-center w-full h-12 rounded-md text-sm font-medium text-[var(--color-bg)]"
                    style={{ background: "var(--kx-accent)" }}
                  >
                    {d.nav.cta} →
                  </Link>
                </div>
              </nav>

              <div className="px-6 pb-6">
                <LangSwitcher current={locale} variant="menu" onNavigate={() => setOpen(false)} />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
