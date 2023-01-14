import '../styles/register.css'

import React from 'react'

const Register = () => {
    return (
        <div className='register'>

            <h2>Sign up</h2>
            <form action="" method="post">
                <legend>
                    <label htmlFor="fullname">FullName</label>
                    <input type="fullname" name='fullname' placeholder='Fullname'/>
                </legend>
                <legend>
                    <label htmlFor="email">Phone number</label>
                    <input type="tel" name='phonenumbner' placeholder='phonenumbner'/>
                </legend>
                <legend>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Eemail'/>
                </legend>

                <legend>
                    <label htmlFor="username">Email</label>
                    <input type="text" name='username' placeholder='Username'/>
                </legend>
                <button type="submit">Register</button>
            </form>

        </div>
    )
}

export default Register