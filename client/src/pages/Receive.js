import React, { useCallback, useState, useRef } from 'react';
import '../css/Scanner.css'
import Button from '../components/button/Button';
import Input from '../components/Input';
import InventoryUpdateApi from '../utils/InventoryUpdateApi';
import Navbar from '../components/Navbar';
import useAuth from '../utils/useAuth';

function Receive() {
    
    useAuth();

    const barcodeRef = useRef();

    const [values, setValues] = useState({
        count: '',
        itemName: '',
        price: ''
    })

    const [result, setResult] = useState({
        resultStatus: ''
    })

    const [isFound, setIsFound] = useState({
        found: true
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
            count: '',
            itemName: '',
            price: ''
        })

        setBarcodeVal();
    }

    const [barcodeVal, setBarcodeVal] = useState();

    const onBarcodeChange = useCallback((e) => setBarcodeVal(e.target.value), [])

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
            let barcodeRefVal = barcodeRef.current.value

            const itemData = {
                barcode: parseInt(barcodeRefVal),
                count: parseInt(values.count)
            }
            const result = await InventoryUpdateApi.addItemCount(itemData);

            if (!result.data) {
                setResult({
                    ...result,
                    resultStatus: 'Please add this item to inventory'
                })
                setIsFound({ ...isFound, found: false })
            } else {
                setResult({
                    ...result,
                    resultStatus: `You added ${values.count} ${result.data.name} for a total of
                                    ${result.data.count + parseInt(values.count)} in inventory.`
                })
                resetValues();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSecondSubmit = async () => {
        try {
            let barcodeRefVal = barcodeRef.current.value
    
            const itemData = {
                barcode: parseInt(barcodeRefVal),
                count: parseInt(values.count),
                name: values.itemName,
                price: parseFloat(values.price)
            }
            const result = await InventoryUpdateApi.addItem(itemData);
            setResult({
                ...result,
                resultStatus: `You added ${result.data.name} to inventory.`
            })
            resetValues();
            setIsFound({...isFound, found: true});

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className='scanner'>
                <h1 className="p-3 scanner-h1">Receive Items</h1>
                <h3 className="pb-4"><em>Open this page in the Scan to Web app on your phone</em></h3>
                <form
                    name="form1"
                    id="form1"
                    onSubmit={handleSubmit}>

                    <Input
                        name="barcode"
                        type="text"
                        id="txtField1"
                        className="scanner-input"
                        value={barcodeVal}
                        placeholder="barcode"
                        color='#219ebc'
                        handleChange={onBarcodeChange}
                        useRef={barcodeRef}
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
                    <h4 className="p-2">{result.resultStatus}</h4>
                    <a className="scanner-link" href="bwstw://startscanner">Click here to start scanner</a>
                    {/* if the item is not found in the database display two more input boxes
                to add the name and price of the product, then add to db */}
                    <div>
                        {isFound.found === false
                            ? <>
                                <Input
                                    name="itemName"
                                    type="text"
                                    className="scanner-input"
                                    value={values.itemName}
                                    placeholder="Item name"
                                    color='#219ebc'
                                    handleChange={handleChange}
                                />
                                <Input
                                    name="price"
                                    type="text"
                                    className="scanner-input"
                                    value={values.price}
                                    placeholder="price (0.00)"
                                    color='#219ebc'
                                    handleChange={handleChange}
                                />
                            </>
                            : <> </>
                        }
                    </div>

                    <Button
                        type='submit'
                        color='#219ebc'
                        name="Save"
                        margin='1rem'
                    />
                </form>
            </div>
        </>
    )
}

export default Receive;