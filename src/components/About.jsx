const About = () => {
  return (
    <article className='flex flex-col items-center justify-center gap-8 text-gray-300 dark:text-gray-700 md:flex-row'>
      <div className='[&>p]:mb-4 [&>p>strong]:text-green-200 dark:[&>p>strong]:text-green-500[&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1'>
        <p>
          Mi nombre es Adrian Eduardo. Mi pasión por la programación comenzó en
          la preparatoria, cuando apenas tenía 16 años. Desde entonces, he
          estado inmerso en el mundo del desarrollo de software. Actualmente,
          formo parte de equipos de desarrollo en la{' '}
          <strong>Fábrica Académica de Software</strong>, donde tengo la
          oportunidad de colaborar en proyectos innovadores y desafiantes.
        </p>
        <p>
          Además de mi trabajo principal, también disfruto de la libertad y la
          creatividad que ofrece el trabajo como{' '}
          <strong>desarrollador web freelance</strong>. Esta experiencia me ha
          permitido ampliar mis habilidades técnicas y mi capacidad para
          adaptarme a diferentes entornos y requisitos del proyecto.
        </p>

        <p>
          Estoy a punto de graduarme en{' '}
          <strong>Ingeniería en Sistemas Computacionales</strong>
          en el <strong>Instituto Tecnológico de Morelia</strong>, donde me he
          especializado en <strong>Ingeniería de Software</strong> . Mi
          formación académica y mi experiencia laboral me han permitido adquirir
          habilidades valiosas en el campo de la programación, la gestión de
          proyectos y el trabajo en equipo. Estoy comprometido con el
          aprendizaje continuo y siempre estoy buscando nuevas formas de mejorar
          y crecer como profesional en este apasionante campo.
        </p>
      </div>

      <img
        className='order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20'
        style={{ objectPosition: 50 + '% ' + 50 + '%' }}
        src='/adrian.jpg'
        alt='adrian photo'
        width={200}
        height={200}
      />
    </article>
  )
}

export default About
