import React, { useEffect } from 'react';

function Sale({ history }) {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    return(
        <div>
            <h1>Make a sale PAGE</h1>
            
        </div>
    )
}

export default Sale;