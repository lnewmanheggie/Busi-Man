import React, { useEffect } from 'react';

function ViewEmployees({ history }) {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    return(
        <div>
            <h1>View employees PAGE</h1>
            
        </div>
    )
}

export default ViewEmployees;