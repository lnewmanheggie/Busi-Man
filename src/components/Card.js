import React from 'react';
import '../css/Card.css';

function Card({ title, icon }) {

    return(
        <div className="box">
            <h2>{title}</h2>
            <br />
            {icon}
        </div>
    )
}

export default Card;