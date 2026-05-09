import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/Container";
import { localePath, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export function Footer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] mt-24 pt-16 pb-12 text-sm text-[var(--color-fg-muted)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/kairox-mark.svg"
                alt="Kairox"
                width={28}
                height={28}
                className="h-7 w-7"
                unoptimized
              />
              <span className="mono text-base font-semibold text-[var(--color-fg-strong)]">
                kairox
              </span>
            </div>
            <p className="max-w-xs">{d.footer.tagline}</p>
          </div>

          <div>
            <div className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-4">
              {d.footer.nav}
            </div>
            <ul className="space-y-2">
              <li><FooterLink href={localePath(locale, "services")}>{d.nav.services}</FooterLink></li>
              <li><FooterLink href={localePath(locale, "work")}>{d.nav.work}</FooterLink></li>
              <li><FooterLink href={localePath(locale, "about")}>{d.nav.about}</FooterLink></li>
              <li><FooterLink href={localePath(locale, "contact")}>{d.nav.contact}</FooterLink></li>
            </ul>
          </div>

          <div>
            <div className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-4">
              {d.footer.legal}
            </div>
            <ul className="space-y-2">
              <li><FooterLink href={localePath(locale, "avisoLegal")}>{d.footer.avisoLegal}</FooterLink></li>
              <li><FooterLink href={localePath(locale, "privacidad")}>{d.footer.privacidad}</FooterLink></li>
              <li><FooterLink href={localePath(locale, "cookies")}>{d.footer.cookies}</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--color-fg-subtle)] mono">
          <div>
            © {year} Kairox · CIF B25903097 · Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
          </div>
          <div>{d.footer.rights}</div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover:text-[var(--color-fg-strong)] transition-colors"
    >
      {children}
    </Link>
  );
}
