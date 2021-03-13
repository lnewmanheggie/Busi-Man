import axios from 'axios';

export default {
    // add item to db
    addItem: function(itemData) {
        return axios.post('api/inventory/', itemData);
    },
    // find item in db and add to inventory
    addItemCount: function(itemData) {
        return axios.put('api/inventory/add', itemData);
    },
    // find item in db and remove from inventory
    removeItemCount: function(itemData) {
        return axios.put('api/inventory/remove' , itemData);
    },
    // delete item completely
    delete: function(barcode) {
        return axios.delete('api/inventory/' + barcode);
    }
}