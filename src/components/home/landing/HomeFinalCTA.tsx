import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'

export const HomeFinalCTA = () => {
  const { t } = useTranslation('global')

  return (
    <section className="home_section home_final_cta">
      <Fade triggerOnce>
        <div className="home_final_cta_inner">
          <div className="home_final_cta_avatar">
            <img
              src="/portfolio/CVPhoto.jpg"
              alt="Jorge Senjudo"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="home_final_cta_avatar_fallback">JS</span>
            <span className="home_final_cta_avatar_glow" aria-hidden />
          </div>

          <div className="home_final_cta_body">
            <h2 className="home_final_cta_title">{t('home.finalCta.title')}</h2>
            <p className="home_final_cta_sub">{t('home.finalCta.subtitle')}</p>
            <WhatsAppCTA
              variant="primary"
              size="lg"
              message={t('home.finalCta.message') as string}
              label={t('home.finalCta.button') as string}
            />
            <p className="home_final_cta_fine">
              {t('home.finalCta.finePrint')}{' '}
              <span className="home_smile" aria-hidden>
                :)
              </span>
            </p>
          </div>
        </div>
      </Fade>
    </section>
  )
}
