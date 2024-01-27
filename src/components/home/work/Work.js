import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal";
import { LearnMoreButton } from '../../learnMoreButton/LearnMoreButton';
import { useContext } from 'react';
import { FillContext } from '../../../context/FillContext';
import { ImageLoaded } from '../../imageLoaded/ImageLoaded';
import { Link, useLocation } from 'react-router-dom';

export const Work = () => {
	const [text] = useTranslation("global")

	const { fillVariable } = useContext(FillContext)

	const location = useLocation().pathname.includes('work')

	return (
		<div id="work" className='work_container'>

			<Fade>
				<h1 className='header'>{text("work.h1")}</h1>
			</Fade>

			<div>
				<section className={
					(fillVariable)
						? 'projects_section'
						: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded effect={""} classname={"bg_image"} alt={"TMF Image"} src={"tmf/tmf1.png"} />

							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"TMF Logo"} src={"logos/tmf_logo.png"} />

							</div>

							<div className='project_info_container'>
								<h2>{text("tmf.h2")}</h2>
								<p>
									{text("tmf.p1")}
								</p>
								<LearnMoreButton pathname='/mandalorian' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<section className={
					(fillVariable)
						? 'projects_section'
						: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded effect={""} classname={"bg_image"} alt={"SNB 2022 Image"} src={"snb2022/snb_1.jpg"} />


							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Basketball Center Logo"} src={"logos/snb_logo1x5.png"} />

							</div>

							<div className='project_info_container'>
								<h2>SNB 2022</h2>
								<p>{text("snb.p1")}
								</p>
								<LearnMoreButton pathname='/snb' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<Fade>
					<h1 className='header'>{text("work.freelance")}</h1>
				</Fade>

				<section className={
					(fillVariable)
						? 'projects_section'
						: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CitasApp Image"} src={"freelance/citasApp/citas1.png"} />

							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"CitasApp Logo"} src={"logos/citas_logo.png"} />

							</div>
							<div className='project_info_container'>
								<h2>CitasApp</h2>
								<p>{text("citas.p1")}
								</p>
								<LearnMoreButton pathname='/citasApp' />
							</div>
						</div>
					</Fade>
				</section>

				{
					!location && (
						<>
							<br />
							<br />
							<Link to={"/work"} className='seeMore'>{text("general.seeMore")}</Link>
						</>
					)
				}

				<br />
				{
					location && (
						<>

							<section className={
								(fillVariable)
									? 'projects_section'
									: 'projects_section projects_section_dark'
							}>
								<Fade>
									<div className='project_container'>
										<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Confort Image"} src={"freelance/confort/Pantalla_Principal.jpg"} />



										<div className='project_image_container'>

											<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Confort Logo"} src={"logos/confort_logo.png"} />

										</div>
										<div className='project_info_container'>
											<h2>Confort</h2>
											<p>{text("confort.p")}
											</p>
											<LearnMoreButton pathname='/confort' />
										</div>
									</div>
								</Fade>
							</section>

							<br />

							<section className={
								(fillVariable)
									? 'projects_section'
									: 'projects_section projects_section_dark'
							}>
								<Fade>
									<div className='project_container'>
										<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Coremant Image"} src={"freelance/coremant/coremant.png"} />


										<div className='project_image_container'>

											<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Coremant Logo"} src={"logos/coremant_logo.png"} />

										</div>
										<div className='project_info_container'>
											<h2>Coremant</h2>
											<p>{text("coremant.p")}
											</p>
											<LearnMoreButton pathname='/coremant' />
										</div>
									</div>
								</Fade>
							</section>

							<br />

							<section className={
								(fillVariable)
									? 'projects_section'
									: 'projects_section projects_section_dark'
							}>
								<Fade>
									<div className='project_container'>
										<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CrossBorderTrade Image"} src={"freelance/crossBorderTrade/crossBorder.jpg"} />

										<div className='project_image_container'>

											<ImageLoaded effect={"blur"} classname={"project_image"} alt={"CrossBorderTrade Logo"} src={"logos/crossBorder_logo.png"} />

										</div>
										<div className='project_info_container'>
											<h2>Cross Border Trade</h2>
											<p>{text("crossBorder.p1")}
											</p>
											<LearnMoreButton pathname='/crossBorder' />
										</div>
									</div>
								</Fade>
							</section>

							<br />

							<section className={
								(fillVariable)
									? 'projects_section'
									: 'projects_section projects_section_dark'
							}>
								<Fade>
									<div className='project_container'>
										<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CrossBorderTrade Image"} src={"freelance/kidsrUs/KidsrUs_image.png"} />

										<div className='project_image_container'>

											<ImageLoaded effect={"blur"} classname={"project_image"} alt={"KidsrUs Logo"} src={"logos/kidsrUs_logo.png"} />

										</div>
										<div className='project_info_container'>
											<h2>Kids'R'Us</h2>
											<p>{text("kidsrUs.p1")}
											</p>
											<LearnMoreButton pathname='/kidsrUs' />
										</div>
									</div>
								</Fade>
							</section>
							<br />

							<section className={
								(fillVariable)
									? 'projects_section'
									: 'projects_section projects_section_dark'
							}>
								<Fade>
									<div className='project_container'>
										<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Lyn-Arte-Gráfico Image"} src={"freelance/lyn/lyn1.png"} />

										<div className='project_image_container'>

											<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Lyn-Arte-Gráfico Logo"} src={"logos/lynLogo.png"} />

										</div>
										<div className='project_info_container'>
											<h2>Lyn-Arte-Gráfico</h2>
											<p>{text("lyn.p1")}
											</p>
											<LearnMoreButton pathname='/lyn' />
										</div>
									</div>
								</Fade>
							</section>
							<br />


							<section className={
								(fillVariable)
									? 'projects_section'
									: 'projects_section projects_section_dark'
							}>
								<Fade>
									<div className='project_container'>
										<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"sinterceros Image"} src={"freelance/sinterceros/st1.png"} />

										<div className='project_image_container'>

											<ImageLoaded effect={"blur"} classname={"project_image"} alt={"sinterceros Logo"} src={"logos/sintercerosLogo.png"} />

										</div>
										<div className='project_info_container'>
											<h2>Sin terceros</h2>
											<p>{text("lyn.p1")}
											</p>
											<LearnMoreButton pathname='/sinterceros' />
										</div>
									</div>
								</Fade>
							</section>
							<br />

						</>
					)
				}
			</div>

		</div>
	)
}
