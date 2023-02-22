import '../styles/courses.css'

import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'
import img1 from '../images/ux.jpg'
import img2 from '../images/data.jpg'
import img3 from '../images/web.jpg'
import img4 from '../images/digitalmktg.jpg'

const Courses = () => {
    return (
        <section className='courses'>
            <div className="spacer"></div>
            <section className="courses-container">
                <div className="card">
                    <img src={ img1 } alt="ui/ux-imag"  />

                        <div className="card-body">
                            <p>CTA Cohort program.</p>
                            <h4>UI/UX Design</h4>
                            <small>6 weeks - Virtual</small><br />
                            <a href="https://www.cwwtechafrica.com/cta-application-form/">
                                <button><FaAngleRight id='arrow'/> Get started</button>
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
                                <button><FaAngleRight id='arrow'/> Get started</button>
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
                                <button><FaAngleRight id='arrow'/> Get started</button>
                            </Link>
                        </div>
                    </div>
                {/*<div className="card">
                        <img src={ img4 } alt="digital-marketing-img" />
                        <div className="card-body">
                            <p>CTA Cohort program.</p>
                            <h4>Digital Marketing</h4>
                            <small>6 weeks - Virtual</small><br />
                            <a href="https://www.cwwtechafrica.com/cta-application-form/">
                                <button><FaAngleRight id='arrow'/> Get started</button>
                            </a>
                        </div>
                </div>*/}

            </section>

        </section>
    )
}

export default Courses
