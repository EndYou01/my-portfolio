import { useTranslation } from 'react-i18next'

import { FaqList } from '../../ui/FaqList'
import { SectionHeader } from '../../ui/SectionHeader'

export const HOME_FAQ_KEYS = [
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

export const HomeFAQ = () => {
  const { t } = useTranslation('global')
  const items = HOME_FAQ_KEYS.map((key) => ({
    q: t(`home.faq.${key}.q`),
    a: t(`home.faq.${key}.a`),
  }))

  return (
    <section className="seccion">
      <SectionHeader title={t('home.faq.title')} />
      <FaqList items={items} />
    </section>
  )
}
