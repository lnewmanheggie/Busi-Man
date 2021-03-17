import React, {useState, useEffect} from 'react';
import useAuth from '../utils/useAuth';
import EmployeeApi from '../utils/EmployeeApi';


function ViewEmployees() {

    useAuth();

    useEffect(async ()=> {
        const result = await EmployeeApi.getEmployees();

        console.log(result);
    })

    return(
        <div>
            <h1>View employees PAGE</h1>
            
        </div>
    )
}

export default ViewEmployees;