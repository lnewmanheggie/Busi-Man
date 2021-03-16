import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import InvTable from '../components/InventoryTable';
// import InvSearchBar from '../components/InvSearchBar';
import Footer from '../components/Footer';
import InventoryAPI from '../utils/InventoryApi';
import { Link, useLocation } from 'react-router-dom';
import TableCSS from '../css/Table.css';
import useAuth from '../utils/useAuth';


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
  
  useAuth();
  
    const [search, setSearch] = useState();
    const [filteredInventory, setFiltered] =useState();
    const [inventory, setInventory] = useState([])
 
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

    // Handles filtering inventory on search
    const handleInputChange = event => { 
        setSearch(event.target.value);
       
        const inventoryTempArray = filteredInventory.filter(item =>{
            return item.name.toLowerCase().includes(search?.toLowerCase());
         
        })
        
        setFiltered(inventoryTempArray)
        if (search === "" ){
            setFiltered (inventory)
        }
        console.log(inventoryTempArray);
    };

   const orderAlphabetically = () => {
        const ordered = filteredInventory.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

         setInventory({
            inventory: ordered
        })
    }

    const location = useLocation();

    return(
        <div>
            <Navbar location={location.pathname}/>
            <Header heading={'Inventory'}/>
            <SearchBar value= {search} handleInputChange = {handleInputChange} />

            <div classname= 'mt-3'>
                <div className='table'>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Barcode</h2>
                    </div>
                    <div className='cell' onClick={orderAlphabetically}>
                            <h2 className="table-heading" style={styles.cell}>Product</h2>
                    </div>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Amount</h2>
                    </div>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Price</h2>
                    </div>
                    <InvTable inventory={filteredInventory} orderAlphabetically={orderAlphabetically} />

                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default Inventory;