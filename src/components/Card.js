import React from 'react';
import '../css/Card.css';

function Card({ title, icon }) {

    return(
        <div className="box">
            <h3>{title}</h3>
            <br />
            {icon}
        </div>
    )
}

export default Card;