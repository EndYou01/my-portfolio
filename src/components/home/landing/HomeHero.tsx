import { useTranslation } from 'react-i18next'

import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'

export const HomeHero = () => {
  const { t } = useTranslation('global')

  return (
    <section className="home_hero">
      <div className="home_hero_inner">
        <p className="home_hero_eyebrow">{t('home.hero.eyebrow')}</p>
        <h1 className="home_hero_headline">{t('home.hero.headline')}</h1>
        <p className="home_hero_sub">{t('home.hero.subheadline')}</p>

        <div className="home_hero_ctas">
          <WhatsAppCTA
            variant="primary"
            size="lg"
            message={t('home.hero.ctaPrimaryMessage') as string}
            label={t('home.hero.ctaPrimary') as string}
          />
          <a href="#services" className="wa_cta wa_cta_secondary wa_cta_lg">
            {t('home.hero.ctaSecondary')}
          </a>
        </div>

        <ul className="home_killer">
          {(['f1', 'f2', 'f3', 'f4'] as const).map((k) => (
            <li key={k} className="home_killer_item">
              <span className="home_killer_check" aria-hidden>
                ✓
              </span>
              <span>{t(`home.killer.${k}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
