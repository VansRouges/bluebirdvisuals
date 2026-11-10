import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";
import { getProjects } from "@/sanity/lib/queries";

const projectArtwork: Record<string, string> = {
  "dash-wisely": "/images/dash-wisely.png",
  "jen-fitness": "/images/jen-fitness.gif",
  "goshen-app": "/images/goshen-app.png",
  thrivewell: "/images/thrivewell.png",
  "stacy-giscombe": "/images/stacy-giscombe-artwork.png",
  rekruteiq: "/images/rekruteiq-artwork.png",
};

const projectTags: Record<string, string[]> = {
  "dash-wisely": ["Driver Assistant", "Website Design"],
  "jen-fitness": ["Brand Identity"],
  "goshen-app": ["Education", "UI/UX Design"],
  thrivewell: ["Brand Identity"],
  "stacy-giscombe": ["Author", "Website Design"],
  rekruteiq: ["Recruitment Platform", "Web Design"],
};

export default async function WorksPage() {
  const cmsProjects = await getProjects().catch(() => projects);
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1344px] px-5 pb-20 md:px-0 md:pb-36">
        <header className="max-w-4xl py-24 md:pt-28 md:pb-20">
          <h1 className="text-[clamp(2.6rem,3.45vw,4rem)] leading-[1.08] font-medium tracking-[-0.075em]"><span className="text-[#74777e]">Designing seamless experiences that</span><br />elevate brands and engage users</h1>
        </header>

        <section className="grid gap-6 md:grid-cols-2 md:gap-4">
          {cmsProjects.map((project) => (
            <Link className="group block" href={`/works/${project.slug}`} key={project.slug}>
              <article className="relative flex aspect-[4/3] items-end overflow-hidden rounded-[2.5rem] p-7 text-white md:rounded-[3rem] md:p-8" style={{ background: project.slug === "goshen-app" ? "#000" : project.color }}>
                {project.coverVideoUrl ? <video className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src={project.coverVideoUrl} autoPlay muted loop playsInline /> : <Image className={`${project.slug === "goshen-app" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`} src={projectArtwork[project.slug]} alt={`${project.title} project artwork`} fill sizes="(min-width: 768px) 42vw, 90vw" unoptimized={project.slug === "jen-fitness"} />}
                {project.slug === "dash-wisely" && <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />}
                <div className="relative z-10">
                  <h2 className="mb-4 text-[clamp(1.7rem,2.25vw,2.5rem)] leading-none font-medium tracking-[-0.07em]">{project.title}</h2>
                  <div className="flex flex-wrap gap-3">{projectTags[project.slug].map((tag) => <span className="rounded-2xl border border-white/80 px-4 py-2 text-lg leading-none tracking-[-0.05em]" key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
