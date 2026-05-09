import { Service } from "@/content/types";
import { ServiceVisual } from "./ServiceVisual";

const themes = [
  { accent: "#a78bfa", glyph: "▲", visual: "metric" as const },
  { accent: "#7fd1de", glyph: "◆", visual: "grid" as const },
  { accent: "#60a5fa", glyph: "✦", visual: "bot" as const },
  { accent: "#fbbf24", glyph: "❯", visual: "code" as const },
];

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
    <article className="group relative p-5 sm:p-7 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] hover:border-[var(--color-border-strong)] transition-colors overflow-hidden">
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
          {String(index + 1).padStart(2, "0")} · {service.tag}
        </span>
        <span className="mono text-base" style={{ color: t.accent }}>
          {t.glyph}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-[var(--color-fg-strong)] tracking-tight">
        {service.name}
      </h3>
      <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">
        {full ? service.description : service.short}
      </p>

      <div className="relative mt-6">
        <ServiceVisual kind={t.visual} accent={t.accent} />
      </div>

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
      ) : null}
    </article>
  );
}
