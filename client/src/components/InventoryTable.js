import React from 'react';
import InventoryRow from './InventoryRow';
import TableCSS from '../css/Table.css';

function InventoryTable(props) {
    const styles = {TableCSS};
    
    console.log(props)

    return (
 
            <>
                {
                    props.inventory?.map((inv, i) => {
                    
                        return (
                            <InventoryRow 
                                key={i} 
                                barcode={inv.barcode}
                                name={inv.name}
                                count={inv.count}
                                price={inv.price}
                                remove={inv.remove}
                                onClick={props.onClick}
                            />
                        )
                    })
                }
            </>
    );
}



export default InventoryTable;