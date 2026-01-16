import React from 'react'
import Wave from 'react-wavify'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next'
import { useContext } from 'react';
import { FillContext } from '../../../context/FillContext';

export const WaveBlock = () => {
	const [text, i18n] = useTranslation("global")

	let { fillVariable } = useContext(FillContext)

	const getCVFileName = () => {
		return i18n.language === 'en' 
			? 'portafolio_jorge_senjudo_english.pdf'
			: 'portafolio_jorge_senjudo.pdf'
	}

	const getDownloadName = () => {
		return i18n.language === 'en'
			? 'portfolio-jorge-senjudo-english.pdf'
			: 'portafolio-jorge-senjudo.pdf'
	}

	return (
		<div className='wavecontainer'>
			<div className='wavecontent'>
				<Fade cascade>

					<h3 className='animate__animated animate__fadeInDown animate__faster'>{text("waveB.h3")}</h3>
					<br />
					<h1 className='animate__animated animate__backInUp animate__faster'>{text("waveB.h1")}</h1>

					<button className='button animate__animated animate__fadeInDown animate__faster'>
						<a
							href={`/portfolio/${getCVFileName()}`}
							download={getDownloadName()}
						>
							{text("footer.downloadCV")}
						</a>
					</button>
				</Fade>

				<br />

				<Wave
					className='wave'
					fill={
						(fillVariable)
							? 'rgb(20,20,20)'
							: 'rgba(255, 255, 255, 0.967)'
					}
					paused={false}
					options={{
						height: 60,
						amplitude: 30,
						speed: 0.15,
						points: 3,
					}}
				/>

			</div>
		</div>
	)
}
