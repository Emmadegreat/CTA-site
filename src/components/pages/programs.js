import '../styles/programs.css'

import React, {useState} from 'react'

import FAQ from './faq.json'
import { Link } from 'react-router-dom'
import bootcamp from '../images/cta-bootcamp.jpg'
import cohort from '../images/cta-cohort.jpg'
import sect_8 from  '../images/sect-8.jpg'
import softskill from '../images/cta-softskill.jpg'

const Programs = () => {
    const [faqs, setFaqs] = useState(null);
    //const handleFaqs = (id) => setFaqs(id);

    const handleFaqs = (id) => {
        if (faqs === id) {
            return setFaqs(null);
        } else {
            setFaqs(id);
        }
    }


    return (
        <section className='programs'>
            <div className="spacer"></div>
            <div className="program-sect-1">
                <div className="card">
                    <h2>Programmes</h2>
                </div>
            </div>
            <div className="program-sect-2">
                <div className="card" id='order-1'>
                    <img src={ cohort } alt="cohort-img" />
                </div>
                <div className="card" id='order-2'>
                    <article>
                        <h2>CTA Cohort programme</h2>
                        <p>
                            This program is open to all youths in African between the age of 18-35.
                            The program will equip the youths with Tech skills, soft skills and
                            centrepreneurship training. It's schedule to hold for 6 weeks virtually.
                            It is an instructor led training with practical classes and real life
                            projects. Every trainee will have a mentor to guide them.
                        </p>
                        <a href="https://www.cwwtechafrica.com/cta-application-form/">APPLY AS A TRAINEE</a>
                    </article>
                </div>
            </div>

            <div className="program-sect-3">
                <div className="card" id='order-2'>
                    <article>
                        <h2>CTA Soft skills training</h2>

                        <a href="https://www.cwwtechafrica.com/programs/#">Learn more</a>
                    </article>
                </div>
                <div className="card" id='order-1'>
                    <img src={ softskill } alt="soft-skill-img" />
                </div>
            </div>

            <div className="program-sect-4">
                <div className="card" id='order-1'>
                    <img src={ bootcamp } alt="bootcamp-img" />
                </div>
                <div className="card" id='order-2'>
                    <article>
                        <h2>CTA Bootcamp programme</h2>

                        <a href="https://www.cwwtechafrica.com/programs/#">Learn more</a>
                    </article>
                </div>
            </div>

            <div className='section-5'>
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
            <section className="section-6">
                <h3>Frequently Asked Questions</h3>
                <div className="card">

                    {FAQ.map((item, id) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="title" onClick={()=>handleFaqs(id)}>
                                    <span>{faqs === id ? "-" : "+"}</span>
                                    <Link href="https://www.cwwtechafrica.com">{ item.question }</Link>
                                </div>
                                <div className={ faqs === id? "content show ":"content" }>{ item.answer }</div>
                            </div>

                        )

                    })}

                </div>
                <a href="https://www.cwwtechafrica.com/faqs" id="view-faqs">View FAQS</a>
            </section>

        </section>

    )
}

export default Programs
