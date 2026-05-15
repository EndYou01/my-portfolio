import { useTranslation } from 'react-i18next'

import { Marquee } from './Marquee'

type Logo = { name: string; src: string }

const LOGOS: Logo[] = [
  { name: 'RedCollege', src: '/logos/redcollege_logo.webp' },
  { name: 'CugrancaXXI', src: '/logos/cugranca_logo.webp' },
  { name: 'Fuego Abierto', src: '/logos/fuegoabierto_logo.webp' },
  { name: 'El Gabán', src: '/logos/gabanLogo.webp' },
  { name: 'The Gelato', src: '/logos/gelatologo.webp' },
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
