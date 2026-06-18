import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

function getLogoDataUri() {
  const filePath = path.join(process.cwd(), "public", "logo", "prolinkzw-dark.png");
  const file = fs.readFileSync(filePath);
  return `data:image/png;base64,${file.toString("base64")}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? siteConfig.tagline;
  const eyebrow = searchParams.get("eyebrow") ?? "ProLinkzw Digital";
  const logoSrc = getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1220",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 85% 20%, rgba(200,118,42,0.25), transparent 55%), radial-gradient(circle at 10% 85%, rgba(27,156,130,0.22), transparent 50%)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="ProLinkzw Digital" height={56} style={{ objectFit: "contain" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <span
            style={{
              color: "#E8B854",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              color: "#F5F6F8",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {title}
          </span>
        </div>

        <div style={{ display: "flex", color: "rgba(245,246,248,0.55)", fontSize: 20 }}>
          prolinkzw.co.zw — Zimbabwe&apos;s digital transformation partner
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
