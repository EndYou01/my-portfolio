import { useTranslation } from 'react-i18next'

import { Work } from '../../components/home/work/Work'
import { SEO } from '../../components/seo/SEO'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'

export const WorkPage = () => {
  const { t } = useTranslation('global')
  const { lang, localizePath } = useLanguage()

  useScrollToTopOnMount()

  return (
    <>
      <SEO
        title={t('work.meta.title')}
        description={t('work.meta.description')}
        path={localizePath('/work')}
        lang={lang === 'ES' ? 'es' : 'en'}
        hasEnglish
      />
      <Work />
    </>
  )
}
