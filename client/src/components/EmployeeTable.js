import React from 'react';
import EmployeeRow from './EmployeeRow';
import TableCSS from '../css/Table.css';

function EmployeeTable(props) {
    const styles = {TableCSS};
    
    console.log(props)

    return (
 
            <>
                {
                    props.employee?.map((emp, i) => {
                    
                        return (
                            <EmployeeRow 
                                key={i} 
                                firstName={emp.firstName}
                                lastName={emp.lastName}
                                company={emp.company}
                                email={emp.email}
                                remove={emp.remove}
                                onClick={props.onClick}
                            />
                        )
                    })
                }
            </>
    );
}



export default EmployeeTable;