import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { HomeHero } from '../components/home/landing/HomeHero'
import { ServicesMarquee } from '../components/home/landing/ServicesMarquee'
import { ManifestoHeadline } from '../components/home/landing/ManifestoHeadline'
import { HomeServices } from '../components/home/landing/HomeServices'
import { FlagshipCard } from '../components/home/landing/FlagshipCard'
import { HomeProcess } from '../components/home/landing/HomeProcess'
import { LogosMarquee } from '../components/home/landing/LogosMarquee'
import { HomeFAQ } from '../components/home/landing/HomeFAQ'
import { HomeFinalCTA } from '../components/home/landing/HomeFinalCTA'

const setOrCreateMeta = (name: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setOrCreateOG = (property: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export const IndexPage = () => {
  const { t, i18n } = useTranslation('global')

  useEffect(() => {
    const title = t('home.meta.title')
    const description = t('home.meta.description')
    document.title = title
    setOrCreateMeta('description', description)
    setOrCreateOG('og:title', title)
    setOrCreateOG('og:description', description)
    setOrCreateOG('og:type', 'website')
    document.documentElement.lang = i18n.language.startsWith('es')
      ? 'es'
      : 'en'
  }, [t, i18n.language])

  return (
    <div className="home_page">
      <main className="home_main">
        <HomeHero />
        <ServicesMarquee />
        <ManifestoHeadline i18nKey="manifesto1" />
        <HomeServices />
        <FlagshipCard />
        <ManifestoHeadline i18nKey="manifesto2" />
        <HomeProcess />
        <LogosMarquee />
        <ManifestoHeadline i18nKey="manifesto3" />
        <HomeFAQ />
        <HomeFinalCTA />
      </main>
    </div>
  )
}
