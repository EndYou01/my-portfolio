
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

export const KidsrUs = () => {

    const { fillVariable } = useContext(FillContext)


    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "freelance/kidsrUs/withstockimage.gif",
        "freelance/kidsrUs/kids-r-us-1.png",
        "freelance/kidsrUs/input.gif",
        "freelance/kidsrUs/overimage.gif",
        "freelance/kidsrUs/kids-r-us-2.png"
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
                        <h1 className='Colorh1'>Kids'r'Us</h1>
                        <p>
                            {text("kidsrUs.p2")}
                        </p>
                        <br />
                        {/* <ul>
                            <li>{text("kidsrUs.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
                            <li>{text("kidsrUs.l2")} <a className='link' href='https://github.com/YordanisPonce'>Yordanis Ponce</a></li>
                        </ul> */}

                    </div>

                    <CarouselImage images={images} />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("kidsrUs.p3")}
                        </p>

                        <ShowTechIcons technologies={["React", "Redux", "Vite", "SASS"]} position='end'/>

                        <h3>Back End:</h3>
                        <ul>
                            <li>none</li>
                        </ul>

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
                                href="https://github.com/EndYou01/BB_Digital_KidsrUs"
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
