import axios from "axios";

export default {
    createTransaction: function(itemData){
        return axios.post("/api/transaction/", itemData);
    },
    getTransaction: function() {
        return axios.get('/api/transaction/');
    }
}