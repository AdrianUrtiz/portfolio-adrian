import { useState, useEffect, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { Translate } from '../icons'

const Header = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext)
  const [isBlurred, setIsBlurred] = useState(false)
  const [activeItem, setActiveItem] = useState('#top')

  const toggleLanguage = () => {
    const newLanguage = language === 'English' ? 'Spannish' : 'English'
    changeLanguage(newLanguage)
  }

  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsBlurred(true)
      } else {
        setIsBlurred(false)
      }

      const sections = [
        '#top',
        '#experience',
        '#projects',
        '#about',
        '#contact',
      ]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let section of sections) {
        const element = document.querySelector(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveItem(section)
            break
          }
        }
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
      <nav className='flex flex-row items-center gap-x-3 md:gap-x-10 opacity-80 text-xs md:text-base text-white'>
        <a
          href='#top'
          className={`hidden md:block hover:text-green-300 ${activeItem === '#top' ? 'text-green-300' : ''}`}
          onClick={() => handleItemClick('#top')}>
          {translations.navHome}
        </a>
        <a
          href='#experience'
          className={`hidden md:block hover:text-green-300 ${activeItem === '#experience' ? 'text-green-300' : ''}`}
          onClick={() => handleItemClick('#experience')}>
          {translations.navExperience}
        </a>
        <a
          href='#projects'
          className={`hover:text-green-300 ${activeItem === '#projects' ? 'text-green-300' : ''}`}
          onClick={() => handleItemClick('#projects')}>
          {translations.navProjects}
        </a>
        <a
          href='#about'
          className={`hover:text-green-300 ${activeItem === '#about' ? 'text-green-300' : ''}`}
          onClick={() => handleItemClick('#about')}>
          {translations.navAbout}
        </a>
        <a
          href='#contact'
          className={`hover:text-green-300 ${activeItem === '#contact' ? 'text-green-300' : ''}`}
          onClick={() => handleItemClick('#contact')}>
          {translations.navContact}
        </a>
        <button
          onClick={toggleLanguage}
          className='hover:text-green-300 flex gap-x-1 items-center cursor-pointer bg-slate-700/50 hover:bg-slate-800/50 p-2 rounded-lg shadow-lg'>
          <Translate className='size-4' />
          {language === 'Spannish' ? 'English' : 'Español'}
        </button>
      </nav>
    </header>
  )
}

export default Header
