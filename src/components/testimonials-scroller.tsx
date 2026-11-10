"use client";

import { useRef } from "react";
import type { Testimonial } from "@/sanity/lib/queries";

const reviews = [
  ["Sarah T", "Founder of NovaTech", "Working with Isaac was a game-changer for our product. His ability to merge strategy with stunning visuals made our platform not only beautiful but incredibly user-friendly.", "bg-[#3b555b]"],
  ["David Reynolds", "CEO of Horizon", "Isaac took our vision and transformed it into a seamless digital experience. His attention to detail and design expertise elevated our brand beyond expectations.", "bg-[#bc768d]"],
  ["James Miller", "Founder of EchoWear", "Isaac’s branding work gave our startup a distinct identity that truly resonates with our audience. His designs are not only visually compelling but strategically impactful.", "bg-[#5a1b7d]"],
  ["Rosyid Qoim", "Marketing Director at Planza", "From concept to execution, Isaac delivered exceptional design solutions that improved our user engagement. His creativity and professionalism make him a trusted partner.", "bg-[#2d2726]"],
  ["Emily Foster", "Head of Product at VeroBank", "Isaac doesn’t just design; he solves problems. His strategic approach and design thinking helped us create an intuitive, high-performing fintech platform.", "bg-[#496f74]"],
];

export function TestimonialsScroller({ testimonials }: { testimonials?: Testimonial[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const thirdReviewRef = useRef<HTMLElement>(null);

  const showNextReviews = () => {
    const scroller = scrollerRef.current;
    const thirdReview = thirdReviewRef.current;
    if (!scroller || !thirdReview) return;
    scroller.scrollTo({ top: thirdReview.offsetTop - 20, behavior: "smooth" });
  };

  const showFirstReviews = () => scrollerRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="group relative max-h-[32rem] overflow-hidden rounded-[2rem] bg-[#f6f6f6] p-3 md:rounded-[2.35rem] md:p-5" onMouseEnter={showNextReviews} onMouseLeave={showFirstReviews} onFocus={showNextReviews} onBlur={showFirstReviews} tabIndex={0} aria-label="Client testimonials. Hover to see more reviews.">
      <div ref={scrollerRef} className="max-h-[29.5rem] space-y-3 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {(testimonials === undefined ? reviews : testimonials.map(({ name, role, quote }, index) => [name, role, quote, reviews[index]?.[3] ?? "bg-[#3b555b]"])).map(([name, role, quote, color], index) => (
          <article className="rounded-[1.45rem] bg-white px-4 py-4 md:px-5" key={name} ref={index === 2 ? thirdReviewRef : undefined}>
            <div className="flex items-center gap-2 text-[0.76rem] tracking-[-0.045em]"><span className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-[0.55rem] font-semibold text-white ${color}`}>{name.slice(0, 1)}</span><span className="font-medium text-[#171717]">{name}</span><span className="size-1 shrink-0 rounded-full bg-[#b9bdc4]" /><span className="min-w-0 text-[#747982]">{role}</span></div>
            <p className="mt-3 text-[0.78rem] leading-[1.42] tracking-[-0.045em] text-[#1b1b1b]">&quot;{quote}&quot;</p>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#f6f6f6] to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0" />
    </div>
  );
}
