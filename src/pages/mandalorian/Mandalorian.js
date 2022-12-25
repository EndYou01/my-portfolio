import React from 'react'
import { Link } from 'react-router-dom';

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
  
export const Mandalorian = () => {
    scrollToTop()
    const [text] = useTranslation("global")

    return (
        <div className='container'>
              <main className='main'>
              
                <BackButton/>

                <div>
                  <h1 className='Colorh1'>{text("tmf.h2")}</h1>
                  <p>
                    {text("tmf.p1")}
                  </p>
                  <br />
                  <ul>
                    <li>{text("snb.l1")}</li>
                    <li>{text("tmf.l1")} <Link to='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</Link></li>
                  </ul>
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner SNBcarousel">
                          <div className="carousel-item active">
                            <img src="tmf/tmf1.png" className="d-block w-100" alt="tmf1"/>
                          </div>
                          <div className="carousel-item">
                            <img src="tmf/tmf2.png" className="d-block w-100" alt="tmf1"/>
                          </div>
                          <div className="carousel-item">
                            <img src="tmf/tmf3.png" className="d-block w-100" alt="tmf1"/>
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
                <br/>

                <div className='project_info'>
                  <h2>{text("snb.h2_1")}</h2>
                  <h3>Front End:</h3>
                  <p>
                  {text("tmf.p2")}
                  </p>
                 
                  <ul>
                    <li>C++</li>
                  </ul>
                  <h3>Back End:</h3>
                  <p>
                  {text("tmf.p3")}
                  </p>
                  <ul>
                    <li>none</li>
                  </ul>
                  <br></br>
                  <br></br>
                  <div className='this_page_source_container' >
                      <BsCodeSlash className= 'icon'/>
                      <Link
                        target="_blank"
                        to="https://github.com/EndYou01/tu-mandalorian-favorito"
                        rel="noreferrer"
                      >
                        {text("footer.source")}
                      </Link>
                </div>
                </div>
              </main>
          </div>
    )
}
