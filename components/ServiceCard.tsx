import { Service } from "@/content/types";

export function ServiceCard({
  service,
  index,
  full = false,
}: {
  service: Service;
  index: number;
  full?: boolean;
}) {
  return (
    <article className="group relative p-7 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] hover:border-[var(--color-border-strong)] transition-colors">
      <div className="mono text-xs text-[var(--color-fg-subtle)] mb-4">
        {String(index + 1).padStart(2, "0")}
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
              <span className="mono text-[var(--color-accent)] mt-[2px]">
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
