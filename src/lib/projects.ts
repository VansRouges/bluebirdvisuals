export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  summary: string;
  color: string;
  accent: string;
};

export const projects: Project[] = [
  { slug: "dash-wisely", title: "Dash Wisely", category: "Website Design", year: "2025", client: "Dash Wisely", summary: "A practical digital home for a smarter, safer driving companion.", color: "#d5f349", accent: "#1c284a" },
  { slug: "jen-fitness", title: "JEN FITNESS", category: "Brand Identity", year: "2025", client: "Jen Fitness", summary: "A high-energy identity system made for momentum, movement, and confidence.", color: "#f4a6ba", accent: "#382636" },
  { slug: "goshen-app", title: "Goshen App", category: "UI/UX Design", year: "2025", client: "Anonymous", summary: "An inviting learning platform that gives growing creatives a clear path forward.", color: "#a7c5ff", accent: "#132e65" },
  { slug: "thrivewell", title: "ThriveWell", category: "Brand Identity", year: "2024", client: "ThriveWell", summary: "A grounded, optimistic brand system for modern agriculture.", color: "#b2d198", accent: "#264330" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
