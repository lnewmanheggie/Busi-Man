import axios from "axios";
import headersObj from './HeadersObj';

export default{
    getInventory: function(){
        return axios.get("/api/inventory/get", headersObj);
    }
}