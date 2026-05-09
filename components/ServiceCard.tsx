import { Service } from "@/content/types";

// Per-service accent + glyph + tiny inline mock visual.
// Keyed by slug — works across all locales (slugs differ but each
// locale's slugs map cleanly to one of these themes by index in the
// array on the page, falling back via the byIndex helper below).
const themes = [
  {
    accent: "#a78bfa",
    accentSoft: "rgba(167,139,250,0.12)",
    glyph: "▲",
    tag: "analytics",
    visual: "metric",
  },
  {
    accent: "#7fd1de",
    accentSoft: "rgba(127,209,222,0.12)",
    glyph: "◆",
    tag: "ops",
    visual: "grid",
  },
  {
    accent: "#60a5fa",
    accentSoft: "rgba(96,165,250,0.12)",
    glyph: "✦",
    tag: "telegram",
    visual: "bot",
  },
  {
    accent: "#fbbf24",
    accentSoft: "rgba(251,191,36,0.12)",
    glyph: "❯",
    tag: "bespoke",
    visual: "code",
  },
] as const;

export function ServiceCard({
  service,
  index,
  full = false,
}: {
  service: Service;
  index: number;
  full?: boolean;
}) {
  const t = themes[index % themes.length];

  return (
    <article
      className="group relative p-7 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] hover:border-[var(--color-border-strong)] transition-colors overflow-hidden"
      style={{ "--svc-accent": t.accent, "--svc-soft": t.accentSoft } as React.CSSProperties}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
        }}
      />
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-[0.08] blur-2xl pointer-events-none transition-opacity group-hover:opacity-[0.18]"
        style={{ background: t.accent }}
      />

      <div className="relative flex items-center justify-between mb-4">
        <span
          className="mono text-xs uppercase tracking-[0.18em]"
          style={{ color: t.accent }}
        >
          {String(index + 1).padStart(2, "0")} · {t.tag}
        </span>
        <span
          className="mono text-base"
          style={{ color: t.accent }}
        >
          {t.glyph}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-[var(--color-fg-strong)] tracking-tight">
        {service.name}
      </h3>
      <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">
        {full ? service.description : service.short}
      </p>

      {full ? (
        <ul className="mt-6 space-y-2">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-sm text-[var(--color-fg)] leading-relaxed"
            >
              <span className="mono mt-[2px]" style={{ color: t.accent }}>
                ›
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6">
          <ServiceVisual kind={t.visual} accent={t.accent} />
        </div>
      )}
    </article>
  );
}

function ServiceVisual({
  kind,
  accent,
}: {
  kind: string;
  accent: string;
}) {
  if (kind === "metric") {
    return (
      <div className="flex gap-2">
        {[
          { l: "p50", v: "42s" },
          { l: "vol", v: "1.2k" },
          { l: "csat", v: "4.8" },
        ].map((m) => (
          <div
            key={m.l}
            className="flex-1 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-2"
          >
            <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
              {m.l}
            </div>
            <div
              className="mono text-sm font-semibold mt-0.5"
              style={{ color: accent }}
            >
              {m.v}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "grid") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {["IG", "FB", "Reddit", "TikTok", "X"].map((p) => (
          <span
            key={p}
            className="mono text-[10px] px-2 py-1 rounded border border-[var(--color-border)] text-[var(--color-fg-muted)]"
            style={{ borderColor: `${accent}33`, color: accent }}
          >
            {p}
          </span>
        ))}
      </div>
    );
  }
  if (kind === "bot") {
    return (
      <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5 mono text-[11px] space-y-1">
        <div className="flex items-center gap-2">
          <span style={{ color: accent }}>›</span>
          <span className="text-[var(--color-fg-muted)]">/start</span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: accent }}>‹</span>
          <span className="text-[var(--color-fg)]">welcome · 12,481 subs</span>
        </div>
      </div>
    );
  }
  // code
  return (
    <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5 mono text-[11px]">
      <div>
        <span className="text-[var(--color-fg-subtle)]">$ </span>
        <span style={{ color: accent }}>kairox</span>
        <span className="text-[var(--color-fg-muted)]"> deploy --env=prod</span>
      </div>
      <div className="text-[var(--color-fg-subtle)]">
        ✓ 14 services healthy
      </div>
    </div>
  );
}
