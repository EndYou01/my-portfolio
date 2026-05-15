import { projects } from '../data/projects'

export type RoutePlan = {
  path: string
  lang: 'es' | 'en'
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority?: number
  hasEnglish: boolean
}

const STATIC_PATHS_ES = ['/', '/about', '/work']
const STATIC_PATHS_EN = ['/en', '/en/about', '/en/work']
const VERTICAL_PATHS_ES = ['/menu-digital-cuba', '/pagina-web-restaurante-cuba']

export const buildRoutePlan = (): RoutePlan[] => {
  const plan: RoutePlan[] = []

  for (const p of STATIC_PATHS_ES) {
    plan.push({
      path: p,
      lang: 'es',
      changefreq: 'monthly',
      priority: p === '/' ? 1.0 : 0.8,
      hasEnglish: true,
    })
  }
  for (const p of STATIC_PATHS_EN) {
    plan.push({
      path: p,
      lang: 'en',
      changefreq: 'monthly',
      priority: p === '/en' ? 0.7 : 0.6,
      hasEnglish: true,
    })
  }
  for (const p of VERTICAL_PATHS_ES) {
    plan.push({
      path: p,
      lang: 'es',
      changefreq: 'monthly',
      priority: 0.9,
      hasEnglish: false,
    })
  }
  for (const project of projects) {
    plan.push({
      path: `/${project.slug}`,
      lang: 'es',
      changefreq: 'yearly',
      priority: 0.6,
      hasEnglish: true,
    })
    plan.push({
      path: `/en/${project.slug}`,
      lang: 'en',
      changefreq: 'yearly',
      priority: 0.5,
      hasEnglish: true,
    })
  }

  return plan
}
