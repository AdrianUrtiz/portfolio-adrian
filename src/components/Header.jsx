const Header = () => {
  return (
    <header className='flex justify-center items-center w-full p-8 xl:w-[1120px] mx-auto'>
      <nav className='flex flex-row gap-x-3 md:gap-x-10 opacity-80 text-sm'>
        <a href='#top' className='hidden md:block hover:text-green-500'>
          Inicio
        </a>
        <a href='#experience' className='hover:text-green-500'>
          Experiencia
        </a>
        <a href='#projects' className='hover:text-green-500'>
          Proyectos
        </a>
        <a href='#about' className='hover:text-green-500'>
          Sobre mi
        </a>
        <a href='#contact' className='hover:text-green-500'>
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header
