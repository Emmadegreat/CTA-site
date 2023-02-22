import '../styles/register.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Register = () => {
    return (
        <section className='register'>
            <div className="space"></div>
            <div className="first-part">
                <h2>CTA Cohort programme</h2>
            </div>
            <div className="second-part">
                <article>
                    <p>
                        This program is open to all youths in African between the ages of 18-35.
                        The program will equip the youths with the Tech skills, soft skills and
                        entrepreneurial skills. It is scheduled to hold for 6 weeks. It is an instructor
                        led training with practical classes and real life projects. Every trainee will
                        have access to a mentor to guide them.
                    </p>
                    <h3>Requirements</h3>
                    <ul>
                        <li>The program is open to African youths between the ages of 18-35 residing in Africa.</li>
                        <li>Access to Laptop and reliable Internet.</li>
                        <li>Able to understand and communicate effectivel in English Language.</li>
                        <li>Able to commit fully and complete the program in 6 weeks.</li>
                    </ul>
                    <h4>The learning tracks available are: </h4>
                    <ol>
                        <li>Digital Marketing</li>
                        <li>Content Writing</li>
                        <li>UI/UX Design</li>
                        <li>Data Analysis</li>
                        <li>Graphic Design</li>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                    </ol>
                    <p>
                        After submitting your application, you will be rrequired to take an asssessment.
                        All successful applicants will be notified will be notified of the status of their
                        application via email.
                    </p> <br />

                    <p>Share this opportunity with your friends and get rewarded!</p> <br />

                    <h4>Applications ends on the 15th February, 2023</h4> <br />

                    <Link to="https://www.cwwtechafrica.com/join-the-waitlist/">Join the waitlist for CTA 4.0</Link>
                </article>
            </div>




        </section>
    )
}

export default Register