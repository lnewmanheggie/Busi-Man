import axios from "axios";
import headersObj from './HeadersObj';

const TransactionApi = {
    createTransaction: function(itemData){
        return axios.post("/api/transaction/", itemData, headersObj);
    },
    getTransaction: function() {
        return axios.get('/api/transaction/', headersObj);
    }
}

export default TransactionApi;