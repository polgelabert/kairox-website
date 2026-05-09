import { WorkCase } from "@/content/types";

const labelKeys: Record<string, Record<string, string>> = {
  es: { problem: "Problema", built: "Lo que construimos", scope: "Alcance", stack: "Stack" },
  en: { problem: "Problem", built: "What we built", scope: "Scope", stack: "Stack" },
  ca: { problem: "Problema", built: "El que vam construir", scope: "Abast", stack: "Stack" },
};

const themes = [
  { accent: "#a78bfa", tags: ["WhatsApp", "Telegram", "Postgres", "Grafana"] },
  { accent: "#7fd1de", tags: ["Meta API", "Reddit", "TikTok", "Next.js"] },
  { accent: "#60a5fa", tags: ["Telegram Bot", "Stripe", "Redis"] },
  { accent: "#fbbf24", tags: ["RunPod", "ComfyUI", "Python", "S3"] },
] as const;

export function WorkCard({
  work,
  locale,
  index = 0,
}: {
  work: WorkCase;
  locale: keyof typeof labelKeys;
  index?: number;
}) {
  const labels = labelKeys[locale] ?? labelKeys.es;
  const t = themes[index % themes.length];

  return (
    <article
      className="relative p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] overflow-hidden group hover:border-[var(--color-border-strong)] transition-colors"
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
        }}
      />
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.08] blur-2xl pointer-events-none transition-opacity group-hover:opacity-[0.18]"
        style={{ background: t.accent }}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span
            className="mono text-xs uppercase tracking-[0.18em]"
            style={{ color: t.accent }}
          >
            case · {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-fg-strong)] tracking-tight">
          {work.title}
        </h3>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
              {labels.problem}
            </dt>
            <dd className="mt-2 text-[var(--color-fg-muted)] leading-relaxed">
              {work.problem}
            </dd>
          </div>
          <div>
            <dt
              className="mono text-xs uppercase tracking-[0.18em]"
              style={{ color: t.accent }}
            >
              {labels.built}
            </dt>
            <dd className="mt-2 text-[var(--color-fg)] leading-relaxed">
              {work.built}
            </dd>
          </div>
          <div>
            <dt className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
              {labels.scope}
            </dt>
            <dd className="mt-2 mono text-sm text-[var(--color-fg-muted)]">
              {work.scope}
            </dd>
          </div>
        </dl>

        <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
          <div className="mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] mb-2">
            {labels.stack}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="mono text-[10px] px-2 py-1 rounded"
                style={{
                  border: `1px solid ${t.accent}33`,
                  color: t.accent,
                  background: `${t.accent}0d`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
