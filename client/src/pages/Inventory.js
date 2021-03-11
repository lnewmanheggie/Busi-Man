import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';

function Inventory() {
    const styles = {

        container: {
            backgroundColor: "white",
        },

        link: {
            textDecoration: 'none'
        }
    }

    const location = useLocation();


    return(
        <div>
            <Navbar location={location.pathname}/>
            <Header heading={'Inventory'}/>
            <Footer />
        </div>
    )
}

export default Inventory;