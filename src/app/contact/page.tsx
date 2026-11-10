import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[80rem] px-5 py-20 md:py-28">
        <h1 className="text-[clamp(2.1rem,3vw,3.6rem)] leading-[1.12] font-medium tracking-[-0.075em]"><span className="text-[#747982]">Ready to create something amazing? </span>let&apos;s talk!</h1>

        <div className="mt-12 grid gap-4 lg:grid-cols-[2.3fr_1fr]">
          <form className="min-h-[31rem] rounded-[2rem] bg-[#111] p-5 text-white shadow-[0_22px_26px_rgba(0,0,0,0.27)] md:rounded-[2.35rem] md:p-7">
            <div className="flex h-full flex-col">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input className="mt-2 h-11 rounded-xl border border-white/5 bg-[#2a2a2a] px-4 text-sm text-white outline-none placeholder:text-[#747982] focus:border-white/30" id="name" name="name" placeholder="Jane Smith" type="text" />
              <label className="mt-5 text-sm font-medium" htmlFor="email">Email</label>
              <input className="mt-2 h-11 rounded-xl border border-white/5 bg-[#2a2a2a] px-4 text-sm text-white outline-none placeholder:text-[#747982] focus:border-white/30" id="email" name="email" placeholder="yourname@gmail.com" type="email" />
              <label className="mt-5 text-sm font-medium" htmlFor="message">Your Message</label>
              <textarea className="mt-2 min-h-[8.8rem] flex-1 resize-none rounded-xl border border-white/5 bg-[#2a2a2a] px-4 py-3 text-sm text-white outline-none placeholder:text-[#747982] focus:border-white/30" id="message" name="message" placeholder="Enter your message" />
              <button className="mt-5 h-14 rounded-xl bg-white text-sm font-medium text-[#111]" type="submit">Submit</button>
            </div>
          </form>

          <aside className="flex min-h-[31rem] flex-col rounded-[2rem] bg-[#f6f6f6] p-5 md:rounded-[2.35rem] md:p-7">
            <div className="relative size-20 overflow-hidden rounded-[1rem] bg-[#cfd0cf]"><Image className="object-contain object-bottom scale-125" src="/images/hero-portrait.png" alt="BlueBirdVisuals" fill sizes="80px" /></div>
            <div className="mt-5"><p className="max-w-[21ch] text-[clamp(1.05rem,1.35vw,1.45rem)] leading-[1.25] font-medium tracking-[-0.06em]">Prefer a quick conversation? Let&apos;s hop on a call and explore the best way to bring your ideas to life</p><span className="mt-4 ml-auto flex w-fit rounded-full bg-white px-3 py-1.5 text-xs tracking-[-0.045em] text-[#747982]">approximately 15 minutes</span></div>
            <a className="mt-auto flex h-12 items-center justify-center rounded-xl border border-[#d1d4d8] text-sm font-medium tracking-[-0.045em]" href="mailto:rosyidqoim@gmail.com?subject=Book%20a%20Call">Book a Call</a>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
