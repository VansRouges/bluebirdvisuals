"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "@/components/site-footer";

const faqs = [
  {
    question: "What is Dash Wisely?",
    answer: "Dash Wisely is a smart companion app for delivery drivers using Uber Eats and DoorDash. It helps you track earnings, manage orders, and navigate efficiently — all in one dashboard.",
  },
  { question: "How do I add a new order to the app?", answer: "Upload a screenshot of the order and Dash Wisely will extract the important details for you." },
  { question: "Can I track multiple orders from both apps at once?", answer: "Yes. Dash Wisely helps you compare and organize single and stacked deliveries across platforms." },
  { question: "Does the app help with delivery routes?", answer: "Yes. It presents clear pickup-to-dropoff paths and route information to support faster decisions." },
  { question: "What is the voice assistant for?", answer: "The voice assistant is designed to make navigating the app safer and easier while you are on the road." },
];

export function DashWiselyProject() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const updateImage = () => {
      const image = imageRef.current;
      if (!image) return;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.7, 1), 1);
      image.style.setProperty("--project-scale", `${1 + progress * 0.12}`);
      image.style.setProperty("--project-offset", `${progress * -48}px`);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateImage);
    };

    updateImage();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
    <main className="relative">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-black">
        <div ref={imageRef} className="absolute inset-0 translate-y-[var(--project-offset,0px)] scale-[var(--project-scale,1)] will-change-transform">
          <Image className="object-cover" src="/images/dash-wisely.png" alt="Dash Wisely website displayed on a laptop" fill priority sizes="100vw" />
        </div>
      </div>

      <article className="relative z-10 -mt-[75svh] rounded-t-[2.5rem] bg-white px-5 pt-8 md:-mt-[24svh] md:rounded-t-[4rem] md:px-[4.4vw] md:pt-10">
        <div className="flex items-start justify-between gap-6">
          <h1 className="text-[clamp(2.25rem,3.25vw,3rem)] leading-none font-medium tracking-[-0.065em]">Dash Wisely</h1>
          <Link className="flex size-15 shrink-0 items-center justify-center rounded-[18px] bg-[#f6f6f6] shadow-[0_12px_16px_rgba(0,0,0,0.14)]" href="/works" aria-label="Close project"><X size={32} strokeWidth={1.5} /></Link>
        </div>

        <div className="grid gap-x-10 gap-y-10 pt-16 pb-24 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-x-12 md:gap-y-8 md:pt-20 md:pb-16">
          <p className="text-lg text-[#777]">Overview</p>
          <section className="max-w-[70rem] text-[clamp(1.05rem,1.5vw,1.5rem)] leading-[1.33] tracking-[-0.045em]">
            <p><strong>Dash-Wisely is a smart assistant app built for delivery drivers to help them work faster, earn more, and avoid confusion.</strong> It instantly reads uploaded order screenshots, organizes routes, and recommends the most efficient way to complete deliveries — both single and stacked. The app shows clear pickup-to-dropoff paths, real-time distance and time estimates, and smart suggestions to help drivers decide whether to accept or reject each order.</p>
            <p className="mt-6">Designed with simplicity and clarity in mind, Dash-Wisely eliminates the stress of switching between multiple apps. Drivers can track routes, check earnings insights, navigate with Google Maps/Waze/Apple Maps, and enjoy a smoother, more confident delivery experience — all in one place.</p>
          </section>

          <dl className="contents text-[clamp(1.05rem,1.5vw,1.5rem)] leading-[1.33] tracking-[-0.045em]">
            <dt className="text-lg text-[#777]">Categories</dt>
            <dd>Driver Assistant <span className="mx-2 text-[#aaa]">·</span> Website Design</dd>
            <dt className="text-lg text-[#777]">Date</dt>
            <dd>Mar 6, 2025</dd>
            <dt className="text-lg text-[#777]">Client</dt>
            <dd>Joe Slamie</dd>
          </dl>

        </div>
        <section className="pb-24 pt-4 md:pb-32 md:pt-8">
          <a className="inline-flex h-14 items-center gap-3 rounded-[18px] bg-[#111] px-6 text-sm font-semibold text-white shadow-[0_16px_20px_rgba(0,0,0,0.22)]" href="https://dashwisely.app/" target="_blank" rel="noreferrer">Live Preview <ArrowRight size={20} /></a>

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <Image className="h-auto w-full" src="/images/dash-wisely-hero-ui.png" alt="Dash Wisely application home screen" width={1024} height={728} />
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <Image className="h-auto w-full" src="/images/dash-wisely-waitlist.png" alt="Dash Wisely waitlist campaign" width={801} height={533} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl border-t border-[#f1f1f1] pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <span className="rounded-full bg-[#f1eff1] px-3 py-1 text-[0.65rem] font-medium">FAQs</span>
            <h2 className="mt-5 text-[clamp(2.25rem,4vw,4rem)] leading-[0.95] tracking-[-0.07em]">Frequently Asked<br /><em className="font-normal">Questions</em></h2>
            <p className="mt-5 text-sm">Everything you need to know before you start<br />using our app.</p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className="rounded-2xl border border-[#dedede] px-5 py-4 md:px-7" key={faq.question}>
                  <button className="flex w-full items-center justify-between gap-6 text-left text-sm font-medium" type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    {faq.question}<span className="text-xl font-normal leading-none">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="max-w-3xl pt-3 text-xs leading-relaxed text-[#777]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[82rem] pb-20 md:pb-32">
          <h2 className="mb-10 text-[clamp(2.25rem,3.35vw,3.5rem)] leading-none tracking-[-0.07em]">More works</h2>
          <div className="grid gap-5 md:grid-cols-2 md:gap-4">
            <Link className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-[2.5rem] bg-[#c5c7ff] p-7 text-white md:rounded-[3rem] md:p-8" href="/works/jen-fitness">
              <Image className="object-contain p-[6%] transition-transform duration-500 group-hover:scale-[1.03]" src="/images/jen-fitness.gif" alt="Jen Fitness brand identity artwork" fill sizes="(min-width: 768px) 42vw, 90vw" unoptimized />
              <div className="relative z-10">
                <h3 className="mb-4 text-[clamp(1.7rem,2.25vw,2.5rem)] leading-none font-medium tracking-[-0.07em]">JEN FITNESS</h3>
                <span className="inline-flex rounded-2xl border border-white/80 px-4 py-2 text-lg leading-none tracking-[-0.05em]">Brand Identity</span>
              </div>
            </Link>

            <Link className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-[2.5rem] bg-black p-7 text-white md:rounded-[3rem] md:p-8" href="/works/goshen-app">
              <Image className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="/images/goshen-app.png" alt="Goshen app onboarding experience" fill sizes="(min-width: 768px) 42vw, 90vw" />
              <div className="relative z-10">
                <h3 className="mb-4 text-[clamp(1.7rem,2.25vw,2.5rem)] leading-none font-medium tracking-[-0.07em]">Goshen App</h3>
                <div className="flex flex-wrap gap-3"><span className="inline-flex rounded-2xl border border-white/80 px-4 py-2 text-lg leading-none tracking-[-0.05em]">Education</span><span className="inline-flex rounded-2xl border border-white/80 px-4 py-2 text-lg leading-none tracking-[-0.05em]">UI/UX Design</span></div>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </main>
    <SiteFooter />
    </>
  );
}
