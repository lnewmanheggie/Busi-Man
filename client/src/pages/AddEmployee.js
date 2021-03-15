import React from 'react';
import useAuth from '../utils/useAuth';

function AddEmployee({ history }) {

    useAuth();
    
    // useEffect(async ()=> {
    //     try {
    //         console.log('hi');
    //         if (!sessionStorage.getItem('jwt')) {
    //             history.push("/")
    //         }
    //         const result = await UserApi.getUsers();
    //         if (!result.status === 200) {
    //             history.push("/")
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })

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