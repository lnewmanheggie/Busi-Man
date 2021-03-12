// import { useState, useContext } from 'react'; 
// import { Redirect } from 'react-router-dom';
// import { UserContext } from './UserContext';  
import axios from 'axios';


export default {

    // REFER TO THIS FUNCTION TO GET HEADERS FOR API CALLS- NEED FOR AUTHENTICATION
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
        return axios.post('auth/login', userData);
    }
}