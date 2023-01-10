import '../styles/footer.css'

import React from 'react'
import facebook from '../images/facebookicon.png'
import feed from '../images/feed.png'
import instagram from '../images/instag.png'

const Footer = (props) => {
    return (
        <section className='footer'>
            <div className="footer-wrapper" id='first-card'>
                <div className="card">
                    <p>COPYRIGHT <span>{ props.year}</span> &copy; <b>CWW Tech Africa</b></p>
                </div>
                <div className="card" id="second-card">
                   <ul>
                        <a href="https://www.facebook.com/cwwtechafrica" target="_blank" rel='noreferrer'><img src={ facebook } alt="faceooklink" width='30px' /></a>
                        <a href="https://www.instagram.com/cwwtechafrica" target="_blank" rel='noreferrer'><img src={ instagram } alt="intagramlink" width='30px' /></a>
                        <a href="https://www.cwwtechafrican.com/feed" target="_blank" rel='noreferrer'><img src={ feed } alt="feedlink" width='30px' /></a>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Footer