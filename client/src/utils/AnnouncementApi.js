import axios from 'axios';
import headersObj from './HeadersObj';

const AnnouncementApi = {
    getAnnouncements: function() {
        return axios.get('api/announcement/find', headersObj);
    },

    create: function(postData) {
        return axios.post('api/announcement/post', postData, headersObj);
    }
}

export default AnnouncementApi;