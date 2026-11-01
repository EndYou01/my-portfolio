import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import type { WorkCard } from '../../data/workCards'
import { useLanguage } from '../../hooks/useLanguage'

const normalizeSrc = (src: string): string =>
  src.startsWith('/') || src.startsWith('http') ? src : `/${src}`

export const ProjectCard = ({ card }: { card: WorkCard }) => {
  const { t } = useTranslation('global')
  const { localizePath } = useLanguage()
  const location = useLocation()
  const title = card.titleKey ? t(card.titleKey) : card.title ?? ''

  const remember = () => {
    try {
      localStorage.setItem('lastLocation', location.pathname)
    } catch {
      /* ignore storage errors */
    }
  }

  return (
    <Link to={localizePath(card.url)} onClick={remember} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-carbon">
        <img
          src={normalizeSrc(card.image)}
          alt={`${card.altText} preview`}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="titulo-item mt-5">{title}</h3>
      <p className="mt-1.5 text-niebla transition-colors group-hover:text-hueso">
        {card.role}, {card.period}
      </p>
    </Link>
  )
}
