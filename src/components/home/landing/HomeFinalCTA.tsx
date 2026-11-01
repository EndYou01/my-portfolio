import { useTranslation } from 'react-i18next'

import { WhatsAppCTA } from '../../whatsappCTA/WhatsAppCTA'

export const HomeFinalCTA = () => {
  const { t } = useTranslation('global')

  return (
    <section className="seccion grid gap-10 md:grid-cols-[1fr_minmax(0,28rem)] md:gap-5">
      <div className="flex flex-col items-start justify-between gap-10">
        <h2 className="titulo-pagina max-w-[14ch] md:text-[clamp(4.5rem,8vw,8rem)]">
          {t('home.finalCta.title')}
        </h2>
        <div>
          <p className="prosa max-w-[44ch]">{t('home.finalCta.subtitle')}</p>
          <WhatsAppCTA
            message={t('home.finalCta.message') as string}
            label={t('home.finalCta.button') as string}
            className="mt-6"
          />
          <p className="mt-3 text-etiqueta text-niebla">
            {t('home.finalCta.finePrint')}
          </p>
        </div>
      </div>
      <img
        src="/portfolio/CVPhoto.jpg"
        alt="Jorge Senjudo"
        loading="lazy"
        className="aspect-[4/5] w-full bg-carbon object-cover"
      />
    </section>
  )
}
