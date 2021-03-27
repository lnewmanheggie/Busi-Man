import React, { useState } from 'react';
import Input from './../components/Input';
import UserApi from './../utils/UserApi';
import Button from './../components/Button';
import './../css/LoginSignup.css';
import LoginSignupHeader from './../components/LoginSignupHeader';

function Login({ history }) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: ''
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
            if (values.password.includes('CHANGEME')) {
                history.push("/change-password")

            } else {
                let response = await UserApi.loginUser(values)
                if (response) {
                    sessionStorage.setItem('jwt', response.token)

                    // if user is a manager, push to manager dashboard, otherwise push to employee dash
                    if (response.data.user.manager) {
                        history.push("/dashboard")
                    } else {
                        history.push("/employee-dashboard")
                    }
                }

            }

        } catch (error) {
            // parse error to display on screen
            let err = error.response.data;
            let start = err.indexOf('Error:');
            let end = err.indexOf('<br>')
            setValues({ ...values, error: err.substring(start, end) });
        }
    }

    return (
        <div>
            <LoginSignupHeader linkTo='/signup' linkText='Sign Up' />

            <div className="container is-max-desktop login-container">
                <div className="notification">
                    <h2 className="is-size-3">Login</h2>
                    <form onSubmit={handleLogin} >
                        <Input
                            type={"text"}
                            placeholder={"Email"}
                            name={"email"}
                            value={values.email}
                            color="#219ebc"
                            handleChange={handleChange}
                        />
                        <Input
                            type="password"
                            placeholder={"Password"}
                            name={"password"}
                            value={values.password}
                            color="#219ebc"
                            handleChange={handleChange}
                        />
                        <div>{values.error}</div>
                        <br />
                        <div className='buttonDiv'>
                            <Button name={"login"} type={"submit"} color='#fb8500' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;