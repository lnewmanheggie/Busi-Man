import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [employeeState, setEmployeeState] = useState({
        status: 'Employee'
    });

    // FUNCTION CALL TO DB --- GET BACK 'EMPLOYEE' OR 'MANAGER' AND ROUTE TO EMPLOYEE DASHBOARD OR MANAGER DASH

    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <Link to='/signup'>Signup</Link>
            <br />
            <Link to={employeeState.status === 'Employee' ? '/employee-dashboard' : '/dashboard'}>Login</Link>
        </div>
    )
}

export default Login;