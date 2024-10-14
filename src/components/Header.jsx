import { useState, useEffect, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { Translate } from '../icons'

const Header = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext)
  const [isBlurred, setIsBlurred] = useState(false)

  const toggleLanguage = () => {
    const newLanguage = language === 'English' ? 'Spannish' : 'English'
    changeLanguage(newLanguage)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsBlurred(true)
      } else {
        setIsBlurred(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`flex justify-center items-center fixed top-0 left-0 w-full z-40 p-3 transition-all duration-300 ${isBlurred ? 'backdrop-blur-md bg-slate-900/40' : ''}`}>
      <nav className='flex flex-row items-center gap-x-3 md:gap-x-10 opacity-80 text-xs md:text-base'>
        <a href='#top' className='hidden md:block hover:text-green-300'>
          {translations.navHome}
        </a>
        <a href='#projects' className='hover:text-green-300'>
          {translations.navProjects}
        </a>
        <a href='#experience' className='hover:text-green-300'>
          {translations.navExperience}
        </a>
        <a href='#about' className='hidden md:block hover:text-green-300'>
          {translations.navAbout}
        </a>
        <a href='#contact' className='hover:text-green-300'>
          {translations.navContact}
        </a>
        <a
          onClick={toggleLanguage}
          className='hover:text-green-300 flex gap-x-1 items-center cursor-pointer bg-slate-700/50 hover:bg-slate-800/50 p-2 rounded-lg shadow-lg'>
          <Translate className='size-4' />
          {language === 'Spannish' ? 'English' : 'Español'}
        </a>
      </nav>
    </header>
  )
}

export default Header
