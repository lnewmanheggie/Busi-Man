import React, {useState, useEffect} from 'react';
import useAuth from '../utils/useAuth';
import TransactionApi from '../utils/TransactionApi';
import moment from 'moment';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TransactionTable from '../components/TransactionTable';
import SearchBar from '../components/SearchBar';

 
function Transactions() {
    const styles = {

        cell: {
            fontWeight: 'bold'
        },

        container: {
            backgroundColor: "white",
        },

        link: {
            textDecoration: 'none'
        },
    };

    const [transactions, setTransactions] = useState([{}]);
    const [filteredTransactions, setFiltered] =useState([]);
    const [values, setValues] = useState({
        search: ''
    });

    useAuth();

    useEffect(() => {
        loadTransactions();
  
    }, [])

    const loadTransactions = async () => {
        try {
            const result = await TransactionApi.getTransaction()
            console.log(result)
            setTransactions(result.data)
            setFiltered(result.data)
            

        } catch (error) {
            console.log(error);
        }
        
    };

    const handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
        const filteredArr = filteredTransactions.filter(x => x.name.toLowerCase().startsWith(value))
        setTransactions(filteredArr)
    }


    return(
        <div>
        <Navbar/>
        <Header heading={'Transactions'}/>
        <SearchBar 
            value= {values.search} 
            handleInputChange = {handleInputChange} />
        
        <div classname= 'mt-3'>
            <div className='table2'>
                <div className='cell2'>
                        <h2 className="table-heading" style={styles.cell}>Barcode</h2>
                </div>
                <div className='cell2'>
                        <h2 className="table-heading" style={styles.cell}>Name</h2>
                </div>
                <div className='cell2'>
                        <h2 className="table-heading" style={styles.cell}>Count</h2>
                </div>
                <div className='cell2'>
                        <h2 className="table-heading" style={styles.cell}>Price</h2>
                </div>
                <div className='cell2'>
                        <h2 className="table-heading" style={styles.cell}>Date</h2>
                </div>
                <div className='cell2'>
                        <h2 className="table-heading" style={styles.cell}>Employee</h2>
                </div>
                <TransactionTable transactions={transactions} />
                

            </div>
        </div>
       
        <Footer />
    </div>
      
    )
}

export default Transactions;






