import { Section } from './Section'
import { Mail, Send } from 'lucide-react'
import { Github, Linkedin } from '@/components/Icons'
import { useI18n } from '@/i18n/useI18n'

export function Contact() {
  const { messages } = useI18n()

  return (
    <Section
      id='contact'
      eyebrow={messages.contact.eyebrow}
      title={messages.contact.title}
      description={messages.contact.description}>
      <div className='grid items-start gap-8 lg:grid-cols-2'>
        <a
          href='mailto:aeurtiz17@gmail.com'
          className='border-gradient bg-card/60 hover:bg-card group flex items-center gap-4 rounded-xl p-5 backdrop-blur transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-lg transition-colors'>
            <Mail className='size-5' />
          </span>
          <div>
            <p className='text-muted-foreground text-sm'>
              {messages.contact.channels.email}
            </p>
            <p className='font-medium'>aeurtiz17@gmail.com</p>
          </div>
        </a>
        <a
          href='https://github.com/AdrianUrtiz'
          className='border-gradient bg-card/60 hover:bg-card group flex items-center gap-4 rounded-xl p-5 backdrop-blur transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-lg transition-colors'>
            <Github className='size-5' />
          </span>
          <div>
            <p className='text-muted-foreground text-sm'>
              {messages.contact.channels.github}
            </p>
            <p className='font-medium'>@AdrianUrtiz</p>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/adrian-urtiz-955aa0266/'
          className='border-gradient bg-card/60 hover:bg-card group flex items-center gap-4 rounded-xl p-5 backdrop-blur transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-lg transition-colors'>
            <Linkedin className='size-5' />
          </span>
          <div>
            <p className='text-muted-foreground text-sm'>
              {messages.contact.channels.linkedin}
            </p>
            <p className='font-medium'>/in/adrian-urtiz</p>
          </div>
        </a>
        <a
          href='whatsapp://send?phone=+524435797564'
          className='border-gradient bg-card/60 hover:bg-card group flex items-center gap-4 rounded-xl p-5 backdrop-blur transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-lg transition-colors'>
            <Send className='size-5' />
          </span>
          <div>
            <p className='text-muted-foreground text-sm'>
              {messages.contact.channels.whatsapp}
            </p>
            <p className='font-medium'>+52 44 3579 7564</p>
          </div>
        </a>
      </div>
    </Section>
  )
}
