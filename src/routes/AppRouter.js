import React from 'react'
import { 
    BrowserRouter,
    Routes,
    Route         
    } from "react-router-dom";
    

import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

import { IndexPage } from '../pages/IndexPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>

                <Routes>
                    <Route path='/*' element={<IndexPage/>}/>
                </Routes>
                
            <div className='contain-footer'>
            <Footer/>
            </div>
        </BrowserRouter>
    )
}
