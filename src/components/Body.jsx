import Container from './Container'
import BadgeMovil from './BadgeMovil'
import SocialItem from './SocialItem'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'

import { Code, Forklift, GitHub, LinkedIn, Mail, User } from '../icons'

function Body() {
  return (
    <main className='px-4'>
      <Container className='pt-20 md:pt-44 pb-24'>
        <div className='flex gap-4 items-center mb-4'>
          <img
            className='rounded-full size-14'
            src='/adrian.jpg'
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
      </Container>

      <Container id='projects'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <Forklift className='size-6' /> Proyectos
        </h2>
        <Projects />
      </Container>

      <Container id='experience'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <Code className='size-6' /> Experiencia Laboral
        </h2>
        <Experience />
      </Container>

      <Container id='about'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <User className='size-6' /> Sobre mí
        </h2>
        <About />
      </Container>
    </main>
  )
}

export default Body
