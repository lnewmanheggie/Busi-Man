import React from 'react';

function Announcement() {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    return(
        <div>
            <h1>Post Announcement PAGE</h1>
            
        </div>
    )
}

export default Announcement;