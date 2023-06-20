import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next'
import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../showTechIcons/ShowTechIcons';

export const Skills = () => {
	const [text] = useTranslation("global")
	const { fillVariable } = useContext(FillContext)


	return (
		<div className='content'>
			<Fade>
				{/* Soft Skills */}
				<h1 className='skills_h1'>{text("skills.soft-skills")}</h1>
				<div className={
					(!fillVariable)
						? 'columns liDark'
						: 'columns'
				}>
					<ul>
						<li>
							<span>{text("skills.EB2")}</span>
						</li>
						<li>
							<span>{text("skills.TE")}</span>
						</li>
						<li>
							<span>{text("skills.Friendly")}</span>
						</li>
						<li>
							<span>{text("skills.FL")}</span>
						</li>
						<li>
							<span>{text("skills.PA")}</span>
						</li>
						<li>
							<span>{text("skills.CO")}</span>
						</li>
					</ul>
				</div>


				{/* Support Technologies */}
				<h1 className='skills_h1'>{text("skills.support-technologies")}</h1>
				<br />
				<div className={
					(!fillVariable)
						? 'columns liDark'
						: 'columns'
				}>
					<ShowTechIcons
						technologies={["git", "github", "vite", "Axios", "bootstrap", "React Bootstrap", "antdesign", "postman", "swr", "SASS", "Redux", "Redux ToolKit"]}
						position='center'
					/>
				</div>


				{/* Hard Technologies */}
				<h1 className='skills_h1'>{text("skills.hard-technologies")}</h1>
				<br />
				<div className={
					(!fillVariable)
						? 'columns liDark'
						: 'columns'
				}>
					{/* Hard Skills */}
					<ul>
						<ShowTechIcons
							technologies={["HTML", "CSS", "React", "TypeScript", "javascript", "REST API", "Next.js"]}
							position='center'
						/>
					</ul>
				</div>
			</Fade>
		</div>
	)
}
