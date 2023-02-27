import '../styles/faqs.css'

import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import React, { useState } from 'react'

import Faqs1 from './FAQS1'
import { Link } from 'react-router-dom'

const Faqs = () => {

    const [faqs, setFaqs] = useState(null);
    const handleFaqs = (id) =>{
        if (faqs === id) {
            return setFaqs(null);
        } else {
            setFaqs(id);
        }
    }

    return (
        <div className='faqs'>
            <div className="spacer"></div>
            <section className="faq-sect-1">
                <div className="card">
                    <h2>Frequently ASked <br /> Questons</h2>
                    <p>Kindly read through all frequently asked questions before reaching out to us</p>
                </div>

            </section>

            <section className="faq-sect-2">
                <div className="card">
                    <p>Enroll in any of our courses and programmes</p>
                    <h2>Programmes</h2>
                </div>
                <div className="card">
                    <b>|</b>
                    <a href="https://www.cwwtechafrica.com/programmes/">View programmes</a>
                </div>
            </section>

            <section className="faq-sect-3">
                <h3>CTA Cohort program</h3>
                <div className="card">

                    {Faqs1.map((item, index) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="title" onClick={()=>handleFaqs(index)}>
                                    <Link href="https://www.cwwtechafrica.com">{item.question}</Link>
                                    <span>{faqs === index ? <FaChevronDown/> : <FaChevronRight/>}</span>
                                </div>
                                <div className={ faqs === index? "content show ":"content" }>{ item.answer }</div>
                            </div>

                        )

                    })}

                </div>
            </section>
            <section className='faq-sect-4'>
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

        </div>
    )
}

export default Faqs
