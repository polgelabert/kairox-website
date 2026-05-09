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

// Case 2 — unified inbox with ERP context pulled alongside each DM
function CaseSocialOps({ accent }: { accent: string }) {
  type Item = {
    p: string;
    who: string;
    msg: string;
    ctx: { l: string; v: string; tone: "ok" | "warn" | "muted" };
  };
  const initial: Item[] = [
    { p: "IG", who: "@laura.s", msg: "hola, sigue mi pedido aquí?", ctx: { l: "ORDER", v: "#4821 · enviado hace 2d", tone: "ok" } },
    { p: "FB", who: "Mireia G.", msg: "puc cancel·lar la subscripció?", ctx: { l: "SUB", v: "activa · €29/mo · 14m", tone: "muted" } },
    { p: "Reddit", who: "u/devwithcat", msg: "issue con factura de febrero", ctx: { l: "INVOICE", v: "INV-241 · paid 02-15", tone: "ok" } },
    { p: "TikTok", who: "@nochegris", msg: "envíos a USA?", ctx: { l: "CONTACT", v: "nuevo · sin pedidos", tone: "warn" } },
  ];
  const extras: Item[] = [
    { p: "IG", who: "@oriol_pm", msg: "talla L del pack disponible?", ctx: { l: "STOCK", v: "L · 12u · alm-MAD", tone: "ok" } },
    { p: "X", who: "@sergio_b", msg: "podéis facturar en USD?", ctx: { l: "ACCOUNT", v: "EU · multidivisa on", tone: "muted" } },
    { p: "FB", who: "Anna R.", msg: "no me llega el código del cupón", ctx: { l: "PROMO", v: "SPRING25 · 1/1 usos", tone: "warn" } },
  ];
  const [items, setItems] = useState<Item[]>(initial);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setItems((prev) => [extras[i % extras.length], ...prev].slice(0, 4));
      i++;
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[var(--color-bg-elevated)] p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          unified inbox · with erp context
        </div>
        <div className="mono text-[9px] flex items-center gap-1" style={{ color: accent }}>
          <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
          erp · synced
        </div>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li
            key={`${it.who}-${it.msg}-${i}`}
            className="rounded border border-[var(--color-border)] px-2.5 py-2 mono text-[11px] animate-[kx-slide_350ms_ease-out]"
          >
            <div className="flex items-center gap-2">
              <span
                className="text-[9px] uppercase px-1.5 py-0.5 rounded shrink-0"
                style={{ background: `${accent}22`, color: accent }}
              >
                {it.p}
              </span>
              <span className="text-[var(--color-fg-strong)] shrink-0">{it.who}</span>
              <span className="text-[var(--color-fg-muted)] truncate flex-1">{it.msg}</span>
            </div>
            <div className="mt-1.5 pl-1 flex items-center gap-2 text-[10px]">
              <span className="text-[var(--color-fg-subtle)] tracking-[0.12em]">› erp · {it.ctx.l}</span>
              <span
                style={{
                  color:
                    it.ctx.tone === "ok"
                      ? "#7fd1de"
                      : it.ctx.tone === "warn"
                      ? "#fbbf24"
                      : "var(--color-fg-muted)",
                }}
              >
                {it.ctx.v}
              </span>
            </div>
          </li>
        ))}
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
