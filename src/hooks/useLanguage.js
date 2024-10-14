import { LANGUAGE } from '../libs/Language'
import { useState } from 'react'

export const useLanguage = () => {
  const [language, setLanguage] = useState('English')

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return {
    language,
    changeLanguage,
    translations: LANGUAGE[language],
  }
}
