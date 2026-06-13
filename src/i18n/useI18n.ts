import { createContext, useContext } from 'react'
import { type Locale, type Messages } from './messages'

export type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  isChangingLanguage: boolean
  messages: Messages
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }

  return context
}
