import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import InvTable from '../components/InventoryTable';
import Footer from '../components/Footer';
import InventoryUpdateAPI from '../utils/InventoryUpdateApi';
import InventoryAPI from '../utils/InventoryApi';
import '../css/Table.css';
import useAuth from '../utils/useAuth';
import SearchBar from '../components/SearchBar';

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

    // check user authorization
    useAuth();

    // search bar values
    const [values, setValues] = useState({
        search: ''
    });

    // clean inventory that gets set on page load
    const [filteredInventory, setFiltered] = useState([]);

    // inventory that gets manipulated and rendered
    const [inventory, setInventory] = useState([]);

    // Load all inventory on page load
    useEffect(() => {
        loadInventory();

    }, [])

    // Loads all inventory and sets them to inventory and filtered inventory
    function loadInventory() {
        InventoryAPI.getInventory()
            .then(res => {
                setInventory(res.data)
                setFiltered(res.data)
            })
            .catch(err => console.log(err));
    };

    // Handles filtering inventory on search
    const handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });

        // set inventory to filtered array
        const filteredArr = filteredInventory.filter(x => x.name.toLowerCase().startsWith(value))
        setInventory(filteredArr)
    };

    // helper state for orderAlphabetically fxn
    const [sorted, setSorted] = useState(false)


    const orderAlphabetically = () => {
        if (!sorted) {
            const ordered = inventory.sort((a, b) => {
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
            setSorted(true)
            setInventory(ordered)
        } else {
            setSorted(false)
            setInventory(filteredInventory)

        }

    }

    // function gets triggered on delete button click, deletes item from db and renders new array
    const deleteItem = async (barcode) => {
        try {
            await InventoryUpdateAPI.delete(barcode);
            const newData = await InventoryAPI.getInventory();
            const newDataArr = newData.data;
            setInventory(newDataArr)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <Navbar />
            <Header heading={'Inventory'} />
            <SearchBar
                value={values.search}
                handleInputChange={handleInputChange}
            />

            <div classname='mt-3'>
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
                    <div className='cell'>
                        <h2 className="table-heading" style={styles.cell}>Delete</h2>
                    </div>

                    <InvTable inventory={inventory} deleteItem={deleteItem} />


                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Inventory;