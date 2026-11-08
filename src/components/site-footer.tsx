import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#121212] px-5 pt-20 pb-6 text-white md:px-[5.5vw] md:pt-28 md:pb-8">
      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#d9ff47]">Have a project in mind?</p>
      <h2 className="mt-6 mb-12 text-[clamp(3.5rem,7vw,8rem)] leading-[0.87] font-medium tracking-[-0.09em]">Let&apos;s create something<br /><em className="font-serif font-normal">worth remembering.</em></h2>
      <a className="border-b border-white pb-1.5 text-xl" href="mailto:rosyidqoim@gmail.com">rosyidqoim@gmail.com ↗</a>
      <div className="mt-16 flex flex-col gap-4 border-t border-[#444] pt-6 text-xs md:mt-28 md:flex-row md:justify-between"><Link href="/">Isaac Bami</Link><span>© 2026 All rights reserved</span><div className="flex gap-5"><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">X</a></div></div>
    </footer>
  );
}
