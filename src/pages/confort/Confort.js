
import React from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
import { CarouselImage } from '../../components/carouselImage/CarouselImage';

export const Confort = () => {

  scrollToTop()
  const [text] = useTranslation("global")

  const images = [
    "freelance/confort/Pantalla_Principal.jpg",
    "freelance/confort/Pantalla_Carrito.png",
    "freelance/confort/Pantalla_Cuenta_Usuario.png",
    "freelance/confort/Pantalla_Footer.jpg",
    "freelance/confort/Pantalla_Pago.png",
    "freelance/confort/Pantalla_Principal_Mas_vendidos.jpg",
    "freelance/confort/Pantalla_Producto.png",
    "freelance/confort/MAS_VENDIDO.png",
    "freelance/confort/MENU_HAMBURGUE2.png",
    "freelance/confort/cuenta.png",
  ]

  return (
    <Fade>
      <div className='container'>
        <main className='main'>

          <BackButton />
          <div>
            <h1 className='Colorh1'>{text("confort.h2")}</h1>
            <p>
              {text("confort.p1")}
            </p>
            <br />
            
          </div>

          <CarouselImage images={images} />

          <div className='project_info'>
            <h2>{text("snb.h2_1")}</h2>
            <h3>Front End:</h3>
            <p>
              {text("confort.p2")}
            </p>

            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <h3>Back End:</h3>
            <p>
              {text("confort.p3")}
            </p>
            <ul>
              <li>Django</li>
            </ul>
            <br></br>
            <br></br>
            <div className='this_page_source_container' >
              <BsCodeSlash className='icon' />
                {text("footer.nosource")}
            </div>
          </div>
        </main>
      </div>
    </Fade>
  )
}
