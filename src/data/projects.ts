export type SourceLink =
  | { type: 'github'; url: string }
  | { type: 'visit'; url: string }
  | { type: 'none' }

export type Collaborator = {
  prefixKey: string
  name: string
  url: string
}

export type Project = {
  slug: string
  legacySlugs?: string[]
  title: string
  titleKey?: string
  descriptionKey: string
  ratingKey?: string
  collaborators?: Collaborator[]
  images: string[]
  frontEnd: { descriptionKey?: string; tech: string[] }
  backEnd?: { descriptionKey?: string; tech?: string[]; isNone?: boolean }
  source: SourceLink
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'gocreate',
    title: 'GoCreate',
    descriptionKey: 'gocreate.p2',
    images: [
      'gocreate/gocreate-1.webp',
      'gocreate/gocreate-2.webp',
      'gocreate/gocreate-3.webp',
      'gocreate/gocreate-4.webp',
      'gocreate/gocreate-5.webp',
      'gocreate/gocreate-6.webp',
    ],
    frontEnd: {
      descriptionKey: 'gocreate.p3',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Zustand'],
    },
    backEnd: {
      descriptionKey: 'gocreate.p4',
      tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Redis'],
    },
    source: { type: 'visit', url: 'https://www.gocreate.dev' },
    liveUrl: 'https://app.gocreate.dev',
  },
  {
    slug: 'kopenick',
    title: 'Köpenick S.A.',
    descriptionKey: 'kopenick.p2',
    images: [
      'kopenick/kopenick-1.png',
      'kopenick/kopenick-2.webp',
      'kopenick/kopenick-3.png',
      'kopenick/kopenick-4.png',
      'kopenick/kopenick-5.png',
    ],
    frontEnd: {
      descriptionKey: 'kopenick.p3',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Zustand'],
    },
    backEnd: {
      descriptionKey: 'kopenick.p4',
      isNone: true,
    },
    source: { type: 'none' },
  },
  {
    slug: 'redcollege',
    title: 'RedCollege',
    descriptionKey: 'redcollege.p2',
    images: [
      'redcollege/redcollege1.webp',
      'redcollege/redcollege2.webp',
      'redcollege/redcollege3.webp',
      'redcollege/redcollege4.webp',
      'redcollege/redcollege5.webp',
    ],
    frontEnd: {
      descriptionKey: 'redcollege.p3',
      tech: ['Tailwind', 'TypeScript', 'Vue', 'Nuxt'],
    },
    backEnd: {
      descriptionKey: 'redcollege.p4',
      tech: ['PostgreSql', 'AdonisJs'],
    },
    source: { type: 'visit', url: 'https://redcollege.cl' },
  },
  {
    slug: 'fuegoabierto',
    title: 'Fuego Abierto GelSoft',
    descriptionKey: 'fuegoabierto.p2',
    images: [
      'fuegoAbierto/fuegoabierto1.png',
      'fuegoAbierto/fuegoAbierto2.png',
      'fuegoAbierto/fuegoAbierto3.png',
      'fuegoAbierto/fuegoAbierto4.png',
      'fuegoAbierto/fuegoAbierto5.png',
      'fuegoAbierto/fuegoAbierto6.png',
    ],
    frontEnd: {
      descriptionKey: 'fuegoabierto.p3',
      tech: ['Typescript', 'React', 'Tailwind', 'Vite'],
    },
    backEnd: {
      descriptionKey: 'fuegoabierto.p4',
      tech: ['MySql', 'NestJS', 'TypeORM'],
    },
    source: { type: 'none' },
  },
  {
    slug: 'cugranca',
    title: 'CugrancaXXI',
    descriptionKey: 'cugranca.p2',
    images: [
      'cugranca/cugrancaxxi1.png',
      'cugranca/cugrancaxxi2.png',
      'cugranca/cugrancaxxi3.png',
      'cugranca/cugrancaxxi4.png',
    ],
    frontEnd: {
      descriptionKey: 'cugranca.p3',
      tech: ['Typescript', 'React', 'Tailwind', 'Vite'],
    },
    backEnd: {
      descriptionKey: 'cugranca.p4',
      tech: ['MySql', 'NestJS', 'TypeORM'],
    },
    source: { type: 'none' },
  },
  {
    slug: 'snb-2022',
    legacySlugs: ['snb'],
    title: 'SNB 2022',
    descriptionKey: 'snb.p1',
    ratingKey: 'snb.l1',
    collaborators: [
      {
        prefixKey: 'snb.l2',
        name: 'Alejandro Martínez',
        url: 'https://www.linkedin.com/in/alejandro-martinez-66766725b',
      },
    ],
    images: [
      'snb2022/snb1.png',
      'snb2022/snb2.webp',
      'snb2022/snb3.webp',
      'snb2022/snb4.webp',
      'snb2022/snb5.webp',
      'snb2022/snb6.webp',
      'snb2022/snb7.webp',
    ],
    frontEnd: {
      descriptionKey: 'snb.p2',
      tech: ['Java'],
    },
    backEnd: {
      descriptionKey: 'snb.p3',
      tech: ['MySql'],
    },
    source: {
      type: 'github',
      url: 'https://www.github.com/EndYou01/Snb2022',
    },
  },
  {
    slug: 'mandalorian',
    title: '',
    titleKey: 'tmf.h2',
    descriptionKey: 'tmf.p1',
    ratingKey: 'snb.l1',
    collaborators: [
      {
        prefixKey: 'tmf.l1',
        name: 'Eduardo Garcia Alfonso',
        url: 'https://github.com/Panik-Attack',
      },
    ],
    images: ['tmf/tmf1.png', 'tmf/tmf2.png', 'tmf/tmf3.png'],
    frontEnd: {
      descriptionKey: 'tmf.p2',
      tech: ['C'],
    },
    backEnd: {
      descriptionKey: 'tmf.p3',
      isNone: true,
    },
    source: {
      type: 'github',
      url: 'https://github.com/EndYou01/tu-mandalorian-favorito',
    },
  },
  {
    slug: 'citas-app',
    legacySlugs: ['citasApp'],
    title: 'CitasApp',
    descriptionKey: 'citas.p1',
    collaborators: [
      {
        prefixKey: 'tmf.l1',
        name: 'Eduardo Garcia Alfonso',
        url: 'https://github.com/Panik-Attack',
      },
    ],
    images: [
      'freelance/citasApp/citas1.webp',
      'freelance/citasApp/citas2.png',
      'freelance/citasApp/citas3.png',
    ],
    frontEnd: {
      descriptionKey: 'citas.p2',
      tech: ['AntDesign', 'React'],
    },
    backEnd: {
      descriptionKey: 'citas.p3',
      tech: ['JavaScript'],
    },
    source: {
      type: 'github',
      url: 'https://github.com/Panik-Attack/Citas',
    },
  },
  {
    slug: 'confort',
    title: '',
    titleKey: 'confort.h2',
    descriptionKey: 'confort.p1',
    images: [
      'freelance/confort/Pantalla_Principal.webp',
      'freelance/confort/Pantalla_Carrito.webp',
      'freelance/confort/Pantalla_Cuenta_Usuario.png',
      'freelance/confort/Pantalla_Footer.webp',
      'freelance/confort/Pantalla_Pago.png',
      'freelance/confort/Pantalla_Principal_Mas_vendidos.webp',
      'freelance/confort/Pantalla_Producto.webp',
      'freelance/confort/MAS_VENDIDO.webp',
      'freelance/confort/MENU_HAMBURGUE2.webp',
      'freelance/confort/cuenta.png',
    ],
    frontEnd: {
      descriptionKey: 'confort.p2',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    backEnd: {
      descriptionKey: 'confort.p3',
      tech: ['Django', 'Python'],
    },
    source: { type: 'none' },
  },
  {
    slug: 'coremant',
    title: 'COREMANT',
    descriptionKey: 'coremant.p1',
    collaborators: [
      {
        prefixKey: 'tmf.l1',
        name: 'Eduardo Garcia Alfonso',
        url: 'https://github.com/Panik-Attack',
      },
    ],
    images: [
      'freelance/coremant/coremant2.jpg',
      'freelance/coremant/coremant3.webp',
      'freelance/coremant/coremant4.webp',
      'freelance/coremant/coremant1.webp',
    ],
    frontEnd: {
      tech: ['React', 'Vite', 'SASS'],
    },
    backEnd: {
      isNone: true,
    },
    source: {
      type: 'github',
      url: 'https://github.com/EndYou01/Coremant',
    },
  },
  {
    slug: 'cross-border',
    legacySlugs: ['crossBorder'],
    title: 'Cross Border Trade',
    descriptionKey: 'crossBorder.p1',
    collaborators: [
      {
        prefixKey: 'crossBorder.l1',
        name: 'Eduardo Garcia Alfonso',
        url: 'https://github.com/Panik-Attack',
      },
      {
        prefixKey: 'crossBorder.l2',
        name: 'Yordanis Ponce',
        url: 'https://github.com/YordanisPonce',
      },
    ],
    images: [
      'freelance/crossBorderTrade/producto.webp',
      'freelance/crossBorderTrade/productos.webp',
      'freelance/crossBorderTrade/home.png',
      'freelance/crossBorderTrade/Sobre_nosotros.webp',
      'freelance/crossBorderTrade/Contacto.png',
      'freelance/crossBorderTrade/politica_de_privacidad.png',
      'freelance/crossBorderTrade/aviso_legal.png',
    ],
    frontEnd: {
      descriptionKey: 'crossBorder.p2',
      tech: ['React', 'Redux', 'Axios', 'TypeScript', 'Vite', 'SASS'],
    },
    backEnd: {
      descriptionKey: 'crossBorder.p3',
      tech: ['PHP', 'Laravel'],
    },
    source: { type: 'none' },
  },
  {
    slug: 'kids-r-us',
    legacySlugs: ['kidsrus', 'kidsrUs'],
    title: "Kids'r'Us",
    descriptionKey: 'kidsrUs.p2',
    images: [
      'freelance/kidsrUs/withstockimage.gif',
      'freelance/kidsrUs/kids-r-us-1.webp',
      'freelance/kidsrUs/input.gif',
      'freelance/kidsrUs/overimage.gif',
      'freelance/kidsrUs/kids-r-us-2.webp',
    ],
    frontEnd: {
      descriptionKey: 'kidsrUs.p3',
      tech: ['React', 'Redux', 'Vite', 'SASS'],
    },
    backEnd: {
      isNone: true,
    },
    source: {
      type: 'github',
      url: 'https://github.com/EndYou01/BB_Digital_KidsrUs',
    },
  },
  {
    slug: 'lyn',
    title: 'Lyn-Arte-Gráfico',
    descriptionKey: 'lyn.p2',
    images: [
      'freelance/lyn/lyn1.webp',
      'freelance/lyn/lyn2.webp',
      'freelance/lyn/lyn3.webp',
      'freelance/lyn/lyn4.webp',
      'freelance/lyn/lyn5.webp',
      'freelance/lyn/lyn6.webp',
      'freelance/lyn/lyn7.webp',
      'freelance/lyn/lyn8.webp',
    ],
    frontEnd: {
      descriptionKey: 'lyn.p3',
      tech: ['React', 'Redux ToolKit', 'Vite', 'Axios', 'Tailwind', 'TypeScript'],
    },
    backEnd: {
      descriptionKey: 'lyn.p4',
    },
    source: { type: 'none' },
  },
  {
    slug: 'tecopos-admin',
    legacySlugs: ['tecoposadmin'],
    title: '',
    titleKey: 'tecoposadmin.t1',
    descriptionKey: 'tecoposadmin.p2',
    images: [
      'freelance/tecopos/tecopos1.png',
      'freelance/tecopos/tecopos2.webp',
      'freelance/tecopos/tecopos9.webp',
      'freelance/tecopos/tecopos4.png',
      'freelance/tecopos/tecopos5.png',
      'freelance/tecopos/tecopos6.webp',
      'freelance/tecopos/tecopos7.webp',
      'freelance/tecopos/tecopos8.png',
    ],
    frontEnd: {
      descriptionKey: 'tecoposadmin.p3',
      tech: ['React', 'Redux', 'Redux ToolKit', 'Axios', 'Tailwind', 'TypeScript'],
    },
    backEnd: {
      descriptionKey: 'tecoposadmin.p4',
    },
    source: { type: 'none' },
  },
  {
    slug: 'gelato',
    title: '',
    titleKey: 'gelato.t1',
    descriptionKey: 'gelato.p2',
    images: [
      'freelance/gelato/gelato1.webp',
      'freelance/gelato/gelato2.webp',
      'freelance/gelato/gelato3.webp',
      'freelance/gelato/gelato4.webp',
      'freelance/gelato/gelato5.webp',
      'freelance/gelato/gelato6.webp',
      'freelance/gelato/gelato7.webp',
    ],
    frontEnd: {
      descriptionKey: 'gelato.p3',
      tech: ['React', 'Axios', 'Tailwind', 'TypeScript'],
    },
    backEnd: {
      descriptionKey: 'gelato.p4',
    },
    source: { type: 'none' },
    liveUrl: 'https://elgelatooficial.com',
  },
  {
    slug: 'sin-terceros',
    legacySlugs: ['sinterceros'],
    title: 'SinTerceros',
    descriptionKey: 'sinterceros.p2',
    images: [
      'freelance/sinterceros/st1.webp',
      'freelance/sinterceros/st2.webp',
      'freelance/sinterceros/st3.webp',
      'freelance/sinterceros/st4.webp',
      'freelance/sinterceros/st5.webp',
      'freelance/sinterceros/st6.webp',
    ],
    frontEnd: {
      descriptionKey: 'sinterceros.p3',
      tech: ['React', 'Vite', 'Axios', 'Tailwind', 'TypeScript'],
    },
    backEnd: {
      descriptionKey: 'sinterceros.p4',
    },
    source: { type: 'none' },
    liveUrl: 'https://sinterceros.com/',
  },
  {
    slug: 'el-gaban',
    legacySlugs: ['elgaban'],
    title: '',
    titleKey: 'elgaban.t1',
    descriptionKey: 'elgaban.p2',
    images: [
      'freelance/elgaban/elgaban1.webp',
      'freelance/elgaban/elgaban2.webp',
      'freelance/elgaban/elgaban3.webp',
      'freelance/elgaban/elgaban4.webp',
      'freelance/elgaban/elgaban5.webp',
    ],
    frontEnd: {
      descriptionKey: 'elgaban.p3',
      tech: ['React', 'Axios', 'Tailwind', 'TypeScript'],
    },
    backEnd: {
      descriptionKey: 'elgaban.p4',
    },
    source: { type: 'none' },
    liveUrl: 'https://elgabanoficial.com',
  },
  {
    slug: 'celebren',
    title: 'Celebren',
    descriptionKey: 'celebren.p2',
    images: [
      'freelance/celebren/celebren1.webp',
      'freelance/celebren/celebren2.webp',
      'freelance/celebren/celebren3.webp',
      'freelance/celebren/celebren4.webp',
      'freelance/celebren/celebren5.webp',
      'freelance/celebren/celebren6.webp',
    ],
    frontEnd: {
      descriptionKey: 'celebren.p3',
      tech: ['React', 'Axios', 'Vite', 'Tailwind', 'TypeScript'],
    },
    backEnd: {
      descriptionKey: 'celebren.p4',
    },
    source: { type: 'none' },
    liveUrl: 'https://celebrenstore.com/',
  },
]

export const projectBySlug = new Map(projects.map((p) => [p.slug, p]))

export const legacyRedirects: Array<{ from: string; to: string }> = projects
  .flatMap((p) =>
    (p.legacySlugs ?? []).map((legacy) => ({ from: legacy, to: p.slug })),
  )
