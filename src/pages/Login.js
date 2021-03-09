import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <Link to='/signup'>Signup</Link>
            <br />
            <Link to='/dashboard'>Login</Link>
        </div>
    )
}

export default Login;