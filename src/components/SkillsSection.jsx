import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Skills } from '../libs/TagsForSkills'

const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
}

function SkillsSection() {
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const delay = 2.3
    const timer = setTimeout(() => {
      setStartAnimation(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-[95%] rounded-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
      {Skills.map((skill) =>
        skill.tags.map((tag) => (
          <motion.span
            key={tag.name}
            className={`text-sm md:text-base ${tag.className} cursor-pointer py-3 px-4 rounded-xl flex items-center justify-center gap-2`}
            initial='hidden'
            animate={startAnimation ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.7, delay: Math.random() * 1.5 }}>
            <tag.icon className='size-4' />
            {tag.name}
          </motion.span>
        ))
      )}
    </div>
  )
}

export default SkillsSection
