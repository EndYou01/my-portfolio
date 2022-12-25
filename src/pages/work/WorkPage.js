import React from 'react'
import { Work } from '../../components/home/work/Work'

export const WorkPage = () => {
    const lastLang = localStorage.getItem('lastLang')||'EN'

    return (
        <>
            <head>
                <title>Work | Jorge Senjudo Developer Portfolio</title>
                    <meta
                        lang={(lastLang)}
                        name="description"
                        content="Personal projects completed and freelance jobs done by developer Anthony Fernandez"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <Work/>
        </>
    )
}
