import React from 'react'
import { Fade } from "react-awesome-reveal";
import {useTranslation} from 'react-i18next'

export const Skills = () => {
  const [text ] = useTranslation("global")

    return (
        <div className='content'>
      <Fade>
        <h1>{text("skills.h1")}</h1>
        <br></br>
        <div className='columns'>
          <ul>
            <li>
              <span>HTML5/CSS</span>
            </li>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>REST APIs</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>Git/Github</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>MVC</span>
            </li>
            <li>
              <span>APIs</span>
            </li>
            <li>
              <span>Sass</span>
            </li>
            <li>
              <span>Java</span>
            </li>
            <li>
              <span>C++</span>
            </li>




            <li>
              <span>{text("skills.UI")}</span>
            </li>
            <li>
              <span>{text("skills.FS")}</span>
            </li>
            <li>
              <span>{text("skills.EB2")}</span>
            </li>
            <li>
              <span>{text("skills.comunicative")}</span>
              </li>
            <li>
              <span>{text("skills.TE")}</span>
              </li>
            <li>
              <span>{text("skills.GA")}</span>
              </li>
            <li>
              <span>{text("skills.creative")}</span>
              </li>
            <li>
              <span>{text("skills.worker")}</span>
              </li>
          </ul>
        </div>
      </Fade>
    </div>
    )
}
 