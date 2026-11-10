import { Plus } from "lucide-react";
import { getFaqs } from "@/sanity/lib/queries";

const fallbackFaqs = [
  { question: "What types of projects do you work on?", answer: "I work across websites, digital products, brand identity, and creative direction." },
  { question: "Do you offer revisions?", answer: "Yes. Each project includes collaborative review rounds so the final result feels right." },
  { question: "What platforms do you work with?", answer: "I design and build for Figma, Shopify, Webflow, Squarespace, Wix, and custom web stacks." },
  { question: "Can you work with my existing brand guidelines?", answer: "Absolutely. I can extend an existing identity while keeping every touchpoint clear and consistent." },
  { question: "Do you offer ongoing support after the project is completed?", answer: "Yes, ongoing design and website support can be arranged after launch." },
  { question: "What’s the best way to reach you?", answer: "Email is the quickest way to get in touch. Tell me a little about your project and I’ll reply." },
];

export async function FaqSection() {
  const faqs = await getFaqs().catch(() => fallbackFaqs);
  if (!faqs.length) return null;

  return (
    <section className="bg-white px-5 py-20 md:px-[20vw] md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-10">
        <div>
          <div className="flex items-center gap-3 text-[1.05rem] tracking-[-0.045em] text-[#747982]"><span>FAQs</span><span className="h-px flex-1 bg-[#ededed]" /></div>
          <h2 className="mt-6 max-w-[19ch] text-[clamp(2rem,2.6vw,3.15rem)] leading-[1.14] font-medium tracking-[-0.075em]"><span className="text-[#747982]">Answers to common questions to help you understand </span>the process and how we can work together</h2>
          <a className="mt-10 inline-flex h-12 items-center rounded-[1rem] bg-[#111] px-6 text-sm font-medium text-white shadow-[0_14px_20px_rgba(0,0,0,0.25)]" href="mailto:rosyidqoim@gmail.com">Email Me</a>
        </div>

        <div className="relative rounded-[2rem] bg-[#f6f6f6] px-2 pb-2 pt-20 md:rounded-[2.35rem] md:px-3 md:pb-3 md:pt-24">
          <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-[1rem] bg-[#111] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_20px_rgba(0,0,0,0.25)]">I&apos;m here to help you</span>
          <div className="space-y-2">
            {faqs.map(({ question, answer }) => (
              <details className="group rounded-[1.25rem] bg-white" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[clamp(0.9rem,1.05vw,1.15rem)] leading-[1.25] font-medium tracking-[-0.055em] [&::-webkit-details-marker]:hidden"><span>{question}</span><Plus className="shrink-0 text-[#959aa3] transition-transform duration-200 group-open:rotate-45" size={22} strokeWidth={1.5} /></summary>
                <p className="px-5 pb-5 text-sm leading-[1.45] tracking-[-0.035em] text-[#747982]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
