import '../styles/header.css'

import { FaBars, FaTimes } from 'react-icons/fa'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LoginActions } from '../../store/auth'
import { NavLink } from 'react-router-dom'
import logo from '../images/CTA-Logo.png'
import search from '../images/search-icon.svg'

const Header = () => {


    const isloggedin = useSelector((state) => (state.login.isloggedin));

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(LoginActions.logout());
    }



    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeLinks = () => setClick(false);
    //const [activeTab, setActiveTab] = useState('Home');

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        if (window.scrollY >= 80) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', handleNav);

    return (
        <Fragment>
            <nav className={nav ? 'header bg' : 'header'} id='navbar' data-aos="flip-right">
                <div className='logo'>
                    <a href="https://cwwtechafrica.com" onClick={closeLinks}><img src={ logo } alt="page-logo"  /></a>
                </div>

                <div className='nav-bar'>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><NavLink to="/" onClick={closeLinks} >Home</NavLink></li>
                        <li><NavLink to="about" onClick={closeLinks} >About us</NavLink></li>
                        <li><NavLink to="contact" onClick={closeLinks}>Contact us</NavLink></li>

                        {!isloggedin && (
                            <>
                                <li><NavLink to="login" onClick={closeLinks}>Login</NavLink></li>
                                <li><NavLink to="register" onClick={closeLinks}>Sign up</NavLink></li>
                            </>
                        )}

                        {isloggedin && (
                            <>
                                <li><NavLink to="account" onClick={closeLinks}>My account</NavLink></li>
                                <li><NavLink onClick={logoutHandler}>Logout</NavLink></li>
                            </>
                        )}

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