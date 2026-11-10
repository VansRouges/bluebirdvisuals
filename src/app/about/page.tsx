import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection } from "@/components/faq-section";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsScroller } from "@/components/testimonials-scroller";
import { getAboutPage, getExperiences, getStacks, getTestimonials } from "@/sanity/lib/queries";

const fallbackExperiences = [
  ["Lead Product Designer", "Dash Wisely", "2025"],
  ["Website Designer", "Rekruteiq", "2024 - 2025"],
  ["Digital Designer", "Techspark Foundation", "2023 - Present"],
  ["Product Designer", "Tube Synopsis", "2023"],
  ["Brand Designer", "ExcelPrep", "2022 - 2024"],
];

const fallbackStacks = [
  ["Squarespace", "My most recommended platform for building and developing websites.", "squarespace"],
  ["Slack", "My go-to for seamless client and team communication", "slack"],
  ["Figma", "A powerful design tool for creating intuitive user interfaces", "figma"],
  ["Contra", "The easiest way to hire me and collaborate on projects", "contra"],
  ["X", "Where I share insights, tips, and Framer resources", "x"],
];

export default async function AboutPage() {
  const [aboutContent, testimonials, experiences, stacks] = await Promise.all([
    getAboutPage().catch(() => null),
    getTestimonials().catch(() => null),
    getExperiences().catch(() => null),
    getStacks().catch(() => null),
  ]);
  const displayedExperiences = experiences ?? fallbackExperiences.map(([role, company, period], index) => ({ _id: role, role, company, period, highlighted: index === 0, order: index }));
  const displayedStacks = stacks ?? fallbackStacks.map(([name, description], index) => ({ _id: name, name, description, highlighted: index === 0, order: index }));
  const aboutHeading = aboutContent?.heading ?? "I create strategic and visually compelling digital experiences that balance function and aesthetics";
  const aboutBody = aboutContent?.body?.length ? aboutContent.body : ["As a digital product designer, my focus is on creating intuitive user interfaces, seamless interactions, and cohesive brand identities that drive engagement and enhance usability. Whether it’s designing SaaS dashboards, mobile apps, or high-performance websites, my approach combines creativity with a deep understanding of user needs and business goals", "Over the years, I’ve collaborated with startups, established companies, and entrepreneurs to bring their ideas to life through thoughtful design solutions. I believe that great design goes beyond aesthetics—it solves problems, simplifies complexity, and delivers meaningful experiences. From concept to final execution, I ensure every project is strategically crafted to leave a lasting impact"];
  return (
    <>
      <SiteHeader />
      <main className="px-5 md:px-[5.5vw]">
        <section className="mx-auto max-w-[70rem] py-14 md:py-16">
          <h1 className="max-w-[24ch] text-[clamp(2.25rem,3.25vw,3.9rem)] leading-[1.1] font-medium tracking-[-0.075em] text-[#747982]">BlueBirdVisuals crafts strategic, visually compelling digital experiences that drive impact and engagement</h1>

          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.66fr_1fr] lg:gap-4">
            {(testimonials === null || testimonials.length > 0) && <TestimonialsScroller testimonials={testimonials ?? undefined} />}

            <div className="relative min-h-100 w-full max-w-[40rem] justify-self-end overflow-hidden rounded-[2rem] bg-[#d1d1cf] md:min-h-[32rem] md:rounded-[2.35rem]">
              <Image className="origin-top translate-y-2 scale-[1.27] object-contain object-top" src="/images/hero-portrait.png" alt="BlueBirdVisuals" fill priority sizes="(min-width: 1024px) 42vw, 90vw" />
            </div>
          </div>
        </section>
        {aboutContent?.enabled !== false && <><section className="mx-auto grid max-w-[70rem] gap-10 pt-20 pb-12 md:grid-cols-[0.57fr_1fr] md:gap-14 md:pt-32 md:pb-16">
          <p className="text-[1.1rem] tracking-[-0.045em] text-[#68707d]">{aboutContent?.eyebrow ?? "About Me"}</p>
          <div>
            <h2 className="max-w-[23ch] text-[clamp(2rem,2.65vw,3.2rem)] leading-[1.13] font-medium tracking-[-0.075em]">{aboutHeading}</h2>
            <div className="mt-7 max-w-[45rem] space-y-6 text-[clamp(0.95rem,1.1vw,1.22rem)] leading-[1.35] tracking-[-0.05em] text-[#68707d]">
              {aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-[70rem] gap-4 pb-20 md:grid-cols-[1.55fr_1fr] md:pb-32">
          <div className="relative aspect-[1.32] overflow-hidden rounded-[2rem] md:rounded-[2.4rem]">{aboutContent?.stageVideoUrl ? <video className="size-full object-cover" src={aboutContent.stageVideoUrl} autoPlay muted loop playsInline controls /> : <Image className="object-cover" src={aboutContent?.stageImage?.url ?? "/images/about-stage.png"} alt={aboutContent?.stageImage?.alt ?? "BlueBirdVisuals speaking on stage"} fill sizes="(min-width: 768px) 40vw, 90vw" />}</div>
          <div className="relative aspect-[0.85] overflow-hidden rounded-[2rem] md:rounded-[2.4rem]">{aboutContent?.selfieVideoUrl ? <video className="size-full object-cover" src={aboutContent.selfieVideoUrl} autoPlay muted loop playsInline controls /> : <Image className="object-cover" src={aboutContent?.selfieImage?.url ?? "/images/about-mirror-selfie.png"} alt={aboutContent?.selfieImage?.alt ?? "BlueBirdVisuals taking a mirror selfie"} fill sizes="(min-width: 768px) 28vw, 90vw" />}</div>
        </section></>}
        {displayedExperiences.length > 0 && <section className="mx-auto max-w-[70rem] py-20 md:py-28">
          <h2 className="text-[clamp(2rem,2.4vw,3rem)] leading-none font-medium tracking-[-0.075em]">Work experiences</h2>
          <div className="mt-10 space-y-2">
            {displayedExperiences.map(({ role, company, period, highlighted }, index) => (
              <article className={`grid min-h-16 items-center gap-2 rounded-[1.2rem] px-5 py-4 text-[0.95rem] tracking-[-0.05em] md:grid-cols-[1.2fr_1fr_auto] md:px-6 ${highlighted ?? index === 0 ? "bg-[#762cff] text-white shadow-[0_14px_18px_rgba(56,17,142,0.25)]" : "bg-[#f6f6f6] text-[#101010]"}`} key={role}><strong className="font-medium">{role}</strong><span className={highlighted ?? index === 0 ? "text-white" : "text-[#68707d]"}>{company}</span><span className={highlighted ?? index === 0 ? "text-white md:text-right" : "text-[#68707d] md:text-right"}>{period}</span></article>
            ))}
          </div>
        </section>}

        {displayedStacks.length > 0 && <section className="mx-auto max-w-[70rem] pb-20 md:pb-32">
          <h2 className="text-[clamp(2rem,2.4vw,3rem)] leading-none font-medium tracking-[-0.075em]">My stacks</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {displayedStacks.map(({ name, description, highlighted }, index) => (
              <article className={`flex min-h-[6.6rem] items-center gap-4 rounded-[1.2rem] px-5 py-4 ${highlighted ?? index === 0 ? "bg-[#762cff] text-white shadow-[0_14px_18px_rgba(56,17,142,0.25)]" : "bg-[#f6f6f6] text-[#101010]"}`} key={name}>
                <span className="relative size-14 shrink-0 overflow-hidden rounded-xl"><Image className="object-cover" src={`/images/stack-${name.toLowerCase().replaceAll(" ", "-")}.png`} alt={`${name} logo`} fill sizes="56px" /></span>
                <div><h3 className="text-[1.05rem] font-medium tracking-[-0.055em]">{name}</h3><p className={`mt-1 text-[0.82rem] leading-[1.35] tracking-[-0.04em] ${highlighted ?? index === 0 ? "text-white" : "text-[#68707d]"}`}>{description}</p></div>
              </article>
            ))}
          </div>
        </section>}
        <div className="-mx-5 md:-mx-[5.5vw]"><FaqSection /></div>
      </main>
      <SiteFooter />
    </>
  );
}
