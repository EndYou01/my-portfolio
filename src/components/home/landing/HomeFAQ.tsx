import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'
import { TbChevronDown } from 'react-icons/tb'

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

const FAQ_KEYS = HOME_FAQ_KEYS

export const HomeFAQ = () => {
  const { t } = useTranslation('global')
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="home_section home_faq">
      <Fade triggerOnce>
        <header className="home_section_head">
          <h2 className="home_section_title">{t('home.faq.title')}</h2>
        </header>
      </Fade>

      <div className="home_faq_grid">
        {FAQ_KEYS.map((key, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={key}
              className={`home_faq_item${isOpen ? ' is_open' : ''}`}
            >
              <button
                type="button"
                className="home_faq_q"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <span>{t(`home.faq.${key}.q`)}</span>
                <TbChevronDown
                  className="home_faq_chevron"
                  aria-hidden
                />
              </button>
              {isOpen && (
                <div className="home_faq_a">
                  <p>{t(`home.faq.${key}.a`)}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
