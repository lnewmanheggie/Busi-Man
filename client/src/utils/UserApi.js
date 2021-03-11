import axios from 'axios';

export default {

    registerUser: function(userData) {
        return axios.post('auth/register', userData);
    },

    getUser: function() {
        return axios.get('/user', {
            withCredentials: true,
        });
    }




}