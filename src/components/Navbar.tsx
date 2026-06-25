import { useState } from "react";

const links = [
  { label: "项目", href: "#projects" },
  { label: "能力", href: "#skills" },
  { label: "学术", href: "#academic" },
  { label: "教育", href: "#education" },
  { label: "联系", href: "#statement" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        {/* Left: logo + download */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
          <a href="#top" className="nav-logo">何昊</a>
          <a
            href="/resume.pdf"
            download
            style={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.06em",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            下载简历 ↓
          </a>
        </div>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#statement">
          联系 <span style={{ opacity: 0.4, marginLeft: 4 }}>→</span>
        </a>

        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`nav-drawer${open ? " open" : " closed"}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          onClick={() => setOpen(false)}
          style={{
            marginTop: 16,
            fontSize: "0.85rem",
            padding: "8px 20px",
            border: "1px solid var(--accent)",
            borderRadius: 999,
            color: "var(--accent)",
          }}
        >
          下载简历 PDF ↓
        </a>
      </div>
    </>
  );
}
