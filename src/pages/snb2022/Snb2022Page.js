import React from 'react'
import { Link } from 'react-router-dom';

import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
  
export const Snb2022Page = () => {
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
                  <h1 className='Colorh1'>SNB 2022</h1>
                  <p>
                    {text("snb.p1")}
                  </p>
                  <br />

                  <div id="carouselExampleControls carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                      <div class="carousel-item active">
                        <img src="snb2022/snb1.png" class="d-block w-100" alt="..."/>
                      </div>

                      <div class="carousel-item">
                        <img src="snb2022/snb2.png" class="d-block w-100" alt="..."/>
                      </div>

                      <div class="carousel-item">
                        <img src="snb2022/snb3.png" class="d-block w-100" alt="..."/>
                      </div>

                      <div class="carousel-item">
                          <img src="snb2022/snb4.png" class="d-block w-100" alt="..."/>
                        </div>

                      <div class="carousel-item">
                          <img src="snb2022/snb5.png" class="d-block w-100" alt="..."/>
                        </div>

                      <div class="carousel-item">
                          <img src="snb2022/snb6.png" class="d-block w-100" alt="..."/>
                        </div>

                      <div class="carousel-item">
                        <img src="snb2022/snb7.png" class="d-block w-100" alt="..."/>
                      </div>

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>

                    </div>

                <br/>
                  <ul>
                    <li>{text("snb.l1")}</li>
                    <li>{text("snb.l2")}</li>
                  </ul>
                </div>

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
                      <BsCodeSlash className= 'icon'/>
                      <Link
                        target="_blank"
                        to="https://github.com/EndYou01/my-portfolio"
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
