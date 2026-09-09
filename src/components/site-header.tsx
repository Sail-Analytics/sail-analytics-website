import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/what-we-build", label: "What we build" },
  { to: "/work", label: "Work" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/approach", label: "Build your data capability" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top">
      <div className="top-in">
        <Link className="logo" to="/" aria-label="Sail Analytics home" onClick={() => setOpen(false)}>
          <img className="logo-img" src="/logo.png" width={271} height={176} alt="Sail Analytics" decoding="async" />
        </Link>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          Menu
        </button>
        <nav className={open ? "nav open" : "nav"} id="nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              activeProps={{ "aria-current": "page" }}
            >
              {link.label}
            </Link>
          ))}
          <Link className="cta" to="/contact" onClick={() => setOpen(false)}>
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
