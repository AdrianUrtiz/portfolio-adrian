import { useContext, useState, useEffect } from 'react'
import Container from './Container'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Presentation from './Presentation'
import SkillsSection from './SkillsSection'
import { motion } from 'framer-motion'

import { LanguageContext } from '../context/LanguageContext'
import { Code, Forklift, Mail, User, Tools } from '../icons'

const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
}

function Body() {
  const [startAnimation, setStartAnimation] = useState(false)
  const { translations } = useContext(LanguageContext)

  useEffect(() => {
    const delay = 2
    const timer = setTimeout(() => {
      setStartAnimation(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='px-4'>
      <Container className='pt-20 md:pt-36' id='top'>
        <Presentation />
      </Container>

      <Container id='skills'>
        <motion.h2
          className='text-2xl font-medium mb-8 pt-8 flex gap-x-2 items-center'
          initial='hidden'
          animate={startAnimation ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8 }}>
          <Tools className='size-6' /> {translations.titleTools}
        </motion.h2>
        <SkillsSection />
      </Container>

      <Container id='projects'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <Forklift className='size-6' /> {translations.titleProjects}
        </h2>
        <Projects />
      </Container>

      <Container id='experience'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <Code className='size-6' /> {translations.titleExperience}
        </h2>
        <Experience />
      </Container>

      <Container id='about'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <User className='size-6' /> {translations.titleAbout}
        </h2>
        <About />
      </Container>

      <Container id='contact'>
        <h2 className='text-2xl font-medium mb-8 pt-24 flex gap-x-2 items-center'>
          <Mail className='size-6' /> {translations.titleContact}
        </h2>
        <Contact />
      </Container>
    </main>
  )
}

export default Body
