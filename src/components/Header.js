import React from 'react';

function Header({ heading }) {

    const styles = {
        header: {
            fontSize: '2.3rem',
            color: '#ffb703',
            fontWeight: 'bold',
            backgroundColor: '#023047',
            paddingBottom: '2rem',
            fontStyle: 'italic'
        }
    }

    return(
        <div style={styles.header}>
            {heading}
        </div>
    )
}

export default Header;