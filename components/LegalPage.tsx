import { Section, MonoLabel } from "./ui/Section";

export function LegalPage({ title, body }: { title: string; body: string }) {
  return (
    <Section className="!border-t-0">
      <div className="max-w-3xl">
        <MonoLabel>legal</MonoLabel>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-fg-strong)]">
          {title}
        </h1>
        <div className="mt-10 text-[var(--color-fg)] leading-relaxed whitespace-pre-line text-[15px]">
          {body}
        </div>
      </div>
    </Section>
  );
}
