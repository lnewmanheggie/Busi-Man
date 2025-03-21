import React from 'react';

function AnnouncementsBox(props) {

    const styles = {
        box: {
            backgroundColor: '#cecece',
            height: 'auto',
            lineHeight: '0.5rem'
        },
        p: {
            lineHeight: '3rem'
        }
    }

    return(
        <div className="box mb-4" style={styles.box} data-testid = "announcements">
            <h4><em>{props.name} {props.date}</em></h4>
            
            <p style={styles.p}><em>{props.post}</em></p>
        </div>
    )
}

export default AnnouncementsBox;