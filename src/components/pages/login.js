import '../styles/login.css'

import { LoginActions } from '../../store/auth'
import React from 'react'
import { useDispatch } from 'react-redux'

//import { Link, useNavigate } from 'react-router-dom'

//import Account from './account'




const Login = () => {

    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        dispatch(LoginActions.login());
    }


    return (
        <div className='login'>
            <div className="spacer"></div>

            <div className='login-wrapper'>
                {/*<div className="card"></div>*/}

                <div className="card">
                    <h4>Login</h4>
                    <form action="" onSubmit={loginHandler}>
                        <legend>
                            <label htmlFor="email"></label><br />
                            <input type="text" name='email'required placeholder='Username or Email Address' />
                        </legend>

                        <legend>
                            <label htmlFor="password"></label><br />
                            <input type="password" name='password' required placeholder='Password' /><br />

                        </legend>
                        <input type="checkbox" name="check" required /> Remember Me <br />

                        <button type="submit" id='login'>Log In</button>
                    </form>
                    <a href="./#">Lost your password?</a>

                    <p>Not a member?<a href="./register" id='sign-up-link'> Register</a></p>
                </div>

            </div>

        </div>
    )
}

export default Login