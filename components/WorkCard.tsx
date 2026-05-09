import { WorkCase } from "@/content/types";

const labelKeys: Record<string, Record<string, string>> = {
  es: { problem: "Problema", built: "Lo que construimos", scope: "Alcance" },
  en: { problem: "Problem", built: "What we built", scope: "Scope" },
  ca: { problem: "Problema", built: "El que vam construir", scope: "Abast" },
};

export function WorkCard({
  work,
  locale,
}: {
  work: WorkCase;
  locale: keyof typeof labelKeys;
}) {
  const labels = labelKeys[locale] ?? labelKeys.es;
  return (
    <article className="p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)]">
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
          <dt className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
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
    </article>
  );
}
