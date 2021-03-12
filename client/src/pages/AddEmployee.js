import React, { useEffect } from 'react';

function AddEmployee({ history }) {
    
    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    // apicall
    // headers
    // headers: {
        //             'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
        //         },
    // yes /no -> response.status(401) ->  // history.push("/")

    return(
        <div>
            <h1>Add employee PAGE</h1>
            <h2>Hiiiiiiiiii</h2>
            
        </div>
    )
}

export default AddEmployee;