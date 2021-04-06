import React from 'react';
import moment from 'moment';

function TransactionRow({ barcode, name, count, price, date, employee }) {
    const styles = {
        cell: {
            backgroundColor: "lightgrey"
        },

        email: {
            backgroundColor: "lightgrey",
            fontSize: "0.9rem"
        }
    }

    return (
        <>
            <div className="cell2" style={styles.cell} data-testid='barcode'>
                <div>{barcode}</div>
            </div>
            <div className="cell2" style={styles.email} data-testid='name'>
                <div>{name}</div>
            </div>
            <div className="cell2" style={styles.cell} data-testid='count'>
                <div>{count}</div>
            </div>
            <div className="cell2" style={styles.cell} data-testid='price'>
                <div>{price}</div>
            </div>
            <div className="cell2" style={styles.cell} data-testid='date'>
                <div>{moment(date).format("MMM Do YYYY")}</div>
            </div>
            <div className="cell2" style={styles.cell} data-testid='employee'>
                <div>{employee}</div>
            </div>
         
        </>
    )
}

export default TransactionRow;