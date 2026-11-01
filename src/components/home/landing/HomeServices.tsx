import { useState, useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { PlusIcon } from '../../ui/PlusIcon'
import { SectionHeader } from '../../ui/SectionHeader'
import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'
import { useLanguage } from '../../../hooks/useLanguage'

const SERVICES = [
  { key: 's1', image: '/freelance/confort/Pantalla_Principal.webp' },
  { key: 's2', image: '/freelance/gelato/gelato1.webp', vertical: '/menu-digital-cuba' },
  { key: 's3', image: '/cugranca/cugrancaxxi1.png' },
  { key: 's4', image: '/pavel/pavel-home.webp', vertical: '/pagina-web-restaurante-cuba' },
  { key: 's5', image: '/fuegoAbierto/fuegoabierto1.png' },
  { key: 's6', image: '/yoss/yoss-home.webp' },
]

const ServiceCard = ({
  serviceKey,
  image,
  vertical,
}: {
  serviceKey: string
  image: string
  vertical?: string
}) => {
  const { t } = useTranslation('global')
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <article className="relative aspect-[4/5] overflow-hidden bg-carbon">
      <img
        src={image}
        alt=""
        loading="lazy"
        className={`absolute inset-0 size-full object-cover object-top transition-[filter,transform] duration-700 ${
          open ? 'scale-105 blur-md brightness-[0.2] grayscale' : 'brightness-[0.32] grayscale'
        }`}
      />
      <h3 className="titulo-item absolute inset-x-0 top-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-4 p-5 text-left uppercase"
        >
          {t(`home.services.${serviceKey}.name`)}
          <PlusIcon open={open} />
        </button>
      </h3>
      <p
        id={id}
        className={`prosa absolute inset-x-0 top-[72px] px-5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        {t(`home.services.${serviceKey}.desc`)}
      </p>
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 p-5">
        <p className="font-medium">{t(`home.services.${serviceKey}.price`)}</p>
        <div className="flex flex-wrap gap-4">
          {vertical && (
            <Link to={vertical} className="enlace-marcado">
              {t('home.services.dedicated')}
            </Link>
          )}
          <WhatsAppCTA
            variant="secondary"
            message={t(`home.services.${serviceKey}.message`) as string}
            label={t('home.services.learnMore') as string}
          />
        </div>
      </div>
    </article>
  )
}

export const HomeServices = () => {
  const { t } = useTranslation('global')
  const { lang } = useLanguage()

  return (
    <section id="services" className="seccion scroll-mt-[60px]">
      <SectionHeader
        title={t('home.services.title')}
        intro={t('home.services.subtitle')}
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.key}>
            <ServiceCard
              serviceKey={s.key}
              image={s.image}
              vertical={lang === 'ES' ? s.vertical : undefined}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
