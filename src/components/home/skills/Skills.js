import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next'
import { FillContext } from '../../../context/FillContext';
import skills from '../../../constant/skills';

export const Skills = () => {
	const [text] = useTranslation("global")

	const { fillVariable } = useContext(FillContext)

	return (

		<div className={"content"}>
			<Fade>
			<h1>{text("skills.skills")}</h1>
				<br></br>
				<div className={`${!fillVariable ? "columns columns-dark" : "columns"}`}>
					<ul>
						{skills.map((skill) => (
							<li key={`skill-${skill}`}>{skill}</li>
						))}
					</ul>
				</div>
			</Fade>
		</div>
	)
}
