import { createContext } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export const LanguageContext = createContext({
  language: '',
  changeLanguage: () => {},
  translations: {},
  isChanging: false,
})

export const LanguageProvider = ({ children }) => {
  const { language, changeLanguage, translations, isChanging } = useLanguage()

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        translations,
        isChanging,
      }}>
      {children}
    </LanguageContext.Provider>
  )
}
