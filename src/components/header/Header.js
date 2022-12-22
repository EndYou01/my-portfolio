import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Portofolio.
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/about"
                        >
                            About
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/work"
                        >
                            Work
                        </NavLink>

                        <NavLink
                            className='nav-item nav-link'
                            to='/contact'
                        > 
                            Contact
                        </NavLink>
                    </div>
                </div>    
                
            </nav>
        
        </header>
    )
}
