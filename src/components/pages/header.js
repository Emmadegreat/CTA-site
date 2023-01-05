import '../styles/header.css'

import { FaBars, FaTimes } from 'react-icons/fa'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import React, { Fragment, useState } from 'react'

import logo from '../images/CTA-Logo.png'
import search from '../images/search-icon.svg'

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeLinks = () => setClick(false);
    //const [activeTab, setActiveTab] = useState('Home')

    return (
        <Fragment>
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

        </Fragment>
    )
}

export default Header;