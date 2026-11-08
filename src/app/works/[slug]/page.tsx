import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-8 md:px-[5.5vw] md:pt-12">
        <Link className="inline-flex items-center gap-1.5 text-sm" href="/works"><ArrowLeft size={17} /> All work</Link>
        <section className="py-16 md:py-24"><p className="text-xs font-bold uppercase tracking-[0.08em]">{project.category} — {project.year}</p><h1 className="mt-5 mb-10 text-[clamp(4rem,10vw,11rem)] leading-[0.8] font-medium tracking-[-0.1em]">{project.title}</h1><div className="relative flex h-[85vw] items-center justify-center overflow-hidden md:h-[min(55vw,760px)]" style={{ background: project.color, color: project.accent }}><span className="relative z-[1] text-[clamp(8rem,25vw,27rem)] font-extrabold tracking-[-0.15em]">{project.title.split(" ").map((word) => word[0]).join("")}</span><i className="absolute h-[60%] w-[35%] rounded-full border-4 border-current" /></div></section>
        <section className="grid gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:py-36"><div><p className="text-xs font-bold uppercase tracking-[0.08em]">Overview</p><h2 className="mt-6 text-[clamp(2.3rem,4.5vw,5rem)] leading-[0.98] font-medium tracking-[-0.075em]">{project.summary}</h2></div><dl className="border-t border-[#101010]">{[["Category", project.category], ["Client", project.client], ["Year", project.year], ["Outcome", "Identity & digital experience"]].map(([term, description]) => <div className="flex justify-between border-b border-[#deded9] py-5" key={term}><dt className="text-[#777]">{term}</dt><dd className="m-0">{description}</dd></div>)}</dl></section>
        <section className="-mx-5 bg-[#f2f2ee] px-5 py-20 md:-mx-[5.5vw] md:px-[5.5vw] md:py-32"><p className="text-xs font-bold uppercase tracking-[0.08em]">The approach</p><h2 className="mt-6 max-w-[18ch] text-[clamp(2.3rem,4.5vw,5rem)] leading-[0.98] font-medium tracking-[-0.075em]">A visual language with enough character to be remembered and enough clarity to get out of the way.</h2><div className="mt-16 grid gap-6 md:grid-cols-2"><div className="h-[35vw] min-h-[300px]" style={{ background: project.accent }} /><div className="flex h-[35vw] min-h-[300px] items-center justify-center text-center text-[clamp(2.5rem,6vw,7rem)] font-bold tracking-[-0.09em]" style={{ background: project.color }}><span>{project.title}</span></div></div></section>
        <Link className="flex items-center justify-between py-16 text-[clamp(2.5rem,5vw,6rem)] tracking-[-0.08em] md:py-24" href="/works"><span>Explore more work</span><ArrowUpRight size={34} /></Link>
      </main>
      <SiteFooter />
    </>
  );
}
