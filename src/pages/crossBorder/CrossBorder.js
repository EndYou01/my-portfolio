import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
import { CarouselImage } from '../../components/carouselImage/CarouselImage';
import { FillContext } from '../../context/FillContext';

export const CrossBorder = () => {

    const { fillVariable } = useContext(FillContext)


    scrollToTop()
    const [text] = useTranslation("global")

    const images = [
        "freelance/crossBorderTrade/aviso_legal.png",
        "freelance/crossBorderTrade/producto.png",
        "freelance/crossBorderTrade/productos.png",
        "freelance/crossBorderTrade/home.png",
        "freelance/crossBorderTrade/Sobre_nosotros.png",
        "freelance/crossBorderTrade/politica_de_privacidad.png",
        "freelance/crossBorderTrade/Contacto.png",
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
                        <h1 className='Colorh1'>{text("tmf.h2")}</h1>
                        <p>
                            {text("tmf.p1")}
                        </p>
                        <br />
                        <ul>
                            <li>{text("snb.l1")}</li>
                            <li>{text("tmf.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
                        </ul>

                    </div>

                    <CarouselImage images={images} />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("tmf.p2")}
                        </p>

                        <ul>
                            <li>C++</li>
                        </ul>
                        <h3>Back End:</h3>
                        <p>
                            {text("tmf.p3")}
                        </p>
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
                            <div className='this_page_source_container' >
                                <BsCodeSlash className={
                                    (fillVariable)
                                        ? 'icon'
                                        : 'icon btn_icon_dark'
                                } />
                                <p>{text("footer.nosource")}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Fade>
    )
}
