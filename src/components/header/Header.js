import React, {useState, useEffect} from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { MdWeb } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import {useTranslation} from 'react-i18next'
import { scrollToTop } from '../../functions/scrollToTop';
import { scrollToBottom } from '../../functions/scrollToBottom';

import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const sideMenuVariants = {
    open: {
      opacity: 1,
      x: "-100%",
      transition: { duration: 0.6, type: "spring" },
    },
    closed: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, type: "spring" },
    },
  };

export const Header = () => {

    const [text, i18n] = useTranslation("global")

    const navigate = useNavigate()

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

    var langx

    if(lang === 'ES'){
        langx = 'EN';
    }else{
        langx = 'ES';
    }

    const changeLanguaje = () => {
        if(lang === 'ES'){
            toEnglish();
        }else{
            toSpanish();
        }
    }

    return (
        <header className={
                    scrollPosition < 10
                    ? 'header_container_light'
                    : 'header_container'
                }>
                         
            <div className="header_content">
                    <span 
                        onClick={()=>{  navigate('/')
                                        scrollToTop()}} 
                        style={{ cursor: "pointer" }} 
                        className="header_title" 
                        >
                            {text("header.portofolio")}
                    </span>
                    
                
                
                <span
                    onClick={() => setIsMenuOpen(true)}
                    className='hamburger_menu'
                >
                    <GiHamburgerMenu />
                </span>

                <div 
                    onClick={()=>{
                    setIsMenuOpen(false)
                    }}
                    className={isMenuOpen ? 'nav_bg_open' : 'nav_bg_closed'}
                    >
                    <motion.div
                    animate={isMobile && (isMenuOpen ? "open" : "closed")}
                    variants={sideMenuVariants}
                    className='nav_container_open'
                    initial={false}
                    >
                    <AiOutlineClose
                        onClick={() => setIsMenuOpen(false)}
                        className='close_menu_button'
                    />

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
                            <button className="navigation_button dropdown-toggle" onClick={changeLanguaje}>
                                {langx}
                            </button>
                        </li>

                    </ul>
                    </motion.div>
                </div>    
                
            </div>
        
        </header>
    )
}
