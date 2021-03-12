import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './../components/Input';
import UserApi from './../utils/UserApi';
import Button from './../components/Button';

function Login({ history }) {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let response = await UserApi.loginUser(values)
            console.log(response);
            if (response) {
                sessionStorage.setItem('jwt', response.data.token)

                if (response.data.data.user.manager) {
                    history.push("/dashboard")
                } else {
                    history.push("/employee-dashboard")
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div>
            <h1>LOGIN PAGE</h1>
        <Link to='/signup'>sign up</Link>
        <div className="container is-max-desktop">
            <div className="notification is-primary">
                <form onSubmit={handleLogin} >
                    <Input 
                        type={"text"}
                        placeholder={"Email"}
                        name={"email"}
                        value={values.email}
                        handleChange={handleChange}
                    />
                    <Input 
                        type="password"
                        placeholder={"Password"}
                        name={"password"}
                        value={values.password}
                        handleChange={handleChange}
                    />
                    <Button name={"login"} type={"submit"}/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;