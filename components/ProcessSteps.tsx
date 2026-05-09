import { ProcessStep } from "@/content/types";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="mt-12 grid gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden md:grid-cols-5 sm:grid-cols-2">
      {steps.map((s) => (
        <li key={s.label} className="bg-[var(--color-bg-raised)] p-6">
          <div className="mono text-xs text-[var(--color-accent)] mb-3">
            {s.label}
          </div>
          <div className="font-semibold text-[var(--color-fg-strong)] mb-2">
            {s.title}
          </div>
          <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
            {s.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
