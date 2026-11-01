import { useTranslation } from 'react-i18next'

import { SectionHeader } from '../../ui/SectionHeader'
import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'

const FEATURE_KEYS = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const

export const FlagshipCard = () => {
  const { t } = useTranslation('global')

  return (
    <section className="seccion">
      <SectionHeader title={t('home.flagship.sectionTitle')} />
      <article className="grid gap-10 border-t border-carbon pt-6 md:grid-cols-2 md:gap-5">
        <div>
          <p
            className="font-medium"
            style={{
              fontSize: 'clamp(6rem, 17vw, 16rem)',
              lineHeight: 0.85,
              letterSpacing: '-0.07em',
            }}
          >
            {t('home.flagship.price')}
          </p>
          <p className="rotulo mt-4">
            {t('home.flagship.currency')}, {t('home.flagship.delivery')}
          </p>
        </div>
        <div>
          <h3 className="titulo-item">{t('home.flagship.title')}</h3>
          <p className="prosa mt-3 text-niebla">{t('home.flagship.desc')}</p>
          <ul className="mt-6 grid gap-1.5 sm:grid-cols-2 sm:gap-x-5">
            {FEATURE_KEYS.map((key) => (
              <li key={key}>{t(`home.flagship.${key}`)}</li>
            ))}
          </ul>
          <WhatsAppCTA
            message={t('home.flagship.ctaMessage') as string}
            label={t('home.flagship.cta') as string}
            className="mt-8"
          />
          <p className="mt-3 text-etiqueta text-niebla">
            {t('home.flagship.finePrint')}
          </p>
        </div>
      </article>
    </section>
  )
}
