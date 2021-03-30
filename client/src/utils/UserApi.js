import axios from 'axios';


export default {

    // REFER TO THIS FUNCTION TO GET HEADERS FOR API CALLS- NEED FOR AUTHENTICATION
    getUsers: function () {
        return axios.get('auth/user/', {
            headers: {
                'CustomHeader': `Bearer ${localStorage.getItem('jwt')}`
            },
        });
    },

    registerUser: function (userData) {
        return axios.post('auth/register', userData);
    },

    loginUser: function (userData) {
        return new Promise((resolve, reject) => {
            axios.post('auth/login', userData)
                .then(res => {
                    axios.defaults.headers.common["x-business"] = res.data.data.user.company
                    resolve(res.data)
                })
                .catch(err => reject(err));
        })
    },

    changePassword: function (userData) {
        return axios.post('auth/passwordchange', userData)
    },

    checkCompany: function (company) {
        return axios.get('auth/' + company)
    }
}