import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const About = () => {
  const { translations } = useContext(LanguageContext)
  return (
    <article className='flex flex-col items-center justify-center gap-8 text-gray-300 dark:text-gray-700 md:flex-row'>
      <div className='[&>p]:mb-4 [&>p>strong]:text-green-200 dark:[&>p>strong]:text-green-500[&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1'>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph1 }}></p>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph2 }}></p>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph3 }}></p>
        <p dangerouslySetInnerHTML={{ __html: translations.paragraph4 }}></p>
      </div>

      <img
        className='order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-green-300/10 ring-1 ring-white/20'
        style={{ objectPosition: 50 + '% ' + 50 + '%' }}
        src='/adrian.webp'
        alt='adrian photo'
        width={200}
        height={200}
      />
    </article>
  )
}

export default About
