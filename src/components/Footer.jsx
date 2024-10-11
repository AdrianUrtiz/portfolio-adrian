const Footer = () => {
  return (
    <footer className='flex justify-center items-center h-20 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Adrian Urtiz. Casi todos los derechos
        reservados.
      </p>
    </footer>
  )
}

export default Footer
