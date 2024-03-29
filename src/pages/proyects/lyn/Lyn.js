
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

export const Lyn = () => {

    const { fillVariable } = useContext(FillContext)


    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "freelance/lyn/lyn1.png",
        "freelance/lyn/lyn2.png",
        "freelance/lyn/lyn3.png",
        "freelance/lyn/lyn4.png",
        "freelance/lyn/lyn5.png",
        "freelance/lyn/lyn6.png",
        "freelance/lyn/lyn7.png",
        "freelance/lyn/lyn8.png",
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
                        <h1 className='Colorh1'>Lyn-Arte-Gráfico</h1>
                        <p>
                            {text("lyn.p2")}
                        </p>
                        <br />
                        {/* <ul>
                            <li>{text("lyn.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
                            <li>{text("lyn.l2")} <a className='link' href='https://github.com/YordanisPonce'>Yordanis Ponce</a></li>
                        </ul> */}

                    </div>

                    <CarouselImage images={images} />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("lyn.p3")}
                        </p>

                        <ShowTechIcons technologies={["React", "Redux ToolKit", "Vite", "Axios", "Tailwind", "TypeScript"]} position='end' />

                        <h3>Back End:</h3>

                        <p>
                            {text("lyn.p4")}
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
