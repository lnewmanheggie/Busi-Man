import axios from 'axios';
import headersObj from './HeadersObj';

export default {
    // add item to db
    addItem: function(itemData) {
        return axios.post('api/inventory/', itemData, headersObj);
    },
    // find item in db and add to inventory
    addItemCount: function(itemData) {
        return axios.put('api/inventory/add', itemData, headersObj);
    },
    // find item in db and remove from inventory
    removeItemCount: function(itemData) {
        return axios.put('api/inventory/remove', itemData, headersObj);
    },
    // delete item completely
    delete: function(barcode) {
        return axios.delete('api/inventory/' + barcode, headersObj);
    }
}