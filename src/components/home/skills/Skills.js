import React from 'react'
// import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next'
// import { FillContext } from '../../../context/FillContext';
import skills from '../../../constant/skills';

export const Skills = () => {
	const [text] = useTranslation("global")


	return (
		// <div className='content'>
		// 	<Fade>
		// 		{/* Soft Skills */}
		// 		<h1 className='skills_h1'>{text("skills.soft-skills")}</h1>
		// 		<div className={
		// 			(!fillVariable)
		// 				? 'columns liDark'
		// 				: 'columns'
		// 		}>
		// 			<ul>
		// 				<li>
		// 					<span>{text("skills.EB2")}</span>
		// 				</li>
		// 				<li>
		// 					<span>{text("skills.TE")}</span>
		// 				</li>
		// 				<li>
		// 					<span>{text("skills.Friendly")}</span>
		// 				</li>
		// 				<li>
		// 					<span>{text("skills.FL")}</span>
		// 				</li>
		// 				<li>
		// 					<span>{text("skills.PA")}</span>
		// 				</li>
		// 				<li>
		// 					<span>{text("skills.CO")}</span>
		// 				</li>
		// 			</ul>
		// 		</div>


		// 		{/* Support Technologies */}
		// 		<h1 className='skills_h1'>{text("skills.support-technologies")}</h1>
		// 		<br />
		// 		<div className={
		// 			(!fillVariable)
		// 				? 'columns liDark'
		// 				: 'columns'
		// 		}>
		// 			<
		// 				technologies={["git", "github", "vite", "Axios", "bootstrap", "React Bootstrap", "antdesign", "postman", "swr", "SASS", "Redux", "Redux ToolKit", "Tailwind"]}
		// 				position='center'
		// 			/>

		// 		</div>


		// 		{/* Hard Technologies */}
		// 		<h1 className='skills_h1'>{text("skills.hard-technologies")}</h1>
		// 		<br />
		// 		<div className={
		// 			(!fillVariable)
		// 				? 'columns liDark'
		// 				: 'columns'
		// 		}>
		// 			{/* Hard Skills */}
		// 			<
		// 				technologies={["HTML", "CSS", "React", "TypeScript", "javascript", "REST API", "Next.js"]}
		// 				position='center'
		// 			/>
		// 		</div>
		// 	</Fade>
		// </div>

		<div className={"content"}>
			<Fade>
			<h1>{text("skills.skills")}</h1>
				<br></br>
				<div className={"columns"}>
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
