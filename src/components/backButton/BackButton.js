import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const BackButton = () => {

    const navigate = useNavigate();
    const [text] = useTranslation("global")

    const lastLocation = localStorage.getItem('lastLocation')
    console.log(lastLocation)
    return (
        <button className='bg_transparent my-element'>
            <div onClick={()=>{navigate(lastLocation)}}>
                <IoMdArrowBack className='icon'/>{text("snb.b")}
            </div>
        </button>
    )
}
