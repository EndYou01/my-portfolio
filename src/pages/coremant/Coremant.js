
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
import { CarouselImage } from '../../components/carouselImage/CarouselImage';
import { FillContext } from '../../context/FillContext';

export const Coremant = () => {

  const { fillVariable } = useContext(FillContext)

  scrollToTop()
  const [text] = useTranslation("global")

  const images = [
    "freelance/coremant/coremant2.jpg",
    "freelance/coremant/coremant3.jpg",
    "freelance/coremant/coremant4.jpg",
    "freelance/coremant/coremant1.jpg",
  ]

  return (
    <Fade>
      <div className={
        (fillVariable)
          ? 'container'
          : 'container color_dark'
      }>
        <main className='main'>

          <BackButton />
          <div>
            <h1 className='Colorh1'>COREMANT</h1>
            <p>
              {text("coremant.p1")}
            </p>
            <br />

            <ul>
              <li>{text("tmf.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
            </ul>

          </div>

          <CarouselImage images={images} />

          <div className='project_info'>
            <h2>{text("snb.h2_1")}</h2>
            <h3>Front End:</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>SASS</li>
            </ul>
            <h3>Back End:</h3>
            <ul>
              <li>none</li>
            </ul>
            <br></br>
            <br></br>
            <div className='this_page_source_container' >
              <BsCodeSlash className={
                (fillVariable)
                  ? 'icon'
                  : 'icon btn_icon_dark'
              } />
              <a
                target="_blank"
                href="https://github.com/EndYou01/Coremant"
                rel="noreferrer"
              >
                {text("footer.source")}
              </a>
            </div>
          </div>
        </main>
      </div>
    </Fade>
  )
}
