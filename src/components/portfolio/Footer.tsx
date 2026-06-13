import { useI18n } from '@/i18n/useI18n'

export function Footer() {
  const { messages } = useI18n()

  return (
    <footer className='border-border border-t py-8'>
      <div className='text-muted-foreground mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm'>
        <p>
          © {new Date().getFullYear()} — Adrián Urtiz —{' '}
          {messages.footer.madeWith}
        </p>
        <p className='font-mono text-xs'>v2.0.0</p>
      </div>
    </footer>
  )
}
