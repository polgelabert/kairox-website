import Image from "next/image";
import type { ServiceLine } from "@/content/v2/types";

const ICONS: Record<ServiceLine["slug"], React.ReactNode> = {
  imagenes: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M3 16l5-4 4 3 3-2 6 5" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="M21 8.5l-4 3v1l4 3V8.5z" />
    </svg>
  ),
  suscripcion: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <polyline points="21 4 21 9 16 9" />
    </svg>
  ),
};

const SAMPLES: Record<ServiceLine["slug"], string[]> = {
  imagenes: [
    "/v2/samples/product-1.svg",
    "/v2/samples/product-2.svg",
    "/v2/samples/product-3.svg",
    "/v2/samples/lifestyle-1.svg",
  ],
  video: [
    "/v2/samples/video-frame-1.svg",
    "/v2/samples/video-frame-2.svg",
    "/v2/samples/video-frame-3.svg",
    "/v2/samples/lifestyle-2.svg",
  ],
  suscripcion: [
    "/v2/samples/reel-1.svg",
    "/v2/samples/reel-2.svg",
    "/v2/samples/reel-3.svg",
  ],
};

export function TierCard({
  service,
  full = false,
  pricingNote,
}: {
  service: ServiceLine;
  full?: boolean;
  pricingNote: string;
}) {
  const samples = SAMPLES[service.slug];
  const isVertical = service.slug === "suscripcion";

  return (
    <article className="group relative p-5 sm:p-7 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] hover:border-[var(--color-border-strong)] transition-colors overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--kx-accent), transparent)",
        }}
      />
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-[0.10] blur-2xl pointer-events-none transition-opacity group-hover:opacity-[0.20]"
        style={{ background: "var(--kx-accent)" }}
      />

      <div className="relative flex items-center justify-between mb-4">
        <span
          className="mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "var(--kx-accent-bright)" }}
        >
          {service.unit}
        </span>
        <span style={{ color: "var(--kx-accent)" }}>{ICONS[service.slug]}</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-fg-strong)] tracking-tight">
        {service.name}
      </h3>
      <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">
        {full ? service.description : service.short}
      </p>

      {/* Sample thumbnail strip */}
      <div className="relative mt-6 -mx-1 flex gap-2 overflow-hidden">
        {samples.slice(0, 4).map((src, i) => (
          <div
            key={src}
            className={`relative shrink-0 rounded overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] ${
              isVertical ? "w-16 h-24" : "w-20 h-20"
            }`}
            style={{ transform: `translateY(${i % 2 === 0 ? 0 : 6}px)` }}
          >
            <Image src={src} alt={service.sampleAlt} fill unoptimized className="object-cover" />
          </div>
        ))}
        <div
          className="absolute inset-y-0 right-0 w-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--color-bg-raised))",
          }}
        />
      </div>

      {full ? (
        <div className="mt-7 space-y-4">
          {service.tiers.map((tier, i) => (
            <div
              key={tier.slug}
              className="rounded border border-[var(--color-border)] p-4 transition-colors hover:border-[color-mix(in_srgb,var(--kx-accent)_30%,transparent)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="mono text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--kx-accent-bright)" }}
                >
                  tier {i + 1} · {tier.label}
                </span>
              </div>
              <div className="text-[15px] font-semibold text-[var(--color-fg-strong)]">
                {tier.headline}
              </div>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                {tier.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {tier.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2.5 text-sm text-[var(--color-fg)] leading-relaxed"
                  >
                    <span className="mono mt-[2px]" style={{ color: "var(--kx-accent)" }}>
                      ›
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-4 mono text-xs text-[var(--color-fg-subtle)]">{pricingNote}</p>
        </div>
      ) : (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {service.tiers.map((tier) => (
            <span
              key={tier.slug}
              className="mono text-[10px] px-2 py-1 rounded"
              style={{
                border: "1px solid color-mix(in srgb, var(--kx-accent) 25%, transparent)",
                color: "var(--kx-accent-bright)",
                background: "color-mix(in srgb, var(--kx-accent) 6%, transparent)",
              }}
            >
              {tier.label}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
