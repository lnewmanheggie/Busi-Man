import React, {useState} from 'react';
import UserApi from '../utils/UserApi';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import LoginSignupHeader from '../components/LoginSignupHeader';

function EmployeeChangePass({ history }) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
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

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            if (values.password !== values.confirmPassword) {
                setError('Passwords do not match');
                return;
            } 
            if (values.password.length < 6) {
                setError('Password should be at least 6 characters');
                return;
            }

            const userData = {
                email: values.email,
                password: values.password
            }

            const response = await UserApi.changePassword(userData);
            console.log(response);

            if (response) {
                localStorage.setItem('jwt', response.data.token)
                localStorage.setItem('company', response.data.data.user.company)

                // if user is a manager, push to manager dashboard, otherwise push to employee dash
                if (response.data.data.user.manager) {
                    history.push("/dashboard")
                } else {
                    history.push("/employee-dashboard")
                }
            } else {
                console.log('there was an error')
            }

        } catch (error) {
            console.log(error);
            setError('Error occurred! Make sure you entering the correct email');
            // let err = error.response.data.error.message;
            // console.log(err);
        }
    }

    return(
        <div>
            <LoginSignupHeader linkTo='/' linkText='Back to Login' />
            <div className="container is-max-desktop login-container">
                <div className="notification">
                    <h2 className="is-size-5">Please change your password</h2>
                    <form onSubmit={handlePasswordChange} >
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
                            <Button name={"Change password"} type={"submit"} color='#fb8500'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeChangePass;