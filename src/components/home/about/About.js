import React from 'react'

export const About = () => {
    return (
        <div id="about" className='about_container'>
        <h1 className='center'>About & Experience.</h1>
        <br></br>
        <p>
          {/* Soy Jorge L. Senjudo, desarrollador Front-End con experiencia en desarrollo y construccion
          de sitios web. Eh trabajado solo y con otros desarrolladores en la creacion de los mismos,
          siempre teniendo como objetivo la superacion personal y profesional, para lograr el despliegue
          de softwares con la calidad adecuada. Trabajo principalmente usando codigo de ReactJS, con capacidad
          para aprender cualquier framework de JS o herramienta. Tambien tengo breve experiencia
          con lenguajes backend como JAVA y bases de datos como MySQL. Como meta quiero alcanzar a ser
          un desarrollador fullstack y poder llevar una vida plena. */}
          I am Jorge L. Senjudo, Front-End developer with experience in development and construction of websites.
          I worked alone and with other developers in the creation of them, always aiming at personal and professional
          improvement, to achieve the deployment of software with the appropriate quality. I work mainly using ReactJS code,
          with the ability to learn any JS framework or tool. I also have brief experience with backend languages such
          as JAVA and databases such as MySQL. As a goal I want to become a fullstack developer and be able to lead a
          full life.
        </p>
        <br></br>
        <h2 className='center'>Professional Experience.</h2>
        <div className='table'>
          <div style={{ border: "none" }} className='tr'>
            <div className='first_td'>2020 - Present</div>
            <div className='second_td'>
              <h3>Frontend Software Engineer/Analyst</h3>
              <p>United Automobile Insurance Company, Miami Gardens, FL</p>
              <br></br>
              <h4>Key Responsibilities.</h4>

              <ul>
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
              </ul>
            </div>
          </div>
        </div>
        <br></br>
        <h2 className='center'>Education.</h2>
        <div className='table'>
          <div className='tr'>
            <div className='first_td'>2020-09 - present</div>
            <div className='second_td'>
              <h3>Student of Computer Science Engineer</h3>
              <p>University of Computer Science, Havana, CUB</p>
              <br></br>
              <p>
                <strong>Graduation:</strong> not, yet
              </p>
              <p>
                <strong>Average:</strong> 4.5
              </p>
            </div>
          </div>
        </div>
      </div>

            
    )
}
