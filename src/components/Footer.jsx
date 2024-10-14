import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const Footer = () => {
  const { translations } = useContext(LanguageContext)
  return (
    <footer className='flex justify-center items-center h-20 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800'>
      <p className='text-sm text-center'>
        &copy; {new Date().getFullYear()} Adrian Urtiz. {translations.footer}
      </p>
    </footer>
  )
}

export default Footer
