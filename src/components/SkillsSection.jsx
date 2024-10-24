import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Skills } from '../libs/TagsForSkills'
import SkillsItem from './SkillsItem'

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
    <div className='w-full rounded-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
      {Skills.map((skill) =>
        skill.tags.map((tag) => (
          <motion.div
            key={tag.name}
            initial='hidden'
            animate={startAnimation ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.7, delay: Math.random() * 1.5 }}>
            <SkillsItem tag={tag}>
              <tag.icon className='size-4' />
              {tag.name}
            </SkillsItem>
          </motion.div>
        ))
      )}
    </div>
  )
}

export default SkillsSection
