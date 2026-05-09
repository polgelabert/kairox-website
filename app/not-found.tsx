import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          background: "#0a0a0a",
          color: "#e5e5e5",
          fontFamily: "system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: 24 }}>
          <div style={{ fontFamily: "monospace", color: "#a78bfa" }}>404</div>
          <h1 style={{ fontSize: 28, marginTop: 8 }}>Page not found</h1>
          <Link
            href="/"
            style={{ color: "#fafafa", marginTop: 16, display: "inline-block" }}
          >
            ← Home
          </Link>
        </div>
      </body>
    </html>
  );
}
