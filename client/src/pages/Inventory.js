import React, { useEffect } from 'react';

function Inventory({ history }) {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    return(
        <div>
            <h1>View Inventory PAGE</h1>
            
        </div>
    )
}

export default Inventory;