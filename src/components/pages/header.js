import '../styles/header.css'
import 'aos/dist/aos.css'

import { FaBars, FaChevronDown, FaTimes, FaUserGraduate } from 'react-icons/fa'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LoginActions } from '../../store/auth'
import { NavLink } from 'react-router-dom'
import logo from '../images/CTA-Logo.png'
import search from '../images/search-icon.svg'

const Header = () => {

    const [display, setDisplay] = useState(false);
    const showDisplay = () => {
        setDisplay(true);
    }
    const hideDisplay = () => {
        setDisplay(false);
    }

    /*const [selectedValue, setSelectedValue] = useState('option1');

    const handleSelectChange=(event)=> {
        setSelectedValue(event.target.value);
    }

    return (
            <select value={selectedValue} onChange={handleSelectChange}>
            <option value="programs">Programmes</option>
            <option value="faqs">faqs</option>
            <option value="option3">Option 3</option>
        </select>
     );*/

    const [state, setState] = useState(false);
    const showDropdown = () => {
        setState(true);
    }
    const hideDropdown = () => {
        setState(false);
    }

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
            <nav className={nav ? 'header bg' : 'header'} id='navbar'>
                <div className='logo'>
                    <a href="https://cwwtechafrica.com" onClick={closeLinks}><img src={ logo } alt="page-logo"  /></a>
                </div>

                <div className='nav-bar'>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><NavLink to="/" onClick={closeLinks} className={({ isActive }) => isActive ? 'nav-menu.active' : ""} end style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>Home</NavLink></li>
                        <li><NavLink to="about" onClick={closeLinks} >About us</NavLink></li>

                        <div className='drop-down-cont' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <li><NavLink to="contact" onClick={closeLinks} >Contact us <FaChevronDown className='icon'/></NavLink></li>

                            { state? ( <ul onMouseEnter={showDropdown} className="dropdown">
                                < li > <NavLink to="faqs" onClick={closeLinks} >Faqs</NavLink></li>
                            </ul>):null
                            }
                        </div>
                        <div className='drop-down-cont' onMouseEnter={showDisplay} onMouseLeave={hideDisplay}>
                            <li><NavLink to="programs" onClick={closeLinks}>Programmes <FaChevronDown className='icon' /></NavLink></li>

                            { display? ( <ul onMouseEnter={showDisplay} className="dropdown">
                                < li > <NavLink to="courses" onClick={closeLinks}>Courses</NavLink></li>
                            </ul>):null
                            }
                        </div>

                        {!isloggedin && (
                            <>
                                <li><NavLink to="login" onClick={closeLinks}>Login</NavLink></li>
                                <li><NavLink to="register" onClick={closeLinks}>Sign up</NavLink></li>
                            </>
                        )}

                        {isloggedin && (
                            <>
                                <li><NavLink to="./account" onClick={closeLinks}>My account</NavLink></li>
                                <li><NavLink to="/" onClick={logoutHandler}>Logout</NavLink></li>
                            </>
                        )}

                    </ul>
                    <section>
                        {/*<input type="search" name="" id="search-button" />
                        <img src={search} alt="" width={'35px'} id="search-icon" />*/}
                        <div className="hamburger" onClick={handleClick} >
                            {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) :
                                (<FaBars size={20} style={{ color: '#fff' }} />)
                            }
                        </div>
                    </section>
                </div>


            </nav>

        </Fragment>
    )
}

export default Header;