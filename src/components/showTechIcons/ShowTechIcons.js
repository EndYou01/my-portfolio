
import React from 'react'
import { ImageLoaded } from '../imageLoaded/ImageLoaded'

export const ShowTechIcons = ({ technologies }) => {

    const technologiesToLowerCase = technologies.map( element => {
        return element.toLowerCase()
    })

    const techIcons = [
        {
            name: "AntDesign",
            src: "icons/ant_design_icon.png"
        },
        {
            name: "Bootstrap",
            src: "icons/bootstrap_logo_icon.png"
        },
        {
            name: "Postman",
            src: "icons/postman_icon.png"
        },
        {
            name: "MySql",
            src: "icons/mysql_original_wordmark_logo_icon.png"
        },
        {
            name: "REST API",
            src: "icons/rest_api_icon.png"
        },
        {
            name: "Axios",
            src: "icons/axios_logo_icon.png"
        },
        {
            name: "Git",
            src: "icons/git_icon.png"
        },
        {
            name: "Github",
            src: "icons/github_icon.png"
        },
        {
            name: "Python",
            src: "icons/pythonIcon.png"
        },
        {
            name: "HTML",
            src: "icons/htmlIcon.png"
        },
        {
            name: "CSS",
            src: "icons/cssIcon.png"
        },
        {
            name: "Django",
            src: "icons/django_plain_logo_icon.png"
        },
        {
            name: "JavaScript",
            src: "icons/javascriptIcon.png"
        },
        {
            name: "C",
            src: "icons/c_original_logo_icon.png"
        },
        {
            name: "Java",
            src: "icons/java_original_logo_icon.png"
        },
        {
            name: "PHP",
            src: "icons/php_icon.png"
        },
        {
            name: "React",
            src: "icons/reactIcon.png"
        },
        {
            name: "Redux",
            src: "icons/reduxIcon.png"
        },
        {
            name: "SASS",
            src: "icons/sassIcon.png"
        },
        {
            name: "TypeScript",
            src: "icons/typescriptIcon.png"
        },
        {
            name: "Vite",
            src: "icons/viteIcon.png"
        },
        {
            name: "Laravel",
            src: "icons/laravel_plain_wordmark_logo_icon.png"
        }
    ]

    return (
        <ul className='techIconContainer'>
            {
                techIcons.map((e, index) => {
                    if (technologiesToLowerCase.includes(e.name.toLowerCase())) {
                        return <li key={index}>
                            <ImageLoaded effect={""} classname={"techIcon"} alt={"icon"} src={e.src}/>
                            <p>{e.name}</p>
                        </li>
                    }
                    return ""
                })
            }
        </ul>
    )
}
