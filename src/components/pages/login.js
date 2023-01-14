import '../styles/login.css'

import { LoginActions } from '../../store/auth'
import React from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(LoginActions.login());
    }


    return (
        <div className='login'>

            <h2>Sign in</h2>
            <form action="" onSubmit={loginHandler}>
                <legend>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Eemail'/>
                </legend>

                <legend>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Username'/>
                </legend>
                <button type="submit">Login</button>
                <a href="signup">Register</a>
            </form>

            <a href="forgotpassword">Forgot your password</a>

        </div>
    )
}

export default Login