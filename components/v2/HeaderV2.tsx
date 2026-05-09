import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LangSwitcher } from "@/components/LangSwitcher";
import { MobileNavV2 } from "./MobileNavV2";
import { localePathV2, getDictionaryV2 } from "@/lib/v2/i18n";
import type { Locale } from "@/content/types";

export function HeaderV2({ locale }: { locale: Locale }) {
  const d = getDictionaryV2(locale);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bg)]/95 md:bg-[var(--color-bg)]/80 border-b border-[var(--color-border-strong)] md:border-[var(--color-border)]">
      <Container className="flex items-center justify-between h-16">
        <Link href={localePathV2(locale, "home")} className="flex items-center gap-2.5 group">
          <Image
            src="/kairox-mark.svg"
            alt="Kairox"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
            unoptimized
          />
          <span className="mono text-base font-semibold tracking-tight text-[var(--color-fg-strong)]">
            kairox
          </span>
          <span
            className="mono text-[10px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded ml-1"
            style={{
              color: "var(--kx-accent-bright)",
              border: "1px solid color-mix(in srgb, var(--kx-accent) 35%, transparent)",
              background: "color-mix(in srgb, var(--kx-accent) 8%, transparent)",
            }}
          >
            studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <NavLink href={localePathV2(locale, "services")}>{d.nav.services}</NavLink>
          <NavLink href={localePathV2(locale, "sectors")}>{d.nav.sectors}</NavLink>
          <NavLink href={localePathV2(locale, "process")}>{d.nav.process}</NavLink>
          <NavLink href={localePathV2(locale, "contact")}>{d.nav.contact}</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitcher current={locale} />
          <Link
            href={localePathV2(locale, "contact")}
            className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-md text-sm font-medium mono tracking-tight text-[var(--color-bg)]"
            style={{ background: "var(--kx-accent)" }}
          >
            {d.nav.cta}
          </Link>
          <MobileNavV2 locale={locale} />
        </div>
      </Container>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg-strong)] transition-colors"
    >
      {children}
    </Link>
  );
}
