import Container from './Container'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Presentation from './Presentation'
import SkillsSection from './SkillsSection'

import { Code, Forklift, Mail, User, Tools } from '../icons'

function Body() {
  return (
    <main className='px-4'>
      <Container className='pt-20 md:pt-44'>
        <Presentation />
      </Container>

      <Container id='skills'>
        <h2 className='text-2xl font-medium mb-8 pt-8 flex gap-x-2 items-center'>
          <Tools className='size-6' /> Herramientas
        </h2>
        <SkillsSection />
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

      <Container id='contact'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <Mail className='size-6' /> Contacto
        </h2>
        <Contact />
      </Container>
    </main>
  )
}

export default Body
