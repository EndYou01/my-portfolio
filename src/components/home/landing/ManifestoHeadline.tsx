import { useTranslation } from 'react-i18next'

type Props = {
  i18nKey: 'manifesto1' | 'manifesto2' | 'manifesto3'
}

export const ManifestoHeadline = ({ i18nKey }: Props) => {
  const { t } = useTranslation('global')

  return (
    <section className="seccion">
      <p className="titulo-pagina max-w-[16ch] md:text-[clamp(4.5rem,8vw,8rem)]">
        {t(`home.${i18nKey}.lead`)} {t(`home.${i18nKey}.accent`)}
        {t(`home.${i18nKey}.trail`)}
      </p>
    </section>
  )
}
