import { Section } from "./Section";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { useI18n } from "@/i18n/I18nProvider";

export function Contact() {
  const { messages } = useI18n();

  return (
    <Section
      id="contacto"
      eyebrow={messages.contact.eyebrow}
      title={messages.contact.title}
      description={messages.contact.description}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <a
          href="mailto:aeurtiz17@gmail.com"
          className="flex items-center gap-4 border-gradient rounded-xl bg-card/60 backdrop-blur p-5 hover:bg-card transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="grid place-items-center size-12 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Mail className="size-5" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">
              {messages.contact.channels.email}
            </p>
            <p className="font-medium">aeurtiz17@gmail.com</p>
          </div>
        </a>
        <a
          href="https://github.com/AdrianUrtiz"
          className="flex items-center gap-4 border-gradient rounded-xl bg-card/60 backdrop-blur p-5 hover:bg-card transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="grid place-items-center size-12 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Github className="size-5" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">
              {messages.contact.channels.github}
            </p>
            <p className="font-medium">@AdrianUrtiz</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-urtiz-955aa0266/"
          className="flex items-center gap-4 border-gradient rounded-xl bg-card/60 backdrop-blur p-5 hover:bg-card transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="grid place-items-center size-12 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Linkedin className="size-5" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">
              {messages.contact.channels.linkedin}
            </p>
            <p className="font-medium">/in/adrian-urtiz</p>
          </div>
        </a>
        <a
          href="whatsapp://send?phone=+524435797564"
          className="flex items-center gap-4 border-gradient rounded-xl bg-card/60 backdrop-blur p-5 hover:bg-card transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="grid place-items-center size-12 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Send className="size-5" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">
              {messages.contact.channels.whatsapp}
            </p>
            <p className="font-medium">+52 44 3579 7564</p>
          </div>
        </a>
      </div>
    </Section>
  );
}
