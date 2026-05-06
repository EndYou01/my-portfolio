import Wave from 'react-wavify'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

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
        <Fade cascade>
          <h3 className="animate__animated animate__fadeInDown animate__faster">
            {text('waveB.h3')}
          </h3>
          <br />
          <h1 className="animate__animated animate__backInUp animate__faster">
            {text('waveB.h1')}
          </h1>
          <button
            type="button"
            className="button animate__animated animate__fadeInDown animate__faster"
          >
            <a href={`/portfolio/${cvFileName}`} download={downloadName}>
              {text('footer.downloadCV')}
            </a>
          </button>
        </Fade>

        <br />

        <Wave
          className="wave"
          fill={isDark ? 'rgb(20,20,20)' : 'rgba(255, 255, 255, 0.967)'}
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
