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
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-white px-[3.15vw]">
        <Link className="text-2xl font-medium tracking-[-0.075em] leading-none" href="/">Isaac Bami</Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a className="hidden h-12 min-w-36 items-center justify-center rounded-[18px] bg-[#111] p-3 text-medium font-semibold tracking-normal text-white shadow-[0_20px_24px_rgba(0,0,0,0.28)] md:inline-flex" href="mailto:rosyidqoim@gmail.com">Work with me</a>
        <button className="border-0 bg-transparent p-1 md:hidden" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>
      {open && <nav className="absolute z-20 flex w-full flex-col gap-5 bg-[#111] p-6 text-white md:hidden" aria-label="Mobile navigation">{links.map((link) => <Link className="text-xl" key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="text-xl" href="mailto:rosyidqoim@gmail.com">Work with me</a></nav>}
    </>
  );
}
