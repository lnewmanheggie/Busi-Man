import React from 'react';
import TransactionRow from '../transactionRow/TransactionRow';
import '../../css/Table.css';

function TransactionTable(props) {
    return (
 
            <>
                {
                    props.transactions?.map((tran, i) => {
                    
                        return (
                            <TransactionRow
                                key={i} 
                                barcode={tran.barcode}
                                name={tran.name}
                                count={tran.count}
                                price={tran.price}
                                date={tran.date}
                                employee={tran.employee}
                            />
                        )
                    })
                }
            </>
    );
}



export default TransactionTable;