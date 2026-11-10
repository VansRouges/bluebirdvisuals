"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const primaryLinks = [
  ["Home", "/"],
  ["Works", "/works"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const socialLinks = [
  ["X (Twitter)", "#"],
  ["Instagram", "#"],
  ["Contra", "#"],
  ["99design", "#"],
];

type FooterLink = { label: string; url: string; enabled?: boolean };
type FooterContent = { enabled?: boolean; heading?: string; buttonLabel?: string; buttonUrl?: string; primaryLinks?: FooterLink[]; socialLinks?: FooterLink[]; copyrightText?: string; creditText?: string };
const footerQuery = `*[_type == "footerSettings"][0]{enabled, heading, buttonLabel, buttonUrl, primaryLinks, socialLinks, copyrightText, creditText}`;

export function SiteFooter() {
  const [content, setContent] = useState<FooterContent | null>(null);
  useEffect(() => { client.fetch<FooterContent | null>(footerQuery).then(setContent).catch(() => undefined); }, []);
  if (content?.enabled === false) return null;
  const visiblePrimaryLinks = (content?.primaryLinks ?? primaryLinks.map(([label, url]) => ({ label, url }))).filter(({ enabled }) => enabled !== false);
  const visibleSocialLinks = (content?.socialLinks ?? socialLinks.map(([label, url]) => ({ label, url }))).filter(({ enabled }) => enabled !== false);
  return (
    <footer className="bg-[#0d0d0d] px-5 py-20 text-white [background-image:radial-gradient(rgba(255,255,255,0.055)_0.6px,transparent_0.8px)] [background-size:4px_4px] md:px-[14.5vw] md:py-28">
      <div className="grid gap-14 md:grid-cols-[1fr_auto] md:gap-28">
        <div>
          <h2 className="max-w-[13ch] whitespace-pre-line text-[clamp(1.875rem,2.325vw,2.7rem)] leading-[1.02] font-medium tracking-[-0.07em]">{content?.heading ?? "Book a call, and I’ll take care of the rest"}</h2>
          <Link className="mt-10 inline-flex h-[58px] items-center rounded-[18px] bg-white px-7 text-sm font-medium tracking-[-0.045em] text-[#171717] shadow-[0_16px_22px_rgba(0,0,0,0.22)]" href={content?.buttonUrl ?? "/contact"}>{content?.buttonLabel ?? "Book a Call"}</Link>
        </div>

        <nav className="grid grid-cols-2 gap-x-20 gap-y-5 self-start text-sm font-medium tracking-[-0.045em] md:gap-x-28" aria-label="Footer navigation">
          <div className="grid gap-5">{visiblePrimaryLinks.map(({ label, url }) => <Link href={url} key={label}>{label}</Link>)}</div>
          <div className="grid gap-5">{visibleSocialLinks.map(({ label, url }) => <a href={url} key={label}>{label}</a>)}</div>
        </nav>
      </div>

      <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs tracking-[-0.045em] text-[#777981] md:mt-24 md:flex-row md:items-center md:justify-between">
        <span>{content?.copyrightText ?? "© 2026 All right reserved"}</span>
        <span>{content?.creditText ?? "Made by BlueBirdVisuals"}</span>
      </div>
    </footer>
  );
}
