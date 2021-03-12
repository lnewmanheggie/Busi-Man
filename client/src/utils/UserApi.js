// import { useState, useContext } from 'react'; 
// import { Redirect } from 'react-router-dom';
// import { UserContext } from './UserContext';  
import axios from 'axios';


export default {

    // const { setUser } = useContext(UserContext);
    // const [error, setError] = useState(null);

    // getUsers: function() {
    //    return axios.get('/user', {
    //         headers: {
    //             'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
    //         },
    //     });
    // },

    registerUser: function(userData) {
        return axios.post('auth/register', userData);
    },

    loginUser: function(userData) {
        return axios.post('auth/login', userData)
        
    }
        
}