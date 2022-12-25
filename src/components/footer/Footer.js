import React from 'react'
import { Link } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const [text] = useTranslation("global")

  return (
    <footer id="contact">
      <Fade>
        <div className='contact_content'>
          <h2>{text("footer.contactMe")}</h2>
          <ul className='contact_information_list'>
            <li>
              <HiOutlineMail className='icon' />
              <Link
                to="jorgesenjudo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jorgesenjudo@gmail.com
              </Link>
            </li>

            <li>
              <FaGithub className='icon' />
              <Link
                to="/https://github.com/EndYou01"
                target="_blank"
                rel="noreferrer"
              >
                EndYou01
              </Link>
            </li>

            <li>
              <AiFillLinkedin className='icon' />
              <Link
                to="/https://www.linkedin.com/in/jorge-senjudo-25122525b/"
                target="_blank"
                rel="noreferrer"
              >
                {text("footer.linkedin")}
              </Link>
            </li>
          </ul>
          <br></br>
          <div className='this_page_source_container' >
            <BsCodeSlash className='icon' />
            <Link
              target="_blank"
              to="/https://github.com/EndYou01/my-portfolio"
              rel="noreferrer"
            >
              {text("footer.source")}
            </Link>
          </div>
        </div>
      </Fade>
    </footer>
  )
}
