import React from 'react';
import Button from '../components/Button';

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
        <>
            <div className="cell" style={styles.cell}>
                <div>{firstName}</div>
            </div>
            <div className="cell" style={styles.email}>
                <div>{lastName}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{company}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{email}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <Button value={email} type="submit" name="Delete" color="#219EBC" handleClick={onClick}/>
            </div>
        </>
    )
}

export default EmployeeRow;