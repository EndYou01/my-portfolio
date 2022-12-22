import React from 'react'
import Wave from 'react-wavify'
import styles from "./jumbo.module.css";
import { Fade } from "react-awesome-reveal";

export const WaveBlock = () => {
    return (
      <div className={styles.container}>
      <div className={styles.content}>
        <Fade>

          <h3 className='animate__animated animate__fadeInDown animate__delay-1s animate__slow'>Hi, I'm Jorge!</h3>
          
          <h1 className='animate__animated animate__backInUp animate__delay-2s animate__slow'>I'm a fullstack software engineer with 3+ years of experience building production ready applications.</h1>

          <button className={styles.button}>
            <a
              target="_blank"
              href="mailto:anthonyfdez23@gmail.com"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </button>
        </Fade>

        <br/>
        <Wave
          className={styles.wave}
          fill="rgb(20,20,20)"
          paused={false}
          options={{
            height: 10,
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
    )
}
