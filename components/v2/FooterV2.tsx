import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { localePathV2, getDictionaryV2 } from "@/lib/v2/i18n";
import { VersionSwitch } from "@/components/VersionSwitch";
import type { Locale } from "@/content/types";

export function FooterV2({ locale }: { locale: Locale }) {
  const d = getDictionaryV2(locale);
  const year = new Date().getFullYear();

  // v2 footer links to v1 legal pages — same SL, same legal text.
  const legalBase = `/${locale}/legal`;

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
              <span
                className="mono text-[10px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded"
                style={{
                  color: "var(--kx-accent-bright)",
                  border: "1px solid color-mix(in srgb, var(--kx-accent) 35%, transparent)",
                }}
              >
                studio
              </span>
            </div>
            <p className="max-w-xs">{d.footer.tagline}</p>

            <div className="mt-6">
              <VersionSwitch direction="to-v1" label={d.footer.versionSwitch} />
            </div>
          </div>

          <div>
            <div className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-4">
              {d.footer.nav}
            </div>
            <ul className="space-y-2">
              <li><FooterLink href={localePathV2(locale, "services")}>{d.nav.services}</FooterLink></li>
              <li><FooterLink href={localePathV2(locale, "sectors")}>{d.nav.sectors}</FooterLink></li>
              <li><FooterLink href={localePathV2(locale, "process")}>{d.nav.process}</FooterLink></li>
              <li><FooterLink href={localePathV2(locale, "contact")}>{d.nav.contact}</FooterLink></li>
            </ul>
          </div>

          <div>
            <div className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-4">
              {d.footer.legal}
            </div>
            <ul className="space-y-2">
              <li><FooterLink href={`${legalBase}/aviso-legal`}>{d.footer.avisoLegal}</FooterLink></li>
              <li><FooterLink href={`${legalBase}/privacidad`}>{d.footer.privacidad}</FooterLink></li>
              <li><FooterLink href={`${legalBase}/cookies`}>{d.footer.cookies}</FooterLink></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 sm:mt-16 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 text-[11px] sm:text-xs text-[var(--color-fg-subtle)] mono leading-relaxed"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div>
            © {year} Kairox · CIF B25903097
            <span className="hidden sm:inline">
              {" "}· Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
            </span>
            <span className="block sm:hidden">
              Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
            </span>
          </div>
          <div>{d.footer.rights}</div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-[var(--color-fg-strong)] transition-colors">
      {children}
    </Link>
  );
}
