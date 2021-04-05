import React from 'react';
import InventoryRow from '../inventoryRow/InventoryRow';
import '../../css/Table.css';

function InventoryTable(props) {

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
                                deleteItem={props.deleteItem}
                            />
                        )
                    })
                }
            </>
    );
}



export default InventoryTable;