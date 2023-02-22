import React from 'react'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next'

export const Skills = () => {
  const [text] = useTranslation("global")

  return (
    <div className='content'>
      <Fade>
        <h1 className='skills_h1'>{text("skills.soft-skills")}</h1>
        <div className='columns'>
          <ul>
            <li>
              <span>HTML5/CSS</span>
            </li>
            <li>
              <span>MVC</span>
            </li>
            <li>
              <span>APIs</span>
            </li>
            <li>
              <span>Git/Github</span>
            </li>
            <li>
              <span>{text("skills.EB2")}</span>
            </li>
            <li>
              <span>{text("skills.TE")}</span>
            </li>
            <li>
              <span>{text("skills.Friendly")}</span>
            </li>
            <li>
              <span>{text("skills.FL")}</span>
            </li>
            <li>
              <span>{text("skills.PA")}</span>
            </li>
          </ul>
        </div>

        <h1 className='skills_h1'>{text("skills.hard-skills")}</h1>

        <div className='columns'>
          <ul>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>Typescript</span>
            </li>
            <li>
              <span>REST APIs</span>
            </li>
            <li>
              <span>Redux</span>
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
              <span>Bootstrap</span>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  )
}
