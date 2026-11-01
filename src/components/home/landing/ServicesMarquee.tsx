import { useTranslation } from 'react-i18next'

export const ServicesMarquee = () => {
  const { t } = useTranslation('global')
  const items = (t('home.servicesMarquee') as string).split(' · ').filter(Boolean)

  const track = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0">
      {items.map((item) => (
        <li key={item} className="whitespace-nowrap pr-10">
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="overflow-hidden border-y border-carbon py-3 text-etiqueta uppercase text-niebla">
      <div className="marquesina">
        {track(false)}
        {track(true)}
      </div>
    </div>
  )
}
