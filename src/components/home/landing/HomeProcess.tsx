import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

const STEPS = ['p1', 'p2', 'p3', 'p4'] as const

export const HomeProcess = () => {
  const { t } = useTranslation('global')

  return (
    <section className="home_section home_process">
      <Fade triggerOnce>
        <header className="home_section_head">
          <h2 className="home_section_title">{t('home.process.title')}</h2>
          <p className="home_section_sub">{t('home.process.subtitle')}</p>
        </header>
      </Fade>

      <div className="home_process_grid">
        {STEPS.map((key, idx) => (
          <article key={key} className="home_process_step">
            <span className="home_process_num">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <h3 className="home_process_name">
              {t(`home.process.${key}.name`)}
            </h3>
            <p className="home_process_desc">
              {t(`home.process.${key}.desc`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
