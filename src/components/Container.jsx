const Container = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`w-full lg:w-[850px] mx-auto mb-10 ${className}`}>
      {children}
    </section>
  )
}

export default Container
