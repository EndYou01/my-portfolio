import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

import { lookupStack } from './stackConfig'

export type ProjectCardProps = {
  logo: string
  title: string
  description: string
  role: string
  period: string
  stack: string[]
  image: string
  url: string
  altText: string
}

const formatPeriod = (raw: string): string =>
  raw.replace(/\//g, ' ').replace(/\s*-\s*/g, ' — ')

export const ProjectCard = ({
  logo,
  title,
  description,
  role,
  period,
  stack,
  image,
  url,
  altText,
}: ProjectCardProps) => {
  const { t } = useTranslation('global')
  const location = useLocation()

  const handleClick = () => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem('lastLocation', location.pathname)
    } catch {
      /* ignore */
    }
  }

  return (
    <Fade>
      <article className="pcard">
        <img
          className="pcard_bg"
          src={image}
          alt={`${altText} preview`}
          loading="lazy"
        />
        <div className="pcard_overlay" aria-hidden />

        <div className="pcard_top">
          <div className="pcard_logo_box">
            <img
              className="pcard_logo"
              src={logo}
              alt={`${altText} logo`}
              loading="lazy"
            />
          </div>
          <div className="pcard_top_meta">
            <span className="pcard_period_pill">{formatPeriod(period)}</span>
            <span className="pcard_role_pill">{role}</span>
          </div>
        </div>

        <div className="pcard_bottom">
          <div className="pcard_text">
            <h3 className="pcard_title">{title}</h3>
            <p className="pcard_desc">{description}</p>
            <ul className="pcard_stack">
              {stack.map((tech) => {
                const cfg = lookupStack(tech)
                const Icon = cfg.Icon
                return (
                  <li
                    key={tech}
                    className="pcard_stack_pill"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {Icon && <Icon className="pcard_stack_icon" />}
                    <span>{cfg.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <Link to={url} onClick={handleClick} className="pcard_cta">
            {t('work.lm')}
            <span className="pcard_cta_arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </article>
    </Fade>
  )
}
