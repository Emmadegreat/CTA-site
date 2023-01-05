import '../styles/home.css'

import Data from '../data.json'
import React from 'react'
import image from '../images/CWW-Tech-Africa.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.PNG'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/cta-sect-3-img.png'

const Home = () => {


    return (
        <section className='home'>
            <section className="section-1">
                <div className="box box1">
                    <h1>CWW Tech Africa</h1>
                    <p>Empowering African youths with digital and tech skills.</p>
                    <a href="https://www.cwwtechafrica.com/join-the-waitlist" target={"_blank"} rel="noreferrer">APPLY AS A TRAINEE</a>
                </div>
                <div className="box box2">
                    <img src={image} alt=""  className="image" />
                </div>
            </section>

            <section className="section-2">
                <h2>What you stand to gain</h2>

                {/*Data.map((item, index = {}) => {

                        return ()
                    })*/}

                    <div className="container">
                        <div className="content">
                            <img src={ img1 } alt="" className='' />
                            <article>
                                <h3>Hands-on practical classes</h3>
                                <p>Work with real life projects with real companies</p>
                            </article>
                        </div>
                        <div className="content">
                            <img src={img2} alt="" className='' id='img-2' />
                            <article>
                                <h3>Mentorship</h3>
                                <p>You would have access to people already in the system and get guidance from them</p>
                            </article>
                        </div>
                    </div><br />


                    <div className="container">
                        <div className="content">
                            <img src={ img3 } alt="" className='' />
                            <article>
                                <h3>Certificate of completion</h3>
                                <p>You would be awarded a certificate of completion at the end of your training</p>
                            </article>
                        </div>
                        <div className="content">
                            <img src={img4} alt="" className='' id='img-2' />
                            <article>
                                <h3>Free soft skills training</h3>
                                <p>Get free soft skill training for free. Get equiped with life skills</p>
                            </article>
                        </div>
                    </div><br />


                    <div className="container">
                        <div className="content">
                            <img src={ img5 } alt="" className='' />
                            <article>
                                <h3>Instructor led training</h3>
                                <p>Get trained by the best mind in the industry</p>
                            </article>
                        </div>
                        <div className="content">
                            <img src={img6} alt="" className='' id='img-2' />
                            <article>
                                <h3>Internship</h3>
                                <p>
                                    Internships will be awarded on the basis of performance
                                    and commitment to the program
                                </p>
                            </article>
                        </div>
                    </div>

            </section>

            <section className="section-3">
                <div className="section-3-container">
                    <div className="box">
                        <article>
                            <b>CWW TECH AFRICA</b>
                            <h3>About Us</h3>
                            <p>
                                CWW tech Africa is empowering young people with digital and tech skills.
                                CWW Tech Africa was created to empower African youth to be employable
                                and entrepreneurial. Our graduates become mentors, contribute to CWW Tech
                                Africa community, the tech ecosystem and the world.
                            </p>
                        </article>
                    </div>
                    <div className="box">
                        <img src={ img7 } alt="" />
                    </div>

                </div>

            </section>

            <section className="section-4">
                <h3>Join the waitlist for CTA cohort 3.0</h3>
                <div className="section-4-container">
                    <div className="box">
                        <p>Instructor Led Training</p>
                        <button>100%</button>
                    </div>
                    <div className="box">
                        <p>Internship</p>
                        <button>100%</button>
                    </div>
                    <div className="box">
                        <p>Mentorship</p>
                        <button>100%</button>
                    </div>
                    <div className="box">
                        <p>Learning Community</p>
                        <button>100%</button>
                    </div>
                </div>

            </section>

            <section className="section-5">
                <section className="section-5-container">
                    <div className="box">
                        <h4>Want to Volunteer with us?</h4>
                        <p>
                            We are looking for skilled volunteers who are looking to be a part of
                            our mission to empower African youths with in-demand digital and tech skills.
                        </p>
                        <button><a href="https://www.cwwtechafrica.com/cta-volunteer-form/">Learn more</a></button>
                    </div>
                    <div className="box">
                        <h4>Need Interns?</h4>
                        <p>
                            Want to hire a talent, we have the best African talents in our community.
                            Our traineers are empowered with in-demand tech skills and also equipped with
                            soft skills and business skills. We have the best.
                        </p>
                        <button><a href="https://www.cwwtechafrica.com/internship-placement-form">Get in touch</a></button>
                    </div>
                </section>
            </section>

        </section>
    )
}

export default Home