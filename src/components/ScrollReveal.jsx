import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const ScrollReveal = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

export default ScrollReveal
