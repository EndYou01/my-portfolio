import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useLocation } from "react-router-dom";

export const LearnMoreButton = (pathname) => {

    const [text] = useTranslation("global")
    const location = useLocation()

    localStorage.setItem('lastLocation', location.pathname)

    return (
        <Link to={pathname}>
            <button className='learn_more_button'>
                {text("work.lm")}
            </button>
        </Link>
    )
}
