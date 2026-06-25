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
        <a href="#top" className="nav-logo">何昊</a>

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
      </div>
    </>
  );
}
