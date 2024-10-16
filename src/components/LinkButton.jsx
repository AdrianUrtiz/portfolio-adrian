const LinkButton = ({ children, href }) => {
  return (
    <a
      href={href}
      role='link'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center justify-center gap-2 px-2 py-1 space-x-2 text-base text-white transition bg-gray-700 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>
      {children}
    </a>
  )
}

export default LinkButton
