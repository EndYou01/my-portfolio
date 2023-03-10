import React from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
import { CarouselImage } from '../../components/carouselImage/CarouselImage';

export const Snb2022Page = () => {

  scrollToTop()
  const [text] = useTranslation("global")

  const images = [
    "snb2022/snb1.png",
    "snb2022/snb2.png",
    "snb2022/snb3.png",
    "snb2022/snb4.png",
    "snb2022/snb5.png",
    "snb2022/snb6.png",
    "snb2022/snb7.png"
  ]

  return (
    <Fade>
      <div className='container'>
        <main className='main'>

          <BackButton />

          <div>
            <h1 className='Colorh1'>SNB 2022</h1>
            <p>
              {text("snb.p1")}
            </p>
            <br />
            <ul>
              <li>{text("snb.l1")}</li>
              <li>{text("snb.l2")} <a className='link' href='https://www.linkedin.com/in/alejandro-martinez-66766725b'>Alejandro Martínez</a></li>
            </ul>
          </div>

          <CarouselImage images={images} />
          <br />

          <div className='project_info'>
            <h2>{text("snb.h2_1")}</h2>
            <h3>Front End:</h3>
            <p>
              {text("snb.p2")}
            </p>

            <ul>
              <li>Java</li>
            </ul>
            <h3>Back End:</h3>
            <p>
              {text("snb.p3")}
            </p>
            <ul>
              <li>MySql</li>
            </ul>
            <br></br>
            <br></br>
            <div className='this_page_source_container' >
              <BsCodeSlash className='icon' />
              <a
                target="_blank"
                href="https://www.github.com/EndYou01/Snb2022"
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
