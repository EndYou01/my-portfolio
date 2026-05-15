import { useTranslation } from 'react-i18next'

import { About } from '../../components/home/about/About'
import { Skills } from '../../components/home/skills/Skills'
import ProfesionalExperience from '../../components/home/about/ProfesionalExperience'
import { WaveBlock } from '../../components/home/wave/WaveBlock'
import { StatsCards } from '../../components/statsCards/StatsCards'
import { SEO } from '../../components/seo/SEO'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import { buildPersonSchema } from '../../utils/schema'

export const AboutPage = () => {
  const { t } = useTranslation('global')
  const { lang, localizePath } = useLanguage()

  useScrollToTopOnMount()

  const isEs = lang === 'ES'

  return (
    <>
      <SEO
        title={t('about.meta.title')}
        description={t('about.meta.description')}
        path={localizePath('/about')}
        lang={isEs ? 'es' : 'en'}
        hasEnglish
        schema={buildPersonSchema()}
      />
      <WaveBlock />
      <StatsCards />
      <About />
      <ProfesionalExperience />
      <Skills />
    </>
  )
}
