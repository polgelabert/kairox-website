import { WorkCase } from "@/content/types";
import { CaseConsole } from "./CaseConsole";
import { SafeBoundary } from "./SafeBoundary";

const themes = [
  { accent: "#a78bfa", tags: ["WhatsApp", "Telegram", "Postgres", "Grafana"] },
  { accent: "#7fd1de", tags: ["Meta API", "Reddit", "TikTok", "Next.js"] },
  { accent: "#60a5fa", tags: ["Telegram Bot", "Stripe", "Redis"] },
  { accent: "#fbbf24", tags: ["RunPod", "ComfyUI", "Python", "S3"] },
] as const;

export function WorkCard({
  work,
  index = 0,
  withConsole = false,
}: {
  work: WorkCase;
  // locale kept in the prop signature for backward compat, no longer rendered.
  locale?: string;
  index?: number;
  withConsole?: boolean;
}) {
  const t = themes[index % themes.length];

  return (
    <article className="relative p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] overflow-hidden group hover:border-[var(--color-border-strong)] transition-colors">
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
        <span
          className="mono text-xs uppercase tracking-[0.18em]"
          style={{ color: t.accent }}
        >
          case · {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[var(--color-fg-strong)] tracking-tight text-balance">
          {work.title}
        </h3>

        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {work.story}
        </p>

        {withConsole ? (
          <SafeBoundary>
            <CaseConsole index={index} accent={t.accent} />
          </SafeBoundary>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-1.5">
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
    </article>
  );
}
