import '../styles/contact.css'

import { FaEnvelopeOpenText, FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaPhone, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

import React from 'react'

const Contact = () => {
    return (
        <section className='contact-us'>

            <div className="hero-section">
                <h2>Contact Us</h2>
            </div>
            <h3>We're here to help.</h3>

            <div className="card-wrapper">
                <div className="card">
                    <h4>Complaints</h4>
                    <p>
                        Have any complaints. Reach out to us and we would respond to you promptly
                    </p>
                    <span>hello@cwww.ctechafrica.com</span>

                </div>
                <div className="card">
                    <h4>Inquiries/Feedback</h4>
                    <p>
                        Send us a message and we would get back to you soon.
                    </p>
                    <span>hello@cwww.ctechafrica.com</span>
                </div>
                <div className="card">
                    <h4>Partnerships</h4>
                    <p>
                        We are open to partnerships. Do contact us via this email and we would get back
                        to you promptly.
                    </p>
                    <span>partnership@cwww.ctechafrica.com</span>
                </div>
            </div>

            <div className="card-2-wrapper">
                <div className="card1">
                    <h2>Get in touch</h2>

                    <p>
                        Feel free to reach us through any of our social media platforms. <br />
                        You can also contact us vial email.
                    </p>

                    <div className='card-inner'>
                        <span><FaEnvelopeOpenText className='icon' /></span>
                        <article>
                            <h4>EMAIL</h4>
                            <p>hello@cwwtechafrica.com</p>
                        </article><br />
                    </div>

                    <div className='card-inner'>
                        <span><FaPhone className='icon' /></span>
                        <article>
                            <h4>PHONE NUMBER</h4>
                            <p>+234815431297</p>
                        </article>
                    </div>

                    <h2>Follow us on social media</h2>

                    <ul>
                        <a href="https://www.facebook.com/cwwtechafrica" target="_blank" rel='noreferrer'>< FaFacebookSquare className='social-icon' style={{ color:'#002592' }} /></a>
                        <a href="https://www.instagram.com/cwwtechafrica" target="_blank" rel='noreferrer'>< FaInstagramSquare className='social-icon' style={{ color:'#002592' }} /></a>
                        <a href="https://www.twitter.com/cwwtechafrica_" target="_blank" rel='noreferrer'>< FaTwitterSquare className='social-icon' style={{ color: '#002592' }} /></a>
                        <a href="https://www.youtube.com/@cwwtechafrica" target="_blank" rel='noreferrer'>< FaYoutubeSquare className='social-icon' style={{ color: '#002592' }} /></a>
                        <a href="https://www.linkedin.com/company/cww-tech-africa/" target="_blank" rel='noreferrer'>< FaLinkedinIn className='social-icon' style={{ color:'#002592' }} /></a>
                    </ul>


                </div>
                <div className="card1">

                    <form action="" onSubmit="">

                        <p>Send us a message</p>
                        <span>"<small>*</small>" indicates required fields</span>
                        <legend>
                            <label htmlFor="name">Name<small>*</small></label>
                            <input type="text" name='name'required />
                        </legend>
                        <legend>
                            <label htmlFor="email">Email address<small>*</small></label>
                            <input type="email" name='email'required />
                        </legend>

                        <legend>
                            <label htmlFor="phone-number">Phone number<small>*</small></label>
                            <input type="tel" name='phone-number' required />

                        </legend>
                        <legend>
                            <label htmlFor="message">Send a message<small>*</small></label>
                            <textarea name="message"></textarea>
                        </legend>

                        <button type="submit" id='send-message'>Submit</button>
                    </form>
                </div>

            </div>

            <section className='com-section'>
                <div className="card">
                    <h3>Join our Tech community</h3>
                    <p>
                        Be the first to know about the latest courses, training programs,
                        jobs, interships and freebies.
                    </p>
                </div>
                <div className="card">
                    <div id=''></div>
                    <form action="" method="post">
                        <legend>
                            <label htmlFor="name">Firstname</label>
                            <input type="text" name='name' placeholder='Name'/>
                        </legend>
                        <legend>
                            <label htmlFor="email">Firstname</label>
                            <input type="text" name='email' placeholder='Email'/>
                        </legend>
                         <button type="submit">Send</button>
                    </form>

                </div>

            </section>

        </section>
    )
}

export default Contact