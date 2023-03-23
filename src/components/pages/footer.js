import '../styles/footer.css'

import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import scrollToTop from 'react-scroll-to-top'

const Footer = (props) => {
    return (
        <footer>

            <section className="first-section">
                <div>
                    <ScrollToTop
                        smooth top={20}
                        height="28" width="28"
                        color='#fff'
                        style={{ background: "#002594"}}
                    />
                </div>

                <div className="card">
                    <div className="inner-card">
                        <h5>ABOUT CTA</h5>
                        <a href="https://www.cwwtechafrican.com/about-us" target="_blank" rel='noreferrer'>About us</a>
                        <a href="https://www.cwwtechafrican.com/contact-us" target="_blank" rel='noreferrer'>Contact us</a>
                        <a href="https://www.cwwtechafrican.com/cta-application-form" target="_blank" rel='noreferrer'>Apply as a trainee</a>
                        <a href="https://www.cwwtechafrican.com/referrals" target="_blank" rel='noreferrer'>Referrals</a>
                    </div>
                    <div className="inner-card">
                        <h5>PARTNER WITH US</h5>
                        <a href="https://www.cwwtechafrican.com/#" target="_blank" rel='noreferrer'>CTA Business</a>
                        <a href="https://www.cwwtechafrican.com/internship-placement-form" target="_blank" rel='noreferrer'>Hire an Intern</a>
                        <a href="https://www.cwwtechafrican.com/cta-volunteer-form" target="_blank" rel='noreferrer'>Volunteer</a>
                        <a href="https://www.cwwtechafrican.com/#" target="_blank" rel='noreferrer'>Donate</a>
                    </div>
                    <div className="inner-card">
                        <h5>QUICK LINKS</h5>
                        <a href="https://www.cwwtechafrican.com/faqs" target="_blank" rel='noreferrer'>FAQs</a>
                        <a href="https://www.cwwtechafrican.com/courses" target="_blank" rel='noreferrer'>Courses</a>
                        <a href="https://www.cwwtechafrican.com/Programmes" target="_blank" rel='noreferrer'>Programmes</a>
                        <a href="https://www.cwwtechafrican.com/#" target="_blank" rel='noreferrer'>Blog</a>
                    </div>

                </div>
                <div className="card1">
                    <div className='inner-card-1' id='inner-card-1'>
                        <input type="search" name="search" id="" />
                        <button type="submit">Search</button>
                    </div>
                    <div className="inner-card-1">
                        <p>Follow us on Social media</p>
                        <ul>
                            <a href="https://www.facebook.com/cwwtechafrica" target="_blank" rel='noreferrer'>< FaFacebook className='social-icon' style={{ color:'#fff' }} /></a>
                            <a href="https://www.instagram.com/cwwtechafrica" target="_blank" rel='noreferrer'>< FaInstagram className='social-icon' style={{ color:'#fff' }} /></a>
                            <a href="https://www.twitter.com/cwwtechafrica_" target="_blank" rel='noreferrer'>< FaTwitter className='social-icon' style={{ color: '#fff' }} /></a>
                            <a href="https://www.youtube.com/@cwwtechafrica" target="_blank" rel='noreferrer'>< FaYoutube className='social-icon' style={{ color: '#fff' }} /></a>
                            <a href="https://www.linkedin.com/company/cww-tech-africa/" target="_blank" rel='noreferrer'>< FaLinkedinIn className='social-icon' style={{ color:'#fff' }} /></a>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='footer'>
                <div className="footer-wrapper">
                    <div className="card">
                        <p>Copyright &copy; <span>{ props.year}</span>  <b>CWW Tech Africa</b></p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer

