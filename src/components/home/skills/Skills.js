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
				<h1 className='skills_h1'>{text("skills.soft-skills")}</h1>
				<div className={
					(!fillVariable)
						? 'columns liDark'
						: 'columns'
				}>
					<ul>
						<ShowTechIcons technologies={["HTML", "CSS", "git", "github", "vite", 'Axios', 'bootstrap', 'antdesign', 'postman']} />
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

				<h1 className='skills_h1'>{text("skills.hard-skills")}</h1>

				<div className={
					(!fillVariable)
						? 'columns liDark'
						: 'columns'
				}>
					<ul>
						<ShowTechIcons technologies={["React", "TypeScript", "javascript", "SASS", "Redux", "REST API"]} />
					</ul>
					{/* <ul>
						<li>
							<span>React</span>
						</li>
						<li>
							<span>Javascript</span>
						</li>
						<li>
							<span>Typescript</span>
						</li>
						<li>
							<span>REST APIs</span>
						</li>
						<li>
							<span>Redux</span>
						</li>
						<li>
							<span>Sass</span>
						</li>
						<li>
							<span>Java</span>
						</li>
						<li>
							<span>C++</span>
						</li>
						<li>
							<span>Bootstrap</span>
						</li>
					</ul> */}
				</div>
			</Fade>
		</div>
	)
}
