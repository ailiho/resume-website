import { profile } from "@/data/resumeData";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4";

function EyeInline() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(18px, 3vw, 48px)",
        height: "clamp(14px, 2.2vw, 34px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "999px",
        verticalAlign: "middle",
        margin: "0 4px",
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          background: "var(--accent)",
          borderRadius: "50%",
        }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Background video with gradient fade */}
      <div className="hero-bg">
        <video autoPlay loop muted playsInline src={VIDEO_URL} />
      </div>

      <div className="hero-content">
        <h1>
          <span className="dim">机械为起点，</span>
          <br />
          <span className="dim">延展至</span>{" "}
          <span className="bright">机器人</span>
          <EyeInline />
          <span className="dim">系统</span>
          <br />
          <span className="accent-word">跨学科</span>
          <span className="dim"> 申请者</span>
        </h1>

        <p className="hero-tagline">
          {profile.subtitle}
        </p>

        <div className="hero-meta-row">
          {profile.quickFacts.map((f) => (
            <div key={f.label} className="hero-meta-item">
              <span className="num">{f.value}</span>
              <span className="lbl">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
