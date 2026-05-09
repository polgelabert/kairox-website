"use client";

import { useEffect, useState } from "react";

type Kind = "metric" | "grid" | "bot" | "code";

const APP_NAME: Record<Kind, string> = {
  metric: "kairox · analytics console",
  grid: "kairox · social ops console",
  bot: "kairox · telegram bot console",
  code: "kairox · ops & deploy console",
};

export function ServiceConsole({
  kind,
  accent,
}: {
  kind: Kind;
  accent: string;
}) {
  return (
    <div className="relative w-full select-none mt-2">
      <div
        className="absolute -inset-6 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${accent}22, transparent 70%)` }}
      />
      <div className="relative rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl shadow-black/40 overflow-hidden">
        <TitleBar accent={accent} app={APP_NAME[kind]} />
        <div className="min-h-[260px]">
          {kind === "metric" && <MetricConsole accent={accent} />}
          {kind === "grid" && <SocialConsole accent={accent} />}
          {kind === "bot" && <TelegramConsole accent={accent} />}
          {kind === "code" && <DevopsConsole accent={accent} />}
        </div>
      </div>
    </div>
  );
}

function TitleBar({ accent, app }: { accent: string; app: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="mono text-[11px] text-[var(--color-fg-subtle)] ml-3 truncate">{app}</span>
      <span className="ml-auto mono text-[10px] flex items-center gap-1.5 shrink-0" style={{ color: accent }}>
        <span className="relative w-1.5 h-1.5">
          <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ background: accent }} />
          <span className="absolute inset-0 rounded-full" style={{ background: accent }} />
        </span>
        live
      </span>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 1. ANALYTICS — agent leaderboard + sentiment + sparkline + KPIs
// ────────────────────────────────────────────────────────────────────────────
function MetricConsole({ accent }: { accent: string }) {
  const [points, setPoints] = useState<number[]>([
    8, 12, 10, 18, 22, 19, 28, 36, 32, 44, 50, 46, 58, 62, 60, 68, 74, 70,
  ]);
  const [agents, setAgents] = useState([
    { name: "ana", resolved: 47, p50: 38 },
    { name: "marc", resolved: 41, p50: 44 },
    { name: "lucia", resolved: 38, p50: 41 },
    { name: "joan", resolved: 33, p50: 52 },
  ]);
  const [sentiment, setSentiment] = useState({ pos: 64, neu: 28, neg: 8 });

  useEffect(() => {
    const id = setInterval(() => {
      setPoints((p) => [...p.slice(1), 30 + Math.floor(Math.random() * 50)]);
      setAgents((as) =>
        as.map((a) => ({
          ...a,
          resolved: a.resolved + (Math.random() < 0.4 ? 1 : 0),
          p50: Math.max(28, Math.min(70, a.p50 + (Math.random() < 0.5 ? -1 : 1))),
        }))
      );
      setSentiment(() => {
        const pos = 55 + Math.floor(Math.random() * 15);
        const neg = 4 + Math.floor(Math.random() * 8);
        return { pos, neg, neu: 100 - pos - neg };
      });
    }, 1100);
    return () => clearInterval(id);
  }, []);

  const max = Math.max(...points);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 100} ${30 - (p / max) * 30}`)
    .join(" ");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-px bg-[var(--color-border)]">
      <div className="bg-[var(--color-bg-elevated)] p-4 space-y-3">
        <Mono small>volumen · 24h</Mono>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-16">
          <defs>
            <linearGradient id="ms-spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L 100 30 L 0 30 Z`} fill="url(#ms-spark)" />
          <path d={path} fill="none" stroke={accent} strokeWidth="1.4" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
        </svg>

        <div>
          <Mono small>sentiment · 7d</Mono>
          <div className="mt-2 h-3 w-full rounded-full overflow-hidden flex">
            <div className="h-full" style={{ width: `${sentiment.pos}%`, background: "#7fd1de" }} />
            <div className="h-full" style={{ width: `${sentiment.neu}%`, background: "#525252" }} />
            <div className="h-full" style={{ width: `${sentiment.neg}%`, background: "#ef4444" }} />
          </div>
          <div className="mt-2 flex gap-3 mono text-[10px]">
            <span style={{ color: "#7fd1de" }}>+ {sentiment.pos}%</span>
            <span className="text-[var(--color-fg-subtle)]">~ {sentiment.neu}%</span>
            <span style={{ color: "#ef4444" }}>– {sentiment.neg}%</span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-bg-elevated)] p-4">
        <Mono small>top agents · today</Mono>
        <table className="mt-2 w-full text-[11px]">
          <thead>
            <tr className="text-[var(--color-fg-subtle)] mono">
              <th className="text-left font-normal pb-1.5">agent</th>
              <th className="text-right font-normal pb-1.5">res</th>
              <th className="text-right font-normal pb-1.5">p50</th>
            </tr>
          </thead>
          <tbody>
            {agents
              .slice()
              .sort((a, b) => b.resolved - a.resolved)
              .map((a, i) => (
                <tr key={a.name} className="text-[var(--color-fg)] mono border-t border-[var(--color-border)]">
                  <td className="py-1.5 flex items-center gap-2">
                    <span className="text-[var(--color-fg-subtle)]">{i + 1}</span>
                    {a.name}
                  </td>
                  <td className="text-right tabular-nums" style={{ color: i === 0 ? accent : undefined }}>
                    {a.resolved}
                  </td>
                  <td className="text-right tabular-nums text-[var(--color-fg-muted)]">{a.p50}s</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 2. SOCIAL OPS — unified inbox + scheduled posts
// ────────────────────────────────────────────────────────────────────────────
function SocialConsole({ accent }: { accent: string }) {
  const inboxAll = [
    { p: "IG", who: "@laura.s", msg: "respondéis en finde?", t: "ahora" },
    { p: "FB", who: "Mireia G.", msg: "hola, info sobre packs?", t: "1m" },
    { p: "Reddit", who: "u/devwithcat", msg: "tips on burst handling?", t: "4m" },
    { p: "TikTok", who: "@nochegris", msg: "💬 collab?", t: "6m" },
    { p: "X", who: "@oriol_pm", msg: "DM enviado, gracias!", t: "8m" },
    { p: "IG", who: "@sergio_b", msg: "sigues haciendo envíos a USA?", t: "12m" },
  ];
  const [inbox, setInbox] = useState(inboxAll.slice(0, 4));
  const [active, setActive] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setInbox((prev) => [inboxAll[(i + 4) % inboxAll.length], ...prev].slice(0, 4));
      i++;
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % 5), 1000);
    return () => clearInterval(id);
  }, []);

  const platforms = ["IG", "FB", "Reddit", "TikTok", "X"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-px bg-[var(--color-border)]">
      <div className="bg-[var(--color-bg-elevated)] p-3 space-y-1.5">
        <Mono small>channels</Mono>
        {platforms.map((p, i) => (
          <div
            key={p}
            className="flex items-center justify-between mono text-[11px] px-2 py-1.5 rounded transition-all"
            style={
              i === active
                ? { background: accent, color: "#0a0a0a" }
                : { color: "var(--color-fg-muted)", border: `1px solid ${accent}22` }
            }
          >
            <span>{p}</span>
            <span className="opacity-70 tabular-nums">{(43 - i * 7).toString()}</span>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-bg-elevated)] p-4">
        <Mono small>unified inbox</Mono>
        <ul className="mt-2 space-y-1.5">
          {inbox.map((m, i) => (
            <li
              key={`${m.who}-${m.t}-${i}`}
              className="flex items-start gap-2 px-2 py-2 rounded text-[11px] border border-[var(--color-border)] animate-[kx-slide_400ms_ease-out]"
            >
              <span
                className="mono text-[9px] uppercase px-1.5 py-0.5 rounded shrink-0"
                style={{ background: `${accent}22`, color: accent }}
              >
                {m.p}
              </span>
              <div className="min-w-0 flex-1">
                <div className="mono text-[var(--color-fg-strong)] truncate">{m.who}</div>
                <div className="text-[var(--color-fg-muted)] truncate">{m.msg}</div>
              </div>
              <span className="mono text-[10px] text-[var(--color-fg-subtle)] shrink-0">{m.t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 3. TELEGRAM — broadcast composer + subscribers chart + recent commands
// ────────────────────────────────────────────────────────────────────────────
function TelegramConsole({ accent }: { accent: string }) {
  const [subs, setSubs] = useState(12481);
  const [progress, setProgress] = useState(0);
  const [bars, setBars] = useState<number[]>([6, 9, 7, 12, 16, 14, 19, 22, 26, 31, 35, 38]);

  useEffect(() => {
    const id = setInterval(() => {
      setSubs((s) => s + Math.floor(Math.random() * 4));
      setProgress((p) => (p + 8) % 110);
      setBars((b) => [...b.slice(1), 8 + Math.floor(Math.random() * 35)]);
    }, 950);
    return () => clearInterval(id);
  }, []);

  const log = [
    { cmd: "/broadcast vip", out: "queued · 2,304" },
    { cmd: "/stats today", out: "+187 new · 94% open" },
    { cmd: "/pay 9.99 EUR", out: "✓ activated" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-px bg-[var(--color-border)]">
      <div className="bg-[var(--color-bg-elevated)] p-4 space-y-3">
        <div>
          <Mono small>subscribers</Mono>
          <div className="mt-1 mono text-2xl font-semibold tabular-nums" style={{ color: accent }}>
            {subs.toLocaleString()}
          </div>
        </div>

        <div>
          <Mono small>broadcast in progress</Mono>
          <div className="mt-2 h-2 w-full rounded-full bg-[var(--color-bg)] overflow-hidden">
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%`, background: accent }}
            />
          </div>
          <div className="mt-1.5 mono text-[10px] text-[var(--color-fg-subtle)] tabular-nums">
            {Math.min(progress, 100)}% · {Math.floor((Math.min(progress, 100) / 100) * 2304)} / 2,304
          </div>
        </div>

        <div>
          <Mono small>signups · 12h</Mono>
          <div className="mt-2 flex items-end gap-1 h-12">
            {bars.map((b, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm transition-all duration-300"
                style={{ height: `${(b / 45) * 100}%`, background: `${accent}66` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-bg-elevated)] p-4">
        <Mono small>recent commands</Mono>
        <ul className="mt-2 space-y-2">
          {log.map((l, i) => (
            <li key={i} className="rounded border border-[var(--color-border)] p-2 mono text-[11px]">
              <div>
                <span style={{ color: accent }}>›</span>{" "}
                <span className="text-[var(--color-fg-muted)]">{l.cmd}</span>
              </div>
              <div className="text-[var(--color-fg-subtle)] mt-0.5 pl-3">{l.out}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 4. CUSTOM / DEVOPS — service health grid + deploy log + cost meter
// ────────────────────────────────────────────────────────────────────────────
function DevopsConsole({ accent }: { accent: string }) {
  const initialServices = [
    { n: "api-core", s: "ok" },
    { n: "ingest", s: "ok" },
    { n: "auth", s: "ok" },
    { n: "billing", s: "ok" },
    { n: "queue", s: "ok" },
    { n: "search", s: "ok" },
    { n: "media", s: "ok" },
    { n: "ai-worker", s: "ok" },
  ];
  const [services, setServices] = useState(initialServices);
  const [logs, setLogs] = useState([
    "✓ deploy · api-core@2.4.1 → prod",
    "✓ migration · stripe → erp · 312 rows",
    "› running · pipeline-comfyui · 3 jobs",
  ]);
  const [cost, setCost] = useState(2.41);

  useEffect(() => {
    let i = 0;
    const tickerLogs = [
      "✓ scaled · queue · 2 → 4 workers",
      "✓ deploy · ingest@1.8.0 → prod",
      "› job · runpod-gpu-A40 · 18s",
      "✓ heal · api-core · pod restarted",
      "✓ sync · stripe → erp · 41 rows",
      "› build · search@2.1.0 · ETA 38s",
    ];
    const id = setInterval(() => {
      setServices((s) =>
        s.map((sv, idx) => ({
          ...sv,
          s: idx === Math.floor(Math.random() * s.length) && Math.random() < 0.15 ? "warn" : "ok",
        }))
      );
      setLogs((l) => [tickerLogs[i % tickerLogs.length], ...l].slice(0, 4));
      setCost((c) => +(c + Math.random() * 0.04).toFixed(2));
      i++;
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-px bg-[var(--color-border)]">
      <div className="bg-[var(--color-bg-elevated)] p-4 space-y-3">
        <div>
          <Mono small>services · {services.length}</Mono>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {services.map((sv) => (
              <div
                key={sv.n}
                className="flex items-center justify-between rounded border px-2 py-1.5 mono text-[10px]"
                style={{
                  borderColor: sv.s === "ok" ? `${accent}22` : "#fbbf2440",
                  background: sv.s === "ok" ? "transparent" : "#fbbf2410",
                }}
              >
                <span className="text-[var(--color-fg-muted)]">{sv.n}</span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: sv.s === "ok" ? accent : "#fbbf24" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Mono small>infra cost · today</Mono>
          <div className="mt-1 mono text-xl font-semibold tabular-nums" style={{ color: accent }}>
            € {cost.toFixed(2)}
          </div>
          <div className="mono text-[10px] text-[var(--color-fg-subtle)]">runpod + oracle + cf</div>
        </div>
      </div>

      <div className="bg-[var(--color-bg-elevated)] p-4">
        <Mono small>activity</Mono>
        <ul className="mt-2 space-y-1.5">
          {logs.map((l, i) => (
            <li
              key={`${l}-${i}`}
              className="mono text-[11px] text-[var(--color-fg)] truncate animate-[kx-slide_300ms_ease-out]"
              style={{ opacity: 1 - i * 0.18 }}
            >
              {l.startsWith("✓") ? <span style={{ color: accent }}>{l[0]}</span> : <span style={{ color: "#fbbf24" }}>{l[0]}</span>}
              {l.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Mono({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <span
      className={`mono uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] ${
        small ? "text-[9px]" : "text-[10px]"
      }`}
    >
      {children}
    </span>
  );
}
