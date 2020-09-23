import React, {useState} from 'react';
import Auth from '../services/auth'
import './Login.sass';


const Login = (props) => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleOnchange = (e) => {
        const {target: {value, name}} = e
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = async () => {
        try {
            await Auth.login(form)
            props.history.push('/citas')

        }catch (error) {
            console.error(error)
        }
    }

    const handleOnToRegister = () => {
        props.history.push('/register')
    }

    return(
        <div className="form-container">
            <form className="form-container__form">
                <h1></h1>
                <input className="form-container__form__input" type="text" name="username" placeholder="username" onChange={handleOnchange} />
                <input className="form-container__form__input" type="password" name="password" placeholder="password" onChange={handleOnchange} />
                <button className="form-container__form__btn" onClick={handleLogin}>Login</button>
                <span onClick={handleOnToRegister} >Register</span>

            </form>
        </div>
    );
}


export default Login;
