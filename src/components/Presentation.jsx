import BadgeMovil from './BadgeMovil'
import SocialItem from './SocialItem'
import { GitHub, LinkedIn, Mail } from '../icons'

function Presentation() {
  return (
    <>
      <div className='flex gap-4 items-center mb-4'>
        <img
          className='rounded-full size-14'
          src='/adrian.webp'
          alt='adrian photo'
        />
        <a
          href='https://www.linkedin.com/in/adrian-urtiz-955aa0266/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center'>
          <BadgeMovil>Disponible para trabajar</BadgeMovil>
        </a>
      </div>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold flex gap-x-4 pb-6'>
        Hey, soy Adrian
      </h1>
      <h2 className='text-lg md:text-xl opacity-80 text-wrap max-w-[750px]'>
        Junior Web Developer. De Morelia, Michoacán, México 🇲🇽 . Estudiante de
        último año en Ingeniería en Sistemas Computacionales en el Instituto
        Tecnológico de Morelia con especialidad en Ingeniería de Software.
      </h2>

      <nav className='flex flex-wrap gap-4 mt-6'>
        <SocialItem
          href={'https://www.linkedin.com/in/adrian-urtiz-955aa0266/'}>
          <LinkedIn className='size-4 lg:size-6' />
          LinkedIn
        </SocialItem>
        <SocialItem href={'https://github.com/AdrianUrtiz'}>
          <GitHub className='size-4 lg:size-6' />
          GitHub
        </SocialItem>
        <SocialItem href={'mailto: aeurtiz17@gmail.com'}>
          <Mail className='size-4 lg:size-6' />
          Email
        </SocialItem>
      </nav>
    </>
  )
}

export default Presentation
