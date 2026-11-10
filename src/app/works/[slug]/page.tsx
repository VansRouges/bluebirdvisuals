import { notFound } from "next/navigation";
import { DashWiselyProject } from "@/components/dash-wisely-project";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject, projects } from "@/lib/projects";
import { getProjects } from "@/sanity/lib/queries";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const cmsProjects = await getProjects().catch(() => projects);
  const project = cmsProjects.find((item) => item.slug === slug) ?? getProject(slug);
  if (!project) notFound();

  if (project.slug === "dash-wisely") return <DashWiselyProject />;

  return <ProjectCaseStudy project={project} projects={cmsProjects} />;
}
