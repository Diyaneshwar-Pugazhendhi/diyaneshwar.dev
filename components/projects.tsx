"use client";

import * as React from "react";
import { Github, Star } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { projects as fallback, site, type Project } from "@/lib/site";

const USERNAME = site.github.split("/").filter(Boolean).pop() ?? "Diyaneshwar-Pugazhendhi";

export function Projects() {
  const [projects, setProjects] = React.useState<Project[]>(fallback);

  React.useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
      { headers: { Accept: "application/vnd.github+json" } },
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (cancelled || !Array.isArray(data)) return;
        const live = data
          .filter((r: { fork: boolean }) => !r.fork)
          .map(
            (r: {
              name: string;
              description: string | null;
              language: string | null;
              stargazers_count: number;
              html_url: string;
            }): Project => ({
              name: r.name,
              description: r.description || "No description provided.",
              language: r.language || "—",
              stars: r.stargazers_count || 0,
              href: r.html_url,
            }),
          )
          .sort((a: Project, b: Project) => b.stars - a.stars);
        if (live.length) setProjects(live);
      })
      .catch(() => {
        /* keep the hardcoded fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="container-content scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Projects
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I&apos;ve actually shipped.
        </h2>
        <p className="mt-3 max-w-xl text-balance text-muted-foreground">
          Pulled live from GitHub — always current, no rebuild needed.
        </p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <RevealItem key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  {p.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5" />
                  {p.stars}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/70">
                <span className="h-2 w-2 rounded-full bg-foreground/70" />
                {p.language}
                <span className="ml-auto text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  View repo →
                </span>
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
