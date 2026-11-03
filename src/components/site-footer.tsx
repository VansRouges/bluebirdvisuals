import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <p className="footer-kicker">Have a project in mind?</p>
    <h2>Let&apos;s create something<br /><em>worth remembering.</em></h2>
    <a className="footer-mail" href="mailto:rosyidqoim@gmail.com">rosyidqoim@gmail.com ↗</a>
    <div className="footer-bottom"><Link href="/">Isaac Bami</Link><span>© 2026 All rights reserved</span><div><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">X</a></div></div>
  </footer>;
}
