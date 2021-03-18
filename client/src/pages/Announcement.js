import React, { useState } from 'react';
import useAuth from '../utils/useAuth';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button";
import AnnouncementApi from "../utils/AnnouncementApi";

function Announcement() {

    const styles = {
        box: {
            backgroundColor: '#cecece',
            height: 'auto',
            width: '50%'
        },
        message: {
            marginTop: '1rem'
        }
    }

    useAuth();

    const [values, setValues] = useState({
        nameofemployee: '',
        body: ''
    })

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    const clearValues = () => {
        setValues({
            ...values,
            nameofemployee: '',
            body: ''
        })
    }

    const handleAddPost = async (e) => {
        e.preventDefault();
        try {
            await AnnouncementApi.create(values);
            clearValues();
            setMessage('Posted successfully');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <Header heading={'Post Announcement'} />
            <div className="is-flex is-justify-content-center">
                <div className="box mt-6" style={styles.box}>
                    <form onSubmit={handleAddPost}>
                        <Input
                            handleChange={handleChange}
                            name="nameofemployee"
                            value={values.nameofemployee}
                            type="text"
                            placeholder="Your name"
                        />
                        <textarea
                            className="textarea"
                            placeholder="Post"
                            onChange={handleChange}
                            value={values.body}
                            name="body"
                        />
                        <h3 style={styles.message}>{message}</h3>
                        <Button
                            name="Post Announcement"
                            type="submit"
                            color="#219ebc"
                            margin="1rem"
                        />
                    </form>

                </div>

            </div>


            <Footer />

        </div>
    )
}

export default Announcement;