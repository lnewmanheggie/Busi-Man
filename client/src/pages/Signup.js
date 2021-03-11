import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

function Signup() {
    return(
        <div>
            <h1>Signup PAGE</h1>
            <Link to='/'>Login</Link>

            <FormContainer />
        </div>
    )
}

export default Signup;