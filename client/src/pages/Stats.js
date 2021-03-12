import React from 'react';

function Stats() {

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