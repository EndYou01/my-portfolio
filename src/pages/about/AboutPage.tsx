import { useTranslation } from 'react-i18next'

import { About } from '../../components/home/about/About'
import ProfesionalExperience from '../../components/home/about/ProfesionalExperience'
import { Skills } from '../../components/home/skills/Skills'
import { SEO } from '../../components/seo/SEO'
import { StatsCards } from '../../components/statsCards/StatsCards'
import { RevealTitle } from '../../components/ui/RevealTitle'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import { buildPersonSchema } from '../../utils/schema'

export const AboutPage = () => {
  const { t, i18n } = useTranslation('global')
  const { lang, localizePath } = useLanguage()

  useScrollToTopOnMount()

  const isEnglish = i18n.language === 'en'

  return (
    <>
      <SEO
        title={t('about.meta.title')}
        description={t('about.meta.description')}
        path={localizePath('/about')}
        lang={lang === 'ES' ? 'es' : 'en'}
        hasEnglish
        schema={buildPersonSchema()}
      />
      <main>
        <section className="margenes grid gap-12 pt-32 md:grid-cols-[1fr_1fr_minmax(0,28rem)] md:gap-x-5 md:pt-[160px]">
          <div className="md:col-span-2">
            <RevealTitle text="Jorge Senjudo" />
            <div className="mt-10 max-w-[44ch] md:mt-12">
              <p className="prosa">{t('waveB.h1')}</p>
              <a
                href={`/portfolio/portafolio_jorge_senjudo${isEnglish ? '_english' : ''}.pdf`}
                download={
                  isEnglish
                    ? 'portfolio-jorge-senjudo-english.pdf'
                    : 'portafolio-jorge-senjudo.pdf'
                }
                className="boton mt-8"
              >
                {t('footer.downloadCV')}
              </a>
            </div>
          </div>
          <img
            src="/portfolio/CVPhoto.jpg"
            alt="Jorge Senjudo"
            className="aspect-[4/5] w-full bg-carbon object-cover"
          />
        </section>
        <div className="margenes pt-16 md:pt-24">
          <StatsCards />
        </div>
        <About />
        <ProfesionalExperience />
        <Skills />
      </main>
    </>
  )
}
