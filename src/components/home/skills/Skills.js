import React from 'react'
import { Fade } from "react-awesome-reveal";
import {useTranslation} from 'react-i18next'

export const Skills = () => {
  const [text, i18n] = useTranslation("global")

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
              <span>TypeScript</span>
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
              <span>Git</span>
            </li>
            <li>
              <span>UI Design</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>Web sockets</span>
            </li>
            <li>
              <span>APIs</span>
            </li>
            <li>
              <span>Jest</span>
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
          </ul>
        </div>
      </Fade>
    </div>
    )
}
 