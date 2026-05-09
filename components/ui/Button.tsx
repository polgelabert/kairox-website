import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-fg-strong)] text-[var(--color-bg)] hover:bg-white",
  secondary:
    "bg-transparent border border-[var(--color-border-strong)] text-[var(--color-fg-strong)] hover:border-white/30 hover:bg-white/[0.03]",
  ghost:
    "bg-transparent text-[var(--color-fg-muted)] hover:text-[var(--color-fg-strong)]",
};

const base =
  "inline-flex items-center justify-center h-10 px-5 rounded-md text-sm font-medium transition-colors mono tracking-tight";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `${base} ${styles[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
