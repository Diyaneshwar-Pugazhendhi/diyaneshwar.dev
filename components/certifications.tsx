import { BadgeCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { certifications } from "@/lib/site";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-border bg-muted/40 scroll-mt-24 py-24 md:py-32"
    >
      <div className="container-content">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Certifications
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Credentials I&apos;ve earned.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => {
            const inner = (
              <article className="flex h-full items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
                <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-foreground/70" />
                <div>
                  <h3 className="text-base font-semibold leading-snug tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </article>
            );

            return (
              <RevealItem key={c.name}>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer" className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
