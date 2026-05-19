import { Section } from "@/components/portfolio/Section";
import { useI18n } from "@/i18n/useI18n";

export function Stack() {
  const { messages } = useI18n();

  return (
    <Section
      id="stack"
      eyebrow={messages.stack.eyebrow}
      title={messages.stack.title}
    >
      <div className="grid md:grid-cols-3 gap-5">
        {messages.stack.groups.map((g) => (
          <div
            key={g.title}
            className="border-gradient rounded-xl bg-card/60 backdrop-blur p-6 shadow-card"
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
              {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="px-3 py-1.5 rounded-md bg-secondary/60 border border-border text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
