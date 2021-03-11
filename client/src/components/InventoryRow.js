import React from 'react';
​
function InventoryRow({ code, name, count, price }) {
​
    const styles = {
        cell: {
            backgroundColor: "lightgrey"
        },
​
        email: {
            backgroundColor: "lightgrey",
            fontSize: "0.9rem"
        }
    }
​
    return (
        <>
            {/* <div className="cell" style={styles.cell}>
                <figure className="image is-64x64">
                    <img src={thumbnail} />
                </figure>
            </div> */}
            <div className="cell" style={styles.cell}>
                <div>{code}</div>
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
        </>
    )
}
​
export default InventoryRow;