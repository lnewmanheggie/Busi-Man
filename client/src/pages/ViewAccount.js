import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserApi from "../utils/UserApi";
import '../css/Box.css';

function ViewAccount() {

    const [accountState, setAccountState] = useState({
        name: '',
        email: '',
        company: ''
    })

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await UserApi.getUsers();
                let user = result.data.currentUser;
                setAccountState({
                    ...accountState,
                    name: user.firstName + " " + user.lastName,
                    email: user.email,
                    company: user.company
                })
    
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [accountState])


    return (
        <div>
            <Navbar />
            <Header heading={'My Account'}/>
            <div className="is-flex is-justify-content-center">
                <div className="box mt-6 box2">
                    <h4 className="view-account">{accountState.name}</h4>
                    <h4 className="view-account">{accountState.email}</h4>
                    <h4 className="view-account">{accountState.company}</h4>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewAccount;