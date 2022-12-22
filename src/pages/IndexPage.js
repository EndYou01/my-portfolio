import React from 'react'
import { Footer } from '../components/footer/Footer'
import { About } from '../components/home/about/About'
import { Skills } from '../components/home/skills/Skills'
import { WaveBlock } from '../components/home/wave/WaveBlock'
import { Work } from '../components/home/work/Work'
import { Header } from '../components/header/Header'

export const IndexPage = () => {
    return (
        <>
        <Header/>
        <WaveBlock/>
        <div className='container'>

            <div className='contain'>
            <About />
            </div>

            <br/>

            <div className='contain'>
            <Work/>
            </div>
            
            <br/>

            <div className='contain'>
            <Skills/>    
            </div>

        </div>

        <div className='contain-footer'>
        <Footer/>
        </div>
        </>
    )
}
