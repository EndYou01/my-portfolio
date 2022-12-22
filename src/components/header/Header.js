import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { MdWeb } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

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
                            Portofolio.
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

                        <NavLink 
                            className="nav-item nav-link navigation_button" 
                            to="/about"
                        >
                            <AiOutlineInfoCircle className='menu_icon' />
                            About
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link navigation_button" 
                            to="/work"
                        >
                            <MdWeb className='menu_icon' />
                            Work
                        </NavLink>

                        <NavLink
                            onClick={scrollToBottom}
                            className='nav-item nav-link navigation_button'
                        > 
                            <MdPermContactCalendar className='menu_icon' />
                            Contact
                        </NavLink>
                    </div>
                </div>    
                
            </nav>
        
        </header>
    )
}
