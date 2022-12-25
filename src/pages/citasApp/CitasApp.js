import React from 'react'
import { Link } from 'react-router-dom';

import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
  
export const CitasApp = () => {
    scrollToTop()
    const navigate = useNavigate();
    const [text] = useTranslation("global")

    return (
        <div className='container'>
              <head>
                  <title>
                    Basketball Center | Jorge Senjudo Developer Portfolio
                  </title>
                  <meta
                    lang="en"
                    name="description"
                    content="Description and information about the project Basketball Center, developed by Anthony Fernandez"
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
                  <h1 className='Colorh1'>CitasApp</h1>
                  <p>
                    {text("citas.p1")}
                  </p>
                  <ul>
                    <li>{text("tmf.l1")} <Link to='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</Link></li>
                  </ul>
                  <br />
                </div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner SNBcarousel">
                          <div class="carousel-item active">
                            <img src="freelance/citasApp/citas1.png" class="d-block w-100" alt="freelance/citasApp/citas1.png"/>
                          </div>
                          <div class="carousel-item">
                            <img src="freelance/citasApp/citas2.png" class="d-block w-100" alt="freelance/citasApp/citas1.png"/>
                          </div>
                          <div class="carousel-item">
                            <img src="freelance/citasApp/citas3.png" class="d-block w-100" alt="freelance/citasApp/citas1.png"/>
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
                      <BsCodeSlash className= 'icon'/>
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
    )
}
