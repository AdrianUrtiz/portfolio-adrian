import ExperienceItem from './ExperienceItem'
import EXPERIENCE from '../libs/Experience'

const Experience = () => {
  return (
    <ol className='relative border-s border-gray-200 ml-3 dark:border-gray-700'>
      {EXPERIENCE.map((experience, index) => (
        <li key={index} className='mb-10 ms-4'>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  )
}

export default Experience
