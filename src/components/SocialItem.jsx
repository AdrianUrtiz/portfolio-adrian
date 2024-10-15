const SocialItem = ({ children, href, download = false }) => {
  return (
    <a
      className='rounded-xl border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 lg:py-2 lg:px-4 text-sm md:text-base bg-white/5 hover:bg-white/10 hover:scale-105 transition-transform duration-300 ease-in-out'
      href={href}
      download={download}
      target='_blank'
      rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default SocialItem
