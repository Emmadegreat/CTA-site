import '../styles/header.css'

import { FaBars, FaTimes } from 'react-icons/fa'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import React, { useState } from 'react'

import About from './about'
import Account from './account'
import Contact from './contact'
import Home from './home'
import Logout from './logout'
import logo from '../images/CTA-Logo.png'
import search from '../images/svg8.svg'

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeLinks = () => setClick(false);

    return (
        <Router>
            <nav className='header'>
                <div className='logo'>
                    <a href="https://cwwtechafrica.com" onClick={closeLinks}><img src={ logo } alt="page-logo"  /></a>
                </div>

                <div className='nav-bar'>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><Link to="/" onClick={closeLinks}>Home</Link></li>
                        <li><Link to="about" onClick={closeLinks}>About us</Link></li>
                        <li><Link to="contact" onClick={closeLinks}>Contact us</Link></li>
                        <li><Link to="account" onClick={closeLinks}>My account</Link></li>
                        <li><Link to="logout" onClick={closeLinks}>Logout</Link></li>

                    </ul>
                    <section>
                        {/*<input type="search" name="" id="search-button" />*/}
                        <img src={search} alt="" width={'35px'} id="search-icon" />
                        <div className="hamburger" onClick={handleClick} >
                            {click ? (<FaTimes size={20} style={{ color: 'midnightblue' }} />) :
                                (<FaBars size={20} style={{ color: 'midnightblue' }} />)
                            }
                        </div>
                    </section>
                </div>


            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/account' element={<Account />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </Router>
    )
}

export default Header;