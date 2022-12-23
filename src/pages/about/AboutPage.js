import React from 'react'

export const AboutPage = () => {

    const lastLang = localStorage.getItem('lastLang')||'en'
    
    return (
        <head>
            <title> About | Jorge Senjudo Portafolio de Desarrollo</title>
            <meta
            lang={(lastLang)}
            name="description"
            content="Information about the developer experience and education of developer Anthony Fernandez."
          />
        </head>
    )
}
