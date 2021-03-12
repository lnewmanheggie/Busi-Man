import axios from "axios";

export default{
    getInventory: function(){
        return axios.get("/api/Inventory");
    }
}