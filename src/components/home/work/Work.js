import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LearnMoreButton } from '../../learnMoreButton/LearnMoreButton';

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

              <LazyLoadImage
                className='bg_image'
                alt="TMF Image"
                src="tmf/tmf1.png"
              />

              <div className='project_image_container'>
                <LazyLoadImage
                  effect="blur"
                  className='project_image'
                  alt="TMF Logo"
                  src="logos/tmf_logo.png"
                />
              </div>

              <div className='project_info_container'>
                <h2>{text("tmf.h2")}</h2>
                <p>
                  {text("tmf.p1")}
                </p>
                <LearnMoreButton pathname='/mandalorian' />
              </div>
            </div>
          </Fade>
        </section>

        <br />

        <section className='projects_section'>
          <Fade>
            <div className='project_container'>

              <LazyLoadImage
                className='bg_image'
                alt="SNB 2022 Image"
                src="snb2022/snb_1.jpg"
              />

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
                <p>{text("snb.p1")}
                </p>
                <LearnMoreButton pathname='/snb' />
              </div>
            </div>
          </Fade>
        </section>

        <br />

        <Fade>
          <h1 className='header'>{text("work.freelance")}</h1>
        </Fade>

        <section className='projects_section'>
          <Fade>
            <div className='project_container'>
              <LazyLoadImage
                className='bg_image'
                alt="CitasApp Image"
                src="freelance/citasApp/citas1.png"
              />

              <div className='project_image_container'>
                <LazyLoadImage
                  effect="blur"
                  className='project_image'
                  alt="CitasApp Logo"
                  src="logos/citas_logo.png"
                />
              </div>
              <div className='project_info_container'>
                <h2>CitasApp</h2>
                <p>{text("citas.p1")}
                </p>
                <LearnMoreButton pathname='/citasApp' />
              </div>
            </div>
          </Fade>
        </section>
        
        <br />

        <section className='projects_section'>
          <Fade>
            <div className='project_container'>
              <LazyLoadImage
                className='bg_image'
                alt="Confort Image"
                src="freelance/confort/Pantalla_Principal.jpg"
              />

              <div className='project_image_container'>
                <LazyLoadImage
                  effect="blur"
                  className='project_image'
                  alt="Confort Logo"
                  src="logos/confort_logo.png"
                />
              </div>
              <div className='project_info_container'>
                <h2>Confort</h2>
                <p>{text("confort.p")}
                </p>
                <LearnMoreButton pathname='/confort' />
              </div>
            </div>
          </Fade>
        </section>
        
        <br />

        <section className='projects_section'>
          <Fade>
            <div className='project_container'>
              <LazyLoadImage
                className='bg_image'
                alt="Coremant Image"
                src="freelance/coremant/coremant.png"
              />

              <div className='project_image_container'>
                <LazyLoadImage
                  effect="blur"
                  className='project_image'
                  alt="Coremant Logo"
                  src="logos/coremant_logo.png"
                />
              </div>
              <div className='project_info_container'>
                <h2>Coremant</h2>
                <p>{text("coremant.p")}
                </p>
                <LearnMoreButton pathname='/coremant' />
              </div>
            </div>
          </Fade>
        </section>
      </div>

    </div>
  )
}
