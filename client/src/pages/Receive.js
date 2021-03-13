import React, { useEffect, useState } from 'react';
import './../css/Scanner.css'
import Button from './../components/Button';
import Input from './../components/Input';
import InventoryUpdateApi from './../utils/InventoryUpdateApi';

function Receive({ history }) {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    const [values, setValues] = useState({
        barcode: '',
        count: '',
        itemName: '',
        price: ''
    })

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.itemName === '') {
            handleFirstSubmit();
        } else {
            handleSecondSubmit();
        }
    }

    const handleFirstSubmit = async () => {
        try {
            console.log('first');
            const itemData = {
                barcode: parseInt(values.barcode),
                count: parseInt(values.count)
            }
            const result = await InventoryUpdateApi.addItemCount(itemData)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleSecondSubmit = () => {
        console.log('second');
    }


    return(
        <div className='scanner'>
            <h1>Receive Items</h1>
            <h3><em>Open this page in the Scan to Web app on your phone</em></h3>
            <form 
                name="form1" 
                // action="stwiosbtn.aspx" 
                id="form1" 
                onSubmit={handleSubmit}>

                <Input 
                    name="barcode" 
                    type="text" 
                    id="txtField1" 
                    className="scanner-input"
                    value={values.barcode}
                    placeholder="barcode"
                    handleChange={handleChange}
                    />
                <Input 
                    name="count" 
                    type="text" 
                    className="scanner-input"
                    value={values.count}
                    placeholder="count"
                    handleChange={handleChange}
                />
                <a href="bwstw://startscanner">Click to start scanner</a>
                <br /> <br />
                {/* {secondFormRender} */}
                <Button 
                    type='submit'
                    color='#219ebc'
                    name="Save"
                />
            </form>
            
        </div>
    )
}

export default Receive;