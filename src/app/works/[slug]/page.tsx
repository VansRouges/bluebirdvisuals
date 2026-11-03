import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <><SiteHeader /><main className="project-page"><Link className="back-link" href="/works"><ArrowLeft size={17} /> All work</Link><section className="project-heading"><p>{project.category} — {project.year}</p><h1>{project.title}</h1><div className="project-hero-art" style={{ background: project.color, color: project.accent }}><span>{project.title.split(" ").map((word) => word[0]).join("")}</span><i /></div></section><section className="project-overview"><div><p className="section-label">Overview</p><h2>{project.summary}</h2></div><dl><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Client</dt><dd>{project.client}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Outcome</dt><dd>Identity &amp; digital experience</dd></div></dl></section><section className="case-study"><p className="section-label">The approach</p><h2>A visual language with enough character to be remembered and enough clarity to get out of the way.</h2><div className="case-grid"><div style={{ background: project.accent }} /><div style={{ background: project.color }}><span>{project.title}</span></div></div></section><Link className="next-project" href="/works"><span>Explore more work</span><ArrowUpRight size={34} /></Link></main><SiteFooter /></>;
}
