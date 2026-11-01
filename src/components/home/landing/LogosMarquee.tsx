import { useTranslation } from 'react-i18next'

const LOGOS = [
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

  return (
    <section className="seccion">
      <h2 className="rotulo">{t('home.logos.eyebrow')}</h2>
      <ul className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-8 border-t border-carbon pt-8">
        {LOGOS.map((logo) => (
          <li key={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="h-10 w-auto object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
