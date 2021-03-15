import axios from 'axios';

export default {
    // add item to db
    addItem: function(itemData) {
        return axios.post('api/inventory/', itemData, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
            }
        });
    },
    // find item in db and add to inventory
    addItemCount: function(itemData) {
        return axios.put('api/inventory/add', itemData, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
            }
        });
    },
    // find item in db and remove from inventory
    removeItemCount: function(itemData) {
        return axios.put('api/inventory/remove', itemData, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
            }
        });
    },
    // delete item completely
    delete: function(barcode) {
        return axios.delete('api/inventory/' + barcode, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
            }
        });
    }
}