import type { ComparisonRow as Row } from "@/content/v2/types";

export function ComparisonTable({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: Row[];
}) {
  return (
    <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] overflow-hidden">
      <div className="grid grid-cols-[1fr_1fr_1fr] divide-x divide-[var(--color-border)] border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <div className="p-4 mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
          métrica
        </div>
        <div className="p-4 mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
          {leftLabel}
        </div>
        <div
          className="p-4 mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: "var(--kx-accent-bright)" }}
        >
          {rightLabel}
        </div>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.metric}
          className={`grid grid-cols-[1fr_1fr_1fr] divide-x divide-[var(--color-border)] ${
            i < rows.length - 1 ? "border-b border-[var(--color-border)]" : ""
          }`}
        >
          <div className="p-4 text-sm text-[var(--color-fg-muted)] leading-relaxed">
            {r.metric}
          </div>
          <div className="p-4 mono text-sm text-[var(--color-fg-muted)] line-through decoration-[var(--color-fg-subtle)]/40">
            {r.traditional}
          </div>
          <div className="p-4">
            <div
              className="mono text-base sm:text-lg font-semibold"
              style={{ color: "var(--kx-accent)" }}
            >
              {r.kairox}
            </div>
            {r.delta ? (
              <div className="mt-0.5 mono text-[11px] text-[var(--color-fg-subtle)]">
                ↳ {r.delta}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
