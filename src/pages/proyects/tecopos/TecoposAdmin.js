
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

export const TecoposAdmin = () => {

    const { fillVariable } = useContext(FillContext)


    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "freelance/tecopos/tecopos1.png",
        "freelance/tecopos/tecopos2.png",
        "freelance/tecopos/tecopos9.png",
        "freelance/tecopos/tecopos4.png",
        "freelance/tecopos/tecopos5.png",
        "freelance/tecopos/tecopos6.png",
        "freelance/tecopos/tecopos7.png",
        "freelance/tecopos/tecopos8.png",
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
                        <h1 className='Colorh1'>{text("tecoposadmin.t1")}</h1>
                        <p>
                            {text("tecoposadmin.p2")}
                        </p>
                        <br />
                    </div>

                    <CarouselImage images={images} />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("tecoposadmin.p3")}
                        </p>

                        <ShowTechIcons technologies={["React", "Redux", "Redux ToolKit", "Axios", "Tailwind", "TypeScript"]} position='end' />

                        <h3>Back End:</h3>

                        <p>
                            {text("tecoposadmin.p4")}
                        </p>
                        {/* <ul>
                            <li>none</li>
                        </ul> */}

                        <br></br>
                        <br></br>
                        <div className='this_page_source_container' >
                            <BsCodeSlash className={
                                (fillVariable)
                                    ? 'icon'
                                    : 'icon btn_icon_dark'
                            } />

                            <p>{text("footer.nosource")}</p>
                        </div>
                    </div>
                </main>
            </div>
        </Fade>
    )
}
