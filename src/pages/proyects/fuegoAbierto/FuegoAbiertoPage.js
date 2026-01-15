import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

export const FuegoAbiertoPage = () => {

    const { fillVariable } = useContext(FillContext)

    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "fuegoAbierto/fuegoabierto1.png",
        "fuegoAbierto/fuegoAbierto2.png",
        "fuegoAbierto/fuegoAbierto3.png",
        "fuegoAbierto/fuegoAbierto4.png",
        "fuegoAbierto/fuegoAbierto5.png",
        "fuegoAbierto/fuegoAbierto6.png",
    ]

    return (
        <Fade>
            <div className={
                (fillVariable)
                    ? 'container'
                    : 'container color_dark'
            }>
                <main className='main'>

                    <BackButton />

                    <div>
                        <h1 className='Colorh1'>SNB 2022</h1>
                        <p>
                            {text("snb.p1")}
                        </p>
                        <br />
                        <ul>
                            <li>{text("snb.l1")}</li>
                            <li>{text("snb.l2")} <a className='link' href='https://www.linkedin.com/in/alejandro-martinez-66766725b'>Alejandro Martínez</a></li>
                        </ul>
                    </div>

                    <CarouselImage images={images} />
                    <br />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("snb.p2")}
                        </p>

                        <ShowTechIcons technologies={["Java"]} position='end'/>

                        <h3>Back End:</h3>
                        <p>
                            {text("snb.p3")}
                        </p>

                        <ShowTechIcons technologies={["MySql"]} position='end'/>

                        <br></br>
                        <br></br>
                        <div className='this_page_source_container' >
                            <BsCodeSlash className={
                                (fillVariable)
                                    ? 'icon'
                                    : 'icon btn_icon_dark'
                            } />
                            <a
                                target="_blank"
                                href="https://www.github.com/EndYou01/Snb2022"
                                rel="noreferrer"
                            >
                                {text("footer.source")}
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </Fade>
    )
}
