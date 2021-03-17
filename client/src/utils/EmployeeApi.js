import axios from 'axios';

export default {
    getEmployees: function() {
        return axios.get('api/employee/find');
    },

    delete: function(email) {
        return axios.delete('api/employee/remove' + email);
    }
}