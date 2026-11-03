"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/works", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <Link className="brand" href="/">Isaac Bami</Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a className="nav-cta" href="mailto:rosyidqoim@gmail.com">Work with me</a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>
      {open && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a href="mailto:rosyidqoim@gmail.com">Work with me</a></nav>}
    </>
  );
}
