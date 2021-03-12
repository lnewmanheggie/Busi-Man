import React, { useEffect } from 'react';

function Stats({ history }) {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    return(
        <div>
            <h1>Stats PAGE</h1>
            
        </div>
    )
}

export default Stats;