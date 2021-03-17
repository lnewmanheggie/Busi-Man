import axios from 'axios';

export default {
    getAnnouncements: function() {
        return axios.get('api/announcement/find');
    },

    create: function(postData) {
        return axios.post('api/announcement/post', postData);
    }
}