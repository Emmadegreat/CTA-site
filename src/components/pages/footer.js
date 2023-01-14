import '../styles/footer.css'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

import React from 'react'

//import facebook from '../images/facebookicon.png'
//import feed from '../images/feed.png'
//import instagram from '../images/instag.png'

const Footer = (props) => {
    return (
        <footer>

            <section className="section-11">

                <div className="card">
                    <div className="inner-card">
                        <h5>QUICK LINKS</h5>
                        <a href="https://www.cwwtechafrican.com/faqs" target="_blank" rel='noreferrer'>FAQs</a>
                        <a href="https://www.cwwtechafrican.com/internship-placement-form" target="_blank" rel='noreferrer'>Hire an Intern</a>
                        <a href="https://www.cwwtechafrican.com/cta-volunteer-form" target="_blank" rel='noreferrer'>Volunteer</a>
                        <a href="https://www.cwwtechafrican.com/#" target="_blank" rel='noreferrer'>Donate</a>
                    </div>
                    <div className="inner-card">
                        <h5>ABOUT CTA</h5>
                        <a href="https://www.cwwtechafrican.com/about-us" target="_blank" rel='noreferrer'>About us</a>
                        <a href="https://www.cwwtechafrican.com/contact-us" target="_blank" rel='noreferrer'>Contact us</a>
                        <a href="https://www.cwwtechafrican.com/cta-application-form" target="_blank" rel='noreferrer'>Apply as a trainee</a>
                        <a href="https://www.cwwtechafrican.com/referrals" target="_blank" rel='noreferrer'>Referrals</a>
                    </div>

                </div>
                <div className="card1">
                    <input type="search" name="search" id="" placeholder='search'/>
                </div>
            </section>

            <section className='footer'>
                <div className="footer-wrapper" id='first-card'>
                    <div className="card">
                        <p>COPYRIGHT <span>{ props.year}</span> &copy; <b>CWW Tech Africa</b></p>
                    </div>
                    <div className="card" id="second-card">
                    <ul>
                            <a href="https://www.facebook.com/cwwtechafrica" target="_blank" rel='noreferrer'>< FaFacebook className='social-icon' style={{ color:'#ffc21c' }} /></a>
                            <a href="https://www.instagram.com/cwwtechafrica" target="_blank" rel='noreferrer'>< FaInstagram className='social-icon' style={{ color:'#ffc21c' }} /></a>
                            <a href="https://www.cwwtechafrican.com/feed" target="_blank" rel='noreferrer'>< FaFacebook className='social-icon' style={{ color:'#ffc21c' }} /></a>
                        </ul>

                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer

