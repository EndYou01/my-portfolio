import { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
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
                        <h1 className='Colorh1'>Fuego Abierto GelSoft</h1>
                        <p>
                            {text("fuegoabierto.p2")}
                        </p>
                        <br />

                    </div>

                    <CarouselImage images={images} />
                    <br />

                    <div className='project_info'>
                        <h2>{text("snb.h2_1")}</h2>
                        <h3>Front End:</h3>
                        <p>
                            {text("fuegoabierto.p3")}
                        </p>

                        <ShowTechIcons technologies={["Typescript", "React", "Tailwind", "Vite"]} position='end' />

                        <h3>Back End:</h3>
                        <p>
                            {text("fuegoabierto.p4")}
                        </p>

                        <ShowTechIcons technologies={["MySql", "NestJS", "TypeORM"]} position='end' />

                        <br></br>
                        <br></br>

                    </div>
                </main>
            </div>
        </Fade>
    )
}
