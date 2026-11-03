import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return <><SiteHeader /><main className="interior about-page"><section className="about-intro"><p>About Isaac</p><h1>I turn sharp thinking into design that people can actually feel.</h1><Image src="/images/hero-portrait.png" alt="Isaac Bami" width={512} height={512} /></section><section className="about-copy"><p>I&apos;m a multidisciplinary designer who works across web, products, and brand identity. My practice sits between strategy and craft: understand the real problem, make the complex feel clear, and produce work with lasting character.</p><div><span>Based in Lagos, Nigeria</span><span>Working globally</span></div></section><section className="stats"><article><strong>5+</strong><span>Years of experience</span></article><article><strong>30+</strong><span>Happy clients</span></article><article><strong>100+</strong><span>Projects completed</span></article></section><section className="expertise"><p className="section-label">Expertise</p><h2>Practical design for ambitious people and growing businesses.</h2><ul><li>Websites &amp; digital products</li><li>Brand strategy &amp; identity</li><li>Art direction &amp; campaigns</li></ul></section><section className="about-cta"><p>Have a project in mind?</p><Link href="/contact">Let&apos;s work together <ArrowDownRight size={19} /></Link></section></main><SiteFooter /></>;
}
