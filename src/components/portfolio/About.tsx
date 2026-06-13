import { Section } from './Section'
import { Coffee, Globe, Rocket } from 'lucide-react'
import { useI18n } from '@/i18n/useI18n'

const factIcons = [Rocket, Globe, Coffee]

export function About() {
  const { messages } = useI18n()

  return (
    <Section
      id='about'
      eyebrow={messages.about.eyebrow}
      title={messages.about.title}>
      <div className='grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]'>
        <div className='text-muted-foreground space-y-5 text-lg leading-relaxed'>
          <p>
            {messages.about.paragraphs[0].split(messages.about.highlight)[0]}
            <span className='text-foreground font-medium'>
              {messages.about.highlight}
            </span>
            {messages.about.paragraphs[0].split(messages.about.highlight)[1]}
          </p>
          {messages.about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className='grid gap-4'>
          {messages.about.facts.map((f, index) => {
            const Icon = factIcons[index]

            return (
              <div
                key={f.label}
                className='border-gradient bg-card/60 shadow-card flex items-center gap-4 rounded-xl p-5 backdrop-blur'>
                <span className='bg-primary/15 text-primary grid size-12 place-items-center rounded-lg'>
                  <Icon className='size-5' />
                </span>
                <div>
                  <p className='font-display text-2xl font-bold'>{f.value}</p>
                  <p className='text-muted-foreground text-sm'>{f.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
