import { SITE_ORIGIN } from '../components/seo/SEO'

export const buildPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jorge L. Senjudo',
  alternateName: 'Jorge Senjudo',
  jobTitle: 'Desarrollador web fullstack',
  url: SITE_ORIGIN,
  email: 'info@informagestudios.com',
  image: `${SITE_ORIGIN}/portfolio/CVPhoto.jpg`,
  knowsLanguage: ['es', 'en'],
  sameAs: [
    'https://github.com/EndYou01',
    'https://www.linkedin.com/in/jorge-senjudo-25122525b/',
    'https://t.me/EndYou2701',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'InforMage Studios',
  },
})

export const buildProfessionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jorge Senjudo — Desarrollo web para MIPYMES',
  description:
    'Diseño y desarrollo de páginas web, tiendas online, menús digitales y sistemas de gestión a medida para MIPYMES y actores económicos cubanos.',
  url: SITE_ORIGIN,
  image: `${SITE_ORIGIN}/og-image.png`,
  areaServed: [
    { '@type': 'Country', name: 'Cuba' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Spain' },
  ],
  serviceType: [
    'Diseño web',
    'Desarrollo web',
    'Tienda online',
    'Menú digital',
    'Sistemas de gestión',
    'Posicionamiento SEO',
  ],
  priceRange: '$$',
  provider: {
    '@type': 'Person',
    name: 'Jorge L. Senjudo',
  },
})

type FaqItem = { q: string; a: string }

export const buildFaqPageSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
})

type BreadcrumbCrumb = { name: string; url: string }

export const buildBreadcrumbSchema = (crumbs: BreadcrumbCrumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: c.name,
    item: c.url.startsWith('http') ? c.url : `${SITE_ORIGIN}${c.url}`,
  })),
})

type SoftwareProjectInput = {
  name: string
  description: string
  url: string
  image?: string
}

export const buildCreativeWorkSchema = (p: SoftwareProjectInput) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: p.name,
  description: p.description,
  url: p.url.startsWith('http') ? p.url : `${SITE_ORIGIN}${p.url}`,
  ...(p.image
    ? { image: p.image.startsWith('http') ? p.image : `${SITE_ORIGIN}${p.image}` }
    : {}),
  creator: {
    '@type': 'Person',
    name: 'Jorge L. Senjudo',
  },
})
