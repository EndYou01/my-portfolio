import React, { useState } from 'react'
import { About } from '../components/home/about/About'
import { Skills } from '../components/home/skills/Skills'
import { WaveBlock } from '../components/home/wave/WaveBlock'
import { Work } from '../components/home/work/Work'
import { BsChevronDown } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

export const IndexPage = () => {
    const [scrollPosition] = useState(0);

    const {pathname} = useLocation()
    localStorage.setItem('lastLocation', pathname )

    return (
        <div className='indexContainer'>
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
