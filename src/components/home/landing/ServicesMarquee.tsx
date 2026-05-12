import { useTranslation } from 'react-i18next'

import { Marquee } from './Marquee'

export const ServicesMarquee = () => {
  const { t } = useTranslation('global')
  const raw = t('home.servicesMarquee') as string
  const items = raw.split(' · ').filter(Boolean)

  return (
    <div className="home_services_marquee_wrapper">
      <Marquee
        items={items}
        speed={40}
        className="home_services_marquee"
        separator="·"
      />
    </div>
  )
}
