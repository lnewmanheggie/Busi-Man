import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import InvTable from '../components/InventoryTable';
// import InvSearchBar from '../components/InvSearchBar';
import Footer from '../components/Footer';
import InventoryAPI from '../utils/InventoryApi';
import { Link, useLocation } from 'react-router-dom';
import TableCSS from '../css/Table.css';


function SearchBar(props) {
    return (
            <form>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search"
                        onChange={props.handleInputChange}
                        value={props.search}
                        handleSubmit ={props.handleFilter}
                        name="search"
                    />
                </div>
            </form>
    )
}

function Inventory() {
    const styles = {

        cell: {
            fontWeight: 'bold'
        },

        container: {
            backgroundColor: "white",
        },

        link: {
            textDecoration: 'none'
        }
    };
  
    const [search, setSearch] = useState();
    const [filteredInventory, setFiltered] =useState();

    const [inventory, setInventory] = useState([])
    // const [formObject, setFormObject] = useState({})
  
    // Load all inventory and store them with setInventory
    useEffect(() => {
      loadInventory();

    }, [])
  
    // Loads all inventory and sets them to inventory
    function loadInventory() {
        InventoryAPI.getInventory()
        .then(res => {
          setInventory(res.data)
          setFiltered(res.data)
        })
        .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        // const name = event.target.name;
        // const value = event.target.value
        setSearch(event.target.value);
        // const filteredInv = this.state.results.filter(x => x.name.toLowerCase().startsWith(value))
        const inventoryTempArray = inventory.filter(item =>{
            return item.name.toLowerCase().includes(search?.toLowerCase());
         
        })
        
        
        setFiltered(inventoryTempArray)
        if (search === "" ){
            setFiltered (inventory)
        }
        console.log(inventoryTempArray);
    };

    // const sortByBarcode (
    //     setFiltered(inventory.sort((a,b)=>
    //         a[barcode] - b[barcode]
    //     ))
    // )

    const location = useLocation();
    console.log(search);
    return(
        <div>
            <Navbar location={location.pathname}/>
            <Header heading={'Inventory'}/>
            <SearchBar value= {search} handleInputChange = {handleInputChange} />

            <div classname= 'mt-3'>
                <div className='table'>
                    <div className='cell'>
                            <h2 style={styles.cell}>Barcode</h2>
                    </div>
                    <div className='cell'>
                            <h2 style={styles.cell}>Product</h2>
                    </div>
                    <div className='cell'>
                            <h2 style={styles.cell}>Amount</h2>
                    </div>
                    <div className='cell'>
                            <h2 style={styles.cell}>Price</h2>
                    </div>
                    <InvTable inventory={filteredInventory} />

                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default Inventory;