import axios from 'axios';
import headersObj from './HeadersObj';

export default {
    getAnnouncements: function() {
        return axios.get('api/announcement/find', headersObj);
    },

    create: function(postData) {
        return axios.post('api/announcement/post', postData, headersObj);
    }
}