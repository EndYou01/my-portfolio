import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { MdWeb } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

import {useTranslation} from 'react-i18next'

export const Header = () => {

    const [text, i18n] = useTranslation("global")

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    const scrollToBottom = () => {
        window.scrollTo({ top: 100000, behavior: "smooth" });
      };

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

    return (
        <header className={
                    scrollPosition < 10
                    ? 'header_container_light'
                    : 'header_container'
                }>
            
            <nav className="navbar navbar-expand-sm header_content">
                <Link>
                    <span 
                        onClick={scrollToTop} 
                        style={{ cursor: "pointer" }} 
                        className="navbar-brand header_title" 
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
                    <div className="navbar-nav">

                        <li className='nav-item'>
                        <NavLink 
                            className=" nav-link navigation_button" 
                            to="/about"
                        >
                            <AiOutlineInfoCircle className='menu_icon' />
                            {text("header.about")}
                        </NavLink>
                        </li>

                        <li className='nav-item '>
                        <NavLink 
                            className="nav-link navigation_button" 
                            to="/work"
                        >
                            <MdWeb className='menu_icon' />
                            {text("header.work")}
                        </NavLink>
                        </li>

                        <li className='nav-item '>
                        <NavLink
                            onClick={scrollToBottom}
                            className='nav-link navigation_button'
                        > 
                            <MdPermContactCalendar className='menu_icon' />
                            {text("header.contact")}
                        </NavLink>
                        </li>

                        <li className='nav-item '>
                            <button className='btn-lg navigation_button' 
                                    type="button"
                                    onClick={()=> i18n.changeLanguage("en")}
                            >En
                            </button>
                        </li>

                        <li className='nav-item '>
                            <button className='btn-lg navigation_button' 
                                    type="button"
                                    onClick={()=> i18n.changeLanguage("es")}
                            >Es
                            </button>
                        </li>

                    </div>
                </div>    
                
            </nav>
        
        </header>
    )
}
