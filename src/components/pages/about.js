import '../styles/about.css'

import React, {useState} from 'react'

import about_img from '../images/cta-about1.jpg'
import col1_img from '../images/col2-img.jpg'
import col2 from '../images/col2-img.jpg'
import col2_img from '../images/col1-img.jpg'
import col3_img from '../images/col3-img.jpg'
import faq from './faq.json'
import review1 from '../images/cta-about-review-1.jpg'
import review2 from '../images/cta-about-review-2.jpeg'

const About = () => {

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
        <section className='about'>
            <div className="space"></div>

            <div className="section-one">
                <div className="card">
                    <article>
                        <h1>About Us</h1>
                        <p>
                            CWW Tech Africa is empowering young people with digital
                            and tech skills. CWW Tech Africa was created to empower
                            African youths to be employable and entrepreneurial.
                            Our graduates become mentors, contribute to the CWW Tech
                            Africa community, the tech ecosystem and the world.
                        </p>
                    </article>
                </div>
            </div>
            <div className="section-two">

                <div className="card" id='card-1'>
                    <article>
                        <span>-</span>
                        <h3>MISSION</h3>
                        <p>
                            To train and equip the next 1 million young people
                            with digital and tech skills by 2030. <br />
                        </p>
                        <p>To empower the youths to become employable and entrepreneurial.</p>
                        <h3>VISION</h3>
                        <p>To empower Africans</p>
                    </article>
                </div>
                <div className="card">
                    <img src={about_img} alt={ about_img } />
                </div>

            </div>

            <section className="section-three">
                <h2>Our programmes</h2>
                <section className="section-three-container">
                    <div className="card">
                        <img src={ col1_img } alt="section-3-img"  />
                        <h4>CTA Cohort Program</h4>
                        <p>
                            Programmes
                        </p>
                    </div>
                    <div className="card">
                        <img src={col2_img} alt="section-3-img-1"  />
                        <h4>CTA Soft Skills Program</h4>
                        <p>
                            Programmes
                        </p>
                    </div>
                    <div className="card">
                        <img src={ col3_img } alt="section-3-img2" />
                        <h4>CTA Bootcamps</h4>
                        <p>
                            Programmes
                        </p>
                    </div>
                </section>
            </section>

            <section className="section-four">
                <h2>Reviews from previous trainees</h2>
                <div className="section-four-container">
                    <div className="card">
                        <img src={review1} alt={review1} />
                        <article>
                            <p>
                                The program was amazing, acquired a lot of knowledge from
                                the lessons taught and the instructors were great. I met
                                great peers who shared profound information and made a great team.
                                Thank you for the opportunity!!!
                            </p>
                            <b>Andrew Kabuswe (Zambia)</b> <br />
                            <em>Data Analysis Trainee CTA Cohort 1.0</em>
                        </article>

                    </div>
                    <div className="card">

                        <img src={review2} alt={ review2 }  />
                        <article>
                            <p>
                                This program opened my path to the tech space and made me believe
                                that anyone can begin a career in tech irrespective of their
                                degree or career path, with the right motivation and hardwork.
                                Thanks to CWW Tech Africa, I'm today a UI/UX designer and I highly
                                recommend to anyone.
                            </p>
                            <b>Oyedeji Eniola (Nigeria)</b> <br />
                            <em>UI/UX Design Trainee, CTA Cohort 1.0</em>
                        </article>

                    </div>
                </div>
            </section>

            <section className='section-five-container'>
                <div className="card">
                    <h3>Join our Tech community</h3>
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

            <section className="section-six">
                     <h3>Frequently Asked Questions</h3>
                <div className="card">

                    {faq.map((item, id) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="title" onClick={()=>handleFaqs(id)}>
                                    <span>{faqs === id ? "-" : "+"}</span>
                                    <a href="https://www.cwwtechafrica.com">{ item.question }</a>
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

export default About