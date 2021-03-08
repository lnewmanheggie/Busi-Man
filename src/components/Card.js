import React from 'react';

function Card({ title, icon }) {

    const styles = {
        box: {
            backgroundColor: '#ffb703',
            height: '10rem',
        },

        h2 : {
            fontWeight: 'bold',
            fontSize: '1.2rem'
        }
    }

    return(
        <div className="box" style={styles.box}>
            <h2 style={styles.h2}>{title}</h2>
            <br />
            {icon}
        </div>
    )
}

export default Card;