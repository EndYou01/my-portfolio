import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { ProjectCard } from '../../components/projectCard/ProjectCard'
import { SEO } from '../../components/seo/SEO'
import { RevealTitle } from '../../components/ui/RevealTitle'
import { workCards } from '../../data/workCards'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'

const ROLES = ['Frontend', 'Fullstack']

export const WorkPage = () => {
  const { t } = useTranslation('global')
  const { lang, localizePath } = useLanguage()
  const [params, setParams] = useSearchParams()

  useScrollToTopOnMount()

  const active = params.get('rol')
  const visible = active
    ? workCards.filter((c) => c.role.toLowerCase() === active.toLowerCase())
    : workCards
  const filters = [
    { value: null as string | null, label: t('work.all') as string },
    ...ROLES.map((r) => ({ value: r.toLowerCase() as string | null, label: r })),
  ]

  return (
    <>
      <SEO
        title={t('work.meta.title')}
        description={t('work.meta.description')}
        path={localizePath('/work')}
        lang={lang === 'ES' ? 'es' : 'en'}
        hasEnglish
      />
      <main className="margenes pb-24 pt-32 md:pb-32 md:pt-[160px]">
        <RevealTitle text={t('work.h1')} />
        <nav aria-label={t('work.role') as string} className="mt-8 md:mt-12">
          <ul className="flex flex-wrap gap-x-5 gap-y-4 text-etiqueta uppercase">
            {filters.map((f) => {
              const current = f.value === active
              return (
                <li key={f.label}>
                  <button
                    type="button"
                    aria-pressed={current}
                    onClick={() =>
                      setParams(f.value ? { rol: f.value } : {}, {
                        preventScrollReset: true,
                      })
                    }
                    className={`border-b pb-0.5 uppercase transition-colors ${
                      current
                        ? 'border-hueso text-hueso'
                        : 'border-transparent text-niebla hover:text-hueso'
                    }`}
                  >
                    {f.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
        <ul className="mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((card) => (
            <li key={card.url}>
              <ProjectCard card={card} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
