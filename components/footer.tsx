import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const LINK_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Work", href: "#features" },
      { label: "Proof", href: "#proof" },
      { label: "Open to work", href: "#availability" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: site.linkedin },
      { label: "GitHub", href: site.github },
      { label: "Email", href: `mailto:${site.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border bg-muted/40">
      <div className="container-content py-16 md:py-20">
        <Reveal className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-sm text-background">
                {site.initials}
              </span>
              {site.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              CS student building things that ship. Open to mentorship, collabs,
              and freelance sprints.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium tracking-tight">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
