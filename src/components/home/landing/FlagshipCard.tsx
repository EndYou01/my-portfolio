import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'

const FEATURE_KEYS = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const

export const FlagshipCard = () => {
  const { t } = useTranslation('global')

  return (
    <section className="home_section home_flagship_section">
      <Fade triggerOnce>
        <header className="home_section_head">
          <h2 className="home_section_title">
            {t('home.flagship.sectionTitle')}
          </h2>
        </header>

        <article className="home_flagship">
          <div className="home_flagship_left">
            <span className="home_flagship_badge">
              {t('home.flagship.badge')}
            </span>
            <h3 className="home_flagship_title">{t('home.flagship.title')}</h3>
            <p className="home_flagship_desc">{t('home.flagship.desc')}</p>
            <ul className="home_flagship_features">
              {FEATURE_KEYS.map((key) => (
                <li key={key} className="home_flagship_feature">
                  <span className="home_flagship_check" aria-hidden>
                    ✓
                  </span>
                  <span>{t(`home.flagship.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="home_flagship_right">
            {t('home.flagship.oldPrice') && (
              <span className="home_flagship_old_price">
                {t('home.flagship.oldPrice')}
              </span>
            )}
            <span className="home_flagship_price">
              {t('home.flagship.price')}
            </span>
            <span className="home_flagship_currency">
              {t('home.flagship.currency')}
            </span>
            <span className="home_flagship_delivery">
              {t('home.flagship.delivery')}
            </span>
            <WhatsAppCTA
              variant="primary"
              size="lg"
              message={t('home.flagship.ctaMessage') as string}
              label={t('home.flagship.cta') as string}
              className="home_flagship_cta"
            />
            <span className="home_flagship_fine">
              {t('home.flagship.finePrint')}
            </span>
          </div>
        </article>
      </Fade>
    </section>
  )
}
