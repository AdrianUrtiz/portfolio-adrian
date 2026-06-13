import { useI18n } from '@/i18n/useI18n'

export const CodeCard = () => {
  const { messages } = useI18n()

  return (
    <div className="animate-float relative">
      <div className="border-gradient bg-card/70 shadow-card overflow-hidden rounded-2xl backdrop-blur-xl">
        <div className="border-border flex items-center gap-2 border-b px-4 py-3">
          <span className="bg-destructive/70 size-3 rounded-full" />
          <span className="bg-chart-4/70 size-3 rounded-full" />
          <span className="bg-primary/80 size-3 rounded-full" />
          <span className="text-muted-foreground ml-3 font-mono text-xs">
            {messages.codeCard.fileName}
          </span>
        </div>
        <pre className="text-muted-foreground overflow-x-auto px-5 py-5 font-mono text-xs leading-relaxed md:text-sm">
          {messages.codeCard.snippet}
        </pre>
      </div>
      <div className="bg-primary/10 absolute -inset-6 -z-10 rounded-3xl blur-3xl" />
    </div>
  )
}
