import axios from "axios";
import headersObj from './HeadersObj';

const InventoryApi = {
    getInventory: function(){
        return axios.get("/api/inventory/get", headersObj);
    }
}

export default InventoryApi;