import { useState, useEffect } from 'react'

const Header = () => {
  const [isBlurred, setIsBlurred] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      <nav className='flex flex-row gap-x-3 md:gap-x-10 opacity-80 text-xs md:text-base'>
        <a href='#top' className='hidden md:block hover:text-green-300'>
          Inicio
        </a>
        <a href='#projects' className='hover:text-green-300'>
          Proyectos
        </a>
        <a href='#experience' className='hover:text-green-300'>
          Experiencia
        </a>
        <a href='#about' className='hover:text-green-300'>
          Sobre mi
        </a>
        <a href='#contact' className='hover:text-green-300'>
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header
