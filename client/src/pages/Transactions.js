import React, {useEffect} from 'react';
import useAuth from '../utils/useAuth';
import TransactionApi from '../utils/TransactionApi';

function Transactions() {

    useAuth();

    useEffect(() => {
        loadTransactions();
  
    }, [])


    const loadTransactions = async () => {
        try {
            const result = await TransactionApi.getTransaction()
            console.log(result)
            
        } catch (error) {
            console.log(error);
        }
        
    };


    return(
        <h1>Transactions page</h1>
    )
}

export default Transactions;