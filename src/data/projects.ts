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
    slug: 'redcollege',
    title: 'RedCollege',
    descriptionKey: 'redcollege.p2',
    images: [
      'redcollege/redcollege1.jpg',
      'redcollege/redcollege2.jpg',
      'redcollege/redcollege3.jpg',
      'redcollege/redcollege4.jpg',
      'redcollege/redcollege5.jpg',
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
      'snb2022/snb2.png',
      'snb2022/snb3.png',
      'snb2022/snb4.png',
      'snb2022/snb5.png',
      'snb2022/snb6.png',
      'snb2022/snb7.png',
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
      'freelance/citasApp/citas1.png',
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
      'freelance/confort/Pantalla_Principal.jpg',
      'freelance/confort/Pantalla_Carrito.png',
      'freelance/confort/Pantalla_Cuenta_Usuario.png',
      'freelance/confort/Pantalla_Footer.jpg',
      'freelance/confort/Pantalla_Pago.png',
      'freelance/confort/Pantalla_Principal_Mas_vendidos.jpg',
      'freelance/confort/Pantalla_Producto.png',
      'freelance/confort/MAS_VENDIDO.png',
      'freelance/confort/MENU_HAMBURGUE2.png',
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
      'freelance/coremant/coremant3.jpg',
      'freelance/coremant/coremant4.jpg',
      'freelance/coremant/coremant1.jpg',
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
      'freelance/crossBorderTrade/producto.png',
      'freelance/crossBorderTrade/productos.png',
      'freelance/crossBorderTrade/home.png',
      'freelance/crossBorderTrade/Sobre_nosotros.png',
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
      'freelance/kidsrUs/kids-r-us-1.png',
      'freelance/kidsrUs/input.gif',
      'freelance/kidsrUs/overimage.gif',
      'freelance/kidsrUs/kids-r-us-2.png',
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
      'freelance/lyn/lyn1.png',
      'freelance/lyn/lyn2.png',
      'freelance/lyn/lyn3.png',
      'freelance/lyn/lyn4.png',
      'freelance/lyn/lyn5.png',
      'freelance/lyn/lyn6.png',
      'freelance/lyn/lyn7.png',
      'freelance/lyn/lyn8.png',
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
      'freelance/tecopos/tecopos2.png',
      'freelance/tecopos/tecopos9.png',
      'freelance/tecopos/tecopos4.png',
      'freelance/tecopos/tecopos5.png',
      'freelance/tecopos/tecopos6.png',
      'freelance/tecopos/tecopos7.png',
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
      'freelance/gelato/gelato1.png',
      'freelance/gelato/gelato2.jpg',
      'freelance/gelato/gelato3.jpg',
      'freelance/gelato/gelato4.jpg',
      'freelance/gelato/gelato5.jpg',
      'freelance/gelato/gelato6.jpg',
      'freelance/gelato/gelato7.jpg',
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
      'freelance/sinterceros/st1.png',
      'freelance/sinterceros/st2.png',
      'freelance/sinterceros/st3.png',
      'freelance/sinterceros/st4.png',
      'freelance/sinterceros/st5.png',
      'freelance/sinterceros/st6.png',
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
      'freelance/elgaban/elgaban1.png',
      'freelance/elgaban/elgaban2.jpg',
      'freelance/elgaban/elgaban3.jpg',
      'freelance/elgaban/elgaban4.jpg',
      'freelance/elgaban/elgaban5.jpg',
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
      'freelance/celebren/celebren1.png',
      'freelance/celebren/celebren2.jpg',
      'freelance/celebren/celebren3.jpg',
      'freelance/celebren/celebren4.jpg',
      'freelance/celebren/celebren5.jpg',
      'freelance/celebren/celebren6.jpg',
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
