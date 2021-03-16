 import axios from 'axios';


export default {

    // REFER TO THIS FUNCTION TO GET HEADERS FOR API CALLS- NEED FOR AUTHENTICATION
    getUsers: function() {
       return axios.get('auth/user/', {
            headers: {
                'CustomHeader': `Bearer ${sessionStorage.getItem('jwt')}`
            },
        });
    },

    registerUser: function(userData) {
        return axios.post('auth/register', userData);
    },

    loginUser: function(userData) {
        return axios.post('auth/login', userData);
    },

    changePassword: function(userData) {
        return axios.post('auth/passwordchange', userData)
    }
}