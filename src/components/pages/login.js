import '../styles/login.css'

import { Link } from 'react-router-dom'
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
            <div className="spacer"></div>

            <div className='login-wrapper'>
                <div className="card"></div>

                <div className="card">
                    <form action="" onSubmit={loginHandler}>
                        <legend>
                            <label htmlFor="email">Username or Email Address</label><br />
                            <input type="text" name='email'required />
                        </legend>

                        <legend>
                            <label htmlFor="password">Password</label><br />
                            <input type="password" name='password' required /><br />

                        </legend>
                        <input type="checkbox" name="check" required />Remember Me <br />

                        <button type="submit" id='login'>Log In</button>
                    </form>
                    <Link href="/forgotpassword">Lost your password</Link>

                    <Link href="/register" id='sign-up-link'>Don't have an account? Register</Link>
                </div>

            </div>

        </div>
    )
}

export default Login