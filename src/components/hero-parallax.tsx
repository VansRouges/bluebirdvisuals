"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HeroBlur } from "@/components/hero-blur";

export function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateParallax = () => {
      const section = sectionRef.current;
      const portrait = portraitRef.current;
      const blur = blurRef.current;
      if (!section || !portrait || !blur) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      portrait.style.setProperty("--portrait-offset", `${progress * -96}px`);
      portrait.style.setProperty("--portrait-scale", `${1 + progress * 0.32}`);
      blur.style.setProperty("--blur-offset", `${progress * window.innerHeight * -0.55}px`);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[145svh] md:h-[155svh]">
      <div className="sticky top-0 h-[100svh] overflow-visible bg-white">
        <div ref={portraitRef} className="absolute bottom-[150px] left-1/2 z-[1] h-auto w-[115vw] max-w-none origin-bottom -translate-x-1/2 translate-y-[var(--portrait-offset,0px)] scale-[var(--portrait-scale,1)] will-change-transform md:bottom-auto md:top-4 md:w-[min(52vw,1000px)]">
          <Image className="h-auto w-full" src="/images/hero-portrait.png" alt="Isaac Bami" width={512} height={512} priority />
        </div>
        <HeroBlur overlayRef={blurRef} />
      </div>
    </section>
  );
}
