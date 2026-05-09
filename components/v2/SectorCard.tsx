import Image from "next/image";
import type { Sector } from "@/content/v2/types";

export function SectorCard({ sector, full = false }: { sector: Sector; full?: boolean }) {
  const img = `/v2/samples/sector-${sector.slug.replace("dtc-ecommerce", "dtc")}.svg`;

  return (
    <article className="group relative rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-raised)] overflow-hidden hover:border-[var(--color-border-strong)] transition-colors">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={img}
          alt={sector.imageAlt}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-fg-strong)] tracking-tight">
            {sector.name}
          </h3>
          <span
            className="mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded"
            style={{
              color: "var(--kx-accent-bright)",
              background: "color-mix(in srgb, var(--kx-accent) 12%, rgba(0,0,0,0.4))",
              border: "1px solid color-mix(in srgb, var(--kx-accent) 30%, transparent)",
            }}
          >
            sector
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[var(--color-fg-muted)] leading-relaxed">
          {full ? sector.description : sector.short}
        </p>
        {full ? (
          <ul className="mt-4 space-y-1.5">
            {sector.uses.map((u) => (
              <li
                key={u}
                className="flex gap-2.5 text-sm text-[var(--color-fg)] leading-relaxed"
              >
                <span className="mono mt-[2px]" style={{ color: "var(--kx-accent)" }}>
                  ›
                </span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
