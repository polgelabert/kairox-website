"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";

type Channel = { l: string; c: number; active?: boolean };
type FeedItem = { who: string; msg: string; t: string };

export function HeroVisual({ d }: { d: Dictionary["heroVisual"] }) {
  const [counts, setCounts] = useState<Channel[]>([
    { l: "WhatsApp", c: 12, active: true },
    { l: "Telegram", c: 7 },
    { l: "Instagram", c: 4 },
    { l: "Reddit", c: 2 },
    { l: "TikTok", c: 0 },
  ]);
  const [feed, setFeed] = useState<FeedItem[]>(d.feed);
  const [respMs, setRespMs] = useState(38);
  const [openCount, setOpenCount] = useState(43);
  const [volTrend, setVolTrend] = useState(12);
  const [tick, setTick] = useState(0);

  // Fast cadence: every 1.1s. Each tick visibly bumps numbers.
  useEffect(() => {
    const id = setInterval(() => {
      setCounts((c) =>
        c.map((ch, i) => ({
          ...ch,
          // WhatsApp grows fastest, then a falloff per channel
          c: ch.c + (Math.random() < 0.7 ? 1 + Math.floor(Math.random() * (4 - i * 0.6)) : 0),
        }))
      );
      setRespMs((v) =>
        Math.max(24, Math.min(72, v + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3))))
      );
      setOpenCount((v) => Math.max(0, v + Math.floor(Math.random() * 4) - 1));
      setVolTrend((v) =>
        Math.max(4, Math.min(48, v + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3))))
      );
      setTick((t) => t + 1);
    }, 1100);
    return () => clearInterval(id);
  }, []);

  // Rotate feed every 2s — push new at top, drop oldest
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setFeed((current) => {
        const next = d.feedExtra[i % d.feedExtra.length];
        i++;
        return [next, ...current].slice(0, 3);
      });
    }, 2000);
    return () => clearInterval(id);
  }, [d.feedExtra]);

  return (
    <div className="relative w-full select-none">
      <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.18),transparent_70%)] blur-2xl pointer-events-none" />
      <div className="relative rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl shadow-black/40 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="mono text-[11px] text-[var(--color-fg-subtle)] ml-3 truncate">
            {d.app}
          </span>
          <span className="ml-auto mono text-[10px] text-[#28c840] flex items-center gap-1.5 shrink-0">
            <span className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-[#28c840] animate-ping opacity-60" />
              <span className="absolute inset-0 rounded-full bg-[#28c840]" />
            </span>
            {d.live}
          </span>
        </div>

        <div className="grid grid-cols-[120px_1fr] min-h-[320px]">
          {/* Channels */}
          <div className="border-r border-[var(--color-border)] bg-[var(--color-bg-raised)]/40 p-3 space-y-1.5">
            {counts.map((ch) => (
              <div
                key={ch.l}
                className={`flex items-center justify-between rounded px-2 py-1.5 text-[11px] transition-colors ${
                  ch.active
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-fg-strong)]"
                    : "text-[var(--color-fg-muted)]"
                }`}
              >
                <span className="mono">{ch.l}</span>
                <Counter value={ch.c} />
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div className="p-4 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <Metric label={d.response} value={`${respMs}s`} tone="ok" />
              <Metric label={d.open} value={openCount.toLocaleString()} tone="muted" />
              <Metric label={d.csat} value="4.8" tone="accent" />
            </div>

            <Sparkline label={d.volume24h} trend={volTrend} tick={tick} />

            <div className="space-y-1.5 min-h-[90px]">
              {feed.map((r, i) => (
                <FeedRow key={`${r.who}-${r.msg}-${i}`} r={r} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  return (
    <span
      key={value}
      className="mono opacity-70 inline-block animate-[kx-pop_400ms_ease-out]"
    >
      {value}
    </span>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "muted" | "accent";
}) {
  const color =
    tone === "ok"
      ? "text-[#7fd1de]"
      : tone === "accent"
      ? "text-[var(--color-accent)]"
      : "text-[var(--color-fg-strong)]";
  return (
    <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5">
      <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] truncate">
        {label}
      </div>
      <div
        key={value}
        className={`mono text-lg font-semibold mt-1 ${color} tabular-nums animate-[kx-pop_500ms_ease-out]`}
      >
        {value}
      </div>
    </div>
  );
}

function Sparkline({
  label,
  trend,
  tick,
}: {
  label: string;
  trend: number;
  tick: number;
}) {
  // Hand-drawn SVG sparkline. Rerolls a couple of trailing points on tick.
  const seedPoints = [10, 14, 11, 18, 22, 19, 28, 34, 31, 40, 46, 42, 55, 60, 58, 64, 70, 65, 72, 78, 74, 68, 60, 52];
  const offset = tick % seedPoints.length;
  const points = seedPoints.map((p, i) => p + ((i + offset) % 5) * 2);
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 30 - (p / max) * 30;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
  const lastX = 100;
  const lastY = 30 - (points[points.length - 1] / max) * 30;
  const fillPath = `${path} L ${lastX} 30 L 0 30 Z`;

  return (
    <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          {label}
        </div>
        <div className="mono text-[10px] text-[var(--color-accent)] tabular-nums">
          +{trend}%
        </div>
      </div>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-10">
        <defs>
          <linearGradient id="kx-spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={fillPath} fill="url(#kx-spark)" />
        <path
          d={path}
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={lastX} cy={lastY} r="1.6" fill="#a78bfa" />
        <circle cx={lastX} cy={lastY} r="3" fill="#a78bfa" opacity="0.3">
          <animate
            attributeName="r"
            values="1.6;5;1.6"
            dur="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6;0;0.6"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

function FeedRow({ r, index }: { r: FeedItem; index: number }) {
  return (
    <div
      className="flex items-start gap-2 px-2 py-1.5 rounded text-[11px] animate-[kx-slide_400ms_ease-out]"
      style={{ opacity: 1 - index * 0.18 }}
    >
      <span className="mono text-[var(--color-accent)] shrink-0">›</span>
      <span className="mono text-[var(--color-fg-strong)] shrink-0">{r.who}</span>
      <span className="text-[var(--color-fg-muted)] truncate">{r.msg}</span>
      <span className="mono text-[10px] text-[var(--color-fg-subtle)] ml-auto shrink-0">
        {r.t}
      </span>
    </div>
  );
}
