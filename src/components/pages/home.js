import '../styles/home.css'

import {Bounce, Fade, Slide, Zoom} from 'react-reveal'
import { FaCaretDown, FaCertificate, FaChalkboardTeacher, FaCheckCircle, FaUserCheck, FaUserGraduate } from 'react-icons/fa'
import React, { useEffect } from 'react'

import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import ScrollTrigger from 'react-scroll-trigger'
import bootcamp from '../images/cta-bootcamp.jpg'
import cohort from '../images/cta-cohort.jpg'
import col1_img from '../images/col1-img.jpg'
import col2_img from '../images/col2-img.jpg'
import col3_img from '../images/col3-img.jpg'
import country_logos from '../images/cooperation-countries-flags.png'
import faq from './faq.json'
import image from '../images/CWW-Tech-Africa.png'
import img1 from '../images/ux.jpg'
import img2 from '../images/data.jpg'
import img3 from '../images/web.jpg'
import img4 from '../images/digitalmktg.jpg'
import review1 from '../images/review1.jpeg'
import review2 from '../images/review2.jpg'
import review3 from '../images/review3.jpg'
import sect_3 from '../images/cta-sect-3-img.png'
import sect_6 from '../images/sect-6.jpg'
import sect_7 from '../images/sect-7.jpg'
import sect_8 from  '../images/sect-8.jpg'
import softskill from '../images/cta-softskill.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

//import 'aos/dist/aos.css'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import Data from '../data.json


const Home = () => {

    const [faqs, setFaqs] = useState(null);
    //const handleFaqs = (id) => setFaqs(id);

    const handleFaqs = (id) => {
        if (faqs === id) {
            return setFaqs(null);
        } else {
            setFaqs(id);
        }
    }

    const [counter, setCounter] = useState(false);

    const navigate = useNavigate();
    return (
        <section className='home'>
            <div className="spacer"></div>
            <section className="section-1">
                <div className="card card1">
                    <h1>CWW Tech Africa</h1>
                    <p>
                        We are empowering the next 1 million African youths with digital
                        and tech skills by 2030.
                    </p>
                    <a href="https://www.cwwtechafrica.com/join-the-waitlist" target={"_blank"} rel="noreferrer">APPLY AS A TRAINEE</a>
                </div>
                <div className="card card2">
                    <Slide right>
                        <img src={image} alt="heroImage"  className="image" />
                    </Slide>
                </div>
            </section>

            <section className="section-2">
                <h2>What you stand to gain</h2>

                {/*Data.map((item, index = {}) => {

                        return ()
                    })*/}

                    <div className="container">
                        <div className="content">
                            <span><FaCheckCircle className='icon' /></span>
                            <article>
                                <h4>Hands-on practical classes</h4>
                                <p>Work with real life projects with real companies</p>
                            </article>
                        </div>
                        <div className="content">
                            <span><FaUserGraduate className='icon' /></span>
                            <article>
                                <h4>Mentorship</h4>
                                <p>You would have access to people already in the system and get guidance from them</p>
                            </article>
                        </div>
                    </div><br />


                    <div className="container">
                        <div className="content">
                            <span><FaCertificate className='icon' /></span>
                            <article>
                                <h4>Certificate of completion</h4>
                                <p>You would be awarded a certificate of completion at the end of your training</p>
                            </article>
                        </div>
                        <div className="content">
                            <span><FaCheckCircle className='icon' /></span>
                            <article>
                                <h4>Free soft skills training</h4>
                                <p>Get free soft skill training for free. Get equiped with life skills</p>
                            </article>
                        </div>
                    </div><br />


                    <div className="container">
                        <div className="content">
                            <span><FaChalkboardTeacher className='icon' /></span>
                            <article>
                                <h4>Instructor led training</h4>
                                <p>Get trained by the best mind in the industry</p>
                            </article>
                        </div>
                        <div className="content">
                            <span><FaUserCheck className='icon' /></span>
                            <article>
                                <h4>Internship</h4>
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
                    <div className="card">
                        <article>
                            {/*<b>CWW TECH AFRICA</b>*/}
                            <h2>About us</h2>
                            <p>
                                CWW tech Africa is empowering young people with digital and tech skills.
                                CWW Tech Africa was created to empower African youth to be employable
                                and entrepreneurial. Our graduates become mentors, contribute to CWW Tech
                                Africa community, the tech ecosystem and the world.
                            </p>
                        </article>
                    </div>
                    <div className="card">
                        <img src={ sect_3 } alt="" />
                    </div>

                </div>

            </section>

            <section className="section-4">
                <div className="card-header">
                    <div>
                        <p>Top Categories</p>
                        <h2>Popular Courses</h2>
                    </div>
                    <a href="https://www.cwwtechafrica.com/course/">View All Courses</a>
                </div>
                <section className="section-4-container">

                    <div className="card">
                        <img src={ img1 } alt="ui/ux-imag"  />

                        <div className="card-body">
                            <p>CTA Cohort program.</p>
                            <h4>UI/UX Design</h4>
                            <small>6 weeks - Virtual</small><br />
                            <a href="https://www.cwwtechafrica.com/cta-application-form/">
                                <button><FaCaretDown id='arrow'/> Get started</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="data-analysis-img"  />
                        <div className="card-body">
                            <p>CTA Cohort program.</p>
                            <h4>Data Analysis</h4>
                            <small>6 weeks - Virtual</small><br />
                            <a href="https://www.cwwtechafrica.com/cta-application-form/">
                                <button><FaCaretDown id='arrow'/> Get started</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ img3 } alt="web-dev-img" />
                        <div className="card-body">
                            <p>CTA Cohort program.</p>
                            <h4>Web Development</h4>
                            <small>6 weeks - Virtual</small><br />
                            <Link to="https://www.cwwtechafrica.com/cta-application-form/">
                                <button><FaCaretDown id='arrow'/> Get started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ img4 } alt="digital-marketing-img" />
                        <div className="card-body">
                            <p>CTA Cohort program.</p>
                            <h4>Digital Marketing</h4>
                            <small>6 weeks - Virtual</small><br />
                            <a href="https://www.cwwtechafrica.com/cta-application-form/">
                                <button><FaCaretDown id='arrow'/> Get started</button>
                            </a>
                        </div>
                    </div>
                </section>
            </section>


            <section className="section-5">
                <div className="card-header">
                    <div>
                        <p>Top Categories</p>
                        <h2>Popular Programmes</h2>
                    </div>
                    <a href="https://www.cwwtechafrica.com/programmes/">View All Programmes</a>
                </div>
                <section className="section-5-container">

                    <div className="card">
                        <img src={ cohort } alt="ui/ux-imag"  />

                        <div className="card-body">
                            <h4>CTA Cohort Program</h4>
                            <p>Programmes</p><br />
                        </div>
                    </div>
                    <div className="card">
                        <img src={softskill} alt="data-analysis-img"  />
                        <div className="card-body">
                            <h4>CTA Soft Skills Program</h4>
                            <p>Programmes</p><br />
                        </div>
                    </div>
                    <div className="card">
                        <img src={ bootcamp } alt="web-dev-img" />
                        <div className="card-body">
                            <h4>CTA Bootcamp</h4>
                            <p>Programmes</p><br />
                        </div>
                    </div>

                </section>
            </section>

            <section className="section-6">
                <div className="section-6-container">
                    <Fade right>
                    <div className="card">
                        <article>
                            <h2>Hire an Intern</h2>
                            <p>
                                Want to hire a talent, we have the best African talents in our community.
                                Our trainees are equipped with in-demand tech skills and also equipped
                                with soft skills and business skills. We have the best!
                            </p>
                            <a href="https://www.cwwtechafrica.com/internship-placement-form/">Get in touch</a>
                        </article>
                    </div>
                    <div className="card">
                        <img src={ sect_6 } alt="section-6-img" />
                    </div>
                    </Fade>

                </div>

            </section>

            <section className="section-7">
                <div className="section-7-container">
                    <div className="card" id='card_7'>
                        <Zoom out>
                            <img src={ sect_7 } alt="section-7-img" />
                        </Zoom>
                    </div>
                    <div className="card">
                        <article>
                            <h4>CTA Business</h4>
                            <h2>Equip your workforce</h2>
                            <ul>
                                <li>Access to free soft skills training</li>
                                <li>100% Instructor-led training</li>
                                <li>Mentorship</li>
                            </ul>
                            <a href="https://www.cwwtechafrica.com/#">Learn more</a>
                        </article>
                    </div>


                </div>

            </section>

            <section className="section-8">
                <div className="section-8-container">
                    <div className="card">
                        <article>
                            <h2>Become a Trainer</h2>
                            <p>
                                We are looking for skilled individuals who are looking to be
                                a part of our mission to equip African youths with in-demand
                                digital and tech skills.
                            </p>
                            <a href="https://www.cwwtechafrica.com/frntend-volunteer-form/">Learn more</a>
                        </article>
                    </div>
                    <div className="card">
                        <Slide up>
                            <img src={ sect_8 } alt="section-6-img" />
                        </Slide>
                    </div>

                </div>

            </section>

            <section className="section-9">
                <section className="section-9-container">
                    <div className="card">
                        <img src={ col1_img } alt="section-9-img"  />
                        <h4>Learn and in-demand skill</h4>
                        <p>
                            Tech is the future of work. Learn an in-demand skill today
                            and be equipped for the tech ecosystem. In addition, you
                            would get trained in soft skills and entrepreneurship.
                        </p>
                    </div>
                    <div className="card">
                        <img src={col2_img} alt="section-9-img-1"  />
                        <h4>Build new networks</h4>
                        <p>
                            Get access to a community of like-minded individuals,
                            build relationships and learn from each other.
                        </p>
                    </div>
                    <div className="card">
                        <img src={ col3_img } alt="section-9-img2" />
                        <h4>Get Intership placement</h4>
                        <p>
                            Get an internship placement after the program.
                            This will ensure that you have enough experience
                            to get into a tech role and build your portfolio.
                        </p>
                    </div>
                </section>
            </section>

            <section className="section-10">
                <div className='section-10-header'>
                    <h2>Our Impacts</h2>
                    <img src={country_logos} alt={ country_logos } />
                </div>
                <div className="grid-display">
                    <div className="trained">
                        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                            <h2>
                                {counter &&
                                    <CountUp start={0} end={5000} duration={2} delay={0.5} />
                                }
                            </h2>
                        </ScrollTrigger>
                        <p>Over 5k Trained</p>
                    </div>
                    <div className="satisfaction">
                        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                            <h2>
                                {counter &&
                                    <CountUp start={0} end={99} duration={2} delay={0.5} />
                                }
                            </h2>
                        </ScrollTrigger>
                        <p>99% Satisfaction</p>
                    </div>
                    <div className="countries">
                        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                            <h2>
                                {counter &&
                                    <CountUp start={0} end={45} duration={2} delay={0.5} />
                                }
                            </h2>
                        </ScrollTrigger>
                        <p>Countries</p>
                    </div>
                    <div className="completion-rate">
                        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                            <h2>
                                {counter &&
                                    <CountUp start={0} end={92} duration={2} delay={0.5} />
                                }
                            </h2>
                        </ScrollTrigger>
                        % Completion rate
                    </div>
                </div>
            </section>


            <section className="section-wrapper">
                <h2>Success stories from previous trainees</h2>
                <div className="section-11-container">
                    <div className="card">
                        <img src={review1} alt={review1} />
                        <article>
                            <p>
                                CWW has given me a good opportunity to start a career in tech.
                                I learnt more than I thought I would. I'm glad to be a beneficiary
                                of CWW Tech Africa Cohort 1.0
                            </p>
                            <b>Adeyemi Amerah (Nigeria)</b> <br />
                            <em>Ui/UX Design Trainee, CTA cohort 1.0.</em>
                        </article>

                    </div>
                    <div className="card">

                        <img src={review2} alt={ review2 }  />
                        <article>
                            <p>
                                The course was refreshing, interactive and interesting; a good
                                mixture of practical and theory with enough time to discuss issues.
                            </p>
                            <b>Gilbert Asumwisye (Tanzania)</b> <br />
                            <em>Digital Marketing Trainee, CTA cohort 1.0.</em>
                        </article>

                    </div>
                    <div className="card">

                        <img src={ review3 } alt={review3} />
                        <article>
                            <p>
                                It was an immense pleasure to test the skills acquired
                                during the program, through the holistically conceived
                                individual projects and I also enjoyed working with
                                fellow trainees on group projects.
                            </p>
                            <b>SONNA Mael (Cameroun)</b> <br />
                            <em>Data Analysis Trainee, CTA cohort 1.0.</em>
                        </article>
                    </div>
                </div>

                <div className='section-12-container'>
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

                </div>
            </section>

            <section className="section-13">
                     <h3>Frequently Asked Questions</h3>
                <div className="card">

                    {faq.map((item, id) => {
                        return (
                            <div className="item" key={id}>
                                <div className="title" onClick={()=>handleFaqs(id)}>
                                    <span>{faqs === id ? "-" : "+"}</span>
                                    <a href="https://www.cwwtechafrica.com">{ item.question }</a>
                                </div>
                                <div className={ faqs === id? "content show ":"content" }>{ item.answer }</div>
                            </div>

                        )

                    })}

                </div>
                <a href="https://www.cwwtechafrica.com/faqs" role="noreferrer" id="view-faqs">View FAQS</a>

            </section>

        </section>
    )
}

export default Home