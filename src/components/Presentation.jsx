import { useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BadgeMovil from './BadgeMovil'
import SocialItem from './SocialItem'
import { GitHub, LinkedIn, Mail, Download } from '../icons'
import { LanguageContext } from '../context/LanguageContext'

const typingEffect = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const letterEffect = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const navEffect = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 0.8, y: 0 },
}

const fadeInScaleEffect = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 0.8, scale: 1 },
}

function Presentation() {
  const { translations } = useContext(LanguageContext)
  const [startDescription, setStartDescription] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const typingDuration = translations.title.length * 0.1 + 0.1
    const timer = setTimeout(() => {
      setStartDescription(true)
    }, typingDuration * 1000)

    return () => clearTimeout(timer)
  }, [translations.title])

  useEffect(() => {
    const delay = 1.5
    const timer = setTimeout(() => {
      setShowNav(true)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className='flex gap-4 items-center mb-12'>
        <img
          className='rounded-full size-16 md:size-20'
          src='/adrian.webp'
          alt='adrian photo'
        />
        <a
          href='https://www.linkedin.com/in/adrian-urtiz-955aa0266/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center'>
          <BadgeMovil>{translations.badge}</BadgeMovil>
        </a>
      </div>
      <motion.h1
        className='text-3xl md:text-4xl lg:text-5xl font-semibold pb-6'
        variants={typingEffect}
        initial='hidden'
        animate='visible'>
        {translations.title.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterEffect}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h2
        className='text-lg md:text-xl opacity-80 text-wrap max-w-[750px]'
        variants={fadeInScaleEffect}
        initial='hidden'
        animate={startDescription ? 'visible' : 'hidden'}
        transition={{ duration: 0.8 }}>
        {translations.shortDescription}
      </motion.h2>

      <motion.nav
        className='flex flex-wrap gap-2 md:gap-4 mt-6'
        initial='hidden'
        animate={showNav ? 'visible' : 'hidden'}
        variants={navEffect}
        transition={{ duration: 0.8 }}>
        <SocialItem
          href={'https://www.linkedin.com/in/adrian-urtiz-955aa0266/'}>
          <LinkedIn className='size-3 lg:size-4' />
          LinkedIn
        </SocialItem>
        <SocialItem href={'https://github.com/AdrianUrtiz'}>
          <GitHub className='size-3 lg:size-4' />
          GitHub
        </SocialItem>
        <SocialItem href={'mailto: aeurtiz17@gmail.com'}>
          <Mail className='size-3 lg:size-4' />
          Email
        </SocialItem>
        <SocialItem href='/CV Adrian Eduardo Urtiz Parra.pdf' download={true}>
          <Download className='size-3 lg:size-4' />
          {translations.download}
        </SocialItem>
      </motion.nav>
    </>
  )
}

export default Presentation
