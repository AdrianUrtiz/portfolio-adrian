import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/Icons";
import { useI18n } from "@/i18n/I18nProvider";

export function Projects() {
  const { messages } = useI18n();

  return (
    <Section
      id="projects"
      eyebrow={messages.projects.eyebrow}
      title={messages.projects.title}
      description={messages.projects.description}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {messages.projects.items.map((p) => (
          <article
            key={p.name}
            className="group border-gradient rounded-2xl bg-card/60 backdrop-blur p-6 shadow-card overflow-hidden relative"
          >
            <div
              className={`absolute -top-24 -right-24 size-64 rounded-full bg-linear-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold">
                  {p.name}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  {p.showLinks && (
                    <>
                      <a href="#" aria-label={messages.projects.repoAriaLabel}>
                        <Github className="size-5 hover:text-foreground transition-colors" />
                      </a>
                      <a href="#" aria-label={messages.projects.demoAriaLabel}>
                        <ArrowUpRight className="size-5 hover:text-primary transition-colors" />
                      </a>
                    </>
                  )}
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
