import '../styles/header.css'

import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import About from './about'
import Home from './home'
import React from 'react'
import logo from '../images/CTA-Logo.png'
import search from '../images/svg8.svg'

const Header = () => {
    return (
        <Router>
            <nav className='header'>
                <div className='logo'>
                    <img src={ logo } alt="" width={'50px'} />
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About us</Link></li>
                    <li><Link to="contact">Contact us</Link></li>
                    <li><Link to="account">My account</Link></li>
                    <li><Link to="logout">Logout</Link></li>
                    <li><img src={search} alt="" width={'20px'} /></li>
                </ul>

            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={ <About/>} />
            </Routes>
        </Router>
    )
}

export default Header