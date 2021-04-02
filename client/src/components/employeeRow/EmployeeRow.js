import React from 'react';
import Button from '../button/Button';

function EmployeeRow({ firstName, lastName, company, email, onClick }) {
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
        <div data-testid="employee-row">
            <div className="cell" style={styles.cell} data-testid="first-name">
                <div>{firstName}</div>
            </div>
            <div className="cell" style={styles.email} data-testid="last-name">
                <div>{lastName}</div>
            </div>
            <div className="cell" style={styles.cell} data-testid="company">
                <div>{company}</div>
            </div>
            <div className="cell" style={styles.cell} data-testid="email">
                <div>{email}</div>
            </div>
            <div className="cell" style={styles.cell} data-testid="button-render">
                <Button value={email} type="submit" name="Delete" color="#219EBC" handleClick={onClick}/>
            </div>
        </div> 
    )
}

export default EmployeeRow;