import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from './../components/Input';
import Button from './../components/Button';
import UserApi from '../utils/UserApi';


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
            console.log(error);
        }
    }


    return(
        <div>
            {/* {error} */}
            <h1>Signup PAGE</h1>
            <Link to='/'>Login</Link>
            <div className="container is-max-desktop">
                <div className="notification is-primary">
                    <form onSubmit={handleRegister} >
                        <Input 
                            type={"text"}
                            placeholder={"First Name"}
                            name={"firstName"}
                            value={values.firstName}
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"text"}
                            placeholder={"Last Name"}
                            name={"lastName"}
                            value={values.lastName}
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"text"}
                            placeholder={"Email"}
                            name={"email"}
                            value={values.email}
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"text"}
                            placeholder={"Company"}
                            name={"company"}
                            value={values.company}
                            handleChange={handleChange}
                        />
                        <Input 
                            type="password"
                            placeholder={"Password"}
                            name={"password"}
                            value={values.password}
                            handleChange={handleChange}
                        />
                        <Input 
                            type={"password"}
                            placeholder={"Confirm Password"}
                            name={"confirmPassword"}
                            value={values.confirmPassword}
                            handleChange={handleChange}
                        /> 
                        <Button name={"register"} type={"submit"}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;