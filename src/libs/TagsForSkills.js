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
  Git,
  GitHub,
  Linux,
  Figma,
  Postman,
} from '../icons'

const TAGS = {
  React: {
    name: 'React',
    className:
      'bg-blue-600/10 text-white hover:bg-blue-600/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: ReactJS,
  },
  NextJS: {
    name: 'Next.js',
    className:
      'bg-green-500/10 text-white hover:bg-green-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: NextJS,
  },
  TailwindCSS: {
    name: 'Tailwind',
    className:
      'bg-teal-500/10 text-white hover:bg-teal-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Tailwind,
  },
  Nodejs: {
    name: 'Node.js',
    className:
      'bg-green-500/10 text-white hover:bg-green-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Nodejs,
  },
  Express: {
    name: 'Express',
    className:
      'bg-gray-500/10 text-white hover:bg-gray-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Express,
  },
  MongoDB: {
    name: 'MongoDB',
    className:
      'bg-green-600/10 text-white hover:bg-green-600/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: MongoDB,
  },
  MySQL: {
    name: 'MySQL',
    className:
      'bg-blue-500/10 text-white hover:bg-blue-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Mysql,
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    className:
      'bg-purple-600/10 text-white hover:bg-purple-600/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: PostgreSQL,
  },
  Prisma: {
    name: 'Prisma',
    className:
      'bg-blue-500/10 text-white hover:bg-blue-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Prisma,
  },
  Strapi: {
    name: 'Strapi',
    className:
      'bg-blue-500/10 text-white hover:bg-blue-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Strapi,
  },
  Firebase: {
    name: 'Firebase',
    className:
      'bg-yellow-500/10 text-white hover:bg-yellow-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Firebase,
  },
  AWS: {
    name: 'AWS',
    className:
      'bg-orange-500/10 text-white hover:bg-orange-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: AmazonWebServices,
  },
  Git: {
    name: 'Git',
    className:
      'bg-green-500/10 text-white hover:bg-green-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Git,
  },
  GitHub: {
    name: 'GitHub',
    className:
      'bg-blue-500/10 text-white hover:bg-blue-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: GitHub,
  },
  Linux: {
    name: 'Linux',
    className:
      'bg-purple-500/10 text-white hover:bg-purple-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Linux,
  },
  Figma: {
    name: 'Figma',
    className:
      'bg-pink-500/10 text-white hover:bg-pink-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Figma,
  },
  Postman: {
    name: 'Postman',
    className:
      'bg-yellow-500/10 text-white hover:bg-yellow-500/30 hover:scale-105 transition-transform duration-300 ease-in-out',
    icon: Postman,
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
  { id: 13, name: 'Git', tags: [TAGS.Git] },
  { id: 14, name: 'Linux', tags: [TAGS.Linux] },
  { id: 15, name: 'Figma', tags: [TAGS.Figma] },
  { id: 16, name: 'Postman', tags: [TAGS.Postman] },
]

export { Skills, TAGS }
