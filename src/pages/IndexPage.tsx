import { useTranslation } from 'react-i18next'

import { HomeHero } from '../components/home/landing/HomeHero'
import { ServicesMarquee } from '../components/home/landing/ServicesMarquee'
import { ManifestoHeadline } from '../components/home/landing/ManifestoHeadline'
import { HomeServices } from '../components/home/landing/HomeServices'
import { FlagshipCard } from '../components/home/landing/FlagshipCard'
import { HomeProcess } from '../components/home/landing/HomeProcess'
import { LogosMarquee } from '../components/home/landing/LogosMarquee'
import { HomeFAQ, HOME_FAQ_KEYS } from '../components/home/landing/HomeFAQ'
import { HomeFinalCTA } from '../components/home/landing/HomeFinalCTA'
import { SEO } from '../components/seo/SEO'
import { useLanguage } from '../hooks/useLanguage'
import {
  buildFaqPageSchema,
  buildProfessionalServiceSchema,
} from '../utils/schema'

export const IndexPage = () => {
  const { t } = useTranslation('global')
  const { lang, localizePath } = useLanguage()

  const isEs = lang === 'ES'
  const faqItems = HOME_FAQ_KEYS.map((key) => ({
    q: t(`home.faq.${key}.q`),
    a: t(`home.faq.${key}.a`),
  }))

  return (
    <div className="home_page">
      <SEO
        title={t('home.meta.title')}
        description={t('home.meta.description')}
        path={localizePath('/')}
        lang={isEs ? 'es' : 'en'}
        hasEnglish
        schema={[
          buildProfessionalServiceSchema(),
          buildFaqPageSchema(faqItems),
        ]}
      />
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
