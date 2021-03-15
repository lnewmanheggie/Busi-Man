import React, {useEffect} from 'react';
import UserApi from './UserApi';
import { useHistory } from 'react-router-dom';

export default function useAuth() {

    let history = useHistory();

    // look for jwt in session storage, and make a call to backend to see if jwt is expired
    // if so, redirect user to login page
    const useAuth = useEffect(() => {
        async function auth() {
            try {
                if (!sessionStorage.getItem('jwt')) {
                    history.push("/")
                }
                await UserApi.getUsers();

            } catch (error) {
                console.log(error);
                history.push("/")
            }
        }
        auth()
    }, [])

    return {
        useAuth
    }

}