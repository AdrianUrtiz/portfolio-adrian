export const messages = {
  es: {
    localeLabel: "ES",
    documentTitle: "Adrian Urtiz | Desarrollador Fullstack",
    comebackTitle: "Psst psst ¡Vuelve!",
    navbar: {
      brand: "dev.",
      links: [
        { href: "#inicio", label: "Inicio" },
        { href: "#stack", label: "Herramientas" },
        { href: "#experiencia", label: "Experiencia" },
        { href: "#proyectos", label: "Proyectos" },
        { href: "#about", label: "Sobre mí" },
        { href: "#contacto", label: "Contacto" },
      ],
      switchLabel: "English",
      switchAriaLabel: "Cambiar idioma a inglés",
    },
    hero: {
      imageAlt: "Foto de Adrian",
      availability: "Disponible para nuevos proyectos",
      titlePrefix: "Hey, ",
      titleHighlight: "soy Adrian",
      description:
        "De Morelia, Michoacán, México. Construyo interfaces modernas, accesibles y de alto rendimiento. Diseño y código que conviven sin pelearse.",
      primaryCta: "Ver proyectos",
      resumeCta: "Descargar CV",
      resumeHref: "/Adrian Eduardo Urtiz Parra - es.pdf",
      scrollAriaLabel: "Bajar",
      roles: [
        "Desarrollador Frontend",
        "Aprendiz constante",
        "Desarrollador React",
        "Amante del café",
        "Creador de soluciones",
        "Entusiasta de la tecnología",
        "Colaborador de equipos",
        "Amigo leal",
        "Soñador",
        "Curioso por naturaleza",
        "Resolutivo",
        "Fan de la música",
        "Ingeniero de Software",
        "Explorador de ideas",
        "Persona creativa",
        "Apasionado por el diseño",
        "Autodidacta",
        "Mentor ocasional",
        "Buscador de retos",
        "Optimista",
      ],
    },
    stack: {
      eyebrow: "02 — Stack",
      title: "Tecnologías con las que trabajo",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JQuery",
            "JavaScript",
            "TanStack",
            "Zustand",
          ],
        },
        {
          title: "Backend",
          items: [
            "NestJS",
            "Express",
            "PHP",
            "PostgreSQL",
            "Prisma",
            "MySQL",
            "REST",
            "Symfony",
          ],
        },
        {
          title: "Herramientas",
          items: ["Git", "Docker", "Linux", "Figma", "GitHub", "Postman"],
        },
      ],
    },
    experience: {
      eyebrow: "03 — Experiencia",
      title: "Trayectoria profesional",
      jobs: [
        {
          role: "Frontend Developer",
          company: "Dirección de Gobierno Digital de Michoacán",
          period: "Octubre 2025 — Presente",
          bullets: [
            "Lideré la migración de varios sistemas legacy a React + TypeScript + Next.js.",
            "Diseñé un design system con +40 componentes accesibles consumido por 3 productos.",
            "Modernicé la arquitectura frontend implementando mejores prácticas, mejorando la performance y experiencia de usuario.",
          ],
        },
        {
          role: "Fullstack Developer Intern",
          company: "Harman International",
          period: "Enero 2025 — Julio 2025",
          bullets: [
            "Construí APIs en Symfony y MySQL para una plataforma de inventario con +2k usuarios.",
            "Implementé arquitectura de base de datos relacional.",
            "Desarrollé el frontend para integrar APIs usando Blade y jQuery.",
            "Trabajé de forma directa con stakeholders para definir requerimientos y entregar funcionalidades de alto impacto.",
          ],
        },
        {
          role: "Fullstack Developer",
          company: "Freelance",
          period: "2019 — 2025",
          bullets: [
            "Landing pages de alto rendimiento para startups y entidades de gobierno.",
            "Desarrollo de sitios web accesibles y optimizados para SEO con HTML semántico y buenas prácticas.",
            "Desarrollo de APIs RESTful con Node.js y Express.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "04 — Proyectos",
      title: "Trabajo seleccionado",
      description: "Una muestra de productos que disfruté construir.",
      repoAriaLabel: "Repositorio",
      demoAriaLabel: "Demo",
      items: [
        {
          name: "SIPREM",
          description:
            "Plataforma de gestión de proyectos con paneles personalizados, gestión de usuarios y seguimiento de tareas para la CONAVIM del estado de Baja California.",
          tags: ["Next.js", "TypeScript", "Tailwind", "Postgres", "Prisma"],
          accent: "from-primary/30 to-accent/20",
          showLinks: false,
        },
        {
          name: "Sandar Inmuebles",
          description:
            "Sitio web para una inmobiliaria con catálogo de propiedades, filtros avanzados, sistema de búsqueda y visualización de las propiedades en una galería interactiva.",
          tags: ["React", "Firebase", "Ant Design", "Firestore"],
          accent: "from-accent/30 to-primary/20",
          showLinks: false,
        },
        {
          name: "DEPI Morelia",
          description:
            "Aplicación web para la División de Estudios de Posgrado e Investigación del Instituto Tecnológico de Morelia, así como su integración con el sistema de gestión de cursos y programas de la universidad.",
          tags: ["Next.js", "Strapi", "TypeScript", "Express"],
          accent: "from-primary/20 to-chart-4/30",
          showLinks: false,
        },
        {
          name: "VIVEL Academia de Emprendimiento",
          description:
            "Plataforma de educación en línea para una academia de emprendimiento con cursos, gestión de estudiantes y sistema de pagos.",
          tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
          accent: "from-accent/20 to-primary/30",
          showLinks: false,
        },
      ],
    },
    about: {
      eyebrow: "05 — Sobre mí",
      title: "Detrás del teclado",
      paragraphs: [
        'Soy un desarrollador fullstack con corazón en el frontend. Llevo más de 3 años construyendo interfaces web que combinan performance, accesibilidad y diseño cuidado.',
        "Disfruto traducir problemas complejos en experiencias simples. Creo en los detalles: una transición bien temporizada, un estado vacío con personalidad, un mensaje de error que ayuda en vez de asustar.",
        "Cuando no estoy en el editor, veo videos sobre nuevas tecnologías, juego videojuegos de móvil y me divierto tocando algo de música. Siempre buscando aprender una herramienta más.",
      ],
      facts: [
        { label: "Años de experiencia", value: "3+" },
        { label: "Proyectos enviados", value: "10+" },
        { label: "Cafés por sprint", value: "∞" },
      ],
      highlight: "fullstack",
    },
    contact: {
      eyebrow: "06 — Contacto",
      title: "¿Construimos algo juntos?",
      description: "Escríbeme y te respondo en menos de 24 horas.",
      channels: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
    },
    footer: {
      madeWith: "Hecho con café y TypeScript.",
    },
    codeCard: {
      fileName: "~/profile.ts",
      snippet: `const dev = {
  rol: "Desarrollador web",
  foco: "Frontend",
  stack: ["React", "TS", "Tailwind", "..."],
  pasion: "DX + UX",
  cafe: Infinity,
};`,
    },
  },
  en: {
    localeLabel: "EN",
    documentTitle: "Adrian Urtiz | Fullstack Developer",
    comebackTitle: "Psst psst come back!",
    navbar: {
      brand: "dev.",
      links: [
        { href: "#inicio", label: "Home" },
        { href: "#stack", label: "Tools" },
        { href: "#experiencia", label: "Experience" },
        { href: "#proyectos", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#contacto", label: "Contact" },
      ],
      switchLabel: "Español",
      switchAriaLabel: "Switch language to Spanish",
    },
    hero: {
      imageAlt: "Photo of Adrian",
      availability: "Available for new projects",
      titlePrefix: "Hey, ",
      titleHighlight: "I'm Adrian",
      description:
        "From Morelia, Michoacan, Mexico. I build modern, accessible, high-performance interfaces where design and code work together.",
      primaryCta: "View projects",
      resumeCta: "Download resume",
      resumeHref: "/Adrian Eduardo Urtiz Parra - en.pdf",
      scrollAriaLabel: "Scroll down",
      roles: [
        "Frontend Developer",
        "Lifelong learner",
        "React Developer",
        "Coffee lover",
        "Problem solver",
        "Tech enthusiast",
        "Team collaborator",
        "Loyal friend",
        "Dreamer",
        "Naturally curious",
        "Resourceful",
        "Music fan",
        "Software Engineer",
        "Idea explorer",
        "Creative person",
        "Design-driven builder",
        "Self-taught",
        "Occasional mentor",
        "Challenge seeker",
        "Optimist",
      ],
    },
    stack: {
      eyebrow: "02 — Stack",
      title: "Technologies I work with",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JQuery",
            "JavaScript",
            "TanStack",
            "Zustand",
          ],
        },
        {
          title: "Backend",
          items: [
            "NestJS",
            "Express",
            "PHP",
            "PostgreSQL",
            "Prisma",
            "MySQL",
            "REST",
            "Symfony",
          ],
        },
        {
          title: "Tools",
          items: ["Git", "Docker", "Linux", "Figma", "GitHub", "Postman"],
        },
      ],
    },
    experience: {
      eyebrow: "03 — Experience",
      title: "Professional journey",
      jobs: [
        {
          role: "Frontend Developer",
          company: "Digital Government Office of Michoacan",
          period: "October 2025 — Present",
          bullets: [
            "Led the migration of several legacy systems to React + TypeScript + Next.js.",
            "Designed a design system with 40+ accessible components used by 3 products.",
            "Modernized the frontend architecture by applying best practices and improving performance and user experience.",
          ],
        },
        {
          role: "Fullstack Developer Intern",
          company: "Harman International",
          period: "January 2025 — July 2025",
          bullets: [
            "Built Symfony and MySQL APIs for an inventory platform with 2k+ users.",
            "Implemented relational database architecture.",
            "Developed the frontend to integrate APIs using Blade and jQuery.",
            "Worked directly with stakeholders to define requirements and ship high-impact features.",
          ],
        },
        {
          role: "Fullstack Developer",
          company: "Freelance",
          period: "2019 — 2025",
          bullets: [
            "High-performance landing pages for startups and government entities.",
            "Built accessible, SEO-friendly websites with semantic HTML and solid best practices.",
            "Developed RESTful APIs with Node.js and Express.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "04 — Projects",
      title: "Selected work",
      description: "A sample of products I genuinely enjoyed building.",
      repoAriaLabel: "Repository",
      demoAriaLabel: "Demo",
      items: [
        {
          name: "SIPREM",
          description:
            "Project management platform with custom dashboards, user management, and task tracking for CONAVIM in Baja California.",
          tags: ["Next.js", "TypeScript", "Tailwind", "Postgres", "Prisma"],
          accent: "from-primary/30 to-accent/20",
          showLinks: false,
        },
        {
          name: "Sandar Inmuebles",
          description:
            "Real estate website with a property catalog, advanced filters, search system, and an interactive gallery experience.",
          tags: ["React", "Firebase", "Ant Design", "Firestore"],
          accent: "from-accent/30 to-primary/20",
          showLinks: false,
        },
        {
          name: "DEPI Morelia",
          description:
            "Web app for the Graduate Studies and Research Division of the Instituto Tecnologico de Morelia, integrated with the university's course and program management system.",
          tags: ["Next.js", "Strapi", "TypeScript", "Express"],
          accent: "from-primary/20 to-chart-4/30",
          showLinks: false,
        },
        {
          name: "VIVEL Academia de Emprendimiento",
          description:
            "Online learning platform for an entrepreneurship academy with courses, student management, and payments.",
          tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
          accent: "from-accent/20 to-primary/30",
          showLinks: false,
        },
      ],
    },
    about: {
      eyebrow: "05 — About",
      title: "Behind the keyboard",
      paragraphs: [
        "I'm a fullstack developer with a frontend heart. For over 3 years, I've been building web interfaces that blend performance, accessibility, and thoughtful design.",
        "I enjoy turning complex problems into simple experiences. I care about the details: a well-timed transition, an empty state with personality, an error message that helps instead of scares.",
        "When I'm not in the editor, I'm watching videos about new tech, playing mobile games, or having fun making music. Always looking to learn one more tool.",
      ],
      facts: [
        { label: "Years of experience", value: "3+" },
        { label: "Shipped projects", value: "10+" },
        { label: "Coffees per sprint", value: "∞" },
      ],
      highlight: "fullstack",
    },
    contact: {
      eyebrow: "06 — Contact",
      title: "Want to build something together?",
      description: "Send me a message and I'll reply within 24 hours.",
      channels: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
    },
    footer: {
      madeWith: "Made with coffee and TypeScript.",
    },
    codeCard: {
      fileName: "~/profile.ts",
      snippet: `const dev = {
  role: "Web developer",
  focus: "Frontend",
  stack: ["React", "TS", "Tailwind", "..."],
  passion: "DX + UX",
  coffee: Infinity,
};`,
    },
  },
} as const;

export type Locale = keyof typeof messages;
export type Messages = (typeof messages)[Locale];
