import { Section } from './Section'
import { Briefcase } from 'lucide-react'
import { useI18n } from '@/i18n/useI18n'

export function Experience() {
  const { messages } = useI18n()

  return (
    <Section
      id='experience'
      eyebrow={messages.experience.eyebrow}
      title={messages.experience.title}>
      <ol className='border-border relative ml-3 border-l'>
        {messages.experience.jobs.map((j) => (
          <li key={j.company} className='relative pb-12 pl-8 last:pb-0'>
            <span className='bg-primary text-primary-foreground shadow-glow absolute top-1 -left-2.75 grid size-5 place-items-center rounded-full'>
              <Briefcase className='size-3' />
            </span>
            <div className='border-gradient bg-card/60 shadow-card rounded-xl p-6 backdrop-blur'>
              <div className='flex flex-wrap items-baseline justify-between gap-2'>
                <h3 className='font-display text-xl font-semibold'>
                  {j.role} <span className='text-primary'>@ {j.company}</span>
                </h3>
                <span className='text-muted-foreground font-mono text-xs'>
                  {j.period}
                </span>
              </div>
              <ul className='text-muted-foreground mt-4 space-y-2'>
                {j.bullets.map((b, i) => (
                  <li key={i} className='flex gap-3'>
                    <span className='bg-primary mt-2 size-1.5 shrink-0 rounded-full' />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
