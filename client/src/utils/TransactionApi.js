import axios from "axios";

export default {
    createTransaction: function(itemData){
        return axios.post("/api/transaction/get", itemData, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
            }
        });
    }
}