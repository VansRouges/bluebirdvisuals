"use client";

import { useEffect, useState, type RefObject } from "react";

type HeroBlurProps = {
  overlayRef: RefObject<HTMLDivElement | null>;
};

export function HeroBlur({ overlayRef }: HeroBlurProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={overlayRef}
      className={`pointer-events-none absolute right-0 bottom-0 left-0 z-2 h-[200px] translate-y-[var(--blur-offset,0px)] pb-10 transition-opacity duration-700 ease-out will-change-transform motion-reduce:transition-none md:h-[350px] ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute right-0 bottom-0 left-0 h-full bg-[linear-gradient(#fff0_51%,#ffffff80_100%)] backdrop-blur-[45px] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_100%)]" />
      <h1 className="absolute bottom-20 left-5 z-10 max-w-[10ch] text-[2.35rem] leading-[1.02] font-medium tracking-[-0.075em] md:bottom-[5.75rem] md:left-[3.2vw] md:w-[50vw] md:max-w-[830px] md:text-[clamp(2.25rem,3.2vw,4rem)]">Isaac is solving problems through strategic design and compelling visuals</h1>
      <div className="pointer-events-auto absolute right-5 bottom-[calc(10.5rem+10svh)] left-5 z-10 w-[calc(100%-2.5rem)] max-w-[22rem] md:right-[4.1vw] md:bottom-[calc(170px+10svh)] md:left-auto md:w-[min(35rem,35vw)] md:max-w-none">
        <p className="mb-8 text-base leading-[1.35] tracking-[-0.055em] md:text-[clamp(1.1rem,1.35vw,1.52rem)]">Hi, I&apos;m Isaac Bamigbola, a Web, Product &amp; Graphic Designer. I specialize in creating high-converting digital experiences that look sharp and deliver real business growth.</p>
        <a className="float-right inline-flex h-12 min-w-36 items-center justify-center rounded-[18px] bg-[#111] p-3 text-medium font-semibold tracking-normal text-white shadow-[0_20px_24px_rgba(0,0,0,0.28)]" href="mailto:rosyidqoim@gmail.com">Email Me</a>
      </div>
    </div>
  );
}
