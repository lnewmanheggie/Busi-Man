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

   // let parsedDate = result.data.date;
            // parsedDate = moment(parsedDate).format("MMM Do YYYY")
            // result.date = parsedDate
            // console.log(result,"2");

    return (
        <>
            <div className="cell2" style={styles.cell}>
                <div>{barcode}</div>
            </div>
            <div className="cell2" style={styles.email}>
                <div>{name}</div>
            </div>
            <div className="cell2" style={styles.cell}>
                <div>{count}</div>
            </div>
            <div className="cell2" style={styles.cell}>
                <div>{price}</div>
            </div>
            <div className="cell2" style={styles.cell}>
                <div>{moment(date).format("MMM Do YYYY")}</div>
            </div>
            <div className="cell2" style={styles.cell}>
                <div>{employee}</div>
            </div>
         
        </>
    )
}

export default TransactionRow;