// import React, { Component } from 'react';
// import InventoryAPI from '../utils/InventoryApi';

// class SearchContainer extends Component {
//     state = {
//         search: "",
//         results: [],
//         filtered: []
//     };

//     componentDidMount = () => {
//         this.fetchInventory();
//     };

//     fetchInventory = () => {
//         InventoryAPI.search()
//             .then(response => {
//                 const filteredInventory = response.data.results.map(this.filteredInventoryResults)
//                 this.setState({ results: filteredInventory, filtered: filteredInventory })
//             })
//             .catch(err => console.log(err));
//     };

//     filteredInventoryResults = inv => ({
//         barcode: inv.barcode,
//         name: inv.name,
//         count: inv.count,
//         price: inv.price,
   
//     });

//     // search function
//     handleInputChange = event => {
//         const name = event.target.name;
//         const value = event.target.value

//         const filteredInv = this.state.results.filter(x => x.name.toLowerCase().startsWith(value))
        
//         this.setState({
//             [name]: value,
//             filtered: filteredInv
//         });
//     }
// }

// export default SearchContainer;