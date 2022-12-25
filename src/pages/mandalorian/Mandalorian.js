import React from 'react'
import { Link } from 'react-router-dom';

import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
  
export const Mandalorian = () => {
    scrollToTop()
    const navigate = useNavigate();
    const [text] = useTranslation("global")

    return (
        <div className='container'>
              <head>
                  <title>
                    Tu Mandalorian Favorito| Jorge Senjudo Developer Portfolio
                  </title>
                  <meta
                    lang="en"
                    name="description"
                    content="Description and information about the project Tu Mandalorian Favorito, developed by Jorge Senjudo"
                  />
                  <link rel="icon" href="/favicon.ico" />
              </head>

              <main className='main'>
              
                <button className='bg_transparent my-element'>
                    <div onClick={()=>{navigate('/')}}>
                        <IoMdArrowBack className='icon'/>{text("snb.b")}
                    </div>
                </button>

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
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner SNBcarousel">
                          <div class="carousel-item active">
                            <img src="tmf/tmf1.png" class="d-block w-100" alt="tmf1"/>
                          </div>
                          <div class="carousel-item">
                            <img src="tmf/tmf2.png" class="d-block w-100" alt="tmf1"/>
                          </div>
                          <div class="carousel-item">
                            <img src="tmf/tmf3.png" class="d-block w-100" alt="tmf1"/>
                          </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
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
