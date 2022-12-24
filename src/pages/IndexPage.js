import React, { useState } from 'react'
import { About } from '../components/home/about/About'
import { Skills } from '../components/home/skills/Skills'
import { WaveBlock } from '../components/home/wave/WaveBlock'
import { Work } from '../components/home/work/Work'
import { BsChevronDown } from "react-icons/bs";

export const IndexPage = () => {
    const lastLang = localStorage.getItem('lastLang')||'en'
    const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <div className='indexContainer'>
            
            <head>
                <title>Jorge L. Senjudo Web Developer Portfolio</title>
                <meta
                    lang="en"
                    name="description"
                    content="Jorge Senjudo, Front-End software engineer with experience in building production ready applications."
                />
                <link rel="icon" href="/favicon.ico" />
            </head>

            <main className='main'>
                <WaveBlock/>
                
                <div className={
                    scrollPosition > 20
                    ? 'hidden_animated_arrow'
                    : 'animated_arrow'
                }>
                    <BsChevronDown />
                </div>
                <About />
                <Work/>
                <Skills/>  
            </main>
        </div>
    )
}
