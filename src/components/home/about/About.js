import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal";

export const About = () => {
  const [text] = useTranslation("global")

  return (
    <div id="about" className='about_container'>
      <Fade>
        <h1 className='center'>{text("about.a&e")}</h1>
        <br></br>
        <p>
          {text("about.a&et")}
        </p>


        <br></br>
        <h2 className='center'>{text("about.profExp")}</h2>
        <div className='table'>
          <div style={{ border: "none" }} className='tr'>
            <div className='first_td'><p>{text("about.2020")}</p></div>
            <div className='second_td'>
              <h3>{text("about.fronh3")}</h3>
              <p>{text("about.fronp1")}</p>
              <br></br>
              {/* <h4>{text("about.fronh4")}</h4> */}

              {/* <ul>
                  <li>
                    As a front-end engineer, I was assigned to design and develop
                    robust user experiences.
                    <ul>
                      <li>
                        Designed and developed{" "}
                        <a
                          className="link"
                          target="_blank"
                          href="https://uaig.net"
                          rel="noreferrer"
                        >
                          a new homepage
                        </a>
                        . Built from scratch using ReactJS and TypeScript. With
                        much improved SEO and user interaction.
                      </li>
                      <li>
                        Migrated several internal websites and tools from old
                        codebases to use new technologies, up to the new industry
                        standards.
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    Integrated backend APIs (PHP, NodeJS, JAVA). And worked with
                    the backend team directly to create the best infrastructure
                    possible for our APIs.
                  </li>
                  <li>
                    Worked with object oriented (OOP) backend codebases in PHP and
                    JAVA
                  </li>
                </ul> */}
            </div>
          </div>
        </div>
        <br></br>
        <h2 className='center'>{text("about.education")}</h2>
        <div className='table'>
          <div className='tr'>
            <div className='first_td'><p>{text("about.2020")}</p></div>
            <div className='second_td'>
              <h3>{text("about.h3")}</h3>
              <p>{text("about.uci")}</p>
              <br></br>
              <p>
                <strong>{text("about.graduation1")}</strong> {text("about.graduation2")}
              </p>
              <p>
                <strong>{text("about.average")}</strong> 4.5
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>


  )
}
