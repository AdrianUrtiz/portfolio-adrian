import { useI18n } from "@/i18n/useI18n";

const CodeCard = () => {
  const { messages } = useI18n();

  return (
    <div className="relative animate-float">
      <div className="border-gradient rounded-2xl bg-card/70 backdrop-blur-xl shadow-card overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <span className="size-3 rounded-full bg-destructive/70" />
          <span className="size-3 rounded-full bg-chart-4/70" />
          <span className="size-3 rounded-full bg-primary/80" />
          <span className="ml-3 text-xs font-mono text-muted-foreground">
            {messages.codeCard.fileName}
          </span>
        </div>
        <pre className="px-5 py-5 text-xs md:text-sm font-mono leading-relaxed text-muted-foreground overflow-x-auto">
          {messages.codeCard.snippet}
        </pre>
      </div>
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
    </div>
  );
};

export default CodeCard;
