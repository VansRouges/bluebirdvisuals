import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, CircleCheck, Laptop, Quote, Sigma } from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { HeroParallax } from "@/components/hero-parallax";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";
import { getProjects } from "@/sanity/lib/queries";

const featuredAssets: Record<string, string> = {
  "dash-wisely": "/images/dash-wisely.png",
  "jen-fitness": "/images/jen-fitness.gif",
  "goshen-app": "/images/goshen-app.png",
  thrivewell: "/images/thrivewell.png",
  "stacy-giscombe": "/images/stacy-giscombe-artwork.png",
  rekruteiq: "/images/rekruteiq-artwork.png",
};

const featuredTags: Record<string, string[]> = {
  "dash-wisely": ["Driver Assistant", "Website Design"],
  "jen-fitness": ["Brand Identity"],
  "goshen-app": ["UI/UX Design"],
  thrivewell: ["Brand Identity"],
  "stacy-giscombe": ["Author", "Website Design"],
  rekruteiq: ["Recruitment Platform", "Web Design"],
};

export default async function Home() {
  const cmsProjects = await getProjects().catch(() => projects);
  return (
    <>
      <SiteHeader />
      <main>
        <HeroParallax />

        <section className="relative z-[3] -mt-[55svh] bg-white px-5 pt-20 pb-16 md:px-[5.5vw] md:pt-36 md:pb-[7.2rem]">
          <div className="mb-11 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-[clamp(2.25rem,3.2vw,3.5rem)] leading-none font-medium tracking-[-0.075em]">Featured works</h2>
            <Link className="flex h-[72px] w-[222px] items-center justify-center gap-4 rounded-[24px] bg-[#f7f7f7] text-[1.35rem] tracking-[-0.055em]" href="/works">All Works <ArrowRight size={25} strokeWidth={1.7} /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {cmsProjects.map((project) => {
              const asset = featuredAssets[project.slug];
              const tags = featuredTags[project.slug] ?? [project.category];

              return (
                <Link className="block" href={`/works/${project.slug}`} key={project.slug}>
                  <article className="relative flex h-[80vw] items-end overflow-hidden rounded-[2.5rem] p-6 text-white md:aspect-[4/3] md:h-auto md:rounded-[3.5rem] md:p-9" style={{ background: project.color }}>
                    {project.coverVideoUrl ? <video className="absolute inset-0 size-full object-cover" src={project.coverVideoUrl} autoPlay muted loop playsInline /> : asset ? <Image className="object-cover" src={asset} alt={`${project.title} project artwork`} fill sizes="(min-width: 768px) 45vw, 90vw" unoptimized={project.slug === "jen-fitness"} /> : <><div className="absolute size-[58%] translate-x-[29%] translate-y-[22%] rounded-full opacity-90" style={{ background: project.accent }} /><span className="relative z-[1] text-[clamp(8rem,19vw,18rem)] font-extrabold tracking-[-0.12em]" style={{ color: project.accent }}>{project.title.slice(0, 1)}</span><i className="absolute left-[16%] h-[48%] w-[48%] rotate-[35deg] border-2" style={{ borderColor: project.accent }} /></>}
                    {project.slug === "dash-wisely" && <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />}
                    <div className="relative z-10">
                      <h3 className="mb-4 text-[clamp(1.8rem,2.2vw,2.5rem)] leading-none font-medium tracking-[-0.07em]">{project.title}</h3>
                      <div className="flex flex-wrap gap-3">{tags.map((tag) => <span className="rounded-2xl border border-white/80 px-4 py-2 text-lg leading-none tracking-[-0.05em]" key={tag}>{tag}</span>)}</div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-5 pt-11 pb-14 md:px-[14.5vw] md:pt-[4.5rem] md:pb-[5.6rem]">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="relative min-h-[308px] overflow-hidden rounded-[2.1rem] bg-[#f5f5f5] p-5 md:min-h-[378px] md:p-6">
              <div className="flex items-center gap-3"><span className="text-[1.55rem] font-bold leading-none tracking-[-0.08em]">W.</span><Award className="text-[#e6c500]" size={22} strokeWidth={1.8} /></div>
              <h2 className="mt-5 text-[clamp(1.12rem,1.4vw,1.54rem)] leading-none font-medium tracking-[-0.065em]">Awwwards Nominee</h2>
              <p className="mt-3 max-w-[20rem] text-[0.8rem] leading-[1.35] tracking-[-0.04em] text-[#68707d]">Recognized for excellence in web design and innovative digital experiences.</p>
              <div className="absolute inset-x-5 bottom-0 h-[54%] overflow-hidden rounded-t-[1.75rem] border border-[#171717] bg-white"><Image className="object-cover object-top" src="/images/dash-wisely-hero-ui.png" alt="Dash Wisely website interface" fill sizes="(min-width: 1024px) 25vw, 85vw" /></div>
            </article>

            <article className="flex min-h-[308px] flex-col rounded-[2.1rem] bg-[#111] p-5 text-white shadow-[0_17px_21px_rgba(0,0,0,0.23)] md:min-h-[378px] md:p-6">
              <Quote className="text-[#717782]" size={29} strokeWidth={1.4} />
              <p className="mt-6 max-w-[15ch] text-[clamp(1.19rem,1.5vw,1.72rem)] leading-[1.18] tracking-[-0.065em]">Isaac&apos;s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart</p>
              <div className="mt-auto flex items-center gap-2 pt-6"><Image className="size-8 rounded-full object-cover" src="/images/hero-portrait.png" alt="Joe Slamie" width={32} height={32} /><div><p className="text-xs font-medium">Joe Slamie</p><p className="text-xs text-[#b8bac0]">Founder at Dash-Wisely</p></div></div>
            </article>

            <article className="group relative flex min-h-[308px] items-center justify-center overflow-hidden rounded-[2.1rem] bg-[#f5f5f5] p-5 outline-none md:min-h-[378px] md:p-6" tabIndex={0}>
              <div className="absolute h-11 w-[78%] translate-y-5 rounded-[0.9rem] bg-white shadow-[0_10px_0_rgba(0,0,0,0.035),0_20px_0_rgba(0,0,0,0.025)] transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0" />
              <div className="relative flex w-[88%] items-center justify-between rounded-[0.9rem] bg-white px-4 py-3 text-[clamp(0.77rem,1.05vw,1.19rem)] tracking-[-0.055em] shadow-[0_8px_13px_rgba(0,0,0,0.09)] transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-0 group-focus:-translate-y-5 group-focus:opacity-0"><span>113+ projects completed</span><CircleCheck className="shrink-0 text-[#7438ef] [&>path:last-child]:stroke-white" size={18} fill="currentColor" strokeWidth={2.4} /></div>
              <div className="pointer-events-none absolute inset-x-5 top-5 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 md:inset-x-6 md:top-6">
                <div className="mx-auto flex w-fit items-center rounded-full bg-[#00bf4d] py-1 pl-1 pr-4 text-[0.8rem] font-medium text-white shadow-[0_10px_16px_rgba(0,0,0,0.2)]"><div className="flex -space-x-1.5">{[0, 1, 2, 3].map((index) => <Image className="size-6 rounded-full border border-[#00bf4d] object-cover" src="/images/hero-portrait.png" alt="" width={24} height={24} key={index} />)}</div><span className="ml-2">Trusted by many</span></div>
              </div>
              <div className="pointer-events-none absolute inset-x-5 top-1/2 -translate-y-[35%] space-y-3 opacity-0 transition-all duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100 md:inset-x-6">
                <div className="flex items-center justify-between rounded-[0.9rem] bg-white px-4 py-3 text-[clamp(0.77rem,1.05vw,1.19rem)] tracking-[-0.055em] shadow-[0_8px_13px_rgba(0,0,0,0.07)]"><span>113+ projects completed</span><CircleCheck className="shrink-0 text-[#7438ef] [&>path:last-child]:stroke-white" size={18} fill="currentColor" strokeWidth={2.4} /></div>
                <div className="flex items-center justify-between rounded-[0.9rem] bg-white px-4 py-3 text-[clamp(0.77rem,1.05vw,1.19rem)] tracking-[-0.055em] shadow-[0_8px_13px_rgba(0,0,0,0.07)]"><span>5+ years of experiences</span><span className="text-[1rem]">🚀</span></div>
                <div className="flex items-center justify-between rounded-[0.9rem] bg-white px-4 py-3 text-[clamp(0.77rem,1.05vw,1.19rem)] tracking-[-0.055em] shadow-[0_8px_13px_rgba(0,0,0,0.07)]"><span>10+ happy clients</span><span className="text-[1rem]">🙂</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-[14.5vw] md:py-32">
          <div className="grid gap-10 md:grid-cols-[0.43fr_1fr] md:gap-14">
            <p className="text-[1.1rem] tracking-[-0.045em] text-[#68707d]">Services</p>
            <h2 className="max-w-[23ch] text-[clamp(2.25rem,3.45vw,4.05rem)] leading-[1.16] font-medium tracking-[-0.075em]"><span className="text-[#74777e]">Design solutions that elevate brands and create seamless user experiences.</span> I help bring ideas to life with strategy and creativity</h2>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            <article className="group flex aspect-[4/5] flex-col rounded-[2rem] bg-[#f6f6f6] p-1.5 text-[#111] md:rounded-[2.4rem]">
              <div className="relative rounded-[1.5rem] bg-white px-4 py-4 text-[1.3rem] font-medium tracking-[-0.06em]"><div className="flex items-center justify-between transition-opacity duration-300 group-hover:opacity-0"><h3>Branding Design</h3><span className="flex size-10 items-center justify-center rounded-xl bg-[#fff9d9] text-xl text-[#e5c800]">◉</span></div><Link href="/works" className="absolute inset-0 flex items-center justify-between px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span>Start a Project</span><span className="flex size-10 items-center justify-center rounded-xl bg-[#fff9d9] text-[#e5c800]"><ArrowUpRight size={22} strokeWidth={1.7} /></span></Link></div>
              <div className="mt-1.5 flex flex-1 flex-col rounded-[1.5rem] bg-white px-7 py-7 transition-opacity duration-300 group-hover:opacity-20"><p className="text-[0.7725rem] leading-[1.48] tracking-[-0.045em] text-[#747982]">A strong brand is more than just a logo—it&apos;s the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints</p><div className="mt-5 grid grid-cols-3 gap-2"><div className="relative aspect-square overflow-hidden rounded-xl bg-[#c8cbff]"><Image className="object-cover" src="/images/jen-fitness.gif" alt="Brand identity work" fill sizes="10vw" unoptimized /></div><div className="relative aspect-square overflow-hidden rounded-xl"><Image className="object-cover" src="/images/thrivewell.png" alt="ThriveWell identity work" fill sizes="10vw" /></div><div className="relative aspect-square overflow-hidden rounded-xl"><Image className="object-cover" src="/images/thrivewell.png" alt="ThriveWell brand artwork" fill sizes="10vw" /></div></div><div className="mt-auto flex flex-wrap gap-2 pt-5"><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.590625rem] text-[#747982]">Logo design</span><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.590625rem] text-[#747982]">Brand guideline</span><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.590625rem] text-[#747982]">Brand strategy</span><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.590625rem] text-[#747982]">+more</span></div></div>
            </article>

            <article className="group flex aspect-[4/5] flex-col rounded-[2.2rem] border border-[#d7d7d7] bg-[#111] p-2 text-white shadow-[0_18px_22px_rgba(0,0,0,0.28)]">
              <div className="relative rounded-[1.5rem] bg-[#7b2cff] px-4 py-4 text-[1.3rem] font-medium tracking-[-0.06em]"><div className="flex items-center justify-between transition-opacity duration-300 group-hover:opacity-0"><h3>Website Development</h3><span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#7b2cff]"><Laptop size={22} strokeWidth={1.7} /></span></div><Link href="/works" className="absolute inset-0 flex items-center justify-between px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span>Start a Project</span><span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#7b2cff]"><ArrowUpRight size={22} strokeWidth={1.7} /></span></Link></div>
              <div className="mt-2 flex flex-1 flex-col rounded-[1.5rem] bg-[#7b2cff] px-[1.85rem] py-7 transition-opacity duration-300 group-hover:opacity-20"><p className="text-[0.7725rem] leading-[1.48] tracking-[-0.045em]">Transforming designs into fully responsive, interactive websites with Shopify, Squarespace, Wix or Figma. Whether it&apos;s a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance.</p><div className="mt-5 grid grid-cols-3 gap-2"><div className="relative aspect-square overflow-hidden rounded-xl"><Image className="object-cover" src="/images/dash-wisely.png" alt="Dash Wisely website" fill sizes="10vw" /></div><div className="relative aspect-square overflow-hidden rounded-xl"><Image className="object-cover" src="/images/stacy-giscombe-artwork.png" alt="Website project" fill sizes="10vw" /></div><div className="relative aspect-square overflow-hidden rounded-xl"><Image className="object-cover" src="/images/rekruteiq-artwork.png" alt="Website project" fill sizes="10vw" /></div></div><div className="mt-auto flex flex-wrap gap-2 pt-5"><span className="rounded-full border border-white/70 px-4 py-2 text-[0.65625rem]">Landing page</span><span className="rounded-full border border-white/70 px-4 py-2 text-[0.65625rem]">Multipages</span><span className="rounded-full border border-white/70 px-4 py-2 text-[0.65625rem]">Web migration</span><span className="rounded-full border border-white/70 px-4 py-2 text-[0.65625rem]">+more</span></div></div>
            </article>

            <article className="group flex aspect-[4/5] flex-col rounded-[2rem] bg-[#f6f6f6] p-1.5 text-[#111] shadow-[-12px_0_22px_rgba(0,0,0,0.16)] md:rounded-[2.4rem]">
              <div className="relative rounded-[1.5rem] bg-white px-4 py-4 text-[1.3rem] font-medium tracking-[-0.06em]"><div className="flex items-center justify-between transition-opacity duration-300 group-hover:opacity-0"><h3>UI/UX Design</h3><span className="flex size-10 items-center justify-center rounded-xl bg-[#e8fff0] text-[#00bd4d]"><Sigma size={21} strokeWidth={1.9} /></span></div><Link href="/works" className="absolute inset-0 flex items-center justify-between px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span>Start a Project</span><span className="flex size-10 items-center justify-center rounded-xl bg-[#e8fff0] text-[#00bd4d]"><ArrowUpRight size={22} strokeWidth={1.7} /></span></Link></div>
              <div className="mt-1.5 flex flex-1 flex-col rounded-[1.5rem] bg-white px-7 py-7 transition-opacity duration-300 group-hover:opacity-20"><p className="text-[0.73645rem] leading-[1.48] tracking-[-0.045em] text-[#747982]">Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability</p><div className="mt-5 grid grid-cols-3 gap-2"><div className="relative aspect-[3/4] overflow-hidden rounded-xl"><Image className="object-cover" src="/images/uiux-fashion.png" alt="Fashion shopping app interface" fill sizes="10vw" /></div><div className="relative aspect-[3/4] overflow-hidden rounded-xl"><Image className="object-cover" src="/images/uiux-waypath.png" alt="Waypath travel app interface" fill sizes="10vw" /></div><div className="relative aspect-[3/4] overflow-hidden rounded-xl"><Image className="object-cover" src="/images/uiux-pink-shop.png" alt="Shopping app interface" fill sizes="10vw" /></div></div><div className="mt-auto flex flex-wrap gap-2 pt-5"><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.56875rem] text-[#747982]">Web &amp; app design</span><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.56875rem] text-[#747982]">Design system</span><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.56875rem] text-[#747982]">Prototyping</span><span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[0.56875rem] text-[#747982]">+more</span></div></div>
            </article>
          </div>
        </section>

        <section className="bg-[#0d0d0d] px-5 py-20 text-white [background-image:radial-gradient(rgba(255,255,255,0.055)_0.6px,transparent_0.8px)] [background-size:4px_4px] md:px-[20vw] md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.43fr_1fr] md:gap-14">
            <p className="text-[1.1rem] tracking-[-0.045em] text-[#747982]">How it works</p>
            <div>
              <h2 className="max-w-[21ch] text-[clamp(1.9125rem,2.6775vw,3.145rem)] leading-[1.15] font-medium tracking-[-0.075em]">A simple and efficient workflow to bring your vision to life. <span className="text-[#74777e]">From the first call to final delivery, every step is designed for clarity and efficiency.</span></h2>
              <div className="mt-16 space-y-5">
                {[
                  ["1", "Book a Call", "Let’s start with a conversation! We’ll discuss your goals, ideas, and how I can help bring them to life. This is where we align expectations and ensure a great fit."],
                  ["2", "Project Brief", "Once we’re on the same page, we’ll define the project scope, timeline, and deliverables. A structured brief ensures a smooth and efficient process."],
                  ["3", "Develop", "This is where the magic happens! I’ll craft thoughtful designs and refine them based on feedback, ensuring the final outcome meets your vision and goals."],
                  ["4", "Deliver & Support", "Your project launches with clear handoff and support for what comes next."],
                ].map(([number, title, copy], index) => <article className={`max-w-[27rem] rounded-[1.75rem] border border-white/10 bg-[#141414] p-6 shadow-[0_18px_26px_rgba(0,0,0,0.22)] md:aspect-[2/1] ${index % 2 === 1 ? "md:ml-[15rem]" : ""}`} key={number}><span className="flex size-10 items-center justify-center rounded-full bg-[#1e1e1e] text-xl text-[#777d87]">{number}</span><h3 className="mt-5 text-[1.45rem] font-medium tracking-[-0.06em]">{title}</h3><p className="mt-3 text-base leading-[1.45] tracking-[-0.04em] text-[#747982]">{copy}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <FaqSection />

      </main>
      <SiteFooter />
    </>
  );
}
