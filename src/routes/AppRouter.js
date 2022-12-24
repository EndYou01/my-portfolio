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

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>

                <Routes>
                    <Route path='/*' element={<IndexPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/work' element={<WorkPage/>}/>
                </Routes>
                
            <div className='contain-footer'>
            <Footer/>
            </div>
        </BrowserRouter>
    )
}
