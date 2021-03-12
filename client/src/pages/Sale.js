import React from 'react';

function Sale() {

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