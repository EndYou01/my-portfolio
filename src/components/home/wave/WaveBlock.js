import React from 'react'
import Wave from 'react-wavify'
import { Fade } from "react-awesome-reveal";
import {useTranslation} from 'react-i18next'

export const WaveBlock = () => {
  const [text] = useTranslation("global")

    return (
      <div className='wavecontainer'>
      <div className='wavecontent'>
        <Fade>

          <h3 className='animate__animated animate__fadeInDown animate__delay-1s animate__slow'>{text("waveB.h3")}</h3>
          
          <h1 className='animate__animated animate__backInUp animate__delay-2s animate__slow'>{text("waveB.h1")}</h1>

          <button className='button'>
            <a
              target="_blank"
              href="mailto:jorgesenjudo@gmail.com"
              rel="noreferrer"
            >
              {text("footer.contactMe")}
            </a>
          </button>
        </Fade>

        <br/>
        <Wave
          className='wave'
          fill="rgb(20,20,20)"
          paused={false}
          options={{
            height: 20,
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
    )
}
