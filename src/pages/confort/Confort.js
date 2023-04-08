
import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";

import { scrollToTop } from '../../functions/scrollToTop';
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BackButton } from '../../components/backButton/BackButton';
import { CarouselImage } from '../../components/carouselImage/CarouselImage';
import { FillContext } from '../../context/FillContext';
import { ShowTechIcons } from '../../components/showTechIcons/ShowTechIcons';

export const Confort = () => {

	const { fillVariable } = useContext(FillContext)

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
			<div className={
				(fillVariable)
					? 'container'
					: 'container color_dark'
			}>
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

						<ShowTechIcons technologies={["HTML", "CSS", "JavaScript"]}/>
						
						<h3>Back End:</h3>
						<p>
							{text("confort.p3")}
						</p>

						<ShowTechIcons technologies={["Django", "Python"]}/>
						
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
