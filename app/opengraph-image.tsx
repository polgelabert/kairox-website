import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kairox — The back office for messaging-first businesses";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          padding: 80,
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "monospace",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          kairox
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 900,
              letterSpacing: "-0.02em",
            }}
          >
            The back office for messaging-first businesses.
          </div>
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            color: "#737373",
            letterSpacing: "0.05em",
          }}
        >
          systems · platforms · infrastructure
        </div>
      </div>
    ),
    size
  );
}
