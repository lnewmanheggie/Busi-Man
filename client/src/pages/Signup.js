import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from './../components/Input';
import Button from './../components/Button';
import UserApi from './../utils/UserApi';
// import { UserContext } from './../utils/UserContext';


function Signup() {

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
    // const { setUser } = useContext(UserContext);
    // let hisory = useHistory();

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    // set user
    const setUserContext = () => {
        UserApi.getUser()
        .then(result => {
            // setUser(res.data.currentUser)
            // history.push('/')
            console.log(result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    //register user
    const handleRegister = e => {
        e.preventDefault();
        UserApi.registerUser(values)
        .then(async (result) => {
            console.log(await result);
            setUserContext();
        })
        .catch(err => {
            // return setError(err.response.data.message)
            console.log(err)
            // 
        })
    }

    return(
        <div>
            {error}
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
                            type={"password"}
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