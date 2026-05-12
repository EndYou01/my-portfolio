import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'
import { Link, useLocation } from 'react-router-dom'

import { ProjectCard } from '../../projectCard/ProjectCard'
import { workCards } from '../../../data/workCards'

export const Work = () => {
  const { t } = useTranslation('global')
  const isWorkLocation = useLocation().pathname.includes('work')

  const cards = isWorkLocation
    ? workCards
    : workCards.filter((c) => c.featured)

  return (
    <div id="work" className="work_container">
      <Fade>
        <h1 className="header">{t('work.h1')}</h1>
      </Fade>
      <div className="pcard_grid">
        {cards.map((card) => (
          <React.Fragment key={card.url}>
            <ProjectCard
              logo={card.logo}
              title={card.titleKey ? t(card.titleKey) : card.title ?? ''}
              description={t(card.descriptionKey)}
              role={card.role}
              period={card.period}
              stack={card.stack}
              image={card.image}
              url={card.url}
              altText={card.altText}
            />
          </React.Fragment>
        ))}
      </div>
      {!isWorkLocation && (
        <Link to="/work" className="seeMore">
          {t('general.seeMore')}
        </Link>
      )}
    </div>
  )
}
