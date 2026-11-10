"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { SiteFooter } from "@/components/site-footer";
import { type Project } from "@/lib/projects";

const artwork: Record<string, string> = {
  "jen-fitness": "/images/jen-fitness.gif",
  "goshen-app": "/images/goshen-app.png",
  thrivewell: "/images/thrivewell.png",
  "stacy-giscombe": "/images/stacy-giscombe-artwork.png",
  rekruteiq: "/images/rekruteiq-artwork.png",
};

const tags: Record<string, string[]> = {
  "jen-fitness": ["Brand Identity"],
  "goshen-app": ["Education", "UI/UX Design"],
  thrivewell: ["Brand Identity"],
  "stacy-giscombe": ["Author", "Website Design"],
  rekruteiq: ["Recruitment Platform", "Web Design"],
};

export function ProjectCaseStudy({ project, projects }: { project: Project; projects: Project[] }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const asset = artwork[project.slug];
  const related = projects.filter(({ slug }) => slug !== project.slug && slug !== "dash-wisely").slice(0, 2);

  useEffect(() => {
    const updateImage = () => {
      const image = imageRef.current;
      if (!image) return;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.7, 1), 1);
      image.style.setProperty("--project-scale", `${1 + progress * 0.12}`);
      image.style.setProperty("--project-offset", `${progress * -48}px`);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateImage);
    };

    updateImage();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <main className="relative">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
          <div ref={imageRef} className="absolute inset-0 translate-y-[var(--project-offset,0px)] scale-[var(--project-scale,1)] will-change-transform">
            {project.coverVideoUrl ? <video className="size-full object-cover" src={project.coverVideoUrl} autoPlay muted loop playsInline /> : <Image className={project.slug === "goshen-app" ? "object-contain" : "object-cover"} src={asset} alt={`${project.title} project artwork`} fill priority sizes="100vw" unoptimized={project.slug === "jen-fitness"} />}
          </div>
        </div>

        <article className="relative z-10 -mt-[75svh] rounded-t-[2.5rem] bg-white px-5 pt-8 md:-mt-[24svh] md:rounded-t-[4rem] md:px-[4.4vw] md:pt-10">
          <div className="flex items-start justify-between gap-6">
            <h1 className="text-[clamp(2.25rem,3.25vw,3rem)] leading-none font-medium tracking-[-0.065em]">{project.title}</h1>
            <Link className="flex size-15 shrink-0 items-center justify-center rounded-[18px] bg-[#f6f6f6] shadow-[0_12px_16px_rgba(0,0,0,0.14)]" href="/works" aria-label="Close project"><X size={32} strokeWidth={1.5} /></Link>
          </div>

          <div className="grid gap-x-10 gap-y-10 pt-16 pb-24 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-x-12 md:gap-y-8 md:pt-20 md:pb-16">
            <p className="text-lg text-[#777]">Overview</p>
            <section className="max-w-[70rem] text-[clamp(1.05rem,1.5vw,1.5rem)] leading-[1.33] tracking-[-0.045em]">
              <p><strong>{project.summary}</strong></p>
              <p className="mt-6">A thoughtful visual and digital experience created to give the brand a distinctive, useful, and memorable presence across every customer touchpoint.</p>
            </section>

            <dl className="contents text-[clamp(1.05rem,1.5vw,1.5rem)] leading-[1.33] tracking-[-0.045em]">
              <dt className="text-lg text-[#777]">Categories</dt>
              <dd>{tags[project.slug].join("  ·  ")}</dd>
              <dt className="text-lg text-[#777]">Date</dt>
              <dd>{project.year}</dd>
              <dt className="text-lg text-[#777]">Client</dt>
              <dd>{project.client}</dd>
            </dl>
          </div>

          <section className="pb-24 pt-4 md:pb-32 md:pt-8">
            <a className="inline-flex h-14 items-center gap-3 rounded-[18px] bg-[#111] px-6 text-sm font-semibold text-white shadow-[0_16px_20px_rgba(0,0,0,0.22)]" href="mailto:rosyidqoim@gmail.com">Start a project <ArrowRight size={20} /></a>
            <div className="relative mt-20 aspect-[4/3] overflow-hidden rounded-[2rem] bg-black md:rounded-[3rem]">
              {project.coverVideoUrl ? <video className="size-full object-cover" src={project.coverVideoUrl} autoPlay muted loop playsInline controls /> : <Image className={project.slug === "goshen-app" || project.slug === "thrivewell" ? "object-contain" : "object-cover"} src={asset} alt={`${project.title} project artwork`} fill sizes="90vw" unoptimized={project.slug === "jen-fitness"} />}
            </div>
          </section>

          <section className="mx-auto max-w-[82rem] border-t border-[#f1f1f1] pb-20 pt-20 md:pb-32 md:pt-28">
            <h2 className="mb-10 text-[clamp(2.25rem,3.35vw,3.5rem)] leading-none tracking-[-0.07em]">More works</h2>
            <div className="grid gap-5 md:grid-cols-2 md:gap-4">
              {related.map((relatedProject) => (
                <Link className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-[2.5rem] bg-black p-7 text-white md:rounded-[3rem] md:p-8" href={`/works/${relatedProject.slug}`} key={relatedProject.slug}>
                  {relatedProject.coverVideoUrl ? <video className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src={relatedProject.coverVideoUrl} autoPlay muted loop playsInline /> : <Image className={`${relatedProject.slug === "goshen-app" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`} src={artwork[relatedProject.slug]} alt={`${relatedProject.title} project artwork`} fill sizes="(min-width: 768px) 42vw, 90vw" unoptimized={relatedProject.slug === "jen-fitness"} />}
                  <div className="relative z-10"><h3 className="mb-4 text-[clamp(1.7rem,2.25vw,2.5rem)] leading-none font-medium tracking-[-0.07em]">{relatedProject.title}</h3><div className="flex flex-wrap gap-3">{tags[relatedProject.slug].map((tag) => <span className="rounded-2xl border border-white/80 px-4 py-2 text-lg leading-none tracking-[-0.05em]" key={tag}>{tag}</span>)}</div></div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
