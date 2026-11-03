import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page"><section><p>Let&apos;s work together</p><h1>Got a vision?<br /><em>Let&apos;s make it real.</em></h1><a className="contact-email" href="mailto:rosyidqoim@gmail.com">rosyidqoim@gmail.com <ArrowUpRight /></a></section><aside><p>I work with people and teams who care about making a difference. Tell me a little about your project, your timeline, and where you&apos;d like to go.</p><dl><div><dt>Based in</dt><dd>Lagos, Nigeria</dd></div><div><dt>Availability</dt><dd>Open for select projects</dd></div><div><dt>Elsewhere</dt><dd>Instagram · LinkedIn · X</dd></div></dl></aside></main><SiteFooter /></>;
}
