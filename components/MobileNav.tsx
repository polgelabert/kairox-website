"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { LangSwitcher } from "./LangSwitcher";
import { localePath, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export function MobileNav({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // iOS Safari ignores body { overflow: hidden } — also lock html and
  // pin scroll position so the page underneath can't bleed visually.
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
    { href: localePath(locale, "services"), label: d.nav.services },
    { href: localePath(locale, "work"), label: d.nav.work },
    { href: localePath(locale, "about"), label: d.nav.about },
    { href: localePath(locale, "contact"), label: d.nav.contact },
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
              href={localePath(locale, "home")}
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
                href={localePath(locale, "contact")}
                onClick={() => setOpen(false)}
                className="mono inline-flex items-center justify-center w-full h-12 rounded-md bg-[var(--color-fg-strong)] text-[var(--color-bg)] text-sm font-medium"
              >
                {d.nav.cta} →
              </Link>
            </div>
          </nav>

          <div className="px-6 pb-6">
            <LangSwitcher
              current={locale}
              variant="menu"
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}
