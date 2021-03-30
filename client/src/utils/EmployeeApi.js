import axios from 'axios';
import headersObj from './HeadersObj';

export default {
    getEmployees: function() {
        return axios.get('api/employee/find', headersObj);
    },

    delete: function(email) {
        return axios.delete('api/employee/remove/' + email, headersObj);
    }
}