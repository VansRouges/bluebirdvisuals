import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="reference-hero">
      <div className="hero-status"><span /> Available for select projects</div>
      <Image className="reference-portrait" src="/images/hero-portrait.png" alt="Isaac Bami" width={512} height={512} priority />
      <h1>Isaac is solving problems through strategic design and compelling visuals</h1>
      <div className="hero-intro"><p>Hi, I&apos;m Isaac Bamigbola, a Web, Product &amp; Graphic Designer. I specialize in creating high-converting digital experiences that look sharp and deliver real business growth.</p><a className="black-button" href="mailto:rosyidqoim@gmail.com">Email Me</a></div>
    </section>
    <section className="section featured"><div className="section-top"><p>Selected work</p><Link href="/works">All works <ArrowDownRight size={18} /></Link></div><h2>Featured works</h2><div className="project-grid">{projects.map((project, index) => <Link className={`project-card project-${index + 1}`} href={`/works/${project.slug}`} key={project.slug} style={{ "--card": project.color, "--accent": project.accent } as React.CSSProperties}><div className="project-art"><span>{project.title.slice(0, 1)}</span><i /></div><div className="project-meta"><h3>{project.title}</h3><p>{project.category}</p></div></Link>)}</div></section>
    <section className="award-band"><p>Recognized for thoughtful, human-centered digital experiences.</p><strong>Independent<br />Designer</strong><span>01 — 04</span></section>
    <section className="section services"><p className="section-label">Services</p><h2>Design solutions that elevate brands and create seamless user experiences.</h2><div className="service-list">{[["01", "Branding Design", "Identity systems that give brands a clear, memorable presence."], ["02", "Website Development", "Responsive, expressive websites made to perform beautifully."], ["03", "UI/UX Design", "Digital products that make complex interactions feel simple."]].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href="mailto:rosyidqoim@gmail.com">Start a project ↗</a></article>)}</div></section>
    <section className="process"><p className="section-label">How it works</p><h2>A clear, collaborative path from first conversation to final delivery.</h2><div className="process-grid">{[["01", "Book a call"], ["02", "Project brief"], ["03", "Develop"], ["04", "Deliver"], ["05", "Support"]].map(([number, title]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>Every stage is purposeful, transparent, and tailored to the work in front of us.</p></article>)}</div></section>
    <section className="contact-strip"><p>Have an idea worth building?</p><Link href="/contact">Let&apos;s talk <ArrowDownRight size={20} /></Link></section>
  </main><SiteFooter /></>;
}
