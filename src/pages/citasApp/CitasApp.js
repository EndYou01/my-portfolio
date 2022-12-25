import React from 'react'
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';

export const CitasApp = () => {
  scrollToTop()
  const [text] = useTranslation("global")

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
              <li>{text("tmf.l1")} <Link to='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</Link></li>
            </ul>
            <br />
          </div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner SNBcarousel">
              <div className="carousel-item active">
                <img src="freelance/citasApp/citas1.png" className="d-block w-100" alt="freelance/citasApp/citas1.png" />
              </div>
              <div className="carousel-item">
                <img src="freelance/citasApp/citas2.png" className="d-block w-100" alt="freelance/citasApp/citas1.png" />
              </div>
              <div className="carousel-item">
                <img src="freelance/citasApp/citas3.png" className="d-block w-100" alt="freelance/citasApp/citas1.png" />
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
              <Link
                target="_blank"
                to="https://github.com/Panik-Attack/Citas"
                rel="noreferrer"
              >
                {text("footer.source")}
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Fade>
  )
}
