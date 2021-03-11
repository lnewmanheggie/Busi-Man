import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import InvTable from '../components/InventoryTable';
import Footer from '../components/Footer';
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
    }

    const location = useLocation();

    const inventory= [    
        {
        barcode: 123456789,
        name: "Apples",
        count: 99,
        price:  99.99,
        }]


    return(
        <div>
            <Navbar location={location.pathname}/>
            <Header heading={'Inventory'}/>

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