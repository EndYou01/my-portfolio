import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { About } from '../components/home/about/About'
import { Skills } from '../components/home/skills/Skills'
import { WaveBlock } from '../components/home/wave/WaveBlock'
import { Work } from '../components/home/work/Work'

export const IndexPage = () => {
    return (
        <>
        <Header/>
        <WaveBlock/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
        </>
    )
}
