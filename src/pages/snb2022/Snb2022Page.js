import React from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';

export const Snb2022Page = () => {
  scrollToTop()
  const [text] = useTranslation("global")

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
              <li>{text("snb.l2")} <a href=''>Alejandro Martinez</a></li>
            </ul>
          </div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner SNBcarousel">
              <div className="carousel-item active">
                <img src="snb2022/snb1.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
              <div className="carousel-item">
                <img src="snb2022/snb2.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
              <div className="carousel-item">
                <img src="snb2022/snb3.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
              <div className="carousel-item">
                <img src="snb2022/snb4.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
              <div className="carousel-item">
                <img src="snb2022/snb5.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
              <div className="carousel-item">
                <img src="snb2022/snb6.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
              <div className="carousel-item">
                <img src="snb2022/snb7.png" className="d-block w-100" alt="snb2022/snb1.png" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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
