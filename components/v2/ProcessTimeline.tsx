import type { ProcessStep } from "@/content/v2/types";

const STEP_ICONS = [
  // 01 brief — pencil-on-paper
  <svg key="0" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19l4-1 9-9-3-3-9 9z" />
    <path d="M14 6l3 3" />
    <path d="M3 21h18" />
  </svg>,
  // 02 generación — sparkles + frame
  <svg key="1" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="14" height="14" rx="2" />
    <path d="M19 4l1.5 3L24 8.5 20.5 10 19 13 17.5 10 14 8.5 17.5 7z" />
  </svg>,
  // 03 review — eye
  <svg key="2" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // 04 entrega — package down arrow
  <svg key="3" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8l-9-5-9 5 9 5 9-5z" />
    <path d="M3 8v8l9 5 9-5V8" />
    <path d="M12 13v8" />
  </svg>,
  // 05 iteración — circular arrow
  <svg key="4" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <polyline points="3 4 3 9 8 9" />
  </svg>,
];

export function ProcessTimeline({
  steps,
  detailed = false,
}: {
  steps: ProcessStep[];
  detailed?: boolean;
}) {
  return (
    <ol className="mt-12 grid gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden md:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.label} className="bg-[var(--color-bg-raised)] p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <span
              className="mono text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--kx-accent-bright)" }}
            >
              {s.label}
            </span>
            <span style={{ color: "var(--kx-accent)" }}>
              {STEP_ICONS[i] ?? null}
            </span>
          </div>
          <div className="font-semibold text-[var(--color-fg-strong)] mb-2">{s.title}</div>
          <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{s.body}</p>
          {detailed ? (
            <p className="mt-3 text-sm text-[var(--color-fg)] leading-relaxed">{s.detail}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
