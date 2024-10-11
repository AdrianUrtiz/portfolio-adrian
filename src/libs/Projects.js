import TAGS from './Tags'

const PROJECTS = [
  {
    id: 1,
    title: 'SIPREM',
    description:
      'Desarrollo fullstack de un sistema de gestión de solicitudes de recursos para mujeres víctimas de violencia, utilizando tecnologías como Next.js, Tailwind CSS, PostgreSQL, Prisma, entre otras.',

    image: '/siprem.webp',
    tags: [TAGS.NextJS, TAGS.PostgreSQL, TAGS.Prisma, TAGS.React],
  },
  {
    id: 2,
    title: 'DEPI Morelia',
    description:
      'Desarrollo de una aplicación web para la División de Estudios de Posgrado e Investigación del Instituto Tecnológico de Morelia, así como su integración con el sistema de gestión de cursos y programas de la universidad, utilizando tecnologías como Next.js, Tailwind CSS, Strapi, entre otras.',
    link: 'https://depi.morelia.tecnm.mx/',
    image: '/depi.webp',
    tags: [TAGS.NextJS, TAGS.Strapi, TAGS.Express],
  },
  {
    id: 3,
    title: 'SandarInmuebles',
    description:
      'Colaboración para la creación de una e-commerce para la venta de inmuebles, utilizando tecnologías como React, Firebase, Ant Design, entre otras.',
    link: 'https://sandarinmuebles.com/',
    image: '/sandar.webp',
    tags: [TAGS.React, TAGS.Firebase],
  },
  {
    id: 4,
    title: 'BANESVIM Veracruz',
    description:
      'Desarrollo front-end de una página web para el gobierno de Veracruz, para mostrar información sobre los casos de violencia de género en el estado. Diseñando y desarrollando la interfaz de usuario, utilizando tecnologías como Javascript, HTML, CSS, MySQL, PHP, entre otras.',
    link: 'https://banesvim.ddns.net/banavim/',
    image: '/banesvim.webp',
    tags: [TAGS.Javascript, TAGS.MySQL, TAGS.PHP],
  },
  {
    id: 5,
    title: 'SISOGEM',
    description:
      'Desarrollo de un sistema de gestión para organos de gobierno del estado de Michoacán, contacto directo con el cliente para la definición de requerimientos, participando activamente en el desarrollo de la interfaz de usuario y la lógica de negocio. Utilizando tecnologías como React, Node.js, Express, MongoDB, AWS S3, entre otras.',

    image: '/sisogem.webp',
    tags: [TAGS.React, TAGS.Express, TAGS.MongoDB, TAGS.AWS],
  },
  {
    id: 6,
    title: 'VIVEL Academia de Emprendimiento',
    description:
      'Participación en el desarrollo de una plataforma de educación en línea, contacto directo con el cliente para la definición de requerimientos y desarrollo de la interfaz de usuario. Utilizando tecnologías como CodeIgniter, MySQL, HTML, CSS, entre otras.',
    image: '/vivel.webp',
    tags: [TAGS.PHP, TAGS.MySQL, TAGS.Javascript],
  },
]

export default PROJECTS
