import React from 'react'
import Wave from 'react-wavify'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import { useContext } from 'react';
import { FillContext } from '../../../helpers/FillContext';

export const WaveBlock = () => {
	const [text] = useTranslation("global")
	
	const [first, setfirst] = useState(true)

	let {fillVariable} = useContext(FillContext)

	console.log(fillVariable)

	return (
		<div className='wavecontainer'>
			<div className='wavecontent'>
				<Fade cascade>

					<h3 className='animate__animated animate__fadeInDown animate__delay-1s animate__slow'>{text("waveB.h3")}</h3>
					<br />
					<h1 className='animate__animated animate__backInUp animate__delay-1s animate__slow'>{text("waveB.h1")}</h1>

					<button className='button animate__animated animate__fadeInDown animate__delay-2s animate__slow'>
						<a
							target="_blank"
							href="mailto:jorgesenjudo@gmail.com"
							rel="noreferrer"
						>
							{text("footer.contactMe")}
						</a>
					</button>
				</Fade>

				<br />

				<Wave
					className='wave'
					fill={
						(fillVariable)
						? 	'rgb(20,20,20)'
						:	'rgb(255,255,255)'	
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
