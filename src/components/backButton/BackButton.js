import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {

    const navigate = useNavigate();

    const lastLocation = localStorage.getItem('lastLocation')

    return (
        <button className='bg_transparent my-element bckBtn'>
            <div onClick={() => { navigate(lastLocation) }}>
                <IoIosArrowBack className='icon' />
            </div>
        </button>
    )
}
