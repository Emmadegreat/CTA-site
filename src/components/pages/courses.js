import '../styles/courses.css'

import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'
import content_writer from  '../images/sect-8.jpg'
import img1 from '../images/ux.jpg'
import img2 from '../images/data.jpg'
import img3 from '../images/web.jpg'
import img4 from '../images/digitalmktg.jpg'
import sect_7 from '../images/sect-7.jpg'
import softskill from '../images/cta-softskill.jpg'

//import content_writing from '../images/content-writing.jpg'




const Courses = () => {
    return (
        <section className='courses'>
            <div className="spacer"></div>
            <button id='filter'>Filter</button>
            <section className="courses-container">
                <div className="card">
                    <a href="https://www.cwwtechafrica.com/courses/content-writing"><img src={ content_writer } alt="ui/ux-imag"  /></a>

                    <div className="card-body">
                        <FaAngleRight id='arrow'/>
                        <h4>Content Witing</h4>
                        <a href="https://www.cwwtechafrica.com/courses/content-writing">Enroll Now</a>
                    </div>
                </div>
                <div className="card">
                        <img src={softskill} alt="data-analysis-img"  />
                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Graphic Design</h4>

                            <a href="https://www.cwwtechafrica.com/courses/graphic-design/">
                                Enroll Now
                            </a>
                        </div>
                </div>
                <div className="card">
                        <img src={ img3 } alt="web-dev-img" />
                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Web Development</h4>

                            <Link to="https://www.cwwtechafrica.com/courses/web-development/">
                                Enroll Now
                            </Link>
                        </div>
                </div>


            </section><br /><br />

            <section className="courses-container">
                <div className="card">
                    <img src={ img2 } alt="ui/ux-imag"  />

                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Data-analysis</h4>
                            <a href="https://www.cwwtechafrica.com/data-analysis/">
                                Enroll Now
                            </a>
                        </div>
                </div>
                <div className="card">
                        <img src={sect_7} alt="data-analysis-img"  />
                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Product Management</h4>

                            <a href="https://www.cwwtechafrica.com/courses/graphic-design/">
                                Enroll Now
                            </a>
                        </div>
                </div>
                <div className="card">
                        <a href="https://www.cwwtechafrica.com/cta-application-form/"><img src={ img1 } alt="web-dev-img" /></a>
                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>UI/UX Design</h4>

                            <Link to="https://www.cwwtechafrica.com/cta-application-form/">
                                Enroll Now
                            </Link>
                        </div>
                </div>
            </section><br /><br />

            <section className="courses-container">
                <div className="card">
                    <a href="https://www.cwwtechafrica.com/cta-application-form/"><img src={ img4 } alt="ui/ux-imag"  /></a>

                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Content Witing</h4>
                            <a href="https://www.cwwtechafrica.com/cta-application-form/">
                                Enroll Now
                            </a>
                        </div>
                </div>
                <div className="card" style={{visibility:'hidden'}}>
                        <img src={softskill} alt="data-analysis-img"  />
                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Graphic Design</h4>

                            <a href="https://www.cwwtechafrica.com/courses/graphic-design/">
                                Enroll Now
                            </a>
                        </div>
                </div>
                <div className="card" style={{ visibility: 'hidden' }} >
                        <img src={ img3 } alt="web-dev-img" />
                        <div className="card-body">
                            <FaAngleRight id='arrow'/>
                            <h4>Web Development</h4>

                            <Link to="https://www.cwwtechafrica.com/cta-application-form/">
                                Enroll Now
                            </Link>
                        </div>
                </div>
            </section>
        </section>
    )
}

export default Courses
