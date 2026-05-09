import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MobileNav } from "./MobileNav";
import { LangSwitcher } from "./LangSwitcher";
import { localePath, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export function Header({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-border)]">
      <Container className="flex items-center justify-between h-16">
        <Link
          href={localePath(locale, "home")}
          className="flex items-center gap-2.5 group"
        >
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
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <NavLink href={localePath(locale, "services")}>
            {d.nav.services}
          </NavLink>
          <NavLink href={localePath(locale, "work")}>{d.nav.work}</NavLink>
          <NavLink href={localePath(locale, "about")}>{d.nav.about}</NavLink>
          <NavLink href={localePath(locale, "contact")}>
            {d.nav.contact}
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitcher current={locale} />
          <Button
            href={localePath(locale, "contact")}
            variant="primary"
            className="hidden md:inline-flex"
          >
            {d.nav.cta}
          </Button>
          <MobileNav locale={locale} />
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

