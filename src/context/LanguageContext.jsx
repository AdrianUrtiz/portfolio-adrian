import { createContext } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export const LanguageContext = createContext({
  language: [],
  changeLanguage: () => {},
  translations: [],
})

export const LanguageProvider = ({ children }) => {
  const { language, changeLanguage, translations } = useLanguage()
  return (
    <LanguageContext.Provider
      value={{
        language: language,
        changeLanguage,
        translations: translations,
      }}>
      {children}
    </LanguageContext.Provider>
  )
}
