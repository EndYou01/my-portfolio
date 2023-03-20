import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

import { IndexPage } from '../pages/IndexPage';
import { AboutPage } from '../pages/about/AboutPage';
import { WorkPage } from '../pages/work/WorkPage';
import { Snb2022Page } from '../pages/snb2022/Snb2022Page';
import { Mandalorian } from '../pages/mandalorian/Mandalorian';
import { CitasApp } from '../pages/citasApp/CitasApp';
import { Confort } from '../pages/confort/Confort';
import { Coremant } from '../pages/coremant/Coremant';
import { FillContext } from '../context/FillContext';
import { useState } from 'react';
import { activateDarkMode } from '../functions/activateDarkMode';


export const AppRouter = () => {

    const [fillVariable, setFillVariable] = useState(true)

    // if(!fillVariable){
    //     activateDarkMode()
    // }

    return (

        <FillContext.Provider value={{
            fillVariable,
            setFillVariable,
        }}>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/*' element={<IndexPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/work' element={<WorkPage />} />

                    <Route path='/snb' element={<Snb2022Page />} />
                    <Route path='/mandalorian' element={<Mandalorian />} />
                    <Route path='/citasApp' element={<CitasApp />} />
                    <Route path='/confort' element={<Confort />} />
                    <Route path='/coremant' element={<Coremant />} />
                </Routes>

                <div className='contain-footer'>
                    <Footer />
                </div>
            </BrowserRouter>
        </FillContext.Provider>
        
    )
}
