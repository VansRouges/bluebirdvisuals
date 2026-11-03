import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return <><SiteHeader /><main className="interior"><header className="page-intro"><p>Selected work</p><h1>Designing seamless experiences that elevate brands and engage users.</h1></header><section className="works-list">{projects.map((project, index) => <Link href={`/works/${project.slug}`} className="work-row" key={project.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{project.title}</h2><p>{project.category}</p></div><div className="work-swatch" style={{ background: project.color, color: project.accent }}>{project.title.slice(0, 1)}</div><ArrowUpRight /></Link>)}</section></main><SiteFooter /></>;
}
