import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

export const RedCollegePage = () => {

    const { fillVariable } = useContext(FillContext)

    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "redcollege/redcollege1.jpg",
        "redcollege/redcollege2.jpg",
        "redcollege/redcollege3.jpg",
        "redcollege/redcollege4.jpg",
        "redcollege/redcollege5.jpg",
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
                        <h1 className='Colorh1'>RedCollege</h1>
                        <p>
                            {text("redcollege.p2")}
                        </p>
                        <br />
                    </div>

                    <CarouselImage images={images} />
                    <br />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("redcollege.p3")}
                        </p>

                        <ShowTechIcons technologies={["Tailwind", "TypeScript", "Vue", "Nuxt"]} position='end'/>

                        <h3>Back End:</h3>
                        <p>
                            {text("redcollege.p4")}
                        </p>

                        <ShowTechIcons technologies={["PostgreSql", "AdonisJs"]} position='end'/>

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
                                href="https://redcollege.cl"
                                rel="noreferrer"
                            >
                                {text("footer.visit")}
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </Fade>
    )
}
