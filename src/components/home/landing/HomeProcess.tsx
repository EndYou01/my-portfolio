import { useTranslation } from 'react-i18next'

import { SectionHeader } from '../../ui/SectionHeader'

const STEPS = ['p1', 'p2', 'p3', 'p4'] as const

export const HomeProcess = () => {
  const { t } = useTranslation('global')

  return (
    <section className="seccion">
      <SectionHeader
        title={t('home.process.title')}
        intro={t('home.process.subtitle')}
      />
      <ol>
        {STEPS.map((key, idx) => (
          <li
            key={key}
            className="grid gap-2 border-t border-carbon py-6 md:grid-cols-2 md:gap-5"
          >
            <h3 className="titulo-item">
              <span className="mr-4 text-niebla">{idx + 1}</span>
              {t(`home.process.${key}.name`)}
            </h3>
            <p className="prosa text-niebla">{t(`home.process.${key}.desc`)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
