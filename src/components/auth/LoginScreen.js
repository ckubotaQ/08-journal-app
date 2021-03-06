import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
    const {loading} = useSelector(state => state.ui);
    const dispatch = useDispatch();

    
    const [formValues, handleInputChange ] = useForm ({
        email: 'ckubota54@gmail.com',
        password: '123456'
    })
    const {email, password} = formValues;
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }
const handleGoogleLogin = () =>{
    dispatch(startGoogleLogin());
}
    
    
    return (
        <div
        className="animate__animated animate__bounceIn"
        >
            <h1 className="auth__title">Login</h1>
            <form 
            
            onSubmit={handleLogin}
            >
                <input type="text" 
                placeholder="email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
                <input type="password" 
                placeholder="password"
                name="password"
                className="auth__input"
                value={password}
                onChange={handleInputChange}
                />
                <button
                disabled={loading}
                type="submit"
                className="btn btn-primary btn-block"
                >
                    Login
                </button>
                    <div className="auth__social-networks">
                        <p>Login with Social Network</p>
                        <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                        >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                        </div>
                    </div>
                    <Link 
                    to="/auth/register"
                    className="link"
                    >

                        Create new account
                    
                    </Link>


            </form>
        </div>
    )
}
