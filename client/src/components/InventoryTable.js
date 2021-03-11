import React from 'react';
import InventoryRow from './InventoryRow';
import TableCSS from '../css/Table.css';

function InventoryTable(props) {
    const styles = {TableCSS};
    

    return (
            // console.log(props.inventory),
            <>
                {
                    props.inventory.map((inv, i) => {
                    
                        return (
                            <InventoryRow 
                                key={i} 
                                barcode={inv.barcode}
                                name={inv.name}
                                count={inv.count}
                                price={inv.price}
                            />
                        )
                    })
                }
            </>
    );
}



export default InventoryTable;