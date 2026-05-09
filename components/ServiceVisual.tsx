"use client";

import { useEffect, useState } from "react";

type Kind = "metric" | "grid" | "bot" | "code";

export function ServiceVisual({ kind, accent }: { kind: Kind; accent: string }) {
  if (kind === "metric") return <MetricVisual accent={accent} />;
  if (kind === "grid") return <GridVisual accent={accent} />;
  if (kind === "bot") return <BotVisual accent={accent} />;
  return <CodeVisual accent={accent} />;
}

// 1. Analytics: live metric tiles + tiny sparkline that ticks
function MetricVisual({ accent }: { accent: string }) {
  const [p50, setP50] = useState(38);
  const [vol, setVol] = useState(412);
  const [csat, setCsat] = useState(4.7);
  const [points, setPoints] = useState<number[]>([6, 8, 7, 12, 14, 11, 18, 22, 19, 26, 30, 27]);

  useEffect(() => {
    const id = setInterval(() => {
      setP50((v) => Math.max(22, Math.min(64, v + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3)))));
      setVol((v) => v + Math.floor(Math.random() * 4));
      setCsat(() => +(4.5 + Math.random() * 0.4).toFixed(1));
      setPoints((p) => [...p.slice(1), 8 + Math.floor(Math.random() * 28)]);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 24 - (p / max) * 24;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <div className="space-y-2.5">
      <div className="flex gap-2">
        {[
          { l: "p50", v: `${p50}s` },
          { l: "vol", v: vol.toLocaleString() },
          { l: "csat", v: csat.toFixed(1) },
        ].map((m) => (
          <div
            key={m.l}
            className="flex-1 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-2"
          >
            <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
              {m.l}
            </div>
            <div
              key={m.v}
              className="mono text-sm font-semibold mt-0.5 tabular-nums animate-[kx-pop_400ms_ease-out]"
              style={{ color: accent }}
            >
              {m.v}
            </div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-7">
        <path
          d={path}
          fill="none"
          stroke={accent}
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// 2. Social ops: platform chips with one "active" highlight cycling
function GridVisual({ accent }: { accent: string }) {
  const platforms = ["Instagram", "Facebook", "Reddit", "TikTok", "X"];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % platforms.length);
    }, 1100);
    return () => clearInterval(id);
  }, [platforms.length]);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {platforms.map((p, i) => (
          <span
            key={p}
            className="mono text-[10px] px-2 py-1 rounded transition-all duration-300"
            style={
              i === active
                ? {
                    border: `1px solid ${accent}`,
                    color: "#0a0a0a",
                    background: accent,
                  }
                : {
                    border: `1px solid ${accent}33`,
                    color: accent,
                    background: "transparent",
                  }
            }
          >
            {p}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mono text-[10px] text-[var(--color-fg-subtle)]">
        <span className="relative w-1.5 h-1.5">
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: accent }}
          />
          <span className="absolute inset-0 rounded-full" style={{ background: accent }} />
        </span>
        <span>
          → {platforms[active]}
        </span>
      </div>
    </div>
  );
}

// 3. Telegram: bot conversation that types out
function BotVisual({ accent }: { accent: string }) {
  const exchanges = [
    { in: "/start", out: "welcome · 12,481 subs" },
    { in: "/stats today", out: "+187 new · 94% open · 18% ctr" },
    { in: "/broadcast vip", out: "queued for 2,304 recipients" },
    { in: "/pay 9.99 EUR", out: "✓ subscription activated" },
  ];
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const target = phase === "in" ? exchanges[step].in : exchanges[step].out;
    if (typed.length < target.length) {
      const id = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 35);
      return () => clearTimeout(id);
    }
    const wait = setTimeout(() => {
      if (phase === "in") {
        setPhase("out");
        setTyped("");
      } else {
        setPhase("in");
        setTyped("");
        setStep((s) => (s + 1) % exchanges.length);
      }
    }, phase === "out" ? 1400 : 600);
    return () => clearTimeout(wait);
  }, [typed, phase, step]);

  return (
    <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5 mono text-[11px] space-y-1 min-h-[60px]">
      <div className="flex items-center gap-2">
        <span style={{ color: accent }}>›</span>
        <span className="text-[var(--color-fg-muted)]">
          {phase === "in" ? typed : exchanges[step].in}
          {phase === "in" && <Caret />}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span style={{ color: accent }}>‹</span>
        <span className="text-[var(--color-fg)]">
          {phase === "out" ? typed : ""}
          {phase === "out" && <Caret />}
        </span>
      </div>
    </div>
  );
}

// 4. Bespoke / custom: terminal that types out commands
function CodeVisual({ accent }: { accent: string }) {
  const lines = [
    { cmd: "kairox deploy --env=prod", out: "✓ 14 services healthy" },
    { cmd: "kairox sync stripe → erp", out: "✓ 312 invoices reconciled" },
    { cmd: "kairox run pipeline --gpu=runpod", out: "✓ 48 jobs · 2m12s avg" },
    { cmd: "kairox migrate legacy → v2", out: "✓ 89,241 rows migrated" },
  ];
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    if (!showOut && typed.length < lines[step].cmd.length) {
      const id = setTimeout(() => setTyped(lines[step].cmd.slice(0, typed.length + 1)), 30);
      return () => clearTimeout(id);
    }
    if (!showOut) {
      const id = setTimeout(() => setShowOut(true), 320);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setStep((s) => (s + 1) % lines.length);
      setTyped("");
      setShowOut(false);
    }, 1700);
    return () => clearTimeout(id);
  }, [typed, showOut, step]);

  return (
    <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5 mono text-[11px] min-h-[52px]">
      <div>
        <span className="text-[var(--color-fg-subtle)]">$ </span>
        <span style={{ color: accent }}>{typed.split(" ")[0]}</span>
        <span className="text-[var(--color-fg-muted)]"> {typed.split(" ").slice(1).join(" ")}</span>
        {!showOut && <Caret />}
      </div>
      {showOut ? (
        <div className="text-[var(--color-fg-subtle)] animate-[kx-slide_300ms_ease-out]">
          {lines[step].out}
        </div>
      ) : (
        <div className="opacity-0">·</div>
      )}
    </div>
  );
}

function Caret() {
  return (
    <span
      className="inline-block w-[5px] h-[10px] ml-[1px] align-middle bg-[var(--color-fg-strong)] animate-[kx-blink_900ms_steps(2,end)_infinite]"
    />
  );
}
