import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { HeroParallax } from "@/components/hero-parallax";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

const labelClass = "text-xs font-bold uppercase tracking-[0.08em]";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroParallax />

        <section className="relative z-[3] -mt-[55svh] bg-white px-5 py-20 md:px-[5.5vw] md:py-36">
          <div className="mb-11 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-[clamp(2.25rem,3.2vw,3.5rem)] leading-none font-medium tracking-[-0.075em]">Featured works</h2>
            <Link className="flex h-[72px] w-[222px] items-center justify-center gap-4 rounded-[24px] bg-[#f7f7f7] text-[1.35rem] tracking-[-0.055em]" href="/works">All Works <ArrowRight size={25} strokeWidth={1.7} /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">{projects.map((project) => <Link className="block" href={`/works/${project.slug}`} key={project.slug}><div className="relative flex h-[80vw] items-center justify-center overflow-hidden md:h-[clamp(250px,34vw,530px)]" style={{ background: project.color }}><div className="absolute size-[58%] translate-x-[29%] translate-y-[22%] rounded-full opacity-90" style={{ background: project.accent }} /><span className="relative z-[1] text-[clamp(8rem,19vw,18rem)] font-extrabold tracking-[-0.12em]" style={{ color: project.accent }}>{project.title.slice(0, 1)}</span><i className="absolute left-[16%] h-[48%] w-[48%] rotate-[35deg] border-2" style={{ borderColor: project.accent }} /></div><div className="flex items-baseline justify-between py-4"><h3 className="text-xl tracking-[-0.04em]">{project.title}</h3><p className="text-sm text-[#777]">{project.category}</p></div></Link>)}</div>
        </section>

        <section className="block min-h-0 bg-[#191919] px-5 py-12 text-white md:grid md:min-h-[330px] md:grid-cols-[1fr_1fr_auto] md:items-end md:px-[5.5vw] md:py-16"><p className="max-w-76 text-xl leading-[1.35]">Recognized for thoughtful, human-centered digital experiences.</p><strong className="my-12 block text-[clamp(3rem,5vw,5.6rem)] leading-[0.82] tracking-[-0.09em] md:my-0">Independent<br />Designer</strong><span className="text-xs text-[#d9ff47]">01 — 04</span></section>

        <section className="bg-[#f2f2ee] px-5 py-20 md:px-[5.5vw] md:py-36"><p className={labelClass}>Services</p><h2 className="mt-7 mb-11 max-w-[15ch] text-[clamp(2.8rem,5.6vw,6rem)] leading-[0.94] font-medium tracking-[-0.075em]">Design solutions that elevate brands and create seamless user experiences.</h2><div className="border-t border-[#101010]">{[["01", "Branding Design", "Identity systems that give brands a clear, memorable presence."], ["02", "Website Development", "Responsive, expressive websites made to perform beautifully."], ["03", "UI/UX Design", "Digital products that make complex interactions feel simple."]].map(([number, title, text]) => <article className="grid grid-cols-[15%_1fr] items-start gap-4 border-b border-[#b9b9b4] py-10 md:grid-cols-[8%_28%_1fr_auto]" key={number}><span>{number}</span><h3 className="text-[1.6rem] tracking-[-0.05em]">{title}</h3><p className="col-start-2 max-w-md leading-[1.45] md:col-auto">{text}</p><a className="col-start-2 text-sm underline md:col-auto" href="mailto:rosyidqoim@gmail.com">Start a project ↗</a></article>)}</div></section>

        <section className="px-5 py-20 md:px-[5.5vw] md:py-36"><p className={labelClass}>How it works</p><h2 className="mt-7 mb-11 max-w-[15ch] text-[clamp(2.8rem,5.6vw,6rem)] leading-[0.94] font-medium tracking-[-0.075em]">A clear, collaborative path from first conversation to final delivery.</h2><div className="grid border-t border-[#101010] md:grid-cols-5">{[["01", "Book a call"], ["02", "Project brief"], ["03", "Develop"], ["04", "Deliver"], ["05", "Support"]].map(([number, title], index) => <article className={`min-h-0 border-b border-[#deded9] p-6 md:min-h-[270px] md:border-r ${index === 4 ? "md:border-r-0" : ""}`} key={number}><span>{number}</span><h3 className="text-xl tracking-[-0.04em]">{title}</h3><p className="text-sm leading-[1.45] text-[#555]">Every stage is purposeful, transparent, and tailored to the work in front of us.</p></article>)}</div></section>

        <section className="flex flex-col items-start gap-8 bg-[#d9ff47] px-5 py-12 md:flex-row md:items-center md:justify-between md:px-[5.5vw] md:py-[4.5rem]"><p className="text-[clamp(2rem,3.3vw,3.7rem)] tracking-[-0.075em]">Have an idea worth building?</p><Link className="flex items-center gap-2 text-lg font-bold" href="/contact">Let&apos;s talk <ArrowDownRight size={20} /></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
