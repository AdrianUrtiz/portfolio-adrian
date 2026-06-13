import { useEffect, useState } from 'react'

export const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    const scrollTop = document.documentElement.scrollTop
    setIsVisible(scrollTop > 450)
  }

  const throttledScrollHandler = () => {
    setTimeout(toggleVisibility, 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed right-2 bottom-2 text-white transition-opacity ${
        isVisible ? '' : 'opacity-0'
      }`}>
      <button
        id="scroll-to-top"
        aria-label="Volver al inicio de la página"
        className={`group border-primary/60 text-primary/60 flex size-12 items-center justify-center rounded-lg border-2 bg-black/10 backdrop-blur hover:scale-105 motion-safe:transition ${
          isVisible ? 'cursor-pointer' : 'cursor-default'
        }`}
        onClick={scrollToTop}>
        <svg
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 -rotate-45 group-hover:-rotate-90 motion-safe:transition"
          width="20px">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
      </button>
    </div>
  )
}
