import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 md:px-[5.5vw]">
        <section className="relative min-h-[650px] py-20 md:min-h-[80vh] md:py-32"><p className="text-xs font-bold uppercase tracking-[0.08em]">About Isaac</p><h1 className="relative z-[1] mt-6 max-w-[13ch] text-[clamp(4rem,8vw,9rem)] leading-[0.86] font-medium tracking-[-0.09em]">I turn sharp thinking into design that people can actually feel.</h1><Image className="absolute right-[2%] bottom-0 h-auto w-[85%] max-w-[590px] md:w-[44%]" src="/images/hero-portrait.png" alt="Isaac Bami" width={512} height={512} /></section>
        <section className="grid gap-16 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-32"><p className="text-[clamp(1.8rem,3.2vw,3.6rem)] leading-[1.07] tracking-[-0.07em]">I&apos;m a multidisciplinary designer who works across web, products, and brand identity. My practice sits between strategy and craft: understand the real problem, make the complex feel clear, and produce work with lasting character.</p><div className="self-end space-y-3"><p>Based in Lagos, Nigeria</p><p>Working globally</p></div></section>
        <section className="grid border-y border-[#deded9] md:grid-cols-3">{[["5+", "Years of experience"], ["30+", "Happy clients"], ["100+", "Projects completed"]].map(([value, label], index) => <article className={`border-b border-[#deded9] py-8 last:border-0 md:border-0 md:py-12 ${index === 2 ? "" : ""}`} key={label}><strong className="block text-[clamp(4rem,7vw,8rem)] leading-[0.9] font-medium tracking-[-0.1em]">{value}</strong><span className="text-[#777]">{label}</span></article>)}</section>
        <section className="py-20 md:py-36"><p className="text-xs font-bold uppercase tracking-[0.08em]">Expertise</p><h2 className="mt-7 mb-11 max-w-[16ch] text-[clamp(2.8rem,5.6vw,6rem)] leading-[0.94] font-medium tracking-[-0.075em]">Practical design for ambitious people and growing businesses.</h2><ul className="m-0 mt-16 list-none border-t border-[#101010] p-0">{["Websites & digital products", "Brand strategy & identity", "Art direction & campaigns"].map((item) => <li className="border-b border-[#deded9] py-4 text-[clamp(1.5rem,3vw,3.4rem)] tracking-[-0.07em]" key={item}>{item}</li>)}</ul></section>
        <section className="-mx-5 flex flex-col items-start gap-8 bg-[#d9ff47] px-5 py-12 md:-mx-[5.5vw] md:flex-row md:items-center md:justify-between md:px-[5.5vw] md:py-[4.5rem]"><p className="text-[clamp(2rem,4vw,4.6rem)] tracking-[-0.08em]">Have a project in mind?</p><Link className="inline-flex items-center gap-2 text-xl underline" href="/contact">Let&apos;s work together <ArrowDownRight size={19} /></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
