/**
 * @TODO try useMemo to clean up barcode scanner functionality
 */

import React, { useEffect, useState } from 'react';
import '../css/Scanner.css'
import Button from '../components/Button';
import Input from '../components/Input';
import InventoryUpdateApi from '../utils/InventoryUpdateApi';
import Navbar from '../components/Navbar';
import useAuth from '../utils/useAuth';
import UserApi from '../utils/UserApi';
import TransactionApi from '../utils/TransactionApi';

function Sale() {

    useAuth();

    // store user name in state to add to transactions db to see who made the sale
    const [userState, setUserState] = useState({
        fullName: ''
    })

    useEffect(() => {
        async function getUser() {
            try {
                const result = await UserApi.getUsers();
                let firstName = result.data.currentUser.firstName;
                let lastName = result.data.currentUser.lastName;
                let full_Name = `${firstName} ${lastName}`;
                setUserState({...userState, fullName: full_Name})
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [])

    const [values, setValues] = useState({
        count: '',
    })

    const [itemArr, setItemArr] = useState([]);

    const [total, setTotal] = useState({
        total: 0.00
    })

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    const resetValues = () => {
        setValues({
            ...values, 
            count: ''
        })

        setTotal({...total, total: 0.00})

        setItemArr([]);
        setBarcodeVal(undefined);
    }

    const [barcodeVal, setBarcodeVal] = useState(undefined);

    const barcodeChange = (e) => {
        const input1 = document.querySelector("#txtField1");
        setBarcodeVal(input1.value)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const input1 = document.querySelector("#txtField1");

            const itemData = {
                barcode: parseInt(input1.value),
                count: parseInt(values.count)
            }
            const result = await InventoryUpdateApi.removeItemCount(itemData);
            console.log(result);
            
            // add result to transactions db
            const transactionData = {
                barcode: result.data.barcode,
                name: result.data.name,
                count: itemData.count,
                price: result.data.price,
                employee: userState.fullName
            }

            await TransactionApi.createTransaction(transactionData);
        
            let totalCost = total.total + parseFloat(result.data.price);
            totalCost = parseFloat(totalCost).toFixed(2)
    
            setTotal({...total, total: totalCost * values.count})

            // create an object to loop through and display current sale data
            const itemSale = {
                id: result.data._id,
                string: `${values.count} ${result.data.name} | ${result.data.price} each`
            }
            setItemArr(itemArr => [...itemArr, itemSale])
            
        } catch (error) {
            console.log(error);
        }
        
    }

    // display sale array
    const items = itemArr.map((item, i) =>
        <li key={item.id + i}>
            {item.string}
        </li>
    );

    return(
        <>
        <Navbar />
        <div className='scanner'>
            <h1 className="p-3 scanner-h1">Make a Sale</h1>
            <h3 className="pb-4"><em>Open this page in the Scan to Web app on your phone</em></h3>
            <form 
                name="form1" 
                // action="stwiosbtn.aspx" 
                id="form1" 
                onSubmit={handleSubmit}
                onReset={resetValues}>

                <Input 
                    name="barcode" 
                    type="text" 
                    id="txtField1" 
                    className="scanner-input"
                    value={values.barcode}
                    placeholder="barcode"
                    color='#219ebc'
                    handleChange={barcodeChange}
                    />
                <Input 
                    name="count" 
                    type="text" 
                    className="scanner-input"
                    value={values.count}
                    placeholder="count"
                    color='#219ebc'
                    handleChange={handleChange}
                />
                <a className="scanner-link" href="bwstw://startscanner">Click here to start scanner</a>
                <h4 className="p-2">Total: ${total.total}</h4>
                <div>
                    <Button 
                        type='submit'
                        color='#219ebc'
                        name="Add Item"
                        margin='1rem'
                    />
                    <Button 
                        type='reset'
                        color='#219ebc'
                        name="Done"
                        margin='1rem'
                    />
                </div>
            </form>
            <ul>
                {items}
            </ul>
        </div>
        </>
    )
}

export default Sale;