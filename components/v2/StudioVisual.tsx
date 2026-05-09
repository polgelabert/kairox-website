"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { V2Dictionary } from "@/content/v2/types";

type Job = {
  id: string;
  thumb: string;
  kind: string;
  status: "ready" | "rendering" | "queued";
  progress: number;
};

const SAMPLE_THUMBS = [
  "/v2/samples/product-1.svg",
  "/v2/samples/product-2.svg",
  "/v2/samples/product-3.svg",
  "/v2/samples/lifestyle-1.svg",
  "/v2/samples/video-frame-1.svg",
  "/v2/samples/video-frame-2.svg",
  "/v2/samples/reel-1.svg",
  "/v2/samples/reel-2.svg",
];

export function StudioVisual({ d }: { d: V2Dictionary["studioVisual"] }) {
  const [jobs, setJobs] = useState<Job[]>([
    { id: "img-2841", thumb: SAMPLE_THUMBS[0], kind: "still life · v3", status: "ready", progress: 100 },
    { id: "img-2842", thumb: SAMPLE_THUMBS[1], kind: "still life · v3", status: "rendering", progress: 38 },
    { id: "vid-091", thumb: SAMPLE_THUMBS[4], kind: "video · 15s · sdxl", status: "queued", progress: 0 },
    { id: "img-2843", thumb: SAMPLE_THUMBS[2], kind: "still life · v3", status: "queued", progress: 0 },
  ]);
  const [variants, setVariants] = useState(18);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      setJobs((js) => {
        const out = js.map((j) => {
          if (j.status === "rendering") {
            const np = j.progress + 8 + Math.floor(Math.random() * 8);
            if (np >= 100) return { ...j, status: "ready" as const, progress: 100 };
            return { ...j, progress: np };
          }
          return j;
        });
        const allDone = out.every((j) => j.status !== "rendering");
        if (allDone) {
          const next = out.find((j) => j.status === "queued");
          if (next) {
            return out.map((j) =>
              j.id === next.id ? { ...j, status: "rendering" as const, progress: 5 } : j
            );
          }
        }
        return out;
      });
      setVariants((v) => v + (Math.random() < 0.6 ? 1 : 0));
      n++;
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full select-none">
      <div
        className="absolute -inset-8 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,146,60,0.18), transparent 70%)",
        }}
      />
      <div className="relative rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl shadow-black/40 overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="mono text-[11px] text-[var(--color-fg-subtle)] ml-3 truncate">
            {d.app}
          </span>
          <span
            className="ml-auto mono text-[10px] flex items-center gap-1.5 shrink-0"
            style={{ color: "var(--kx-accent)" }}
          >
            <span className="relative w-1.5 h-1.5">
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-60"
                style={{ background: "var(--kx-accent)" }}
              />
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--kx-accent)" }}
              />
            </span>
            {d.live}
          </span>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-2 divide-x divide-[var(--color-border)]">
          <div className="p-3.5">
            <div className="mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
              {d.queueLabel}
            </div>
            <div className="mono text-xl font-semibold tabular-nums mt-0.5 text-[var(--color-fg-strong)]">
              {jobs.filter((j) => j.status !== "ready").length} / {jobs.length}
            </div>
          </div>
          <div className="p-3.5">
            <div className="mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
              {d.variantLabel}
            </div>
            <div
              key={variants}
              className="mono text-xl font-semibold tabular-nums mt-0.5 animate-[kx-pop_400ms_ease-out]"
              style={{ color: "var(--kx-accent)" }}
            >
              {variants}
            </div>
          </div>
        </div>

        {/* Job list */}
        <ul className="divide-y divide-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          {jobs.map((j) => (
            <li key={j.id} className="flex items-center gap-3 p-3">
              <div className="relative w-12 h-12 rounded overflow-hidden border border-[var(--color-border)] shrink-0 bg-[var(--color-bg)]">
                <Image
                  src={j.thumb}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
                {j.status !== "ready" ? (
                  <div className="absolute inset-0 bg-[var(--color-bg)]/60" />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="mono text-[11px] text-[var(--color-fg-subtle)] truncate">
                    {j.id}
                  </span>
                  <span
                    className="mono text-[9px] uppercase px-1.5 py-0.5 rounded shrink-0"
                    style={
                      j.status === "ready"
                        ? { background: "rgba(127,209,222,0.14)", color: "#7fd1de" }
                        : j.status === "rendering"
                        ? { background: "var(--kx-accent-soft)", color: "var(--kx-accent)" }
                        : { background: "rgba(255,255,255,0.06)", color: "var(--color-fg-muted)" }
                    }
                  >
                    {j.status === "ready"
                      ? d.statusReady
                      : j.status === "rendering"
                      ? d.statusRendering
                      : d.statusQueued}
                  </span>
                </div>
                <div className="mono text-[11px] text-[var(--color-fg-muted)] truncate">
                  {j.kind}
                </div>
                {j.status === "rendering" ? (
                  <div className="mt-1.5 h-1 w-full rounded-full bg-[var(--color-bg)] overflow-hidden">
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${j.progress}%`,
                        background: "var(--kx-accent)",
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        {/* Thumbnail strip */}
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-raised)] p-3">
          <div className="mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-2">
            recent · gallery
          </div>
          <div className="flex gap-2 overflow-x-hidden">
            {SAMPLE_THUMBS.slice(0, 6).map((src, i) => (
              <div
                key={src}
                className="relative w-12 h-12 rounded overflow-hidden border border-[var(--color-border)] shrink-0 bg-[var(--color-bg)]"
                style={{ opacity: 1 - i * 0.08 }}
              >
                <Image src={src} alt="" fill unoptimized className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
