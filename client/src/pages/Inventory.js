import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import InvTable from '../components/InventoryTable';
import InvSearchBar from '../components/InvSearchBar';
import Footer from '../components/Footer';
import InventoryAPI from '../utils/InventoryApi';
import { Link, useLocation } from 'react-router-dom';
import TableCSS from '../css/Table.css';

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

    const [inventory, setInventory] = useState([])
    // const [formObject, setFormObject] = useState({})
  
    // Load all inventory and store them with setInventory
    useEffect(() => {
      loadInventory()
    }, [])
  
    // Loads all inventory and sets them to inventory
    function loadInventory() {
        InventoryAPI.getInventory()
        .then(res => 
          setInventory(res.data)
        )
        .catch(err => console.log(err));
    };

    const location = useLocation();


    // const inventory= [    
    //     {
    //     barcode: 123456789,
    //     name: "Apples",
    //     count: 99,
    //     price:  99.99,
    //     }]


    return(
        <div>
            <Navbar location={location.pathname}/>
            <Header heading={'Inventory'}/>
            <InvSearchBar/>

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
                    <InvTable inventory={inventory}/>

                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default Inventory;