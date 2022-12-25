import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { MdWeb } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

import {useTranslation} from 'react-i18next'
import { scrollToTop } from '../../functions/scrollToTop';
import { scrollToBottom } from '../../functions/scrollToBottom';

export const Header = () => {

    const [text, i18n] = useTranslation("global")

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };  

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toSpanish = () =>{
        // window.location.reload();
        scrollToTop()
        localStorage.setItem('lastLang', 'ES')
        i18n.changeLanguage("es")
    }
    const toEnglish = () =>{
        scrollToTop()
        // window.location.reload();
        localStorage.setItem('lastLang', 'EN')
        i18n.changeLanguage("en")
    }

    const lang = localStorage.getItem('lastLang')||'EN'

    return (
        <header className={
                    scrollPosition < 10
                    ? 'header_container_light'
                    : 'header_container'
                }>
            
            <div className="header_content">
                <Link to='/'>
                    <span 
                        onClick={scrollToTop} 
                        style={{ cursor: "pointer" }} 
                        className="header_title" 
                        >
                            {text("header.portofolio")}
                    </span>
                </Link>

                <span
                    onClick={() => setIsMenuOpen(true)}
                    className='hamburger_menu'
                >
                    <GiHamburgerMenu />
                </span>

                <div className={
                    isMenuOpen ? 'nav_bg_open' : 'nav_bg_closed'
                    }
                    onClick={()=>{
                        setIsMenuOpen(false)
                    }}>

                    <ul className="navigation_list">
                        <li>
                        <NavLink 
                            className="navigation_button" 
                            onClick={scrollToTop}
                            to="/about"
                        >
                            <AiOutlineInfoCircle className='menu_icon' />
                            {text("header.about")}
                        </NavLink>
                        </li>

                        <li>
                        <NavLink 
                            className="navigation_button" 
                            onClick={scrollToTop}
                            to="/work"
                        >
                            <MdWeb className='menu_icon' />
                            {text("header.work")}
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                            className='navigation_button'
                            onClick={scrollToBottom}
                        > 
                            <MdPermContactCalendar className='menu_icon' />
                            {text("header.contact")}
                        </NavLink>
                        </li>

                        <li className="dropdown">
                            <button className="navigation_button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {lang}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><button className="dropdown-item" onClick={toSpanish}>ES</button></li>
                                <li><button className="dropdown-item" onClick={toEnglish}>EN</button></li>
                            </ul>
                        </li>

                    </ul>
                </div>    
                
            </div>
        
        </header>
    )
}
