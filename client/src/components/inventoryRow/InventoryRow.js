import React from 'react';
import Button from '../button/Button';

function InventoryRow({ barcode, name, count, price, deleteItem }) {
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
            <div className="cell" style={styles.cell}>
                <div>{barcode}</div>
            </div>
            <div className="cell" style={styles.email}>
                <div>{name}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{count}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{price}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <Button type="submit" name="Delete" color="#219EBC" handleClick={() => deleteItem(barcode)}/>
            </div>
        </>
    )
}

export default InventoryRow;