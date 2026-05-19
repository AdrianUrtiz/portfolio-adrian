import { Section } from "./Section";
import { Coffee, Globe, Rocket } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const factIcons = [Rocket, Globe, Coffee];

export function About() {
  const { messages } = useI18n();

  return (
    <Section
      id="about"
      eyebrow={messages.about.eyebrow}
      title={messages.about.title}
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            {messages.about.paragraphs[0].split(messages.about.highlight)[0]}
            <span className="text-foreground font-medium">
              {messages.about.highlight}
            </span>
            {messages.about.paragraphs[0].split(messages.about.highlight)[1]}
          </p>
          {messages.about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid gap-4">
          {messages.about.facts.map((f, index) => {
            const Icon = factIcons[index];

            return (
            <div
              key={f.label}
              className="border-gradient rounded-xl bg-card/60 backdrop-blur p-5 flex items-center gap-4 shadow-card"
            >
              <span className="grid place-items-center size-12 rounded-lg bg-primary/15 text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold">{f.value}</p>
                <p className="text-sm text-muted-foreground">{f.label}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
