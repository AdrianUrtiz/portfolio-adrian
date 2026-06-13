import { Section } from './Section'
import { ArrowUpRight } from 'lucide-react'
import { Github } from '@/components/Icons'
import { useI18n } from '@/i18n/useI18n'

export function Projects() {
  const { messages } = useI18n()

  return (
    <Section
      id='projects'
      eyebrow={messages.projects.eyebrow}
      title={messages.projects.title}
      description={messages.projects.description}>
      <div className='grid gap-6 md:grid-cols-2'>
        {messages.projects.items.map((p) => (
          <article
            key={p.name}
            className='group border-gradient bg-card/60 shadow-card relative overflow-hidden rounded-2xl p-6 backdrop-blur'>
            <div
              className={`absolute -top-24 -right-24 size-64 rounded-full bg-linear-to-br ${p.accent} opacity-60 blur-3xl transition-opacity group-hover:opacity-100`}
              aria-hidden
            />
            <div className='relative'>
              <div className='flex items-start justify-between gap-3'>
                <h3 className='font-display text-2xl font-semibold'>
                  {p.name}
                </h3>
                <div className='text-muted-foreground flex gap-2'>
                  {p.showLinks && (
                    <>
                      <a href='#' aria-label={messages.projects.repoAriaLabel}>
                        <Github className='hover:text-foreground size-5 transition-colors' />
                      </a>
                      <a href='#' aria-label={messages.projects.demoAriaLabel}>
                        <ArrowUpRight className='hover:text-primary size-5 transition-colors' />
                      </a>
                    </>
                  )}
                </div>
              </div>
              <p className='text-muted-foreground mt-3'>{p.description}</p>
              <ul className='mt-5 flex flex-wrap gap-2'>
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className='bg-secondary/60 border-border text-muted-foreground rounded-md border px-2.5 py-1 font-mono text-xs'>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
