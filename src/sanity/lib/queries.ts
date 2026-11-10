import { client } from "./client";
import { projects as fallbackProjects, type Project } from "@/lib/projects";

export type FaqItem = {
  _id: string;
  question: string;
  answer: string;
};

const faqQuery = `*[_type == "faq" && enabled != false] | order(order asc){_id, question, answer}`;

export async function getFaqs() {
  return client.fetch<FaqItem[]>(faqQuery, {}, { next: { revalidate: 60 } });
}

type CmsProject = Pick<Project, "slug" | "title" | "category" | "summary" | "coverVideoUrl"> & { tags?: string[] };
export type Testimonial = { _id: string; name: string; role: string; quote: string; order: number };
export type Experience = { _id: string; role: string; company: string; period: string; highlighted?: boolean; order: number };
export type Stack = { _id: string; name: string; description: string; highlighted?: boolean; order: number };
export type AboutPageContent = { eyebrow: string; heading: string; body: string[]; enabled?: boolean; stageVideoUrl?: string; selfieVideoUrl?: string; stageImage?: { url?: string; alt?: string }; selfieImage?: { url?: string; alt?: string } };

const projectQuery = `*[_type == "project" && enabled != false] | order(order asc){"slug": slug.current, title, category, summary, tags, coverVideoUrl}`;
const testimonialsQuery = `*[_type == "testimonial" && enabled != false] | order(order asc){_id, name, role, quote, order}`;
const experiencesQuery = `*[_type == "experience" && enabled != false] | order(order asc){_id, role, company, period, highlighted, order}`;
const stacksQuery = `*[_type == "stack" && enabled != false] | order(order asc){_id, name, description, highlighted, order}`;
const aboutPageQuery = `*[_type == "aboutPage"][0]{eyebrow, heading, body, enabled, stageVideoUrl, selfieVideoUrl, "stageImage": {"url": stageImage.asset->url, "alt": stageImage.alt}, "selfieImage": {"url": selfieImage.asset->url, "alt": selfieImage.alt}}`;

export async function getProjects(): Promise<Project[]> {
  const cmsProjects = await client.fetch<CmsProject[]>(projectQuery, {}, { next: { revalidate: 60 } });
  if (!cmsProjects.length) return fallbackProjects;

  return cmsProjects.map((project) => {
    const fallback = fallbackProjects.find(({ slug }) => slug === project.slug);
    return {
      ...(fallback ?? { year: project.tags?.[0] ?? "", client: project.tags?.[1] ?? "", color: "#111111", accent: "#ffffff" }),
      ...project,
    };
  });
}

export async function getTestimonials() {
  return client.fetch<Testimonial[]>(testimonialsQuery, {}, { next: { revalidate: 60 } });
}

export async function getExperiences() {
  return client.fetch<Experience[]>(experiencesQuery, {}, { next: { revalidate: 60 } });
}

export async function getStacks() {
  return client.fetch<Stack[]>(stacksQuery, {}, { next: { revalidate: 60 } });
}

export async function getAboutPage() {
  return client.fetch<AboutPageContent | null>(aboutPageQuery, {}, { next: { revalidate: 60 } });
}
