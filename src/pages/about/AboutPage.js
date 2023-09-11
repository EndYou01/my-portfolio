import React from 'react'
import { About } from '../../components/home/about/About'
import { Skills } from '../../components/home/skills/Skills'
import { useEffect } from 'react';
import { scrollToTop } from '../../functions/scrollToTop';
import ProfesionalExperience from '../../components/home/about/ProfesionalExperience';

export const AboutPage = () => {

    useEffect(() => {

        scrollToTop()

    }, []);

    return (
        <>
            <About />

            <ProfesionalExperience />

            <Skills />
        </>
    )
}
