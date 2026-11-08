import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="grid min-h-0 gap-16 px-5 py-24 md:min-h-[calc(100svh-80px)] md:grid-cols-[1.3fr_0.7fr] md:gap-[8vw] md:px-[5.5vw] md:pt-[12vw] md:pr-[10vw] md:pb-[8vw]">
        <section><p className="text-xs font-bold uppercase tracking-[0.08em]">Let&apos;s work together</p><h1 className="mt-6 mb-12 text-[clamp(4.2rem,8.5vw,10rem)] leading-[0.84] font-medium tracking-[-0.1em]">Got a vision?<br /><em className="font-serif font-normal">Let&apos;s make it real.</em></h1><a className="inline-flex items-center gap-2 text-[clamp(1.1rem,1.7vw,1.8rem)] underline" href="mailto:rosyidqoim@gmail.com">rosyidqoim@gmail.com <ArrowUpRight /></a></section>
        <aside className="self-end"><p className="text-xl leading-[1.4] tracking-[-0.04em]">I work with people and teams who care about making a difference. Tell me a little about your project, your timeline, and where you&apos;d like to go.</p><dl className="mt-12 border-t border-[#101010]">{[["Based in", "Lagos, Nigeria"], ["Availability", "Open for select projects"], ["Elsewhere", "Instagram · LinkedIn · X"]].map(([term, description]) => <div className="border-b border-[#deded9] py-4" key={term}><dt className="text-xs text-[#777]">{term}</dt><dd className="mt-1.5">{description}</dd></div>)}</dl></aside>
      </main>
      <SiteFooter />
    </>
  );
}
