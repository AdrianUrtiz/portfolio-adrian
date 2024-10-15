import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LanguageContext } from '../context/LanguageContext'

const shakeVariants = {
  shake: {
    rotate: [3, 5, 0, 5, 0, 3],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const About = () => {
  const { translations } = useContext(LanguageContext)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <article className='flex flex-col items-center justify-center gap-8 text-gray-300 dark:text-gray-700 md:flex-row'>
      <div className='[&>p]:mb-4 [&>p>strong]:text-green-300 dark:[&>p>strong]:text-green-500[&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1'>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph1 }}></p>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph2 }}></p>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph3 }}></p>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph4 }}></p>
      </div>

      <motion.img
        className='order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-green-300/10 ring-1 ring-white/20'
        style={{ objectPosition: '50% 50%' }}
        src='/adrian.webp'
        alt='adrian photo'
        width={200}
        height={200}
        variants={shakeVariants}
        animate={shake ? 'shake' : ''}
      />
    </article>
  )
}

export default About
