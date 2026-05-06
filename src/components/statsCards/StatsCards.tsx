import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import skills from '../../constants/skills'

const PROJECT_TARGET = 16
const PROJECT_DURATION_MS = 2000
const TECH_DURATION_MS = 2500
const TICK_MS = 16

const useCountUp = (target: number, durationMs: number) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (target <= 0) return
    let current = 0
    const increment = target / (durationMs / TICK_MS)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(current))
      }
    }, TICK_MS)
    return () => clearInterval(timer)
  }, [target, durationMs])

  return value
}

const TrendBadge = ({ value }: { value: string }) => (
  <span className="trend-badge positive">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 10L10 2M10 2H4M10 2V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {value}
  </span>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 12L12 2M12 2H4M12 2V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const StatsCards = () => {
  const { t } = useTranslation('global')
  const yearsOfExperience = new Date().getFullYear() - 2022
  const projectCount = useCountUp(PROJECT_TARGET, PROJECT_DURATION_MS)
  const techCount = useCountUp(skills.length, TECH_DURATION_MS)

  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stats-card">
          <div className="card-header">
            <h3 className="card-title">{t('statsCards.experience')}</h3>
            <TrendBadge value="+100%" />
          </div>
          <div className="card-content">
            <div className="card-value">
              +{yearsOfExperience} {t('statsCards.years')}
            </div>
            <p className="card-description">
              <ArrowIcon />
              {t('statsCards.constantGrowth')}
            </p>
            <p className="card-subtitle">
              {t('statsCards.buildingEnterpriseSolutions')}
            </p>
          </div>
        </div>

        <div className="stats-card">
          <div className="card-header">
            <h3 className="card-title">{t('statsCards.projectsCompleted')}</h3>
            <TrendBadge value="+25%" />
          </div>
          <div className="card-content">
            <div className="card-value">{projectCount}</div>
            <p className="card-description">
              <ArrowIcon />
              {t('statsCards.successfullyDelivered')}
            </p>
            <p className="card-subtitle">
              {t('statsCards.fromConceptToProduction')}
            </p>
          </div>
        </div>

        <div className="stats-card">
          <div className="card-header">
            <h3 className="card-title">{t('statsCards.technologies')}</h3>
            <TrendBadge value="+15%" />
          </div>
          <div className="card-content">
            <div className="card-value">{techCount}</div>
            <p className="card-description">
              <ArrowIcon />
              {t('statsCards.masteredTools')}
            </p>
            <p className="card-subtitle">{t('statsCards.modernTechStack')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
