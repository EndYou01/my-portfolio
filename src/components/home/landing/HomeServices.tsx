import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { SectionHeader } from '../../ui/SectionHeader'
import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'
import { useLanguage } from '../../../hooks/useLanguage'

const SERVICES = [
  { key: 's1' },
  { key: 's2', vertical: '/menu-digital-cuba' },
  { key: 's3' },
  { key: 's4', vertical: '/pagina-web-restaurante-cuba' },
  { key: 's5' },
  { key: 's6' },
]

export const HomeServices = () => {
  const { t } = useTranslation('global')
  const { lang } = useLanguage()

  return (
    <section id="services" className="seccion scroll-mt-[60px]">
      <SectionHeader
        title={t('home.services.title')}
        intro={t('home.services.subtitle')}
      />
      <ul>
        {SERVICES.map(({ key, vertical }) => (
          <li
            key={key}
            className="grid gap-5 border-t border-carbon py-8 md:grid-cols-2 md:py-10"
          >
            <h3 className="titulo-seccion max-w-[14ch]">
              {t(`home.services.${key}.name`)}
            </h3>
            <div>
              <p className="prosa text-niebla">{t(`home.services.${key}.desc`)}</p>
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                <p className="font-medium">{t(`home.services.${key}.price`)}</p>
                <div className="flex flex-wrap gap-5">
                  {lang === 'ES' && vertical && (
                    <Link to={vertical} className="enlace-marcado">
                      {t('home.services.dedicated')}
                    </Link>
                  )}
                  <WhatsAppCTA
                    variant="secondary"
                    message={t(`home.services.${key}.message`) as string}
                    label={t('home.services.learnMore') as string}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
