import '../styles/about.css'

import React from 'react'
import col2  from '../images/col2-img.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className="space"></div>
            <div className="section-one">
                <div className="card">
                    <img src={col2} alt={ col2 } />
                </div>
                <div className="card">
                    <article>
                        <h3>MISSION</h3>
                        <p>
                            To train and equip 1 million young people with
                            digital and tech skills by 2030. <br />
                        </p>
                        <p>To empower the youths to becomeemployable and entreprenuerial.</p>
                        <h3>VISION</h3>
                        <p>To empower Africans</p>
                    </article>
                </div>

            </div>

            <div className="section-two">
                <h2></h2>

            </div>

        </section>
    )
}

export default About