import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 lg:py-28 border-t border-[var(--color-border)] ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-4">
          <MonoLabel>{eyebrow}</MonoLabel>
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-fg-strong)] text-balance leading-tight">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[var(--color-fg-muted)] leading-relaxed">
          {body}
        </p>
      ) : null}
    </div>
  );
}
