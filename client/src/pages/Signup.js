import React, { useState } from 'react';
import Input from './../components/Input';
import Button from './../components/Button';
import UserApi from '../utils/UserApi';
import './../css/LoginSignup.css';
import LoginSignupHeader from './../components/LoginSignupHeader';


function Signup({ history }) {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        manager: true,
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState(null);

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            let response = await UserApi.registerUser(values)
            console.log(response);
            history.push("/")
        } catch (error) {
            let err = error.response.data.error.message;
            console.log(err)
            if (err.includes('Enter a valid email')) {
                setError('Please enter a valid email')
            } else if (err.includes('Passwords do not match')) {
                setError('Passwords do not match')
            } else if (err.includes('Password should be at least 6 characters')) {
                setError('Password should be at least 6 characters')
            } else {
                setError('Validation error')
            }
            
        }
    }


    return(
        <div>
            <LoginSignupHeader linkTo='/' linkText='Login'/>
            
            <div className="container is-max-desktop login-container">
                <div className="notification">
                    <h2 className="is-size-3">Sign Up</h2>
                    <form onSubmit={handleRegister} >
                        <Input 
                            type={"text"}
                            placeholder={"First Name"}
                            name={"firstName"}
                            value={values.firstName}
                            color="#219ebc"
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"text"}
                            placeholder={"Last Name"}
                            name={"lastName"}
                            value={values.lastName}
                            color="#219ebc"
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"text"}
                            placeholder={"Email"}
                            name={"email"}
                            value={values.email}
                            color="#219ebc"
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"text"}
                            placeholder={"Company"}
                            name={"company"}
                            value={values.company}
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
                        <Input 
                            type={"password"}
                            placeholder={"Confirm Password"}
                            name={"confirmPassword"}
                            value={values.confirmPassword}
                            color="#219ebc"
                            handleChange={handleChange}
                        /> 
                        <div>{error}</div>
                        <br />
                        <div className='buttonDiv'>
                            <Button name="Sign up" type="submit" color='#fb8500'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;