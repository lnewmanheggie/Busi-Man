import React from 'react';

function Header({ heading }) {

    const styles = {
        header: {
            fontSize: '2.3rem',
            color: '#ffb703',
            fontWeight: 'bold',
            backgroundColor: '#023047',
            paddingBottom: '1rem',
            fontStyle: 'italic',
            borderBottom: '1rem solid #8ecae6'
        }
    }

    return(
        <div style={styles.header}>
            {heading}
        </div>
    )
}

export default Header;