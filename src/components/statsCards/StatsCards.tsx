import { useTranslation } from 'react-i18next'

import skills from '../../constants/skills'

const PROJECT_COUNT = 18

export const StatsCards = () => {
  const { t } = useTranslation('global')
  const years = new Date().getFullYear() - 2022

  const stats = [
    {
      value: `+${years}`,
      label: `${t('statsCards.years')} ${t('statsCards.experience').toLowerCase()}`,
    },
    { value: String(PROJECT_COUNT), label: t('statsCards.projectsCompleted') },
    { value: String(skills.length), label: t('statsCards.technologies') },
  ]

  return (
    <dl className="grid border-y border-carbon md:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col-reverse gap-3 border-b border-carbon py-6 last:border-b-0 md:border-b-0 md:border-l md:pl-5 md:first:border-l-0 md:first:pl-0"
        >
          <dt className="rotulo">{s.label}</dt>
          <dd className="titulo-pagina">{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}
