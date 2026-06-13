import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section id={id} className='relative py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mb-12 max-w-2xl'>
          <p className='text-primary font-mono text-xs tracking-[0.2em] uppercase'>
            {eyebrow}
          </p>
          <h2 className='mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl'>
            {title}
          </h2>
          {description && (
            <p className='text-muted-foreground mt-4 text-lg'>{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
