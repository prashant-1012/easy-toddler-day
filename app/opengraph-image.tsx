import { ImageResponse } from "next/og";

export const alt =
  "Easy Toddler Day — screen-free, Montessori-inspired learning workbooks for toddlers";
export const size = { width: 1200, height: 630 };
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFBF2",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -90,
            left: -90,
            width: 340,
            height: 340,
            borderRadius: "50%",
            backgroundColor: "#F0475F",
            opacity: 0.15,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            right: -110,
            width: 380,
            height: 380,
            borderRadius: "50%",
            backgroundColor: "#2F9CD8",
            opacity: 0.15,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", fontSize: 108, fontWeight: 700 }}>
          <span style={{ color: "#F0475F" }}>easy</span>
          <span style={{ color: "#2F9CD8" }}>toddler</span>
          <span style={{ color: "#2FA854" }}>day</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#2B2A28",
            marginTop: 22,
            letterSpacing: 3,
          }}
        >
          PLAY • LEARN • GROW
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#7A756D",
            marginTop: 26,
          }}
        >
          Screen-free learning, made joyful.
        </div>
      </div>
    ),
    { ...size }
  );
}
