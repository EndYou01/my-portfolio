import React from 'react'
import { About } from '../../components/home/about/About'
import { Skills } from '../../components/home/skills/Skills'

export const AboutPage = () => {

    const lastLang = localStorage.getItem('lastLang')||'EN'
    
    return (
        <>
        <head>
            <title> About | Jorge Senjudo Portafolio de Desarrollo</title>
            <meta
            lang={(lastLang)}
            name="description"
            content="Information about the developer experience and education of developer Anthony Fernandez."
          />
        </head>
        <About/>
        <Skills/>
        </>
    )
}
