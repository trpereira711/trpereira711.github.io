import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Thiago Roberto Pereira — Desenvolvedor de Software Full Stack & Backend";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#050806",
          color: "#f5f8f6",
          fontFamily: "sans-serif",
          border: "2px solid rgba(57, 245, 157, 0.22)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            <span>THIAGO</span>
            <span style={{ color: "#39f59d" }}>.</span>
            <span>DEV</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(57, 245, 157, 0.3)",
              backgroundColor: "rgba(57, 245, 157, 0.08)",
              color: "#a7ffd2",
              fontSize: 18,
              letterSpacing: "1px",
            }}
          >
            15+ ANOS EM DESENVOLVIMENTO DE SOFTWARE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#ffffff",
            }}
          >
            Thiago Roberto Pereira
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#39f59d",
            }}
          >
            Desenvolvedor de Software · Full Stack &amp; Backend
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            Sistemas web, APIs, modernização de aplicações e desenvolvimento em
            alta escala com Java, Spring Boot, Node.js, TypeScript, React e
            Angular.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "28px",
            borderTop: "1px solid rgba(57, 245, 157, 0.2)",
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.65)",
          }}
        >
          <span>trpsoftware.com.br</span>
          <span style={{ color: "#39f59d" }}>
            Brasília, DF · Remoto para todo o Brasil
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
