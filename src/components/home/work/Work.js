import React from 'react'
import {useTranslation} from 'react-i18next'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Work = () => {
  const [text] = useTranslation("global")

    return (
        <div id="work" className='work_container'>

          <Fade>
            <h1 className='header'>{text("work.h1")}</h1>
          </Fade>
        
        <div>
          <section className='projects_section'>
            <Fade>
                <div className='project_container'>
                  
                  <Link href="/snb2022">
                    <LazyLoadImage
                      className='bg_image'
                      alt="SNB 2022 Image"
                      src="snb2022/snb1.jpg"
                    />
                  </Link>

                  <div className='project_image_container'>
                    <LazyLoadImage
                      effect="blur"
                      className='project_image'
                      alt="Basketball Center Logo"
                      src="logos/snb_logo1x5.png"
                    />
                  </div>
                  
                  <div className='project_info_container'>
                    <h2>SNB 2022</h2>
                    <p>
                      SNB 2022 is a desktop app built to help basketball
                      fans to stay up to date with everything in the league.
                      Features an in-game chat, personalized notifications for
                      favorite teams and players, real time shot-chart that can be
                      targeted to specific players with play-by-play info alongside
                      it.
                    </p>
                      <Link href="/basketball-center">
                        <button className='learn_more_button'>
                          Learn More
                        </button>
                      </Link>
                  </div>
                </div>
              </Fade>
          </section>
          
          </div>
        </div>
    )
}
    