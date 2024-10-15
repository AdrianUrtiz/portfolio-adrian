import { useState, useCallback } from 'react'
import { LANGUAGE } from '../libs/Language'

export const useLanguage = () => {
  const [language, setLanguage] = useState('English')
  const [isChanging, setIsChanging] = useState(false)

  const changeLanguage = useCallback(
    (newLanguage) => {
      if (language !== newLanguage) {
        setIsChanging(true)
        setTimeout(() => {
          setLanguage(newLanguage)
          setIsChanging(false)
        }, 300) // Ajusta este tiempo según sea necesario
      }
    },
    [language]
  )

  return {
    language,
    changeLanguage,
    translations: LANGUAGE[language],
    isChanging,
  }
}
