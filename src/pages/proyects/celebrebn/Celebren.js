
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash, BsBoxArrowInUpRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

export const Celebren = () => {

    const { fillVariable } = useContext(FillContext)


    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "freelance/celebren/celebren1.png",
        "freelance/celebren/celebren2.jpg",
        "freelance/celebren/celebren3.jpg",
        "freelance/celebren/celebren4.jpg",
        "freelance/celebren/celebren5.jpg",
        "freelance/celebren/celebren6.jpg",
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
                        <h1 className='Colorh1'>Celebren</h1>
                        <p>
                            {text("celebren.p2")}
                        </p>
                        <br />
                    </div>

                    <CarouselImage images={images} />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("celebren.p3")}
                        </p>

                        <ShowTechIcons technologies={["React", "Axios", "Vite", "Tailwind", "TypeScript"]} position='end' />

                        <h3>Back End:</h3>

                        <p>
                            {text("celebren.p4")}
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

                        <div className='this_page_source_container' >
                            <BsBoxArrowInUpRight className={
                                (fillVariable)
                                    ? 'icon'
                                    : 'icon btn_icon_dark'
                            } />

                            <a href='https://celebrenstore.com/'>{text("general.visitSite")}</a>
                        </div>
                    </div>
                </main>
            </div>
        </Fade>
    )
}
