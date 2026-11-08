import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 md:px-[5.5vw]">
        <header className="max-w-312 py-20 md:py-36"><p className="text-xs font-bold uppercase tracking-[0.08em]">Selected work</p><h1 className="mt-6 text-[clamp(4rem,8vw,9rem)] leading-[0.86] font-medium tracking-[-0.09em]">Designing seamless experiences that elevate brands and engage users.</h1></header>
        <section className="mb-20 border-t border-[#101010] md:mb-36">{projects.map((project, index) => <Link href={`/works/${project.slug}`} className="grid min-h-[120px] grid-cols-[10%_1fr_60px] items-center gap-4 border-b border-[#deded9] transition-[padding] duration-200 hover:px-4 md:min-h-[180px] md:grid-cols-[7%_1fr_210px_30px] md:gap-8" key={project.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h2 className="text-[clamp(1.8rem,3vw,3.4rem)] font-medium tracking-[-0.07em]">{project.title}</h2><p className="mt-1 text-[#777]">{project.category}</p></div><div className="flex h-[60px] items-center justify-center text-[2.7rem] font-extrabold tracking-[-0.15em] md:h-[130px] md:text-8xl" style={{ background: project.color, color: project.accent }}>{project.title.slice(0, 1)}</div><ArrowUpRight className="hidden md:block" /></Link>)}</section>
      </main>
      <SiteFooter />
    </>
  );
}
