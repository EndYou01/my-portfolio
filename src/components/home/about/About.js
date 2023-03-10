import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal";

export const About = () => {
  const [text] = useTranslation("global")

  return (
    <div id="about" className='about_container'>
      <Fade>
        <h1 className='center'>{text("about.a&e")}</h1>
        <br></br>
        <p>
          {text("about.a&et")}
        </p>

        <br></br>
        <h2 className='center'>{text("about.profExp")}</h2>

        <div className='infoContain'>
          <div className='infoRow'>
            <h4>{text("about.fronh4")}</h4>
            <p>{text("about.2020")}</p>
          </div>
          <br />
          <div className='info'>
            <p>{text("about.fronp1")}</p>
          </div>
        </div>

        <br></br>

        <h2 className='center'>{text("about.education")}</h2>

        <div className='infoContain'>
          <div className='infoRow'>
            <h4>{text("about.h4")}</h4>
            <p>{text("about.2020")}</p>
          </div>

          <br />
          <div className='info'>
            <p>{text("about.uci")}</p>
            <br />
            <p>
              <strong>{text("about.graduation1")}</strong> {text("about.graduation2")}
            </p>
            <p>
              <strong>{text("about.average")}</strong> 4.5
            </p>
          </div>
        </div>
      </Fade>
    </div>


  )
}
