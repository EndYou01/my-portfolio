import { useTranslation } from 'react-i18next'

import { Marquee } from './Marquee'

type Logo = { name: string; src: string }

const LOGOS: Logo[] = [
  { name: 'RedCollege', src: '/logos/redcollege_logo.png' },
  { name: 'CugrancaXXI', src: '/logos/cugranca_logo.png' },
  { name: 'Fuego Abierto', src: '/logos/fuegoabierto_logo.png' },
  { name: 'El Gabán', src: '/logos/gabanLogo.png' },
  { name: 'The Gelato', src: '/logos/gelatologo.jpg' },
  { name: 'Tecopos', src: '/logos/TecoposLogo.png' },
]

export const LogosMarquee = () => {
  const { t } = useTranslation('global')

  if (import.meta.env.VITE_SHOW_LOGOS === 'false') return null

  const items = LOGOS.map((logo) => (
    <img
      key={logo.name}
      src={logo.src}
      alt={logo.name}
      className="home_logos_img"
      loading="lazy"
    />
  ))

  return (
    <section className="home_section home_logos_section">
      <p className="home_logos_eyebrow">{t('home.logos.eyebrow')}</p>
      <Marquee items={items} speed={40} className="home_logos_marquee" />
    </section>
  )
}
