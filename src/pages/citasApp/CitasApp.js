import React from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
import { CarouselImage } from '../../components/carouselImage/CarouselImage';



export const CitasApp = () => {
  scrollToTop()
  const [text] = useTranslation("global")

  const images = [
    "freelance/citasApp/citas1.png",
    "freelance/citasApp/citas2.png",
    "freelance/citasApp/citas3.png"
  ]

  return (
    <Fade>
      <div className='container'>
        <main className='main'>

          <BackButton />

          <div>
            <h1 className='Colorh1'>CitasApp</h1>
            <p>
              {text("citas.p1")}
            </p>
            <ul>
              <li>{text("tmf.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
            </ul>
            <br />
          </div>

          <CarouselImage images={images}/>
          <br />

          <div className='project_info'>
            <h2>{text("snb.h2_1")}</h2>
            <h3>Front End:</h3>
            <p>
              {text("citas.p2")}
            </p>

            <ul>
              <li>AntDesign</li>
              <li>ReactJs</li>
            </ul>
            <h3>Back End:</h3>
            <p>
              {text("citas.p3")}
            </p>
            <ul>
              <li>Javascript</li>
            </ul>
            <br></br>
            <br></br>
            <div className='this_page_source_container' >
              <BsCodeSlash className='icon' />
              <a
                target="_blank"
                href="https://github.com/Panik-Attack/Citas"
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
