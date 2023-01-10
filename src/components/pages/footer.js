import '../styles/footer.css'

import React from 'react'
import facebook from '../images/facebookicon.png'
import feed from '../images/feed.png'
import instagram from '../images/instag.png'

const Footer = (props) => {
    return (
        <section className='footer'>
             {/*<div className="footer-wrapper">
                <div className="card">
                    <p>COPYRIGHT <span>{ props.year}</span> &copy; CWW Tech Africa</p>
                </div>
                <div className="card first-card">
                   *<ul>
                        <a href="https://www.cwwtechafrican.com/contact-us" target="_blank" rel='noreferrer'><img src={ facebook } alt="faceooklink" width='50px' /></a>
                        <a href="https://www.cwwtechafrican.com/cta-application-form" target="_blank" rel='noreferrer'><img src={ instagram } alt="intagramlink" width='50px' /></a>
                        <a href="https://www.cwwtechafrican.com/referrals" target="_blank" rel='noreferrer'><img src={ feed } alt="feedlink" width='50px' /></a>
    </ul>

                </div>
            </div>*/}
        </section>
    )
}

export default Footer