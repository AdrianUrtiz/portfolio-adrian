interface BadgeProps {
  children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <div className='flex items-center'>
      <span className='relative inline-flex overflow-hidden rounded-2xl p-px transition-transform duration-300 ease-in-out hover:scale-105'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]'></span>
        <div className='inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-gray-800 px-3 py-1 text-xs whitespace-nowrap text-white/80 backdrop-blur-3xl md:text-sm'>
          {children}
        </div>
      </span>
    </div>
  )
}

export default Badge
