import axios from "axios";
import headersObj from './HeadersObj';

export default {
    createTransaction: function(itemData){
        return axios.post("/api/transaction/", itemData, headersObj);
    },
    getTransaction: function() {
        return axios.get('/api/transaction/', headersObj);
    }
}