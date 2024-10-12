import {
  AmazonWebServices,
  Express,
  Firebase,
  MongoDB,
  Mysql,
  ReactJS,
  Tailwind,
  NextJS,
  Prisma,
  PostgreSQL,
  Strapi,
  Nodejs,
} from '../icons'

const TAGS = {
  React: {
    name: 'React',
    className: 'bg-blue-600/10 text-white',
    icon: ReactJS,
  },
  NextJS: {
    name: 'Next.js',
    className: 'bg-green-500/10 text-white',
    icon: NextJS,
  },
  TailwindCSS: {
    name: 'Tailwind',
    className: 'bg-teal-500/10 text-white',
    icon: Tailwind,
  },
  Nodejs: {
    name: 'Node.js',
    className: 'bg-green-500/10 text-white',
    icon: Nodejs,
  },
  Express: {
    name: 'Express',
    className: 'bg-gray-500/10 text-white',
    icon: Express,
  },
  MongoDB: {
    name: 'MongoDB',
    className: 'bg-green-600/10 text-white',
    icon: MongoDB,
  },
  MySQL: {
    name: 'MySQL',
    className: 'bg-blue-500/10 text-white',
    icon: Mysql,
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    className: 'bg-purple-600/10 text-white',
    icon: PostgreSQL,
  },
  Prisma: {
    name: 'Prisma',
    className: 'bg-blue-500/10 text-white',
    icon: Prisma,
  },
  Strapi: {
    name: 'Strapi',
    className: 'bg-blue-500/10 text-white',
    icon: Strapi,
  },
  Firebase: {
    name: 'Firebase',
    className: 'bg-yellow-500/10 text-white',
    icon: Firebase,
  },
  AWS: {
    name: 'AWS',
    className: 'bg-orange-500/10 text-white',
    icon: AmazonWebServices,
  },
}

const Skills = [
  { id: 1, name: 'React', tags: [TAGS.React] },
  { id: 2, name: 'Next.js', tags: [TAGS.NextJS] },
  { id: 3, name: 'Tailwind', tags: [TAGS.TailwindCSS] },
  { id: 4, name: 'Node.js', tags: [TAGS.Nodejs] },
  { id: 5, name: 'Express', tags: [TAGS.Express] },
  { id: 6, name: 'MongoDB', tags: [TAGS.MongoDB] },
  { id: 7, name: 'MySQL', tags: [TAGS.MySQL] },
  { id: 8, name: 'PostgreSQL', tags: [TAGS.PostgreSQL] },
  { id: 9, name: 'Prisma', tags: [TAGS.Prisma] },
  { id: 10, name: 'Strapi', tags: [TAGS.Strapi] },
  { id: 11, name: 'Firebase', tags: [TAGS.Firebase] },
  { id: 12, name: 'Amazon Web Services', tags: [TAGS.AWS] },
]

export { Skills, TAGS }
