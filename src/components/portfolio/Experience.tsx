import { Section } from "./Section";
import { Briefcase } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Experience() {
  const { messages } = useI18n();

  return (
    <Section
      id="experience"
      eyebrow={messages.experience.eyebrow}
      title={messages.experience.title}
    >
      <ol className="relative border-l border-border ml-3">
        {messages.experience.jobs.map((j) => (
          <li key={j.company} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-2.75 top-1 grid place-items-center size-5 rounded-full bg-primary text-primary-foreground shadow-glow">
              <Briefcase className="size-3" />
            </span>
            <div className="border-gradient rounded-xl bg-card/60 backdrop-blur p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">
                  {j.role} <span className="text-primary">@ {j.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {j.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {j.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
