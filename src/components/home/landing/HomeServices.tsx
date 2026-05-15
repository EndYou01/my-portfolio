import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import {
  TbShoppingCart,
  TbQrcode,
  TbDatabase,
  TbWorld,
  TbTool,
  TbTrendingUp,
} from 'react-icons/tb'
import type { IconType } from 'react-icons'

import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'
import { useLanguage } from '../../../hooks/useLanguage'

type ServiceKey = 's1' | 's2' | 's3' | 's4' | 's5' | 's6'

const SERVICE_ICONS: Record<ServiceKey, IconType> = {
  s1: TbShoppingCart,
  s2: TbQrcode,
  s3: TbDatabase,
  s4: TbWorld,
  s5: TbTool,
  s6: TbTrendingUp,
}

const VERTICAL_LINKS: Partial<Record<ServiceKey, string>> = {
  s2: '/menu-digital-cuba',
  s4: '/pagina-web-restaurante-cuba',
}

const SERVICE_KEYS: ServiceKey[] = ['s1', 's2', 's3', 's4', 's5', 's6']

export const HomeServices = () => {
  const { t } = useTranslation('global')
  const { lang } = useLanguage()
  const showVerticals = lang === 'ES'

  return (
    <section id="services" className="home_section home_services">
      <Fade triggerOnce>
        <header className="home_section_head">
          <h2 className="home_section_title">{t('home.services.title')}</h2>
          <p className="home_section_sub">{t('home.services.subtitle')}</p>
        </header>
      </Fade>

      <div className="home_services_grid">
        {SERVICE_KEYS.map((key) => {
          const Icon = SERVICE_ICONS[key]
          const verticalPath = VERTICAL_LINKS[key]
          return (
            <article key={key} className="home_service_card">
              <Icon className="home_service_icon" />
              <h3 className="home_service_name">
                {t(`home.services.${key}.name`)}
              </h3>
              <p className="home_service_desc">
                {t(`home.services.${key}.desc`)}
              </p>
              <p className="home_service_price">
                {t(`home.services.${key}.price`)}
              </p>
              <WhatsAppCTA
                variant="secondary"
                size="sm"
                message={t(`home.services.${key}.message`) as string}
                label={t('home.services.learnMore') as string}
                className="home_service_cta"
              />
              {showVerticals && verticalPath && (
                <Link
                  to={verticalPath}
                  className="home_service_vertical_link"
                >
                  Ver pagina dedicada →
                </Link>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
