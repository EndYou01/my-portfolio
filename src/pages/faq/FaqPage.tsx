import { useTranslation } from 'react-i18next'

import { SEO } from '../../components/seo/SEO'
import { FaqList } from '../../components/ui/FaqList'
import { RevealTitle } from '../../components/ui/RevealTitle'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '../../utils/schema'

const FAQ_KEYS = [
  'q1',
  'q2',
  'q3',
  'q4',
  'q5',
  'q6',
  'q7',
  'q8',
  'q9',
  'q10',
  'q11',
  'q12',
] as const

export const FaqPage = () => {
  const { t } = useTranslation('global')
  const { lang, localizePath } = useLanguage()

  useScrollToTopOnMount()

  const isEs = lang === 'ES'
  const path = localizePath('/faq')
  const title = t('home.faq.title')
  const items = FAQ_KEYS.map((key) => ({
    q: t(`home.faq.${key}.q`),
    a: t(`home.faq.${key}.a`),
  }))

  return (
    <>
      <SEO
        title={t('home.faq.metaTitle')}
        description={t('home.faq.metaDescription')}
        path={path}
        lang={isEs ? 'es' : 'en'}
        hasEnglish
        schema={[
          buildBreadcrumbSchema([
            { name: isEs ? 'Inicio' : 'Home', url: localizePath('/') },
            { name: title, url: path },
          ]),
          buildFaqPageSchema(items),
        ]}
      />
      <main className="margenes pb-24 pt-32 md:pb-32 md:pt-[160px]">
        <RevealTitle text={title} className="titulo-pagina mb-10 md:mb-12" />
        <FaqList items={items} />
      </main>
    </>
  )
}
