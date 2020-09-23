import React, { useState } from 'react';
import Auth from '../services/auth'
import './Register.sass';


const Register = (props) => {

    const [ form, setForm ] = useState({
        name: '',
        surname: '',
        username: '',
        password: ''
    })

    const handleOnchange = (event) => {
        const {target: {value, name}} = event

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleRegister = () => {
        try {
            Auth.register(form)
            props.history.push('/login')
        } catch {
        }
    }
    console.log()

    const handleOnToLogin = () => {
        props.history.push('/login')
    }

    return (
        <div className="form-content">
            <form className="form-content__form">
                <h1 className="form-content__form__title">Register</h1>
                <input className="form-content__form__input" type="text" name="name" placeholder="name" onChange={handleOnchange} />
                <input className="form-content__form__input" type="text" name="surname" placeholder="surname" onChange={handleOnchange} />
                <input className="form-content__form__input" type="text" name="username" placeholder="username" onChange={handleOnchange} />
                <input className="form-content__form__input" type="password" name="password" placeholder="password" onChange={handleOnchange} />
                <button className="form-content__form__btn" onClick={handleRegister}>Register</button>
                <span onClick={handleOnToLogin} >Login</span>
            </form>
        </div>
    )
}

export default Register;
