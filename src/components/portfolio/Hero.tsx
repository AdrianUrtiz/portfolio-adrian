import { ArrowDown, FileDown, Mail, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { Typing } from "@/components/Typing";
import Badge from "@/components/Badge";
import CodeCard from "@/components/CodeCard";
import { useI18n } from "@/i18n/I18nProvider";

export function Hero() {
  const { locale, messages } = useI18n();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl w-full px-6 pt-32 pb-20 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <div className="flex gap-4 items-center mb-6 md:mb-12">
            <img
              className="rounded-full size-16 md:size-20"
              src="/adrian-queretaro.webp"
              alt={messages.hero.imageAlt}
            />
            <a
              href="https://www.linkedin.com/in/adrian-urtiz-955aa0266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge>{messages.hero.availability}</Badge>
            </a>
          </div>
          <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            {messages.hero.titlePrefix}
            <span className="text-gradient">{messages.hero.titleHighlight}</span>
          </h1>
          <Typing key={locale} />
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            {messages.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors shadow-glow"
            >
              <Sparkles className="size-4" /> {messages.hero.primaryCta}
            </a>
            <a
              href={messages.hero.resumeHref}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
              download
            >
              <FileDown className="size-4" /> {messages.hero.resumeCta}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a
              aria-label="GitHub"
              href="https://github.com/AdrianUrtiz"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/adrian-urtiz-955aa0266/"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              aria-label="Email"
              href="mailto: aeurtiz17@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        {/* Code card */}
        <CodeCard />
      </div>
      <a
        href="#stack"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={messages.hero.scrollAriaLabel}
      >
        <ArrowDown className="size-4 md:size-6 animate-bounce" />
      </a>
    </section>
  );
}
