const ExperienceItem = ({ title, description, date }) => {
  return (
    <>
      <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
      <time className='mb-1 text-sm font-normal leading-none text-green-300 dark:text-green-700'>
        {date}
      </time>
      <h3 className='text-lg font-semibold text-gray-200 mt-4 mb-1 dark:text-slate-800'>
        {title}
      </h3>
      <p className='mb-4 text-base font-normal text-gray-400 dark:text-gray-800 text-pretty'>
        {description}
      </p>
    </>
  )
}

export default ExperienceItem
