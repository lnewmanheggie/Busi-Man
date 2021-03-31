import React from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeTable(props) {

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
                                onClick={props.deleteEmployee}
                            />
                        )
                    })
                }
            </>
    );
}



export default EmployeeTable;