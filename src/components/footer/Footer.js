import React from 'react'
import { Link } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import {useTranslation} from 'react-i18next'

export const Footer = () => {
  const [text, i18n] = useTranslation("global")

    return (
        <footer id="contact">
      <Fade>
        <div className='contact_content'>
          <h2>{text("footer.contactMe")}</h2>
          <ul className='contact_information_list'>
            <Link>
              <li>
                <HiOutlineMail className= 'icon'/>
                <a
                  href="jorgesenjudo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  jorgesenjudo@gmail.com
                </a>
              </li>
            </Link>

            <Link>
              <li>
                <FaGithub className= 'icon'/>
                <a
                  href="https://github.com/EndYou01"
                  target="_blank"
                  rel="noreferrer"
                >
                    EndYou01
                </a>
              </li>
            </Link>

            <Link>
              <li>
                <AiFillLinkedin className= 'icon'/>
                <a
                  href="https://www.linkedin.com/in/jorge-senjudo-25122525b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text("footer.linkedin")}
                </a>
              </li>
            </Link>
          </ul>
          <br></br>
          <Link>
            <div className='this_page_source_container' >
              <BsCodeSlash className= 'icon'/>
              <a
                target="_blank"
                href="https://github.com/EndYou01/my-portfolio"
                rel="noreferrer"
              >
                {text("footer.source")}
              </a>
            </div>
          </Link>
        </div>
      </Fade>
    </footer>
    )
}
