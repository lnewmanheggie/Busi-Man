import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AnnouncementsBox from '../components/AnnouncementsBox';
import Card from '../components/Card';

function Dashboard() {

    const styles = {
        container: {
            backgroundColor: "white"
        }
    }

    return(
        <>
            <Navbar />
            <Header heading={'Dashboard'}/>
        
            
            <div className="container mt-5 mb-5">
                <div className="notification" style={styles.container}>
                    <div className="columns is-centered">
                        <div className="column is-two-thirds">
                            <AnnouncementsBox />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Card 
                                title='Add Employees'
                            />
                        </div>
                        <div className="column">
                            <Card title='Make a Sale'/>
                        </div>
                        <div className="column">
                            <Card title='Receive Items'/>    
                        </div>
                        <div className="column">
                            <Card title='View Stats'/>
                        </div>
                    </div>

                    <div className="columns is-centered">
                        <div className="column is-one-quarter">
                            <Card title='View Employees'/>
                        </div>
                        <div className="column is-one-quarter">
                            <Card title='Post Announcement'/>
                        </div>
                        <div className="column is-one-quarter">
                            <Card title='Track Inventory'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Dashboard;