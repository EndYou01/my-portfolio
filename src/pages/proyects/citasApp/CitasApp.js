import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../../functions/scrollToTop';
import { BackButton } from '../../../components/backButton/BackButton';
import { CarouselImage } from '../../../components/carouselImage/CarouselImage';
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons';



export const CitasApp = () => {
	scrollToTop()
	const [text] = useTranslation("global")

	const { fillVariable } = useContext(FillContext)

	const images = [
		"freelance/citasApp/citas1.png",
		"freelance/citasApp/citas2.png",
		"freelance/citasApp/citas3.png"
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
						<h1 className='Colorh1'>CitasApp</h1>
						<p>
							{text("citas.p1")}
						</p>
						<ul>
							<li>{text("tmf.l1")} <a className='link' href='https://github.com/Panik-Attack'>Eduardo Garcia Alfonso</a></li>
						</ul>
						<br />
					</div>

					<CarouselImage images={images} />
					<br />

					<div className='project_info'>
						<h2>{text("snb.h2_1")}</h2>
						<h3>Front End:</h3>
						<p>
							{text("citas.p2")}
						</p>

						<ShowTechIcons technologies={["AntDesign", "React"]}/>

						<h3>Back End:</h3>
						<p>
							{text("citas.p3")}
						</p>

						<ShowTechIcons technologies={["JavaScript"]} position='end'/>

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
								href="https://github.com/Panik-Attack/Citas"
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
