import React from 'react'
import { Link } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
    return (
        <footer id="contact">
      <Fade>
        <div >
          <h1>Contact Me.</h1>
          <ul>
            <Link>
              <li>
                <HiOutlineMail />
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
                <FaGithub />
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
                <AiFillLinkedin />
                <a
                  href="https://www.linkedin.com/in/jorge-senjudo-25122525b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My LinkedIn Profile
                </a>
              </li>
            </Link>
          </ul>
          <br></br>
          <Link>
            <div >
              <BsCodeSlash />
              <a
                target="_blank"
                href="https://github.com/EndYou01/my-portfolio"
                rel="noreferrer"
              >
                See source code.
              </a>
            </div>
          </Link>
        </div>
      </Fade>
    </footer>
    )
}
