import React, { useContext } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FillContext } from '../../context/FillContext';
import { scrollToTop } from '../../functions/scrollToTop';

export const BackButton = () => {

    const navigate = useNavigate();

    const lastLocation = localStorage.getItem('lastLocation')

    const { fillVariable } = useContext(FillContext)

    return (
        <button className='bg_transparent my-element bckBtn'>
            <div onClick={() => { 
                navigate(lastLocation) 
                scrollToTop()
                }}>
                <IoIosArrowBack className={
                    (fillVariable)
                        ? 'bckBtn_icon'
                        : 'btn_icon_dark'
                } />
            </div>
        </button>
    )
}
