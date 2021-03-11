import React from 'react';
import InventoryRow from './InventoryRow';

function InventoryTable(props) {
    return (

            <>
                {
                    props.inventory.map((inv, i) => {
                        return (
                            <InventoryRow 
                                key={i} 
                                code={inv.barcode}
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