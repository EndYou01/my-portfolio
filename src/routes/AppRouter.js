import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';


import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

import { IndexPage } from '../pages/IndexPage';
import { AboutPage } from '../pages/about/AboutPage';
import { WorkPage } from '../pages/work/WorkPage';
import { Snb2022Page } from '../pages/proyects/snb2022/Snb2022Page';
import { Mandalorian } from '../pages/proyects/mandalorian/Mandalorian';
import { CitasApp } from '../pages/proyects/citasApp/CitasApp';
import { Confort } from '../pages/proyects/confort/Confort';
import { Coremant } from '../pages/proyects/coremant/Coremant';
import { FillContext } from '../context/FillContext';
import { CrossBorder } from '../pages/proyects/crossBorder/CrossBorder';
import { KidsrUs } from '../pages/proyects/kidsrUs/KidsrUs';
import { Lyn } from '../pages/proyects/lyn/Lyn';
import { TecoposAdmin } from '../pages/proyects/tecopos/TecoposAdmin';
import SinTerceros from '../pages/proyects/sinterceros/SinTerceros';

export const AppRouter = () => {

    const [fillVariable, setFillVariable] = useState(true)
	const [firstLoad, setFirstLoad] = useState(false)

    return (

        <FillContext.Provider value={{
            fillVariable,
            setFillVariable,
            firstLoad,
            setFirstLoad
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
                    <Route path='/crossBorder' element={<CrossBorder />} />
                    <Route path='/kidsrus' element={<KidsrUs />} />
                    <Route path='/lyn' element={<Lyn />} />
                    <Route path='/tecoposadmin' element={<TecoposAdmin />} />
                    <Route path='/sinterceros' element={<SinTerceros />} />
                </Routes>

                <div className='contain-footer'>
                    <Footer />
                </div>
            </BrowserRouter>
        </FillContext.Provider>
        
    )
}
