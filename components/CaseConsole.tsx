"use client";

import { useEffect, useState } from "react";

const APP_NAME = [
  "client · monitoring",
  "client · social ops",
  "client · telegram channel",
  "client · ai pipeline",
];

export function CaseConsole({
  index,
  accent,
}: {
  index: number;
  accent: string;
}) {
  const i = index % 4;
  return (
    <div className="relative w-full select-none mt-6">
      <div
        className="absolute -inset-4 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${accent}1f, transparent 70%)` }}
      />
      <div className="relative rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="mono text-[10px] text-[var(--color-fg-subtle)] ml-2.5 truncate">{APP_NAME[i]}</span>
          <span className="ml-auto mono text-[9px] text-[var(--color-fg-subtle)]">case · 0{i + 1}</span>
        </div>
        <div className="min-h-[180px]">
          {i === 0 && <CaseMonitoring accent={accent} />}
          {i === 1 && <CaseSocialOps accent={accent} />}
          {i === 2 && <CaseTelegram accent={accent} />}
          {i === 3 && <CaseAiPipeline accent={accent} />}
        </div>
      </div>
    </div>
  );
}

// Case 1 — high-volume monitoring: alert feed + active conversations gauge
function CaseMonitoring({ accent }: { accent: string }) {
  const [active, setActive] = useState(2417);
  const [alerts, setAlerts] = useState<{ k: string; m: string; t: string }[]>([
    { k: "info", m: "channel WA-ES-2 · queue cleared", t: "now" },
    { k: "warn", m: "agent.ana · p50 > 60s for 3m", t: "1m" },
    { k: "ok", m: "auto-route updated · 12 agents", t: "2m" },
  ]);

  useEffect(() => {
    let n = 0;
    const ticker = [
      { k: "info", m: "channel TG-1 · spike +180/min", t: "now" },
      { k: "ok", m: "SLA met · WA bucket-A · 98.2%", t: "now" },
      { k: "warn", m: "burst · IG-DM · 412 unread", t: "now" },
      { k: "info", m: "agent.lucia · online", t: "now" },
    ];
    const id = setInterval(() => {
      setActive((v) => Math.max(800, v + Math.floor(Math.random() * 80) - 30));
      setAlerts((a) => [ticker[n % ticker.length], ...a].slice(0, 3));
      n++;
    }, 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-px bg-[var(--color-border)] h-full">
      <div className="bg-[var(--color-bg-elevated)] p-3 flex flex-col justify-center items-center text-center">
        <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          active convs
        </div>
        <div className="mono text-2xl font-semibold tabular-nums mt-1" style={{ color: accent }}>
          {active.toLocaleString()}
        </div>
        <div className="mono text-[9px] text-[var(--color-fg-subtle)] mt-0.5">live</div>
      </div>
      <div className="bg-[var(--color-bg-elevated)] p-3">
        <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] mb-2">
          alerts · stream
        </div>
        <ul className="space-y-1.5">
          {alerts.map((a, i) => (
            <li
              key={`${a.m}-${i}`}
              className="rounded border border-[var(--color-border)] px-2 py-1.5 mono text-[11px] flex items-center gap-2 animate-[kx-slide_350ms_ease-out]"
            >
              <span
                className="text-[9px] uppercase px-1.5 py-0.5 rounded shrink-0"
                style={{
                  background:
                    a.k === "warn" ? "#fbbf2422" : a.k === "ok" ? `${accent}22` : "#52525222",
                  color:
                    a.k === "warn" ? "#fbbf24" : a.k === "ok" ? accent : "var(--color-fg-muted)",
                }}
              >
                {a.k}
              </span>
              <span className="text-[var(--color-fg)] truncate flex-1">{a.m}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Case 2 — multi-platform: scheduled queue + cross-post status
function CaseSocialOps({ accent }: { accent: string }) {
  const queue = [
    { p: ["IG", "FB"], h: "Spring drop · teaser", t: "+15m" },
    { p: ["TikTok"], h: "@nochegris · stitch", t: "+1h" },
    { p: ["IG", "FB", "X"], h: "Founder note · launch", t: "+3h" },
    { p: ["Reddit"], h: "r/saas · AMA", t: "tomorrow" },
  ];
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 6), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[var(--color-bg-elevated)] p-3">
      <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] mb-2">
        scheduled queue · multi-platform
      </div>
      <ul className="space-y-1.5">
        {queue.map((q, i) => {
          const publishing = i === step % queue.length;
          return (
            <li
              key={i}
              className="rounded border border-[var(--color-border)] px-2.5 py-2 flex items-center gap-2.5 mono text-[11px] transition-colors"
              style={publishing ? { borderColor: accent, background: `${accent}10` } : {}}
            >
              <div className="flex gap-1 shrink-0">
                {q.p.map((p) => (
                  <span
                    key={p}
                    className="text-[9px] uppercase px-1.5 py-0.5 rounded"
                    style={{ background: `${accent}22`, color: accent }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <span className="text-[var(--color-fg)] truncate flex-1">{q.h}</span>
              <span className="text-[var(--color-fg-subtle)] shrink-0">{q.t}</span>
              {publishing ? (
                <span className="ml-1 mono text-[9px] uppercase shrink-0" style={{ color: accent }}>
                  · pub
                </span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Case 3 — telegram broadcast: subscribers + throughput
function CaseTelegram({ accent }: { accent: string }) {
  const [sent, setSent] = useState(412);
  const target = 2304;
  useEffect(() => {
    const id = setInterval(() => {
      setSent((s) => (s + 60 > target ? 412 : s + 60));
    }, 800);
    return () => clearInterval(id);
  }, []);

  const pct = Math.min(100, (sent / target) * 100);

  return (
    <div className="bg-[var(--color-bg-elevated)] p-4 space-y-3">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
            broadcast · vip-segment
          </div>
          <div className="mono text-xs text-[var(--color-fg-muted)] mt-0.5">campaign · spring-drop-3</div>
        </div>
        <div className="text-right">
          <div className="mono text-xl font-semibold tabular-nums" style={{ color: accent }}>
            {sent.toLocaleString()}
          </div>
          <div className="mono text-[10px] text-[var(--color-fg-subtle)]">/ {target.toLocaleString()} sent</div>
        </div>
      </div>

      <div className="h-2 w-full rounded-full bg-[var(--color-bg)] overflow-hidden">
        <div className="h-full transition-all duration-300" style={{ width: `${pct}%`, background: accent }} />
      </div>

      <div className="grid grid-cols-3 gap-2 mono text-[10px]">
        <Tile l="open rate" v="94%" accent={accent} />
        <Tile l="ctr" v="18%" accent={accent} />
        <Tile l="paid" v="€ 487" accent={accent} />
      </div>
    </div>
  );
}

// Case 4 — AI pipeline: GPU jobs queue + cost
function CaseAiPipeline({ accent }: { accent: string }) {
  const [jobs, setJobs] = useState([
    { id: "img-2841", k: "txt2img · sdxl", s: "running", p: 62 },
    { id: "img-2842", k: "txt2img · sdxl", s: "queued", p: 0 },
    { id: "vid-091", k: "img2vid · ltx", s: "queued", p: 0 },
    { id: "img-2840", k: "upscale · esrgan", s: "done", p: 100 },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setJobs((js) =>
        js.map((j) => {
          if (j.s !== "running") return j;
          const np = j.p + 6;
          if (np >= 100) return { ...j, s: "done", p: 100 };
          return { ...j, p: np };
        })
      );
      setJobs((js) => {
        const allDone = js.every((j) => j.s !== "running");
        if (allDone) {
          const next = js.find((j) => j.s === "queued");
          if (next) {
            return js.map((j) => (j.id === next.id ? { ...j, s: "running", p: 4 } : j));
          }
        }
        return js;
      });
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[var(--color-bg-elevated)] p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          gpu jobs · runpod-A40
        </div>
        <div className="mono text-[10px]" style={{ color: accent }}>
          € 0.41 / hr
        </div>
      </div>
      <ul className="space-y-1.5">
        {jobs.map((j) => (
          <li
            key={j.id}
            className="rounded border border-[var(--color-border)] px-2.5 py-2 mono text-[11px]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-fg-subtle)] shrink-0">{j.id}</span>
              <span className="text-[var(--color-fg)] truncate flex-1">{j.k}</span>
              <span
                className="text-[9px] uppercase shrink-0"
                style={{
                  color:
                    j.s === "running" ? accent : j.s === "done" ? "#7fd1de" : "var(--color-fg-subtle)",
                }}
              >
                {j.s}
              </span>
            </div>
            {j.s === "running" || j.s === "done" ? (
              <div className="mt-1.5 h-1 w-full rounded-full bg-[var(--color-bg)] overflow-hidden">
                <div
                  className="h-full transition-all duration-300"
                  style={{ width: `${j.p}%`, background: j.s === "done" ? "#7fd1de" : accent }}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tile({ l, v, accent }: { l: string; v: string; accent: string }) {
  return (
    <div className="rounded border border-[var(--color-border)] px-2.5 py-2 bg-[var(--color-bg)]">
      <div className="text-[var(--color-fg-subtle)] uppercase tracking-[0.15em]">{l}</div>
      <div className="font-semibold mt-0.5" style={{ color: accent }}>
        {v}
      </div>
    </div>
  );
}
