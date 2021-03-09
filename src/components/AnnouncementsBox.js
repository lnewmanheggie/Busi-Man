import React from 'react';

function AnnouncementsBox() {

    const styles = {
        box: {
            backgroundColor: '#cecece',
            height: 'auto'
        }
    }

    return(
        <div className="box mb-4" style={styles.box}>
            Announcements Box---
            Most recent announcement taken out of db and displayed here
        </div>
    )
}

export default AnnouncementsBox;