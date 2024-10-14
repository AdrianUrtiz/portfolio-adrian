import TAGS from './Tags'

const PROJECTS = (translations) => [
  {
    id: 1,
    title: 'SIPREM',
    description: translations.TextSIPREM,

    image: '/siprem.webp',
    tags: [TAGS.NextJS, TAGS.PostgreSQL, TAGS.Prisma, TAGS.React],
  },
  {
    id: 2,
    title: 'DEPI Morelia',
    description: translations.TextDEPI,
    link: 'https://depi.morelia.tecnm.mx/',
    image: '/depi.webp',
    tags: [TAGS.NextJS, TAGS.Strapi, TAGS.Express, TAGS.Nodejs],
  },
  {
    id: 3,
    title: 'SandarInmuebles',
    description: translations.TextSandar,
    link: 'https://sandarinmuebles.com/',
    image: '/sandar.webp',
    tags: [TAGS.React, TAGS.Firebase],
  },
  {
    id: 4,
    title: 'BANESVIM Veracruz',
    description: translations.TextBANESVIM,
    link: 'https://banesvim.ddns.net/banavim/',
    image: '/banesvim.webp',
    tags: [TAGS.Javascript, TAGS.MySQL, TAGS.PHP],
  },
  {
    id: 5,
    title: 'SISOGEM',
    description: translations.TextSISOGEM,
    image: '/sisogem.webp',
    tags: [TAGS.React, TAGS.Express, TAGS.MongoDB, TAGS.AWS],
  },
  {
    id: 6,
    title: 'VIVEL Academia de Emprendimiento',
    description: translations.TextVivel,
    image: '/vivel.webp',
    tags: [TAGS.PHP, TAGS.MySQL, TAGS.Javascript],
  },
]

export default PROJECTS
