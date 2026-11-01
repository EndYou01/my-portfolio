import { useTranslation } from 'react-i18next'

import { FlagshipCard } from '../components/home/landing/FlagshipCard'
import { HomeFAQ, HOME_FAQ_KEYS } from '../components/home/landing/HomeFAQ'
import { HomeFinalCTA } from '../components/home/landing/HomeFinalCTA'
import { HomeProcess } from '../components/home/landing/HomeProcess'
import { HomeServices } from '../components/home/landing/HomeServices'
import { LogosMarquee } from '../components/home/landing/LogosMarquee'
import { ManifestoHeadline } from '../components/home/landing/ManifestoHeadline'
import { ServicesMarquee } from '../components/home/landing/ServicesMarquee'
import { ProjectCard } from '../components/projectCard/ProjectCard'
import { SEO } from '../components/seo/SEO'
import { ImageTrail } from '../components/ui/ImageTrail'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Wordmark } from '../components/ui/Wordmark'
import { WhatsAppCTA } from '../components/whatsappCTA/WhatsAppCTA'
import { workCards } from '../data/workCards'
import { useLanguage } from '../hooks/useLanguage'
import {
  buildFaqPageSchema,
  buildProfessionalServiceSchema,
} from '../utils/schema'

const TRAIL = [
  '/fuegoAbiertoWeb/fuegoabiertoweb-home.webp',
  '/worldcup/worldcup-home.webp',
  '/pavel/pavel-home.webp',
  '/yoss/yoss-home.webp',
  '/gocreate/gocreate-1.webp',
  '/redcollege/redcollege1.webp',
  '/freelance/elgaban/elgaban1.webp',
  '/freelance/gelato/gelato1.webp',
]

const FEATURED = workCards.filter((c) => c.featured).slice(0, 4)
const KILLER_KEYS = ['f1', 'f2', 'f3', 'f4'] as const

export const IndexPage = () => {
  const { t } = useTranslation('global')
  const { lang, localizePath } = useLanguage()

  const faqItems = HOME_FAQ_KEYS.map((key) => ({
    q: t(`home.faq.${key}.q`),
    a: t(`home.faq.${key}.a`),
  }))

  return (
    <>
      <SEO
        title={t('home.meta.title')}
        description={t('home.meta.description')}
        path={localizePath('/')}
        lang={lang === 'ES' ? 'es' : 'en'}
        hasEnglish
        schema={[
          buildProfessionalServiceSchema(),
          buildFaqPageSchema(faqItems),
        ]}
      />
      <main>
        <section className="margenes relative flex min-h-svh flex-col justify-end gap-8 pb-6 pt-[84px] md:gap-12 md:pb-8">
          <div className="flex flex-1 items-center">
            <Wordmark />
          </div>
          <div className="relative z-[3] flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-[46ch] text-[1.375rem] font-medium leading-[1.1] tracking-[-0.04em] md:text-[1.75rem]">
              {t('home.hero.headline')}
            </h1>
            <div className="flex shrink-0 flex-wrap items-center gap-5">
              <WhatsAppCTA
                message={t('home.hero.ctaPrimaryMessage') as string}
                label={t('home.hero.ctaPrimary') as string}
              />
              <a href="#services" className="enlace-marcado">
                {t('home.hero.ctaSecondary')}
              </a>
            </div>
          </div>
          <ImageTrail images={TRAIL} nextSection="destacados" />
        </section>

        <ServicesMarquee />

        <section className="margenes grid gap-10 pt-16 md:grid-cols-2 md:gap-5 md:pt-24">
          <ul className="grid content-start gap-1.5">
            {KILLER_KEYS.map((k) => (
              <li key={k} className="uppercase">
                {t(`home.killer.${k}`)}
              </li>
            ))}
          </ul>
          <p className="prosa">{t('home.hero.subheadline')}</p>
        </section>

        <section id="destacados" className="seccion scroll-mt-[60px]">
          <SectionHeader
            title={t('work.selected')}
            link={{ to: localizePath('/work'), label: t('work.seeAll') }}
          />
          <ul className="grid gap-x-5 gap-y-14 md:grid-cols-2">
            {FEATURED.map((card) => (
              <li key={card.url}>
                <ProjectCard card={card} />
              </li>
            ))}
          </ul>
        </section>

        <ManifestoHeadline i18nKey="manifesto1" />
        <HomeServices />
        <FlagshipCard />
        <ManifestoHeadline i18nKey="manifesto2" />
        <HomeProcess />
        <LogosMarquee />
        <ManifestoHeadline i18nKey="manifesto3" />
        <HomeFAQ />
        <HomeFinalCTA />

        <div className="margenes pb-6 pt-24 md:pt-32">
          <Wordmark intro={false} />
        </div>
      </main>
    </>
  )
}
