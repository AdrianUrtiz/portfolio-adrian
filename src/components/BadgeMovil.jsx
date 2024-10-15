const BadgeMovil = ({ children }) => {
  return (
    <div className='flex items-center '>
      <span className='relative inline-flex overflow-hidden rounded-2xl p-[1px] hover:scale-105 transition-transform duration-300 ease-in-out'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]'></span>
        <div className='inline-flex items-center justify-center w-full px-3  py-1 text-sm md:text-base text-green-800 rounded-2xl cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap'>
          {children}
        </div>
      </span>
    </div>
  )
}

export default BadgeMovil
