// Mocked "command center" dashboard. Not a screenshot — pure SVG/CSS,
// thematic to the brief (messaging-first ops). No real client data.
export function HeroVisual() {
  return (
    <div className="relative w-full select-none">
      <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.18),transparent_70%)] blur-2xl pointer-events-none" />
      <div className="relative rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="mono text-[11px] text-[var(--color-fg-subtle)] ml-3">
            kairox · ops console
          </span>
          <span className="ml-auto mono text-[10px] text-[#28c840] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
            live
          </span>
        </div>

        <div className="grid grid-cols-[120px_1fr] min-h-[320px]">
          <div className="border-r border-[var(--color-border)] bg-[var(--color-bg-raised)]/40 p-3 space-y-1.5">
            {[
              { l: "WhatsApp", c: 248, active: true },
              { l: "Telegram", c: 92 },
              { l: "Instagram", c: 67 },
              { l: "Reddit", c: 18 },
              { l: "TikTok", c: 9 },
            ].map((ch) => (
              <div
                key={ch.l}
                className={`flex items-center justify-between rounded px-2 py-1.5 text-[11px] ${
                  ch.active
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-fg-strong)]"
                    : "text-[var(--color-fg-muted)]"
                }`}
              >
                <span className="mono">{ch.l}</span>
                <span className="mono opacity-70">{ch.c}</span>
              </div>
            ))}
          </div>

          <div className="p-4 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <Metric label="response p50" value="42s" tone="ok" />
              <Metric label="open" value="1,284" tone="muted" />
              <Metric label="csat 7d" value="4.8" tone="accent" />
            </div>

            <Sparkline />

            <div className="space-y-1.5">
              {[
                { who: "@maria · WA", msg: "ok perfecto, mañana cierro pago", t: "now" },
                { who: "@dani · TG", msg: "podéis enviar la factura al correo?", t: "1m" },
                { who: "@r/community", msg: "thread: how do you handle bursts?", t: "3m" },
              ].map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 px-2 py-1.5 rounded hover:bg-white/[0.02] text-[11px]"
                >
                  <span className="mono text-[var(--color-accent)] shrink-0">›</span>
                  <span className="mono text-[var(--color-fg-strong)] shrink-0">
                    {r.who}
                  </span>
                  <span className="text-[var(--color-fg-muted)] truncate">
                    {r.msg}
                  </span>
                  <span className="mono text-[10px] text-[var(--color-fg-subtle)] ml-auto shrink-0">
                    {r.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
        {label}
      </div>
      <div className={`mono text-lg font-semibold mt-1 ${color}`}>{value}</div>
    </div>
  );
}

function Sparkline() {
  // Hand-drawn SVG sparkline — mock conversation volume over 24h.
  const points = [10, 14, 11, 18, 22, 19, 28, 34, 31, 40, 46, 42, 55, 60, 58, 64, 70, 65, 72, 78, 74, 68, 60, 52];
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - (p / max) * 100;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  return (
    <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          volume · 24h
        </div>
        <div className="mono text-[10px] text-[var(--color-accent)]">+18%</div>
      </div>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-10">
        <defs>
          <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${path.replace(/M.*?L/, "M ").replace(/L/g, "L").replace(/(\d+\.?\d*) (\d+\.?\d*)$/, "$1 $2 L 100 100 L 0 100 Z")}`}
          fill="url(#spark-fill)"
          transform="scale(1, 0.3)"
        />
        <path
          d={path}
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          transform="scale(1, 0.3)"
        />
      </svg>
    </div>
  );
}
