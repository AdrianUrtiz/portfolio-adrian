import GitHub from '../icons/GitHub'
import Link from '../icons/Link'
import LinkButton from './LinkButton'
import PROJECTS from '../libs/Projects'

const Projects = () => {
  return (
    <div className='flex flex-col gap-y-14'>
      {PROJECTS.map((project, index) => (
        <div key={project.id}>
          {index > 0 && <hr className='md:mb-10 border border-gray-700' />}
          <article
            key={project.id}
            className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
            <div className='w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0'>
              <div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
                <img
                  className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'
                  src={project.image}
                  alt={`Captura de pantalla de ${project.title}`}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 md:max-w-lg md:order-2 order-1'>
              <h3 className='text-2xl font-bold text-gray-100 dark:text-gray-800'>
                {project.title}
              </h3>
              <div className='flex flex-wrap mt-2'>
                <ul className='flex flex-row mb-2 gap-x-2 overflow-hidden max-w-full'>
                  {project.tags.map((tag) => (
                    <li key={tag.name}>
                      <span
                        className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 cursor-pointer`}>
                        <tag.icon className='size-4' />
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className='mt-2 text-gray-400 dark:text-gray-700'>
                  {project.description}
                </div>
                <footer className='flex items-end justify-start mt-4 gap-x-4'>
                  {project.github && (
                    <LinkButton href={project.github}>
                      <GitHub className='size-6' />
                      Ver código
                    </LinkButton>
                  )}
                  {project.link && (
                    <LinkButton href={project.link}>
                      <Link className='size-2 ' />
                      Visitar
                    </LinkButton>
                  )}
                </footer>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}

export default Projects
