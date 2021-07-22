import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeErrorAction, setErrorAction } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';



export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
    console.log(msgError)

    const [formValues, handleInputChange ] = useForm ({
        name: 'Carlos',
        email: 'ckubota54@gmail.com',
        password: '123456',
        password2: '123456'
    })
    const { name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()) {
            dispatch( startRegisterWithEmailPasswordName(email,password,name) )
        }
        
    }
    const isFormValid = () => {
        if(name.trim().length===0){
            dispatch( setErrorAction('name is Required'));
            return false;
        }else if( !validator.isEmail( email )){
            dispatch( setErrorAction('email is Required'));
            return false;
        }else if(password!==password2 && password.length<5) {
           dispatch( setErrorAction('password should be at least 6 characters and match each'));
            return false;
        }
        dispatch(removeErrorAction());
        return true;
    }
    
    return (
        <>
            <h1 className="auth__title">Register</h1>
            <form onSubmit={handleRegister}>
                { msgError && 
                (
                    <div
                className="auth__alert-error">
                    {msgError}
                </div>
                ) 
                }
                <input type="text" 
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
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
                <input type="password" 
                placeholder="Confirm"
                name="password2"
                className="auth__input"
                value={password2}
                onChange={handleInputChange}
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
