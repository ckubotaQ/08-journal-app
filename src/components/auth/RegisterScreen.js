import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h1 className="auth__title">Register</h1>
            <form>
            <input type="text" 
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
                />
                <input type="text" 
                placeholder="email"
                name="email"
                className="auth__input"
                autoComplete="off"
                />
                <input type="password" 
                placeholder="password" 
                name="password"
                className="auth__input"
                />
                <input type="password" 
                placeholder="Confirm"
                name="confirm"
                className="auth__input"
                />
                <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                >
                   Register
                </button>
                    
                    <Link 
                    to="/auth/login"
                    className="link"
                    >

                        Alredy registered?
                    
                    </Link>


            </form>
        </>
    )
}
