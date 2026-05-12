import Wave from 'react-wavify'
import { useTranslation } from 'react-i18next'
import { HiArrowDownTray } from 'react-icons/hi2'

import { useDarkMode } from '../../../hooks/useDarkMode'

export const WaveBlock = () => {
  const [text, i18n] = useTranslation('global')
  const { isDark } = useDarkMode()

  const isEnglish = i18n.language === 'en'
  const cvFileName = isEnglish
    ? 'portafolio_jorge_senjudo_english.pdf'
    : 'portafolio_jorge_senjudo.pdf'
  const downloadName = isEnglish
    ? 'portfolio-jorge-senjudo-english.pdf'
    : 'portafolio-jorge-senjudo.pdf'

  return (
    <div className="wavecontainer">
      <div className="wavecontent">
        <h3 className="hero-eyebrow">{text('waveB.h3')}</h3>
        <h1 className="hero-title">{text('waveB.h1')}</h1>

        <a
          href={`/portfolio/${cvFileName}`}
          download={downloadName}
          className="button hero-cta"
        >
          <HiArrowDownTray aria-hidden="true" />
          <span>{text('footer.downloadCV')}</span>
        </a>

        <Wave
          className="wave"
          fill={isDark ? 'rgb(12,13,17)' : 'rgba(252, 252, 248, 0.985)'}
          paused={false}
          options={{
            height: 60,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  )
}
