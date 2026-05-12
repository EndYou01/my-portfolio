import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

type Props = {
  i18nKey: 'manifesto1' | 'manifesto2' | 'manifesto3'
}

export const ManifestoHeadline = ({ i18nKey }: Props) => {
  const { t } = useTranslation('global')

  return (
    <section className="home_manifesto">
      <span className="home_manifesto_blur" aria-hidden />
      <Fade triggerOnce>
        <h2 className="home_manifesto_text">
          {t(`home.${i18nKey}.lead`)}{' '}
          <span className="home_manifesto_accent">
            {t(`home.${i18nKey}.accent`)}
          </span>
          {t(`home.${i18nKey}.trail`)}
        </h2>
      </Fade>
    </section>
  )
}
