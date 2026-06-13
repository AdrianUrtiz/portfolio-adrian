import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { messages, type Locale } from './messages'
import { I18nContext } from './useI18n'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es'

  const savedLocale = window.localStorage.getItem(STORAGE_KEY)
  if (savedLocale === 'es' || savedLocale === 'en') return savedLocale

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const changeTimeoutRef = useRef<number | null>(null)
  const finishTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
    document.title = messages[locale].documentTitle
  }, [locale])

  useEffect(() => {
    return () => {
      if (changeTimeoutRef.current) {
        window.clearTimeout(changeTimeoutRef.current)
      }
      if (finishTimeoutRef.current) {
        window.clearTimeout(finishTimeoutRef.current)
      }
    }
  }, [])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => {
        if (isChangingLanguage) return

        setIsChangingLanguage(true)

        changeTimeoutRef.current = window.setTimeout(() => {
          setLocale((current) => (current === 'es' ? 'en' : 'es'))
        }, 110)

        finishTimeoutRef.current = window.setTimeout(() => {
          setIsChangingLanguage(false)
        }, 320)
      },
      isChangingLanguage,
      messages: messages[locale],
    }),
    [isChangingLanguage, locale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
