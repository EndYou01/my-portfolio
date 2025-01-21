
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash, BsBoxArrowInUpRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';

const SinTerceros = () => {

    const { fillVariable } = useContext(FillContext)


    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "freelance/sinterceros/st1.png",
        "freelance/sinterceros/st2.png",
        "freelance/sinterceros/st3.png",
        "freelance/sinterceros/st4.png",
        "freelance/sinterceros/st5.png",
        "freelance/sinterceros/st6.png",
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
                        <h1 className='Colorh1'>SinTerceros</h1>
                        <p>
                            {text("sinterceros.p2")}
                        </p>
                        <br />
                        {/* <ul>
                    <li>{text("sinterceros.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
                    <li>{text("sinterceros.l2")} <a className='link' href='https://github.com/YordanisPonce'>Yordanis Ponce</a></li>
                </ul> */}

                    </div>

                    <CarouselImage images={images} />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("sinterceros.p3")}
                        </p>

                        <ShowTechIcons technologies={["React", "Vite", "Axios", "Tailwind", "TypeScript"]} position='end' />

                        <h3>Back End:</h3>

                        <p>
                            {text("sinterceros.p4")}
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

                            <a href='https://sinterceros.com/'>{text("general.visitSite")}</a>
                        </div>
                    </div>
                </main>
            </div>
        </Fade>
    )
}

export default SinTerceros
