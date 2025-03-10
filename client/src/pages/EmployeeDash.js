import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import AnnouncementsBox from '../components/announcementsBox/AnnouncementsBox';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth';
import moment from 'moment';
import AnnouncementApi from '../utils/AnnouncementApi';


function EmployeeDash({ history }) {

    const styles = {

        container: {
            backgroundColor: "white",
        },

        link: {
            textDecoration: 'none'
        }
    }

    useAuth();

    const [announcementState, setAnnouncementState] = useState({
        name: '',
        post: '',
        date: ''
    })

    useEffect(() => {
        const loadAnnouncements = async () => {
            try {
                const result = await AnnouncementApi.getAnnouncements();
                console.log(result);
                let parsedDate = result.data.date;
                parsedDate = moment(parsedDate).format("MMM Do YYYY")
    
                setAnnouncementState({
                    ...announcementState,
                    name: result.data.nameofemployee + ',',
                    post: result.data.body,
                    date: parsedDate
                })
    
            } catch (error) {
                console.log(error);
            }
        }

        loadAnnouncements()
    }, [announcementState])

    /**
     * @TODO put loadAnnouncements function in different file
     */




    return(
        <div className='content'>
            <Navbar/>
            <Header heading={'Dashboard (employee)'}/>
            
            <div className="container mt-5 mb-5" style={styles.container}>
                <div className="notification" style={styles.container}>
                    <div className="columns is-centered">
                        <div className="column is-two-thirds">
                            <AnnouncementsBox 
                                date={announcementState.date}
                                name={announcementState.name}
                                post={announcementState.post}
                            />
                        </div>
                    </div>

                    <div className="columns is-centered">
                        {/* RECEIVE ITEMS */}
                        <div className="column is-one-quarter">
                            <Link to='/receive-items' style={styles.link}>
                                <Card 
                                    title='Receive Items'
                                    icon= {
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                        <path d="M8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>
                                    }
                                />   
                            </Link> 
                        </div>

                        {/* MAKE A SALE */}
                        <div className="column is-one-quarter">
                            <Link to='/make-a-sale' style={styles.link}>
                                <Card 
                                    title='Make a Sale'
                                    icon= {
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
                                        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                                        </svg>
                                    }
                                />
                            </Link>
                        </div>

                        {/* TRACK INVENTORY */}
                        <div className="column is-one-quarter">
                            <Link to='/track-inventory' style={styles.link}>
                                <Card 
                                    title='Track Inventory'
                                    icon= {
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-table" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                                        </svg>
                                    }
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )


}

export default EmployeeDash;