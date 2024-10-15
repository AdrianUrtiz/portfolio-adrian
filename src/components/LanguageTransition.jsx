import { motion } from 'framer-motion'

const LanguageTransition = ({ isChanging }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isChanging ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    />
  )
}

export default LanguageTransition
