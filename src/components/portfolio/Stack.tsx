import { Section } from '@/components/portfolio/Section'
import { useI18n } from '@/i18n/useI18n'

export function Stack() {
  const { messages } = useI18n()

  return (
    <Section
      id='stack'
      eyebrow={messages.stack.eyebrow}
      title={messages.stack.title}>
      <div className='grid gap-5 md:grid-cols-3'>
        {messages.stack.groups.map((g) => (
          <div
            key={g.title}
            className='border-gradient bg-card/60 shadow-card rounded-xl p-6 backdrop-blur'>
            <h3 className='text-primary mb-4 font-mono text-sm tracking-widest uppercase'>
              {g.title}
            </h3>
            <ul className='flex flex-wrap gap-2'>
              {g.items.map((it) => (
                <li
                  key={it}
                  className='bg-secondary/60 border-border hover:border-primary/50 hover:text-primary rounded-md border px-3 py-1.5 text-sm transition-colors'>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
